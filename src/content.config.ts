import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    year: z.number(),
    client: z.string().optional(),
    summary: z.string(),
    cover: z.string(),
    images: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    price: z.number(),
    type: z.enum(['physical', 'digital']),
    summary: z.string(),
    cover: z.string(),
    images: z.array(z.string()).default([]),
    // Link de pagamento (Stripe Payment Link, Lemon Squeezy, Gumroad, PayPal...)
    buyUrl: z.string().optional(),
    // Medidas, formato do ficheiro, materiais...
    details: z.string().optional(),
    soldOut: z.boolean().default(false),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, products };
