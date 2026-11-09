import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Folder, ExternalLink } from 'lucide-react';
import { academicProjects } from '@/data/academicProjects';

export const AcademicProjects = () => {
  const ref = useRef<HTMLElement>(null);
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
            Academic <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            University coursework repositories covering programming, algorithms, web development, and databases.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {academicProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
              className="glass glass-hover rounded-2xl p-6 md:p-8 flex flex-col group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Folder className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-1">{project.title}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    Academic Project
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-lg border border-border text-muted-foreground font-medium hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-primary font-medium text-sm border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
              >
                <Github size={18} />
                View Repository
                <ExternalLink size={14} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
