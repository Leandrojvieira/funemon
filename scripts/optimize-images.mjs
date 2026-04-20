import path from "node:path";
import { mkdir, readdir } from "node:fs/promises";
import sharp from "sharp";

const inputDir = path.join(process.cwd(), "public", "images", "raw");
const outputDir = path.join(process.cwd(), "public", "images");

const targets = [
  { input: "hero-funemon.jpg", output: "hero-funemon.webp", width: 1920 },
  { input: "calha-paranagua.jpg", output: "calha-paranagua.webp", width: 1200 },
  { input: "rufos-litoral.jpg", output: "rufos-litoral.webp", width: 1200 },
  {
    input: "serralheria-paranagua.jpg",
    output: "serralheria-paranagua.webp",
    width: 1200,
  },
  { input: "og-funemon.jpg", output: "og-funemon.webp", width: 1200, height: 630 },
];

async function ensureInputExists() {
  const files = await readdir(inputDir);
  const missing = targets
    .map((target) => target.input)
    .filter((file) => !files.includes(file));

  if (missing.length > 0) {
    throw new Error(
      `Arquivos ausentes em public/images/raw: ${missing.join(", ")}`
    );
  }
}

async function optimize() {
  await mkdir(outputDir, { recursive: true });
  await ensureInputExists();

  await Promise.all(
    targets.map(async (target) => {
      const inputPath = path.join(inputDir, target.input);
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
