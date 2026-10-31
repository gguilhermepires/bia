// Junta o "base" do site (ex.: /bia) aos caminhos internos e às imagens.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (p: string) => (/^(https?:|mailto:|#)/.test(p) ? p : base + (p.startsWith('/') ? p : '/' + p));
export const eur = (n: number) =>
  new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(n);
