"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  BarChart3, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Settings, 
  AlertCircle, 
  Bell,
  Smartphone,
  Cpu,
  Database,
  TrendingUp,
  PieChart,
  User,
  Heart
} from "lucide-react";
import React, { useRef } from "react";

interface CaseStudyVisualProps {
  id: number;
}

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function CaseStudyVisual({ id }: CaseStudyVisualProps) {
  const renderVisual = () => {
    switch (id) {
      case 0: // Stellar Industrial - Factory Maintenance
        return (
          <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden bg-slate-50 rounded-[40px] group/visual">
            <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.02] group-hover/visual:opacity-[0.05] transition-opacity duration-500 bg-[linear-gradient(to_bottom,transparent_50%,#000_50%)] bg-[length:100%_4px] animate-scanline" />
            <TiltCard className="w-full h-full grid grid-cols-12 gap-4">
              {/* Main Machine View */}
              <div className="col-span-8 bg-white rounded-3xl shadow-premium border border-slate-100 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="p-2 bg-accent-cyan/10 rounded-lg"><Settings className="w-5 h-5 text-accent-cyan" /></div>
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">System 042</div>
                      <div className="text-sm font-black text-slate-900 leading-none">Turbine Generator A1</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black text-green-700 uppercase">Active</span>
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center relative py-8">
                   <div className="absolute inset-0 flex items-center justify-center opacity-5">
                      <Settings className="w-48 h-48 animate-spin-slow" />
                   </div>
                   <div className="relative flex space-x-4 h-32 items-end">
                      {[60, 85, 45, 95, 70, 50, 80].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: i * 0.1, duration: 2, repeat: Infinity, repeatType: "reverse" }}
                          className={`w-4 rounded-full ${h > 90 ? "bg-accent-indigo" : "bg-accent-cyan/40"}`} 
                        />
                      ))}
                   </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                   {[
                     { label: "RPM", val: "14.2k", col: "cyan" },
                     { label: "Temp", val: "42°C", col: "indigo" },
                     { label: "Load", val: "88%", col: "violet" }
                   ].map((m, i) => (
                     <div key={i} className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                        <div className="text-[8px] font-black text-slate-400 uppercase">{m.label}</div>
                        <div className={`text-xs font-black text-accent-${m.col}`}>{m.val}</div>
                     </div>
                   ))}
                </div>
              </div>

              {/* Sidebar Metrics */}
              <div className="col-span-4 space-y-4">
                 <div className="bg-white rounded-3xl shadow-premium border border-slate-100 p-5">
                    <div className="text-[10px] font-black text-slate-400 uppercase mb-4">Maintenance Risk</div>
                    <div className="relative w-24 h-24 mx-auto">
                       <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                          <motion.circle 
                            cx="50" cy="50" r="40" fill="none" 
                            stroke="url(#grad1)" strokeWidth="12" strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 0.24 }}
                            transition={{ duration: 2 }}
                          />
                          <defs>
                             <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#06b6d4" />
                                <stop offset="100%" stopColor="#6366f1" />
                             </linearGradient>
                          </defs>
                       </svg>
                       <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="text-xl font-black text-slate-900 leading-none">24%</div>
                          <div className="text-[8px] font-black text-green-500 uppercase">Low</div>
                       </div>
                    </div>
                 </div>
                 <div className="bg-slate-900 rounded-3xl p-5 text-white shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 text-accent-cyan opacity-20"><Zap size={48} /></div>
                    <div className="text-[10px] font-black text-slate-400 uppercase mb-2">Power Efficiency</div>
                    <div className="text-2xl font-black mb-1">+18.4%</div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ x: "-100%" }}
                         animate={{ x: "0%" }}
                         transition={{ duration: 2 }}
                         className="w-3/4 h-full bg-accent-cyan" 
                       />
                    </div>
                 </div>
              </div>
            </TiltCard>
          </div>
        );
      case 1: // OmniHealth - Patient Triage Mobile
        return (
          <div className="relative w-full h-full flex items-center justify-center bg-slate-50 overflow-hidden rounded-[40px] p-6 group/visual">
             <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.02] group-hover/visual:opacity-[0.05] transition-opacity duration-500 bg-[linear-gradient(to_bottom,transparent_50%,#000_50%)] bg-[length:100%_4px] animate-scanline" />
             <TiltCard className="relative w-64 aspect-[9/18.5] bg-slate-950 rounded-[3rem] border-8 border-slate-900 shadow-2xl p-1 overflow-hidden">
                {/* Screen Content */}
                <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden flex flex-col">
                   {/* App Bar */}
                   <div className="pt-8 pb-4 px-6 border-b border-slate-100 flex justify-between items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-accent-indigo">
                         <User size={16} />
                      </div>
                      <div className="text-xs font-black text-slate-950">Patient ID #812</div>
                      <Bell size={16} className="text-slate-400" />
                   </div>

                   {/* Main Heart Rate Graph */}
                   <div className="p-6">
                      <div className="mb-6">
                         <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Live Vitality</div>
                         <div className="flex items-end space-x-2">
                            <span className="text-4xl font-black text-slate-950">72</span>
                            <span className="text-xs font-black text-accent-indigo mb-2 uppercase">BPM</span>
                         </div>
                      </div>
                      <div className="h-32 w-full relative">
                         <svg className="w-full h-full" viewBox="0 0 100 40">
                            <motion.path 
                              d="M 0 30 Q 5 10 10 30 T 20 30 T 30 30 T 40 10 T 50 30 T 60 30 T 70 5 T 80 30 T 90 30 T 100 20"
                              fill="none"
                              stroke="#6366f1"
                              strokeWidth="1.5"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 3, repeat: Infinity }}
                            />
                         </svg>
                         <div className="absolute top-0 right-0 p-2 animate-pulse text-accent-indigo opacity-20"><Heart size={24} /></div>
                      </div>
                   </div>

                   {/* Triage Status */}
                   <div className="mt-auto p-6 bg-slate-50 space-y-3">
                      <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                         <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                               <Activity size={18} />
                            </div>
                            <div className="text-[10px] font-black text-slate-950 uppercase">Triage Score</div>
                         </div>
                         <div className="text-lg font-black text-slate-950 italic">9.2</div>
                      </div>
                      <div className="p-4 bg-accent-indigo rounded-2xl text-white text-center font-black uppercase text-xs tracking-widest">
                         High Priority
                      </div>
                   </div>
                </div>
             </TiltCard>
             
             {/* Floating UI Bits */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute top-10 right-10 p-4 bg-white rounded-2xl shadow-premium border border-slate-100 z-10"
             >
                <div className="text-[8px] font-black text-slate-400 uppercase mb-1">AI Diagnosis</div>
                <div className="text-xs font-black text-slate-950">99.2% Accuracy</div>
             </motion.div>
          </div>
        );
      case 2: // NeoBank - Fraud Detection
        return (
          <div className="relative w-full h-full flex items-center justify-center bg-slate-50 overflow-hidden rounded-[40px] p-8 group/visual">
             <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03] group-hover/visual:opacity-[0.06] transition-opacity duration-500 bg-[linear-gradient(to_bottom,transparent_50%,#000_50%)] bg-[length:100%_4px] animate-scanline" />
             <TiltCard className="w-full h-full grid grid-cols-2 gap-6">
                <div className="flex flex-col space-y-6">
                   <div className="bg-white rounded-[32px] p-8 shadow-premium border border-slate-100 flex-1 flex flex-col justify-center items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-accent-violet/10 flex items-center justify-center text-accent-violet mb-6 shadow-sm">
                         <ShieldCheck size={32} />
                      </div>
                      <h4 className="text-2xl font-black text-slate-950 mb-2 italic">Secured Transactions</h4>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Global Operations Active</p>
                   </div>
                   <div className="bg-slate-900 rounded-[32px] p-8 shadow-2xl">
                      <div className="flex justify-between items-center mb-6">
                         <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Live Fraud Feed</div>
                         <div className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                      </div>
                      <div className="space-y-4">
                         {[
                           { label: "TXN #4821", status: "Blocked", col: "red" },
                           { label: "TXN #4822", status: "Verified", col: "green" },
                           { label: "TXN #4823", status: "Verified", col: "green" }
                         ].map((tx, i) => (
                           <div key={i} className="flex justify-between items-center pb-3 border-b border-white/5 opacity-80">
                              <span className="text-[10px] font-bold text-slate-400 font-mono">{tx.label}</span>
                              <span className={`text-[8px] font-black uppercase tracking-widest text-${tx.col}-500 px-2 py-0.5 bg-${tx.col}-500/10 rounded`}>{tx.status}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
                
                <div className="flex flex-col space-y-6">
                   <div className="bg-white rounded-[32px] p-8 shadow-premium border border-slate-100 flex-1">
                      <div className="flex justify-between items-start mb-10">
                         <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Loss Prevention</div>
                            <div className="text-4xl font-black text-slate-950 tracking-tighter">$12.4M</div>
                         </div>
                         <TrendingUp className="text-green-500 w-6 h-6" />
                      </div>
                      <div className="h-24 w-full flex items-end space-x-1">
                         {[40, 60, 45, 90, 75, 55, 100, 80].map((h, i) => (
                           <motion.div 
                             key={i}
                             initial={{ scaleY: 0 }}
                             animate={{ scaleY: 1 }}
                             className="flex-1 bg-accent-violet/20 rounded-t-sm origin-bottom"
                             style={{ height: `${h}%` }}
                           />
                         ))}
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-3xl p-6 shadow-premium border border-slate-100 flex flex-col items-center">
                         <PieChart className="text-accent-indigo mb-3" size={24} />
                         <div className="text-lg font-black text-slate-950 leading-none">96.5%</div>
                         <div className="text-[8px] font-black text-slate-400 uppercase mt-1">Catch Rate</div>
                      </div>
                      <div className="bg-white rounded-3xl p-6 shadow-premium border border-slate-100 flex flex-col items-center">
                         <Activity className="text-accent-cyan mb-3" size={24} />
                         <div className="text-lg font-black text-slate-950 leading-none">&lt;10ms</div>
                         <div className="text-[8px] font-black text-slate-400 uppercase mt-1">Latency</div>
                      </div>
                   </div>
                </div>
             </TiltCard>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="w-full h-full min-h-[400px]"
    >
      {renderVisual()}
    </motion.div>
  );
}
