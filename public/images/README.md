Arquivos de imagem esperados pela landing page:

- `hero-funemon.webp`
- `calha-paranagua.webp`
- `rufos-litoral.webp`
- `serralheria-paranagua.webp`
- `og-funemon.webp`

Pipeline recomendado:

1. Coloque os arquivos originais em `public/images/raw` com os nomes:
   - `hero-funemon.jpg`
   - `calha-paranagua.jpg`
   - `rufos-litoral.jpg`
   - `serralheria-paranagua.jpg`
   - `og-funemon.jpg`
2. Rode: `npm run images:optimize`
3. O script gera versoes `.webp` e `.jpg` otimizadas em `public/images`.
