"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import Magnetic from "@/components/ui/Magnetic";

export default function CTASection() {
  return (
    <Section className="py-32 mt-20 bg-slate-950 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-indigo/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
         <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto"
        >
           <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span className="text-accent-cyan text-xs font-bold uppercase tracking-widest">Ready to Start?</span>
           </div>
           
           <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
             Let's build your <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-indigo">Intelligence</span> today.
           </h2>
           
           <p className="text-slate-400 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">
             Join the forward-thinking companies using Flora to turn data into their biggest advantage.
           </p>

           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Magnetic distance={0.3}>
                <Link
                  href="/contact"
                  className="px-12 py-6 bg-white text-slate-950 text-sm font-extrabold uppercase tracking-widest rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 transition-all flex items-center group"
                >
                  Start Now
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              
              <Magnetic distance={0.1}>
                 <Link
                   href="/services"
                   className="px-10 py-6 border border-slate-800 text-white text-sm font-bold rounded-full hover:bg-white/5 transition-all"
                 >
                   Explore Services
                 </Link>
              </Magnetic>
           </div>
        </motion.div>
      </Container>
    </Section>
  );
}
