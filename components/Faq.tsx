"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/faq";
import SectionWrapper from "./SectionWrapper";
import { Plus, Minus } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-purple font-bold tracking-[0.2em] uppercase text-xs mb-4"
          >
            Help Center
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            Common Inquiries.
          </motion.h2>
          <p className="text-foreground/50 text-lg max-w-xl mx-auto">
            Everything you need to know about the workflow, pricing, and project timelines.
          </p>
        </div>

        {/* FAQ List */}
        <dl className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group rounded-3xl border transition-all duration-500 ${
                  isOpen 
                  ? "bg-panel/60 border-accent-purple/30 shadow-2xl shadow-accent-purple/5" 
                  : "bg-panel/20 border-white/5 hover:border-white/10"
                }`}
              >
                <dt>
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                  >
                    <div className="flex items-center gap-6">
                      <span className={`text-sm font-mono transition-colors duration-500 ${
                        isOpen ? "text-accent-purple" : "text-foreground/30"
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-lg md:text-xl font-bold transition-colors duration-500 ${
                        isOpen ? "text-foreground" : "text-foreground/70 group-hover:text-foreground"
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    
                    <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-500 ${
                      isOpen ? "bg-accent-purple text-white rotate-0" : "bg-white/5 text-foreground/50 rotate-90"
                    }`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                </dt>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: { 
                          height: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2, delay: 0.1 } 
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: { height: { duration: 0.3 }, opacity: { duration: 0.1 } } 
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-14 md:px-20 pb-8 text-foreground/60 leading-relaxed text-lg">
                        {faq.answer}
                      </div>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </dl>
      </div>
    </SectionWrapper>
  );
}