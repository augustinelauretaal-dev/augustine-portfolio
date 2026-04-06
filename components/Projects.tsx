"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { ExternalLink, Github, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  // Fix hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock scroll
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <SectionWrapper id="projects" className="bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-6 py-2 border-4 border-foreground bg-accent-purple text-white font-black uppercase tracking-widest text-sm mb-6 shadow-neo"
          >
            Portfolio
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase italic"
          >
            Crafting Digital <br />
            <span className="bg-accent-cyan text-black px-4 border-4 border-foreground shadow-neo inline-block mt-2">
              Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-foreground font-bold max-w-2xl mx-auto text-xl leading-tight border-b-4 border-foreground pb-4"
          >
            A curated selection of projects showcasing technical expertise,
            performance optimization, and modern UI design.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ translateX: -8, translateY: -8 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group relative flex flex-col bg-panel border-4 border-foreground shadow-neo hover:shadow-neo-lg transition-all"
            >
              {/* Image */}
              <div className="relative h-72 w-full border-b-4 border-foreground overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 border-2 border-foreground bg-accent-blue/10 text-accent-blue font-black uppercase text-xs shadow-[3px_3px_0_0_var(--shadow-color)]">
                    {project.category || "Full Stack"}
                  </span>

                  <span className="font-black italic text-foreground/20 text-4xl">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-3xl font-black mb-4 uppercase italic">
                  {project.title}
                </h3>

                <p className="text-foreground font-medium text-lg mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border-2 border-foreground bg-elevated font-black uppercase text-[10px] tracking-tighter shadow-[3px_3px_0_0_var(--shadow-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 font-black uppercase text-sm text-accent-purple">
                  View Case Study →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Portal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                className="fixed inset-0 z-[999999] bg-black/80 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  className="bg-background max-w-4xl w-full border-4 border-foreground shadow-neo-lg relative max-h-[90vh] overflow-y-auto"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-[1000000] p-3 border-2 border-foreground shadow-neo bg-accent-yellow text-black transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-2 active:translate-y-2"
                  >
                    <X size={20} />
                  </button>

                  {/* Image */}
                  <div className="relative h-80 border-b-4 border-foreground">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8 space-y-8">

                    <h2 className="text-4xl font-black uppercase">
                      {selectedProject.title}
                    </h2>

                    <div>
                      <h4 className="font-black uppercase mb-2">Problem</h4>
                      <p>{selectedProject.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-black uppercase mb-2">Solution</h4>
                      <p>{selectedProject.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-black uppercase mb-2">Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features?.map((f: any) => (
                          <li key={f}>• {f}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-black uppercase mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: any) => (
                          <span
                            key={tech}
                            className="px-2 py-1 border-2 border-foreground bg-elevated font-black uppercase text-[10px] tracking-tighter shadow-[3px_3px_0_0_var(--shadow-color)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          className="flex items-center gap-2 px-6 py-3 border-4 border-foreground bg-accent-yellow font-black uppercase"
                        >
                          <Github />
                          Github
                        </a>
                      )}

                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          className="flex items-center gap-2 px-6 py-3 border-4 border-foreground bg-accent-cyan font-black uppercase shadow-neo transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-2 active:translate-y-2"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>

                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

    </SectionWrapper>
  );
}