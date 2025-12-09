import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'C++', level: 80 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'WebStorm', level: 90 },
      { name: 'Windows OS', level: 95 },
    ],
  },
  {
    title: 'Concepts',
    skills: [
      { name: 'OOP', level: 92 },
      { name: 'Data Structures', level: 88 },
      { name: 'Algorithms', level: 85 },
    ],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.15 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut'
                        }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-6">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['HTML/CSS','Cisco Networking','Wireshark','jQuery','Figma(Software)', 'Problem Solving', 'Team Collaboration', 'Agile Basics'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
