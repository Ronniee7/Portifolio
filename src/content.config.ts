import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['completed', 'in-development', 'planned', 'research-prototype']),
    category: z.enum(['software-engineering', 'backend', 'full-stack', 'ai-ml', 'research', 'iot-cloud']),
    technologies: z.array(z.string()).default([]),
    image: z.string().optional(),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).default(['Asiimwe Ronald']),
    institution: z.string(),
    area: z.string(),
    abstract: z.string(),
    keywords: z.array(z.string()).default([]),
    status: z.enum(['ongoing', 'submitted', 'published']),
    pdfUrl: z.string().url().optional(),
    doi: z.string().optional(),
    publicationUrl: z.string().url().optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['software-engineering', 'machine-learning', 'ai-research', 'devops', 'tutorials', 'reflections']),
    author: z.string().default('Asiimwe Ronald'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, research, writing };
