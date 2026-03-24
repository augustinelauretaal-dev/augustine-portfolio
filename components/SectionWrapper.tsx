"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useSection, type SectionId } from "./SectionContext";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id: SectionId;
  fullWidth?: boolean;
}

export default function SectionWrapper({ 
  children, 
  className = "", 
  id,
  fullWidth = false 
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const { setActiveSection, isScrolling } = useSection();
  
  const isInView = useInView(ref, { 
    amount: 0.4, 
    once: false 
  });

  // Update active section when this section comes into view
  useEffect(() => {
    if (isInView && !isScrolling && id) {
      setActiveSection(id);
    }
  }, [isInView, isScrolling, id, setActiveSection]);

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6 
      } 
    }
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      className={`
        relative w-full 
        py-20 md:py-24 lg:py-32 
        ${fullWidth ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"} 
        ${className}
      `}
    >
      {children}
    </motion.section>
  );
}

