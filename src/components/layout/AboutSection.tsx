"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Lightbulb, Users2, Zap, ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Layout";
import TiltCard from "@/components/ui/TiltCard";

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Enterprise Rigor",
    description: "Highest standards of security and ethics for every model.",
    color: "cyan",
    size: "col-span-1 md:col-span-2"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Precision",
    description: "Actionable results, not just numbers.",
    color: "indigo",
    size: "col-span-1"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Bleeding Edge",
    description: "Staying ahead of the AI research curve.",
    color: "violet",
    size: "col-span-1"
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: "Human Centric",
    description: "AI that empowers and enhances human potential.",
    color: "cyan",
    size: "col-span-1 md:col-span-2"
  }
];

export default function AboutSection() {
  return (
    <Section id="about" className="bg-white overflow-hidden scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Header & Vision */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-accent-cyan font-black uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-accent-cyan mr-3" />
                Engineering Intelligence
              </h2>
              <h3 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.9] italic tracking-tighter mb-8 group">
                Engineering <br />
                <span className="text-gradient">Intelligence</span>.
              </h3>
              <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-md">
                Founded in 2025, Flora Intelligence transforms complex organizational data into the strategic backbone of global enterprises.
              </p>
            </div>

            <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 relative group overflow-hidden">
               <div className="absolute top-0 right-0 p-4 text-slate-200 group-hover:text-accent-cyan transition-colors duration-500">
                  <ArrowUpRight size={40} />
               </div>
               <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Our Mission</div>
               <p className="text-xl font-bold text-slate-900 leading-tight">
                  Bridging the gap between cutting-edge AI research and real-world business outcomes with precision-engineered solutions.
               </p>
            </div>
          </div>

          {/* Bento Grid Values */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {values.map((v, i) => (
                 <motion.div
                   key={v.title}
                   className={v.size}
                 >
                   <TiltCard className="h-full">
                     <div className="p-8 h-full rounded-[32px] bg-white border border-slate-100 shadow-premium group hover:border-accent-cyan/30 transition-all duration-500 flex flex-col justify-between overflow-hidden relative">
                        {/* Glass Background effect */}
                        <div className={`absolute -top-12 -left-12 w-24 h-24 bg-accent-${v.color}/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                        
                        <div className="relative z-10">
                          <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-accent-${v.color} mb-6 shadow-sm border border-white`}>
                            {v.icon}
                          </div>
                          <h4 className="text-xl font-black text-slate-950 mb-3">{v.title}</h4>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed">{v.description}</p>
                        </div>
                     </div>
                   </TiltCard>
                 </motion.div>
               ))}

               {/* Large Vision Card */}
               <motion.div
                 className="col-span-1 md:col-span-3 p-10 rounded-[40px] bg-slate-950 text-white shadow-2xl relative overflow-hidden group"
               >
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-cyan/20 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-1000" />
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent-indigo/10 rounded-full blur-[60px]" />
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="max-w-xl">
                      <div className="flex items-center space-x-2 text-accent-cyan mb-6">
                        <Zap size={16} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Our Vision</span>
                      </div>
                      <h4 className="text-3xl md:text-4xl font-black leading-[1.1] tracking-tight italic">
                        Becoming the leading global partner for <span className="text-accent-cyan">cognitive excellence</span> through Data Science.
                      </h4>
                    </div>
                    <div className="shrink-0 flex items-center space-x-6 opacity-30 grayscale invert brightness-0 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700">
                       <div className="text-2xl font-black tracking-tighter">ZENITH</div>
                       <div className="text-2xl font-black tracking-tighter">ORION</div>
                    </div>
                  </div>
               </motion.div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
