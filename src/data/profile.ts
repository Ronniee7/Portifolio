export interface Profile {
  name: string;
  title: string;
  headline: string;
  supporting: string;
  location: string;
  affiliation: string;
  degree: string;
  studyPeriod: string;
  previousDegree: string;
  previousInstitution: string;
  previousPeriod: string;
  mission: string;
  philosophy: string;
  availability: string;
  photo: string;
}

export const profile: Profile = {
  name: 'Asiimwe Ronald',
  title: 'Software Engineer | AI/ML Engineer | Researcher',
  headline: 'Engineering Software. Advancing Intelligence.',
  supporting:
    'Software engineer and AI researcher focused on building reliable systems, intelligent applications, and practical machine learning solutions.',
  location: 'Nanjing, China',
  affiliation: 'Nanjing University of Information Science and Technology (NUIST)',
  degree: 'Master of Artificial Intelligence',
  studyPeriod: 'September 2026 – July 2028',
  previousDegree: 'Bachelor of Science in Information Systems and Technology',
  previousInstitution: 'Makerere University',
  previousPeriod: 'February 2021 – June 2023',
  mission:
    'To demonstrate the ability to design, develop, evaluate, and deliver reliable software systems and intelligent solutions while advancing research in artificial intelligence and applied machine learning.',
  philosophy:
    'I build reliable software systems and intelligent solutions by combining software engineering, machine learning, and applied artificial intelligence. I value clear requirements, honest evaluation, and evidence over claims.',
  availability: 'Currently pursuing graduate studies at NUIST.',
  photo: '/images/profile/asiimwe-ronald.svg',
};
