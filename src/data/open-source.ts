export interface OpenSourceRepo {
  name: string;
  description: string;
  url: string;
  technologies: string[];
  status: string;
}

// Only list repositories that are verified. Do not fabricate metrics.
export const openSourceRepos: OpenSourceRepo[] = [
  {
    name: 'Portifolio',
    description: 'Source code for this portfolio website (Astro, TypeScript, Tailwind CSS).',
    url: 'https://github.com/Ronniee7/Portifolio',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS'],
    status: 'In development',
  },
];

export const githubProfileUrl = 'https://github.com/Ronniee7';
