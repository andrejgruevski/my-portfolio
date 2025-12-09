import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Folder, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Object-Oriented Programming',
        description: 'A complete collection of solved exercises, laboratory tasks, and exam problems from the Object-Oriented Programming course at FCSE. Covers C++ fundamentals, classes, inheritance, polymorphism, dynamic memory, operator overloading, templates, STL, and problem-solving through real exam-style tasks.',
        technologies: ['C++', 'OOP Principles', 'Dynamic Memory', 'Templates'],
        learned: 'Deepened understanding of C++ object-oriented concepts including class design, inheritance, polymorphism, operator overloading, dynamic memory handling, templates, and solving real exam-style programming problems.\n',
        type: 'Academic Project',
        github: 'https://github.com/andrejgruevski/OOP',
    },
    {
        title: 'Algorithms & Data Structures',
        description: 'Solved APS exercises including implementations of lists, stacks, queues, hash tables, arrays, and tree structures, along with algorithmic problem solving in Java.',
        technologies: ['Java', 'Algorithms', 'Data Structures', 'Complexity Analysis'],
        learned: 'Improved understanding of algorithm design, Big-O complexity, Java data structure implementation, and solving exam-level APS problems.',
        type: 'Academic Project',
        github: 'https://github.com/andrejgruevski/APS_2024',
    },
    {
        title: 'Structural Programming',
        description: 'Solved lab exercises and exam problems focused on fundamental C++ programming concepts, algorithms, and structured programming techniques.',
        technologies: ['C++', 'Algorithms', 'Pointers'],
        learned: 'Gained strong foundation in procedural programming, algorithms, and solving exam-style C++ problems.\n',
        type: 'Academic Project',
        github: 'https://github.com/andrejgruevski/sp',
    },

    {
        title: 'Internet Programming',
        description: 'A collection of client-side web development exercises and mini-projects created as part of the FCSE Internet Programming course. Includes DOM manipulation, event handling, forms, CSS layouts, JavaScript logic, API usage, and interactive UI components.',
        technologies: ['JavaScript', 'DOM API', 'Basic Data Visualization'],
        learned: 'Deepened understanding of JavaScript fundamentals, DOM manipulation, event-driven programming, form validation, responsive UI design, and building interactive client-side applications.',
        type: 'Academic Project',
        github: 'https://github.com/andrejgruevski/IPKS',
    },
];

export const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="projects" className="section-padding relative" ref={ref}>
            {/* Background accent */}
            <div className="absolute right-0 top-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

            <div className="container-custom relative">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid gap-6">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            className="glass glass-hover rounded-2xl p-8 group"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Folder className="text-primary-foreground" size={28} />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {project.type}
                    </span>
                                    </div>

                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="p-4 rounded-xl bg-secondary/50 mb-5">
                                        <p className="text-sm">
                                            <span className="text-primary font-medium">Key Takeaway: </span>
                                            <span className="text-muted-foreground">{project.learned}</span>
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs px-3 py-1.5 rounded-lg border border-border text-muted-foreground font-medium hover:border-primary/50 hover:text-primary transition-colors"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>

                                    {/* GitHub Button */}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-primary font-medium text-sm border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                                    >
                                        <Github size={18} />
                                        View Repository
                                        <ExternalLink size={14} />
                                    </a>
                                </div>

                                {/* Quick action - mobile visible too */}
                                <div className="hidden lg:flex lg:flex-col gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
                                        title="View on GitHub"
                                    >
                                        <Github size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
