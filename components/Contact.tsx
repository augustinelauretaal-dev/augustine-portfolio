"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Send, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    
    // Reset back to idle after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Let’s Build Something <br /> Great Together.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-foreground/60 leading-relaxed">
                Whether you have a question about my process or want to hire me for a long-term collaboration, I&apos;m just a message away.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "augustine@portfolio.com", color: "text-accent-purple" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "text-accent-blue" },
                { icon: MapPin, label: "Location", value: "San Francisco, CA", color: "text-accent-cyan" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-5 group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-secondary/50 border border-white/5 flex items-center justify-center transition-colors group-hover:border-white/20`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">{item.label}</p>
                    <p className="text-lg font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Professional Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-panel/40 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-20 text-center flex flex-col items-center gap-4"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                    <p className="text-foreground/60">Thank you, Augustine will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 rounded-2xl bg-background/50 border border-white/5 focus:border-accent-purple outline-none transition-all placeholder:text-foreground/20"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 rounded-2xl bg-background/50 border border-white/5 focus:border-accent-purple outline-none transition-all placeholder:text-foreground/20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-5 py-4 rounded-2xl bg-background/50 border border-white/5 focus:border-accent-purple outline-none transition-all resize-none placeholder:text-foreground/20"
                        placeholder="Project details..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-5 rounded-2xl bg-foreground text-background font-bold text-lg hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-black/20"
                    >
                      {status === "submitting" ? (
                        <span className="w-6 h-6 border-3 border-background/30 border-t-background rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Inquiry <Send size={20} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}