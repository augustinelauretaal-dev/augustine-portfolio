"use client";

import { motion } from "framer-motion";
import { missionVision } from "@/data/mission";
import ServiceIcons from "./ServiceIcons";
import SectionWrapper from "./SectionWrapper";

export default function MissionVision() {
  return (
    <SectionWrapper id="mission">
      <div className="max-w-7xl mx-auto px-6">
        {/* Subtle Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-white/5 pb-10">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent-purple font-black uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              The Core Values
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tight"
            >
              Defining the <br /> 
              <span className="text-foreground/40">Standard of Work.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-foreground/50 max-w-xs text-lg italic"
          >
            &quot;Design is not just what it looks like; it&quot;s how it works.&quot;
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {missionVision.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ y: -5 }}
              className={`relative group p-10 md:p-14 rounded-[2.5rem] border overflow-hidden transition-all duration-500 ${
                index === 0 
                ? "bg-panel/40 border-white/5 hover:border-accent-purple/30" 
                : "bg-secondary/20 border-white/5 hover:border-accent-blue/30"
              }`}
            >
              {/* Decorative Background Number */}
              <span className="absolute -bottom-10 -right-4 text-[12rem] font-black text-white/[0.02] select-none group-hover:text-white/[0.05] transition-colors">
                {index + 1}
              </span>

              <div className="relative z-10">
                {/* Icon Strategy */}
                <div className="mb-8 relative inline-block">
                  <div className={`absolute inset-0 blur-2xl opacity-30 ${
                    index === 0 ? "bg-accent-purple" : "bg-accent-blue"
                  }`} />
                  <div className="relative w-16 h-16 rounded-2xl bg-background border border-white/10 flex items-center justify-center shadow-2xl">
                    <ServiceIcons 
                      icon={item.icon} 
                      className={`w-8 h-8 ${index === 0 ? "text-accent-purple" : "text-accent-blue"}`} 
                    />
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-lg leading-relaxed max-w-md">
                  {item.description}
                </p>

                {/* Bottom Accent Line */}
                <div className={`mt-10 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-24 ${
                   index === 0 ? "bg-accent-purple" : "bg-accent-blue"
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}