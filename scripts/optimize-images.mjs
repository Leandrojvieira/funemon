import path from "node:path";
import { mkdir, readdir } from "node:fs/promises";
import sharp from "sharp";

const inputDir = path.join(process.cwd(), "public", "images", "raw");
const outputDir = path.join(process.cwd(), "public", "images");

const inputExtensions = [".jpg", ".jpeg", ".png", ".webp"];
const targets = [
  { inputBaseName: "hero-funemon", output: "hero-funemon.webp", width: 1920 },
  {
    inputBaseName: "calha-paranagua",
    output: "calha-paranagua.webp",
    width: 1200,
  },
  { inputBaseName: "rufos-litoral", output: "rufos-litoral.webp", width: 1200 },
  {
    inputBaseName: "serralheria-paranagua",
    output: "serralheria-paranagua.webp",
    width: 1200,
  },
  {
    inputBaseName: "og-funemon",
    output: "og-funemon.webp",
    width: 1200,
    height: 630,
  },
];

function resolveInputFile(files, inputBaseName) {
  const normalizedMap = new Map(files.map((file) => [file.toLowerCase(), file]));

  for (const extension of inputExtensions) {
    const candidate = `${inputBaseName}${extension}`;
    const found = normalizedMap.get(candidate.toLowerCase());
    if (found) return found;
  }

  return null;
}

async function ensureInputExists() {
  const files = await readdir(inputDir);
  const missing = targets
    .map((target) => target.inputBaseName)
    .filter((baseName) => !resolveInputFile(files, baseName));

  if (missing.length > 0) {
    throw new Error(
      `Arquivos ausentes em public/images/raw (aceita .jpg/.jpeg/.png/.webp): ${missing.join(", ")}`
    );
  }
}

async function optimize() {
  await mkdir(outputDir, { recursive: true });
  await ensureInputExists();
  const files = await readdir(inputDir);

  await Promise.all(
    targets.map(async (target) => {
      const sourceFile = resolveInputFile(files, target.inputBaseName);
      if (!sourceFile) {
        throw new Error(`Nao foi possivel localizar o arquivo base ${target.inputBaseName}`);
      }

      const inputPath = path.join(inputDir, sourceFile);
      const outputPath = path.join(outputDir, target.output);

      const baseImage = sharp(inputPath).resize({
        width: target.width,
        height: target.height,
        fit: "cover",
        position: "center",
        withoutEnlargement: true,
      });

      await baseImage.clone().webp({ quality: 78, effort: 6 }).toFile(outputPath);
      // Copia webp para jpg esperado pelos imports atuais, mantendo compatibilidade.
      await baseImage.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(
        outputPath.replace(".webp", ".jpg")
      );
    })
  );

  console.log("Imagens otimizadas com sucesso em public/images.");
}

optimize().catch((error) => {
  console.error("Falha ao otimizar imagens:", error.message);
  process.exit(1);
});
