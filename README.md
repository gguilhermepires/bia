# Mabi — portfólio + loja

Site estático em [Astro](https://astro.build), hospedado no GitHub Pages.
Projetos e produtos são ficheiros Markdown em `src/content/`; cada um gera a sua página.

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:4321/bia/
npm run build    # gera a pasta dist/
```

## Publicar (GitHub Pages)

1. No GitHub: **Settings → Pages → Source: GitHub Actions**.
2. Cada `git push` para `main` faz build e publica (`.github/workflows/deploy.yml`).
3. O site fica em `https://gguilhermepires.github.io/bia/`.

### Domínio próprio

Em **Settings → Pages → Custom domain** põe o domínio e aponta o DNS (CNAME para
`gguilhermepires.github.io`). Depois define `BASE_PATH=/` e `SITE_URL=https://www.dominio.com`
no passo de build do workflow (ou edita `astro.config.mjs`). Sem isto, os links ficam com `/bia`.

## Onde editar

| O quê | Onde |
|---|---|
| Nome, email, redes sociais, palavras da faixa | `src/lib/site.ts` |
| Projetos | `src/content/projects/*.md` |
| Produtos | `src/content/products/*.md` |
| Imagens | `public/images/` (ou `public/uploads/` pelo painel) |
| Cores e estilo | `src/styles/global.css` (variáveis no topo) |
| Termos e devoluções | `src/pages/terms.astro` (preencher antes de vender) |

## Painel de edição (Pages CMS)

O ficheiro `.pages.yml` define os formulários. A Mabi entra em <https://pagescms.org> com a conta do
GitHub, abre este repositório e adiciona projetos/produtos. Cada gravação faz um commit e o site
atualiza em cerca de 1 minuto. Para isso, a conta dela tem de ser colaboradora do repositório.

## Vender

Cada produto tem o campo `buyUrl`. Cola aí o link de pagamento:

- **Físicos:** Stripe Payment Link (ativar recolha de morada e portes).
- **Digitais:** Lemon Squeezy ou Gumroad (entregam o ficheiro e, no Lemon Squeezy, tratam do IVA da UE).

Sem `buyUrl`, o botão passa a "Encomendar por email". Com `soldOut: true`, aparece "Esgotado".
Antes de vender: preencher `terms.astro` e confirmar a situação fiscal (IVA, faturação).
