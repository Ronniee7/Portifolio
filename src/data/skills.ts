export interface SkillCategory {
  name: string;
  items: string[];
  note?: string;
  level?: 'practical' | 'academic' | 'learning';
}

export const skills: SkillCategory[] = [
  { name: 'Programming Languages', items: ['Python', 'PHP', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'], level: 'practical' },
  { name: 'Backend Engineering', items: ['Django', 'Laravel', 'FastAPI', 'REST APIs'], level: 'practical' },
  { name: 'Frontend Engineering', items: ['Bootstrap', 'Tailwind CSS', 'Vue', 'React', 'Responsive web development'], level: 'practical', note: 'Academic and project experience; React/Vue from coursework and prototypes.' },
  { name: 'Machine Learning', items: ['Scikit-learn', 'Pandas', 'NumPy', 'XGBoost', 'LightGBM', 'CatBoost'], level: 'academic', note: 'Academic and project experience; ongoing graduate study.' },
  { name: 'AI and LLM Applications', items: ['Large Language Models', 'RAG', 'NLP', 'Embeddings', 'Model evaluation', 'Responsible AI'], level: 'academic' },
  { name: 'Databases', items: ['MySQL', 'PostgreSQL', 'SQLite', 'pgvector'], level: 'practical' },
  { name: 'DevOps and Cloud', items: ['Git', 'GitHub', 'Linux', 'Docker', 'AWS', 'Azure', 'CI/CD fundamentals'], level: 'learning', note: 'Foundational; deepening during graduate study.' },
  { name: 'Research Tools', items: ['MATLAB', 'Simulink', 'Google Colab', 'Jupyter Notebook'], level: 'academic' },
  { name: 'Energy Systems and Simulation', items: ['Battery energy storage', 'Control parameter optimization', 'Simulation workflows'], level: 'learning', note: 'Research direction under supervision; not yet published results.' },
];
