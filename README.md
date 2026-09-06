# Página de links — Utopia Desenvolvimentos

Hub estático (um único `index.html`, sem build) com o ecossistema de produtos da
**Utopia Desenvolvimentos**: FinançasPro, VemPraPista, Pulso Utopia, AudioFy,
DentalFlow, Memorial Eterno e Gestão para Academias.

## Ver localmente

Qualquer servidor estático serve. Ex.:

```bash
npx serve .
```

## Estrutura

- `index.html` — página inteira (CSS embutido, ícones SVG inline, sem JS)
- `assets/` — logos otimizados + `favicon.svg`
- `vercel.json` / `.nojekyll` — publicação estática

## Deploy

Site 100% estático — Vercel, Cloudflare Pages, GitHub Pages, Netlify ou Firebase
Hosting, todos sem passo de build. Domínio pretendido:
`links.utopiadesenvolvimentos.com.br` (ajustar `canonical`/OG no `index.html` ao
definir).

## Histórico

Versão anterior em `vinext` (React/RSC em Cloudflare Worker) substituída por HTML
estático para simplificar deploy e indexação. O código antigo está no histórico
do Git (antes do commit de conversão).
