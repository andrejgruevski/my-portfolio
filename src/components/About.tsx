import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, GraduationCap, Globe } from 'lucide-react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Code2, label: 'Focus', value: 'Full-Stack' },
    { icon: GraduationCap, label: 'Education', value: 'FINKI CS' },
    { icon: Globe, label: 'Languages', value: 'MK / EN' },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left - Text Content */}
          <div>
            <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Developer by Choice,
              <br />
              <span className="text-gradient">Problem Solver</span> by Nature
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science student at FINKI, Skopje, driven by an obsession 
                with building software that's not just functional, but exceptional. Since 2022, 
                I've been diving deep into the world of algorithms, data structures, and 
                full-stack development.
              </p>
              <p>
                My approach is simple: understand the problem deeply, design elegant solutions, 
                and write code that future developers will thank me for. Whether it's crafting 
                responsive interfaces or optimizing backend logic, I bring the same level of 
                precision and care to every project.
              </p>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="grid gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass glass-hover rounded-2xl p-6 flex items-center gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="font-display text-xl font-semibold">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
