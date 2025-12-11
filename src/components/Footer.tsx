import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useCallback } from 'react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleLogoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <footer className="border-t border-border py-12">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a
                            href="#"
                            onClick={handleLogoClick}
                            className="font-display text-xl font-bold mb-2 block"
                        >
                            AG<span className="text-primary">.</span>
                        </a>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
                            © {currentYear} Made with <Heart size={14} className="text-primary" /> by Andrej Gruevski
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/andrejgruevski"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="mailto:andrej@example.com"
                            className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
