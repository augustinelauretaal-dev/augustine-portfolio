"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  isRelative?: boolean;
}

/**
 * SectionContainer provides a standardized max-width and padding for sections.
 * It acts as the inner container in the Composition Pattern:
 * SectionWrapper > SectionContainer > Component
 */
export default function SectionContainer({
  children,
  className = "",
  isRelative = true,
}: SectionContainerProps) {
  return (
    <div
      className={`
        max-w-7xl mx-auto px-6 
        ${isRelative ? "relative z-10" : ""} 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
