"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, ArrowUp } from "lucide-react";
import { useSection, type SectionId } from "./SectionContext";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/yourusername", color: "#6e5494" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/yourusername", color: "#0077b5" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/yourusername", color: "#1DA1F2" },
  { name: "Email", icon: Mail, href: "mailto:augustine@portfolio.com", color: "#a855f7" },
];

const footerLinks: { name: string; id: SectionId }[] = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Mission", id: "mission" },
  { name: "Contact", id: "contact" },
];

export default function Footer() {
  const { setActiveSection, setIsScrolling } = useSection();

  const handleNavClick = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      setIsScrolling(true);
      setActiveSection(id);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
  };

  return (
    <footer className="relative bg-background border-t border-white/5 overflow-hidden pt-24 pb-12">
      {/* Visual Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <motion.button
                onClick={scrollToTop}
                className="text-2xl font-black tracking-widest text-foreground group flex items-center gap-2"
              >
                AUGUSTINE
                <span className="w-2 h-2 rounded-full bg-accent-purple group-hover:scale-150 transition-transform" />
              </motion.button>
              <p className="text-foreground/50 max-w-sm leading-relaxed text-lg">
                Building digital experiences that combine technical excellence with human-centered design.
              </p>
            </div>
            
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for New Projects • 2026
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">Sitemap</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-foreground/40 hover:text-foreground transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-accent-purple transition-all group-hover:w-4" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Command Center */}
          <div className="lg:col-span-5 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 text-left lg:text-right">Connect</h4>
            <div className="flex flex-wrap lg:justify-end gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 rounded-2xl bg-secondary/30 border border-white/5 flex items-center justify-center overflow-hidden"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: social.color }}
                  />
                  <social.icon size={20} className="text-foreground/40 group-hover:text-foreground transition-colors relative z-10" />
                  <ArrowUpRight size={12} className="absolute top-2 right-2 text-foreground/0 group-hover:text-foreground/40 transition-all" />
                </motion.a>
              ))}
            </div>
            <div className="flex lg:justify-end">
               <button 
                onClick={scrollToTop}
                className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 hover:text-accent-purple transition-colors group"
              >
                Back to top 
                <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-accent-purple/50">
                  <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-widest text-foreground/20">
          <div className="flex items-center gap-6">
            <p>© {new Date().getFullYear()} Augustine Portfolio</p>
            <span className="w-[1px] h-3 bg-white/10" />
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          </div>
          
          <div className="flex items-center gap-2">
            Built with <span className="text-foreground/40">Next.js</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            Deployed on <span className="text-foreground/40">Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}