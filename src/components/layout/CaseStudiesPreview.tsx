"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import CaseStudyVisual from "@/components/ui/CaseStudyVisual";
import Magnetic from "@/components/ui/Magnetic";

// Simplified text but same structure as case-studies page
const cases = [
  {
    id: 0,
    title: "Predictive Maintenance",
    client: "Stellar Industrial",
    impact: "24% less downtime",
    problem: "Factory machines were breaking down without warning, costing millions.",
    solution: "We built AI that predicts failures before they happen, so teams can fix things early.",
    metrics: [
       { label: "Money Saved", value: "$4.2M" },
       { label: "Efficiency", value: "+18%" },
       { label: "Return", value: "310%" }
    ],
    color: "accent-cyan"
  },
  {
    id: 1,
    title: "Faster Hospital Care",
    client: "OmniHealth Network",
    impact: "60% faster response",
    problem: "Hospitals were too crowded to quickly decide who needed help first.",
    solution: "We made AI that reads patient info and instantly figures out who needs care the fastest.",
    metrics: [
       { label: "Wait Time", value: "-45min" },
       { label: "Accuracy", value: "99.2%" },
       { label: "More Patients", value: "+1,200" }
    ],
    color: "accent-indigo"
  },
  {
    id: 2,
    title: "Fraud Detection",
    client: "NeoBank Digital",
    impact: "$12M saved yearly",
    problem: "Old security systems were missing new types of online fraud.",
    solution: "We built AI that spots suspicious activity in milliseconds.",
    metrics: [
       { label: "False Alarms", value: "-80%" },
       { label: "Catch Rate", value: "96.5%" },
       { label: "Speed", value: "<10ms" }
    ],
    color: "accent-violet"
  }
];

export default function CaseStudiesPreview() {
  return (
    <Section className="bg-slate-50/50 border-t border-slate-100 pb-32">
      <Container>
         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
               <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-950 leading-tight tracking-tight">
                 Real <span className="text-gradient">Results</span>.
               </h2>
               <p className="text-slate-600 text-xl max-w-2xl leading-relaxed font-medium">
                 See how our AI has helped companies save money and work smarter.
               </p>
            </div>
            <Magnetic distance={0.2}>
              <Link 
                href="/case-studies"
                className="px-8 py-3 border border-slate-200 rounded-full text-slate-900 font-bold hover:bg-slate-50 transition-all shadow-sm flex items-center shrink-0"
              >
                View All Stories <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Magnetic>
         </div>

         <div className="space-y-40">
            {cases.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
              >
                 <div className="lg:col-span-5">
                    <div className={`inline-block px-5 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-${project.color} text-xs font-black mb-8 uppercase tracking-widest`}>
                       {project.impact}
                    </div>
                    <h3 className="text-4xl md:text-5xl font-extrabold mb-10 text-slate-950 tracking-tight leading-tight">{project.title}</h3>
                    
                    <div className="space-y-10">
                       <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                          <h4 className="text-accent-cyan font-black text-xs uppercase tracking-[0.2em] mb-4 flex items-center">
                             <Target className="w-4 h-4 mr-2" /> The Problem
                          </h4>
                          <p className="text-slate-600 font-medium leading-relaxed">{project.problem}</p>
                       </div>
                       <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm border-l-4 border-l-accent-indigo">
                          <h4 className="text-accent-indigo font-black text-xs uppercase tracking-[0.2em] mb-4 flex items-center">
                             <Rocket className="w-4 h-4 mr-2" /> The Solution
                          </h4>
                          <p className="text-slate-600 font-medium leading-relaxed">{project.solution}</p>
                       </div>
                    </div>
                 </div>

                 <div className="lg:col-span-1" />

                 <div className="lg:col-span-6 h-full min-h-[400px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                       {project.metrics.map((metric) => (
                          <div key={metric.label} className="p-8 bg-white rounded-3xl border border-white text-center shadow-premium">
                             <div className="text-3xl font-extrabold text-slate-950 mb-1 tracking-tighter">{metric.value}</div>
                             <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.1em]">{metric.label}</div>
                          </div>
                       ))}
                    </div>
                     {/* Visual hidden on mobile to prevent overflow */}
                     <div className="hidden lg:block">
                       <CaseStudyVisual id={project.id} />
                     </div>
                 </div>
              </motion.div>
            ))}
         </div>
      </Container>
    </Section>
  );
}
