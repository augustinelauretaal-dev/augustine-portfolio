"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useSection, type SectionId } from "./SectionContext";

const navLinks: { name: string; href: SectionId }[] = [
  { name: "Home", href: "home" },
  { name: "Services", href: "services" },
  { name: "Projects", href: "projects" },
  { name: "Mission", href: "mission" },
  { name: "Clients", href: "clients" },
  { name: "Faq", href: "faq" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Use the professional context we built
  const { activeSection, setActiveSection, setIsScrolling } = useSection();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: SectionId) => {
    e.preventDefault();
    
    const element = document.getElementById(id);
    if (element) {
      // 1. Tell the context we are intentionally scrolling (prevents observer flicker)
      setIsScrolling(true);
      setActiveSection(id);

      // 2. Calculate precise position
      const offset = 80; // Space for the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      // 3. Perform the scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // 4. Re-enable observer after animation finishes
      setTimeout(() => setIsScrolling(false), 1000);
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        <motion.button
          onClick={(e) => handleNavClick(e, "home")}
          className="text-2xl font-black tracking-tighter bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan bg-clip-text text-transparent"
          whileHover={{ scale: 1.02 }}
        >
          AUGUSTINE.
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-medium transition-colors hover:text-foreground ${
                    activeSection === link.href ? "text-foreground" : "text-foreground/50"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.span 
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-purple"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-6 w-[1px] bg-white/10 mx-2" />

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary transition-all border border-white/5"
          >
            {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex gap-3">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-foreground">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-white/10 px-6 py-10 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-3xl font-bold text-left transition-colors ${
                    activeSection === link.href ? "text-accent-purple" : "text-foreground"
                }`}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}