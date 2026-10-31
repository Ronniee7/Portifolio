export interface SkillCategory {
  name: string;
  items: string[];
  note?: string;
}

export const skills: SkillCategory[] = [
  { name: 'Programming', items: ['Python', 'PHP', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'] },
  { name: 'Backend Development', items: ['Django', 'Laravel', 'FastAPI', 'REST APIs'] },
  { name: 'Frontend Development', items: ['Bootstrap', 'Tailwind CSS', 'Vue', 'React', 'Responsive web development'] },
  { name: 'Databases', items: ['MySQL', 'PostgreSQL', 'SQLite', 'pgvector'] },
  { name: 'Machine Learning', items: ['Scikit-learn', 'Pandas', 'NumPy', 'XGBoost', 'LightGBM', 'CatBoost'] },
  { name: 'AI and NLP', items: ['Large Language Models', 'RAG', 'NLP', 'Embeddings', 'Model evaluation', 'Responsible AI'] },
  { name: 'Tools and Infrastructure', items: ['Git', 'GitHub', 'Linux', 'Docker', 'AWS', 'Azure', 'CI/CD fundamentals'] },
  { name: 'Research and Engineering Tools', items: ['MATLAB', 'Simulink', 'Google Colab', 'Jupyter Notebook'] },
];
