"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold uppercase tracking-widest mb-4"
          >
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            Crafting Digital <span className="text-foreground/40">Solutions.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/50 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            A curated selection of projects where I blend technical architecture with user-centric design.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex flex-col rounded-[2.5rem] overflow-hidden bg-panel/30 border border-white/5 hover:border-accent-purple/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden">
                <motion.div 
                  className="absolute inset-0 z-10 bg-gradient-to-t from-panel via-panel/20 to-transparent"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.2 }}
                />
                
                {/* Real Image or Placeholder */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 flex items-center justify-center">
                      <span className="text-foreground/20 font-black text-4xl uppercase tracking-tighter italic">
                        {project.title.split(' ')[0]}
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Top Action Buttons (Hidden by default, shown on hover) */}
                <div className="absolute top-6 right-6 z-20 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href={project.github} className="p-3 rounded-full bg-background/80 backdrop-blur-md border border-white/10 hover:bg-accent-purple hover:text-white transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.link} className="p-3 rounded-full bg-background/80 backdrop-blur-md border border-white/10 hover:bg-accent-blue hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-10 pt-0 -mt-12 relative z-20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-accent-purple text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                      {project.category || "Full Stack Development"}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-accent-purple transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-foreground/50 text-lg mb-8 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-foreground/70 backdrop-blur-md group-hover:border-accent-purple/20 group-hover:bg-accent-purple/5 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}