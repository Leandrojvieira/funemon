Arquivos de imagem esperados pela landing page:

- `hero-funemon.webp`
- `calha-paranagua.webp`
- `rufos-litoral.webp`
- `serralheria-paranagua.webp`
- `og-funemon.webp`

Pipeline recomendado:

1. Coloque os arquivos originais em `public/images/raw` com estes nomes-base (extensao pode ser `.jpg`, `.jpeg`, `.png` ou `.webp`):
   - `hero-funemon`
   - `calha-paranagua`
   - `rufos-litoral`
   - `serralheria-paranagua`
   - `og-funemon`
2. Rode: `npm run images:optimize`
3. O script gera versoes `.webp` e `.jpg` otimizadas em `public/images`.
