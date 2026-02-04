"use client";

import { motion } from "framer-motion";
import { BarChart3, Database, Cpu, Bot, TrendingUp, Code2, Layers, CircleDot, CheckCircle2 } from "lucide-react";

interface ServiceVisualProps {
  id: number;
  color: string;
}

export default function ServiceVisual({ id, color }: ServiceVisualProps) {
  const containerVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      transition: { 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" as const
      }
    }
  };

  const renderVisual = () => {
    switch (id) {
      case 0: // Data Analytics & Dashboards
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="w-full h-full bg-slate-50 rounded-[32px] border border-slate-100 p-6 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                   <div className="w-8 h-2 bg-slate-200 rounded-full" />
                   <div className="w-12 h-2 bg-slate-100 rounded-full" />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100" />
              </div>
              <div className="grid grid-cols-2 gap-4 flex-1">
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex flex-col justify-end">
                    <div className="h-2 w-1/2 bg-slate-100 rounded mb-2" />
                    <div className="h-4 w-3/4 bg-accent-cyan/20 rounded" />
                 </div>
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
                    <div className="flex gap-1 h-full items-end">
                       {[30, 60, 45, 90, 70].map((h, i) => (
                         <div key={i} className="flex-1 bg-accent-cyan/40 rounded-t-sm" style={{ height: `${h}%` }} />
                       ))}
                    </div>
                 </div>
                 <div className="col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
                    <div className="flex justify-between items-center h-full">
                       <div className="space-y-2 w-1/2">
                          <div className="h-2 bg-slate-100 rounded w-full" />
                          <div className="h-2 bg-slate-100 rounded w-2/3" />
                       </div>
                       <div className="w-12 h-12 rounded-full border-4 border-accent-cyan/20 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-accent-cyan" />
                       </div>
                    </div>
                 </div>
              </div>
            </div>
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 p-4 bg-white rounded-2xl shadow-premium border border-slate-100 flex items-center space-x-3 z-20"
            >
               <div className="p-2 bg-green-500/10 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-green-500" />
               </div>
               <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Growth</div>
                  <div className="text-sm font-black text-slate-900">+24.8%</div>
               </div>
            </motion.div>
          </div>
        );
      case 1: // Predictive Modeling
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="w-full h-full bg-slate-50 rounded-[32px] border border-slate-100 p-6 flex flex-col justify-center items-center">
               <svg className="w-full h-32" viewBox="0 0 200 100">
                  <motion.path
                    d="M 0 80 Q 50 10 100 60 T 200 30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-accent-indigo"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  {[0, 50, 100, 150, 200].map(x => (
                    <circle key={x} cx={x} cy={x === 100 ? 60 : x === 50 ? 10 : 30} r="4" className="fill-white stroke-accent-indigo stroke-2" />
                  ))}
               </svg>
            </div>
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-1/4 p-4 bg-white rounded-2xl shadow-premium border border-slate-100 z-20"
            >
               <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent-indigo animate-pulse" />
                  <span className="text-[10px] font-black text-slate-400 uppercase">Confidence</span>
               </div>
               <div className="text-lg font-black text-slate-900 tracking-tight">98.4% Precision</div>
            </motion.div>
          </div>
        );
      case 2: // ML Solutions
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="w-full h-full bg-slate-50 rounded-[32px] border border-slate-100 p-8 grid grid-cols-2 gap-4">
               {[...Array(4)].map((_, i) => (
                 <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-xl bg-accent-violet/5 flex items-center justify-center`}>
                       <div className={`w-4 h-4 rounded-full border-2 border-accent-violet ${i % 2 === 0 ? "bg-accent-violet" : ""}`} />
                    </div>
                 </div>
               ))}
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"
            >
               <div className="w-3/4 h-3/4 border-2 border-dashed border-accent-violet rounded-full" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute z-30 p-6 bg-white rounded-3xl shadow-premium border border-accent-violet/20"
            >
               <Bot className="w-10 h-10 text-accent-violet" />
            </motion.div>
          </div>
        );
      case 3: // AI Automation
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="w-full h-full bg-slate-50 rounded-[32px] border border-slate-100 p-6">
               <div className="flex flex-col space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center px-4 space-x-4">
                       <div className="w-6 h-6 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-accent-cyan" />
                       </div>
                       <div className="h-2 flex-1 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, repeatDelay: 1 }}
                            className="w-full h-full bg-accent-cyan/40" 
                          />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-6 top-1/3 p-5 bg-white rounded-3xl shadow-premium border border-slate-100 z-20"
            >
               <Cpu className="w-10 h-10 text-accent-cyan" />
            </motion.div>
          </div>
        );
      case 4: // Data Engineering
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
             <div className="w-full h-full bg-slate-50 rounded-[32px] border border-slate-100 p-6 flex flex-col justify-between">
                <div className="flex space-x-3 mb-4">
                   {[...Array(3)].map((_, i) => (
                     <div key={i} className="w-10 h-10 bg-white rounded-xl border border-slate-100 flex items-center justify-center">
                        <Database className="w-5 h-5 text-accent-indigo/40" />
                     </div>
                   ))}
                </div>
                <div className="flex-1 border-t-2 border-dashed border-slate-200 mt-4 relative">
                   <motion.div 
                     animate={{ x: ["0%", "100%"] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                     className="absolute -top-1 w-2 h-2 bg-accent-indigo rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                   />
                </div>
                <div className="mt-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-3">
                   <Layers className="w-6 h-6 text-accent-indigo" />
                   <div className="h-2 flex-1 bg-slate-100 rounded-full" />
                </div>
             </div>
             <motion.div
              animate={{ x: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-4 bottom-1/3 p-4 bg-white rounded-2xl shadow-premium border border-slate-100 z-20 flex items-center space-x-3"
            >
               <div className="w-2 h-2 bg-green-500 rounded-full" />
               <div className="text-[10px] font-black text-slate-900 uppercase">Synchronized</div>
            </motion.div>
          </div>
        );
      case 5: // Custom AI Products
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="w-full h-full bg-slate-50 rounded-[32px] border border-slate-100 p-6 overflow-hidden">
               <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden h-full">
                  <div className="bg-slate-50 border-b border-slate-100 px-3 py-2 flex space-x-1">
                     <div className="w-2 h-2 rounded-full bg-slate-300" />
                     <div className="w-2 h-2 rounded-full bg-slate-300" />
                     <div className="w-2 h-2 rounded-full bg-slate-300" />
                  </div>
                  <div className="p-4 flex flex-col justify-center items-center h-[calc(100%-32px)]">
                     <Code2 className="w-16 h-16 text-accent-violet opacity-20 mb-4" />
                     <div className="w-full space-y-2">
                        <div className="h-1.5 w-full bg-slate-100 rounded" />
                        <div className="h-1.5 w-3/4 bg-slate-100 rounded" />
                        <div className="h-1.5 w-1/2 bg-slate-100 rounded" />
                     </div>
                  </div>
               </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-6 bottom-1/4 p-4 bg-white rounded-2xl shadow-premium border border-accent-violet/20 z-30"
            >
               <div className="w-10 h-10 rounded-xl bg-accent-violet flex items-center justify-center text-white font-black text-xs">AI</div>
            </motion.div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="w-full h-full min-h-[300px]"
    >
      {renderVisual()}
    </motion.div>
  );
}
