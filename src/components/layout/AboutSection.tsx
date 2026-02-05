"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Lightbulb, Users2, Zap, ArrowUpRight, Target, Network } from "lucide-react";
import { Container, Section } from "@/components/ui/Layout";
import TiltCard from "@/components/ui/TiltCard";

const values = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Security",
    description: "We keep your data safe, always.",
    color: "cyan",
    size: "col-span-1"
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Results",
    description: "Answers, not just numbers.",
    color: "indigo",
    size: "col-span-1"
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Technology",
    description: "Using the best new tools.",
    color: "violet",
    size: "col-span-1"
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "People First",
    description: "AI that helps people do more.",
    color: "cyan",
    size: "col-span-1"
  }
];

export default function AboutSection() {
  return (
    <Section id="about" className="bg-slate-50 overflow-hidden scroll-mt-20 py-20 border-y border-slate-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="space-y-5">
              <h2 className="text-accent-cyan font-black uppercase tracking-[0.3em] text-[10px] flex items-center">
                <span className="w-8 h-[1px] bg-accent-cyan mr-3" />
                Who We Are
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-950 leading-[0.95] tracking-tight group">
                Smart Tools for <br />
                <span className="text-gradient">Your Business</span>.
              </h3>
              <p className="text-slate-600 text-base font-medium leading-relaxed max-w-sm">
                We are the experts who help you understand your data and use it to win.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-100 relative group overflow-hidden shadow-sm">
               <div className="absolute top-0 right-0 p-3 text-slate-200 group-hover:text-accent-cyan transition-colors duration-500">
                  <ArrowUpRight size={20} />
               </div>
               <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Our Mission</div>
               <p className="text-base font-bold text-slate-900 leading-tight pr-6">
                  Making AI simple, safe, and useful for everyone.
               </p>
            </div>
          </div>

          {/* Right Column: Values Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
               {values.map((v, i) => (
                 <motion.div
                   key={v.title}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: i * 0.1 }}
                   viewport={{ once: true }}
                 >
                   <TiltCard className="h-full">
                     <div className="p-5 h-full rounded-2xl bg-white border border-slate-100 shadow-sm group hover:border-accent-cyan/20 transition-all duration-500 flex flex-col relative overflow-hidden">
                        {/* Dot Pattern Texture */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                             style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '12px 12px'}} />
                        
                        <div className="relative z-10">
                          <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-accent-${v.color} mb-4 shadow-sm border border-white group-hover:scale-110 transition-transform duration-500`}>
                            {v.icon}
                          </div>
                          <h4 className="text-base font-black text-slate-950 mb-1">{v.title}</h4>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed">{v.description}</p>
                        </div>
                     </div>
                   </TiltCard>
                 </motion.div>
               ))}
            </div>

            {/* Large Vision Card - Now aligned properly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-4 p-6 rounded-2xl bg-slate-950 text-white shadow-xl relative overflow-hidden group"
            >
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent-cyan/10 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-1000" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="max-w-md">
                  <div className="flex items-center space-x-2 text-accent-cyan mb-3">
                    <Zap size={14} className="animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em]">Our Vision</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-extrabold leading-tight tracking-tight">
                    Be the #1 AI partner for <span className="text-accent-cyan">growing businesses</span>.
                  </h4>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
