export interface EducationEntry {
  institution: string;
  qualification: string;
  period: string;
  country: string;
  details: string[];
}

export const education: EducationEntry[] = [
  {
    institution: 'Nanjing University of Information Science and Technology (NUIST)',
    qualification: 'Master of Artificial Intelligence',
    period: 'September 2026 – July 2028',
    country: 'China',
    details: [
      'School of Artificial Intelligence / Future Technology.',
      '2026 China MOFCOM Scholarship.',
      'Research: Battery Energy Storage System Control Parameter Optimization (supervisor: Dr. Xudong Gao).',
    ],
  },
  {
    institution: 'Makerere University',
    qualification: 'Bachelor of Science in Information Systems and Technology',
    period: 'February 2021 – June 2023',
    country: 'Uganda',
    details: ['Academic Minister, College of Computing.'],
  },
  {
    institution: 'Boston High School',
    qualification: 'Secondary education (UCE, UACE)',
    period: 'Secondary school',
    country: 'Uganda',
    details: ['UCE: 12 aggregates. UACE: 18 points. Mathematics: A. Physics: C. Entrepreneurship: A.'],
  },
];
