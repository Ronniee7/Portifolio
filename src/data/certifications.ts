export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  description?: string;
  type: 'scholarship' | 'award' | 'certification' | 'recognition';
}

// Only verified achievements. Do not invent certifications.
export const certifications: Certification[] = [
  {
    title: '2026 China MOFCOM Scholarship',
    issuer: 'Ministry of Commerce, People\'s Republic of China',
    year: '2026',
    description: 'Scholarship supporting Master of Artificial Intelligence studies at NUIST.',
    type: 'scholarship',
  },
];

export const availabilityStatement =
  'Currently pursuing graduate studies at NUIST (Sep 2026 – Jul 2028). Open to research collaborations, technical projects, and carefully selected software/AI engineering opportunities alongside studies.';
