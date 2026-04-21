"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import SectionTitle from "./Reusable/SectionTitle";
import Badge from "./Reusable/Badge";
import SectionContainer from "./Reusable/SectionContainer";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <SectionWrapper id="projects" className="bg-background overflow-hidden" glow fullWidth>
      <div className="absolute top-0 right-0 w-1/3 h-full border-l-2 border-foreground/5 pointer-events-none hidden lg:block" />
      <div className="absolute top-1/2 left-0 w-full h-px border-t-2 border-foreground/5 pointer-events-none" />

      <SectionContainer>
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-8 border-foreground pb-12">
            <div className="max-w-3xl">
              <SectionTitle
                subtitle="Selected Works"
                title="Building the Future"
                align="left"
              />
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold leading-tight max-w-xl text-foreground/80 italic"
              >
                A high-performance showcase of technical excellence and modern digital experiences.
              </motion.p>
            </div>
          </div>
        </div>

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
              <div className="relative h-72 w-full border-b-4 border-foreground overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

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
      </SectionContainer>

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
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-[1000000] p-3 border-2 border-foreground shadow-neo bg-accent-yellow text-black transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-2 active:translate-y-2"
                  >
                    <X size={20} />
                  </button>

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
                          <Badge key={tech} text={tech} variant="yellow" />
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
