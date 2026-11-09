export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['C++', 'Java', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Web',
    skills: ['Spring Boot', 'Spring Web MVC', 'Thymeleaf', 'DOM API'],
  },
  {
    title: 'Data & Databases',
    skills: ['SQL', 'Relational Modeling', 'ER/PER Diagrams', 'Data Structures', 'Algorithms', 'Complexity Analysis'],
  },
  {
    title: 'Concepts & Tools',
    skills: ['OOP', 'Structured Programming', 'Maven', 'Git & GitHub'],
  },
];
