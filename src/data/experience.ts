export interface ExperienceEntry {
  organization: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  links?: { label: string; url: string }[];
}

export const experience: ExperienceEntry[] = [
  {
    organization: 'Tian Tang Group / Comfoam',
    role: 'IT Administrator (software engineering-related experience)',
    period: 'June 2024 – June/July 2026',
    description:
      'Practical IT administration and technical support alongside software engineering work in an organizational environment.',
    responsibilities: [
      'IT systems administration and technical troubleshooting.',
      'Supporting business technology operations.',
      'Maintaining technology systems and resolving operational issues.',
      'Software development experience in an organizational context.',
    ],
    technologies: [],
  },
  {
    organization: 'Sufficiency of Scripture Ministries',
    role: 'Web Developer / IT Support',
    period: 'June 2023 – June 2024',
    description: 'Practical software delivery and organizational problem solving.',
    responsibilities: [
      'Developed a PHP-based food ordering system supporting organizational food ordering workflows.',
      'Web development and IT support.',
    ],
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    organization: 'Youth Coalition (YCBN)',
    role: 'Co-founder / Lead Strategist (title to be confirmed)',
    period: 'Leadership and strategic involvement',
    description: 'Leadership and strategic involvement in a youth coalition.',
    responsibilities: [
      'Leadership and strategic work within the coalition.',
      'Technology and organizational development contributions.',
    ],
    technologies: [],
  },
  {
    organization: 'Drought Guard Africa',
    role: 'Chief Technology Officer (CTO)',
    period: 'Technology leadership role',
    description:
      'Ugandan climate-smart agriculture and water-security initiative focused on solar-powered irrigation, smart prepaid water kiosks, irrigation-as-a-service, and IoT-enabled water management.',
    responsibilities: [
      'Technology leadership for climate-smart agriculture and water security.',
      'Interest in applying software and intelligent systems to African development challenges.',
    ],
    technologies: ['IoT', 'AWS', 'FastAPI', 'Django', 'React', 'React Native', 'PostgreSQL'],
  },
];
