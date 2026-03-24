"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clients } from "@/data/clients";
import SectionWrapper from "./SectionWrapper";

export default function Clients() {
  return (
    <SectionWrapper id="clients">
      <div className="relative py-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue text-xs font-bold uppercase tracking-widest"
          >
            Partnerships
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
          >
            Trusted by Industry Leaders
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 max-w-xl mx-auto text-lg"
          >
            Collaborating with forward-thinking companies to build impactful digital experiences.
          </motion.p>
        </div>

        {/* Logo Container with Fade Gradients */}
        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-background after:to-transparent">
          
          <motion.div 
            className="flex gap-8 items-center"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Doubling the array to create a seamless infinite loop */}
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 group relative w-44 h-24 rounded-2xl bg-panel/30 border border-white/5 backdrop-blur-sm flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:bg-panel/60 hover:border-accent-purple/30 transition-all duration-500"
              >
                {/* Assumes your client data has an 'image' path. 
                   If not, it gracefully falls back to the name.
                */}
                {client.image ? (
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-contain max-h-12"
                  />
                ) : (
                  <span className="text-sm font-bold tracking-widest text-foreground/40 group-hover:text-foreground transition-colors">
                    {client.name.toUpperCase()}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}