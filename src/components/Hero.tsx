import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import profileImage from '@/assets/profile.jpg';

const TypingText = () => {
    const fullText = "I'm Andrej Gruevski, a Full-Stack Developer and AI Enthusiast";
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 50); // Typing speed - 50ms per character
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    // Blinking cursor effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span>
      {displayedText}
            <span
                className={`inline-block w-0.5 h-[1em] bg-primary ml-1 align-middle transition-opacity duration-100 ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                }`}
            />
    </span>
    );
};

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="container-custom relative z-10 pt-24">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                        >
                            Building Digital
                            <br />
                            <span className="text-gradient">Experiences</span> That Matter
                        </motion.h1>

                        {/* Typing Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed min-h-[3rem]"
                        >
                            <TypingText />
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-sm md:text-base text-muted-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8"
                        >
                            From North Macedonia. I craft clean, efficient code and transform complex problems into elegant solutions.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
                        >
                            <a
                                href="#projects"
                                className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-all glow-primary w-full sm:w-auto text-center"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="glass glass-hover px-8 py-4 rounded-xl font-medium text-foreground w-full sm:w-auto text-center"
                            >
                                Get In Touch
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex items-center justify-center lg:justify-start gap-6"
                        >
                            <a
                                href="https://github.com/andrejgruevski"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github size={22} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin size={22} />
                            </a>
                            <a
                                href="mailto:andrej@example.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Mail size={22} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                        className="relative flex-shrink-0"
                    >
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110" />

                        {/* Image container */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20">
                            <img
                                src={profileImage}
                                alt="Andrej Gruevski - Full-Stack Developer"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative ring */}
                        <div className="absolute -inset-4 rounded-full border border-primary/10 animate-pulse" />
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <span className="text-xs tracking-widest uppercase">Scroll</span>
                        <ArrowDown size={18} className="animate-bounce" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
