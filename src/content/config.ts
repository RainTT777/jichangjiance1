import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    author: z.string().default('机场检测实验室'),
  }),
});

const brandsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.string().default('综合加速'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    updatedDate: z.date(),
  }),
});

const topicsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    updatedDate: z.date(),
  }),
});

export const collections = {
  blog: blogCollection,
  brands: brandsCollection,
  topics: topicsCollection,
};
