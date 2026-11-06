import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    status: z.enum(['completed', 'in-development', 'planned', 'research-prototype']),
    category: z.enum(['software-engineering', 'backend', 'full-stack', 'ai-ml', 'research', 'iot-cloud']),
    technologies: z.array(z.string()).default([]),
    image: z.string().optional(),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    type: z.enum(['project', 'interest']).default('project'),
    status: z.enum(['ongoing', 'planned', 'completed']),
    area: z.string(),
    institution: z.string().optional(),
    supervisor: z.string().optional(),
    abstract: z.string(),
    keywords: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).default(['Asiimwe Ronald']),
    venue: z.string(),
    year: z.number().optional(),
    abstract: z.string(),
    keywords: z.array(z.string()).default([]),
    status: z.enum(['published', 'accepted', 'submitted', 'in-preparation']),
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

export const collections = { projects, research, publications, writing };
