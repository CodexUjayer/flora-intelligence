"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, TrendingUp, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Layout";
import Magnetic from "@/components/ui/Magnetic";
import TiltCard from "@/components/ui/TiltCard";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white transition-colors duration-500">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-cyan/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-indigo/10 rounded-full blur-[150px] -z-10 -translate-x-1/4 translate-y-1/4" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-8 shadow-sm">
              <Zap className="w-4 h-4 text-accent-cyan animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent-cyan">
                Predictive AI for Modern Enterprise
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[84px] font-black tracking-tighter mb-8 leading-[0.95] text-slate-950 italic">
              Data Science, <br />
              <motion.span 
                whileHover={{ skewX: [0, -10, 10, 0], x: [0, -2, 2, 0] }}
                transition={{ duration: 0.2 }}
                className="text-gradient inline-block"
              >
                Intelligent
              </motion.span> <br />
              Scaled.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed font-medium">
              Flora Intelligence transforms raw data into strategic board-level decisions. 
              We build the models that drive your next stage of growth.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-10 w-full lg:w-auto">
              <Magnetic distance={0.2}>
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-slate-950 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center group"
                >
                  Join the Network
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Magnetic distance={0.1}>
                <Link
                  href="/#about"
                  className="px-10 py-5 bg-white border border-slate-200 text-slate-800 font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center"
                >
                  Our Capabilities
                </Link>
              </Magnetic>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {[
                { label: "SOC2 Type II", icon: ShieldCheck },
                { label: "99.9% Up-time", icon: CheckCircle2 },
                { label: "Privacy First", icon: Star },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 text-slate-500">
                  <item.icon className="w-4 h-4 text-accent-cyan" />
                  <span className="text-sm font-semibold tracking-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visuals */}
          <div className="relative flex justify-center lg:justify-end py-10 lg:py-0">
            {/* Device Container (No overflow-hidden here) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[320px] aspect-[9/18.5] bg-slate-900 rounded-[50px] p-2 border-[8px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
            >
              {/* Inner Screen Mockup (Clip here only) */}
              <div className="w-full h-full bg-slate-50 rounded-[40px] overflow-hidden p-6 relative group/screen">
                {/* Scanline Overlay */}
                <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] group-hover/screen:opacity-[0.07] transition-opacity duration-500 bg-[linear-gradient(to_bottom,transparent_50%,#000_50%)] bg-[length:100%_4px] animate-scanline" />
                <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-8" />
                <div className="space-y-4">
                  <div className="h-8 w-3/4 bg-slate-200 rounded-lg" />
                  <div className="h-32 w-full bg-gradient-to-br from-accent-cyan/20 to-accent-indigo/20 rounded-2xl" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-white rounded-xl shadow-sm border border-slate-100" />
                    <div className="h-20 bg-white rounded-xl shadow-sm border border-slate-100" />
                  </div>
                  <div className="h-40 w-full bg-white rounded-2xl shadow-sm border border-slate-100" />
                </div>
              </div>

              {/* Dynamic Floating Cards - Outside the inner div but relative to frame */}
              
              {/* Card 1: Accuracy */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-20 top-1/4 z-30"
              >
                <TiltCard>
                  <div className="p-5 bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 min-w-[200px]">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-green-500/10 rounded-xl">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Model Accuracy</div>
                        <div className="text-xl font-black text-slate-900 tracking-tight">99.2%</div>
                      </div>
                    </div>
                    <div className="flex gap-1 h-10 items-end">
                       {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                         <div key={i} className="flex-1 bg-accent-cyan rounded-md" style={{ height: `${h}%` }} />
                       ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>

              {/* Card 2: User Status */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-24 top-1/2 z-30"
              >
                <TiltCard>
                  <div className="p-4 bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center space-x-3 min-w-[190px]">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                      alt="User" 
                      className="w-12 h-12 rounded-full bg-slate-100 border-2 border-white shadow-sm" 
                    />
                    <div>
                       <div className="text-sm font-black text-slate-900 leading-none mb-1 text-nowrap">Sarah Jenkins</div>
                       <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Analyst</span>
                       </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>

              {/* Card 3: Task Status */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-16 -left-12 lg:-left-24 z-30"
              >
                <TiltCard>
                  <div className="p-6 bg-white rounded-[32px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-slate-100 flex items-center space-x-4 min-w-[260px]">
                    <div className="p-3 bg-accent-indigo/10 rounded-2xl text-accent-indigo">
                       <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">Enclave Status</div>
                       <div className="text-sm font-black text-slate-950 italic">Fully Encrypted</div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-cyan/15 rounded-full blur-[120px] -z-10" />
          </div>

        </div>
      </Container>
    </section>
  );
}
