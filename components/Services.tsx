"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceIcons from "./ServiceIcons";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./Reusable/SectionTitle";
import Badge from "./Reusable/Badge";
import SectionContainer from "./Reusable/SectionContainer";

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-background" fullWidth>
      <SectionContainer>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8 border-b-8 border-foreground pb-12">
          <div className="max-w-2xl">
            <SectionTitle
              subtitle="Expertise"
              title="Specialized Solutions"
              align="left"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground font-bold max-w-sm text-2xl leading-none italic border-l-8 border-foreground pl-6"
          >
            Transforming complex requirements into scalable, modern digital
            products.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ translateX: -8, translateY: -8 }}
              className="group relative p-10 bg-panel border-4 border-foreground shadow-neo hover:shadow-neo-lg transition-all"
            >
              {/* Decorative Number */}
              <span className="absolute top-6 right-6 text-7xl font-black text-foreground/5 group-hover:text-accent-blue/10 transition-colors select-none italic">
                0{index + 1}
              </span>

              <div className="relative z-10">
                {/* Icon */}
                <div className="relative inline-block mb-10">
                  <div className="relative w-20 h-20 bg-accent-cyan border-4 border-foreground flex items-center justify-center shadow-neo group-hover:rotate-12 transition-transform duration-500">
                    <ServiceIcons
                      icon={service.icon}
                      className="w-10 h-10 text-black"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-4xl font-black mb-6 uppercase italic tracking-tighter group-hover:text-accent-blue transition-colors leading-none">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/80 font-bold leading-tight mb-10 text-lg">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Performance",
                    "Scalable",
                    "Modern UI"
                  ].map((item) => (
                    <Badge key={item} text={item} variant="yellow" />
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="mt-12 flex items-center gap-3 font-black uppercase text-sm tracking-widest text-accent-blue opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2">
                  Learn More <span className="text-2xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
}
