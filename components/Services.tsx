"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceIcons from "./ServiceIcons";
import SectionWrapper from "./SectionWrapper";

export default function Services() {
  return (
    <SectionWrapper id="services">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-accent-blue font-bold tracking-[0.25em] uppercase text-xs mb-4 block"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            Specialized <span className="text-foreground/40">Solutions.</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-foreground/50 max-w-sm text-lg"
        >
          Transforming complex requirements into seamless digital products with modern tech stacks.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 rounded-[2rem] bg-panel/20 border border-white/5 hover:border-accent-blue/30 transition-all duration-500 overflow-hidden"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              {/* Icon Container */}
              <div className="relative w-16 h-16 mb-8">
                <div className="absolute inset-0 bg-accent-blue/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-full h-full rounded-2xl bg-secondary/50 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                  <ServiceIcons 
                    icon={service.icon} 
                    className="w-8 h-8 text-accent-blue" 
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-accent-blue transition-colors">
                {service.title}
              </h3>
              
              <p className="text-foreground/50 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Decorative Feature List (Optional) */}
              <ul className="space-y-2">
                {['High Performance', 'Scalable Architecture'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground/20 group-hover:text-foreground/40 transition-colors">
                    <div className="w-1 h-1 rounded-full bg-accent-blue/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}