import { defineConfig } from 'astro/config';

// Enquanto o site estiver em https://gguilhermepires.github.io/bia usa base "/bia".
// Quando houver domínio próprio, define BASE_PATH="/" e SITE_URL="https://www.dominio.com"
// (ou muda aqui diretamente).
export default defineConfig({
  site: process.env.SITE_URL || 'https://gguilhermepires.github.io',
  base: process.env.BASE_PATH ?? '/bia',
  trailingSlash: 'always',
});
