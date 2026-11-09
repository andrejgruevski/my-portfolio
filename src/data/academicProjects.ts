export interface AcademicProject {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export const academicProjects: AcademicProject[] = [
  {
    title: 'Object-Oriented Programming',
    description:
      'A complete collection of solved exercises, laboratory tasks, and exam problems from the Object-Oriented Programming course at FCSE. Covers C++ fundamentals, classes, inheritance, polymorphism, dynamic memory, operator overloading, templates, STL, and problem-solving through real exam-style tasks.',
    technologies: ['C++', 'OOP', 'Inheritance', 'Polymorphism', 'Dynamic Memory', 'Templates', 'STL'],
    githubUrl: 'https://github.com/andrejgruevski/OOP',
  },
  {
    title: 'Algorithms & Data Structures',
    description:
      'Solved APS exercises including implementations of lists, stacks, queues, hash tables, arrays, and tree structures, along with algorithmic problem solving in Java.',
    technologies: ['Java', 'Algorithms', 'Data Structures', 'Complexity Analysis'],
    githubUrl: 'https://github.com/andrejgruevski/APS',
  },
  {
    title: 'Structural Programming',
    description:
      'Solved lab exercises and exam problems focused on fundamental C++ programming concepts, algorithms, and structured programming techniques.',
    technologies: ['C++', 'Algorithms', 'Pointers', 'Structured Programming'],
    githubUrl: 'https://github.com/andrejgruevski/SP',
  },
  {
    title: 'Internet Programming',
    description:
      'A collection of client-side web development exercises and mini-projects created as part of the FCSE Internet Programming course. Includes DOM manipulation, event handling, forms, CSS layouts, JavaScript logic, API usage, and interactive UI components.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'DOM API', 'Event Handling', 'Forms'],
    githubUrl: 'https://github.com/andrejgruevski/IPKS',
  },
  {
    title: 'Database Systems',
    description:
      'Laboratory and auditory exercises covering ER/PER diagrams, relational models, SQL, and exam preparation tasks for Database Systems at FINKI.',
    technologies: ['SQL', 'ER/PER Diagrams', 'Relational Modeling', 'Database Design'],
    githubUrl: 'https://github.com/andrejgruevski/Database-Systems',
  },
  {
    title: 'Web Programming',
    description:
      'Course exercises and laboratory work built with Spring Boot and Spring Web MVC, using Thymeleaf templates, Maven, and repository/service layers.',
    technologies: ['Java', 'Spring Boot', 'Spring Web MVC', 'Thymeleaf', 'Maven', 'HTML'],
    githubUrl: 'https://github.com/andrejgruevski/Web-Programming',
  },
];
