import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Folder, ExternalLink } from 'lucide-react';
import { featuredProjects } from '@/data/featuredProjects';

export const FeaturedProjects = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Keep the section out of the public site until a featured project is selected.
  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section id="featured-projects" className="section-padding relative" ref={ref}>
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Selected Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
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
                <h3 className="font-display text-xl font-semibold">{project.title}</h3>
              </div>

              <p className="text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

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

              <div className="mt-auto flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-primary font-medium text-sm border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                  >
                    <Github size={18} />
                    View Repository
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass glass-hover text-foreground font-medium text-sm"
                  >
                    Live Demo
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
