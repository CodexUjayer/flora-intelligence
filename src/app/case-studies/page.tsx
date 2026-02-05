"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Rocket } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Container, Section } from "@/components/ui/Layout";
import CaseStudyVisual from "@/components/ui/CaseStudyVisual";

const cases = [
  {
    id: 0,
    title: "Predictive Maintenance for Global Manufacturing",
    client: "Stellar Industrial",
    impact: "24% reduction in downtime",
    problem: "Stellar was facing unpredictable equipment failures leading to millions in lost production every year.",
    solution: "We implemented an IoT-integrated predictive maintenance model using deep learning to identify failure patterns before they occur.",
    metrics: [
       { label: "Cost Savings", value: "$4.2M" },
       { label: "Efficiency Boost", value: "+18%" },
       { label: "ROI", value: "310%" }
    ],
    color: "accent-cyan"
  },
  {
    id: 1,
    title: "AI-Powered Patient Triage System",
    client: "OmniHealth Network",
    impact: "60% faster emergency response",
    problem: "Hospital networks were overwhelmed with triage decisions, causing delays in critical care delivery.",
    solution: "A custom NLP and decision-engine system was deployed to prioritize patients based on digital intake records and symptoms.",
    metrics: [
       { label: "Wait Time", value: "-45min" },
       { label: "Accuracy", value: "99.2%" },
       { label: "Patients/Day", value: "+1,200" }
    ],
    color: "accent-indigo"
  },
  {
    id: 2,
    title: "Fraud Detection for FinTech Unicorn",
    client: "NeoBank Digital",
    impact: "$12M saved in annual fraud loss",
    problem: "Legacy rule-based systems were failing to catch sophisticated cyber-attacks and modern financial fraud patterns.",
    solution: "Real-time anomaly detection using ensemble ML models that analyze transaction behavior in milliseconds.",
    metrics: [
       { label: "False Positives", value: "-80%" },
       { label: "Catch Rate", value: "96.5%" },
       { label: "Processing Speed", value: "<10ms" }
    ],
    color: "accent-violet"
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 bg-white">
        <Container>
           <h1 className="text-5xl md:text-8xl font-extrabold mb-8 text-slate-950 leading-tight tracking-tight">
             Our <span className="text-gradient">Impact</span>.
           </h1>
           <p className="text-slate-600 text-xl max-w-2xl leading-relaxed font-medium">
             Real results for real businesses. Explore how our AI solutions have driven efficiency and growth across multiple industries.
           </p>
        </Container>
      </section>

      <Section className="bg-slate-50/50 border-t border-slate-100">
        <Container>
           <div className="space-y-48">
              {cases.map((project, index) => (
                <motion.div 
                  key={project.title}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
                >
                   <div className="lg:col-span-5">
                      <div className={`inline-block px-5 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-${project.color} text-xs font-black mb-8 uppercase tracking-widest`}>
                         {project.impact}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-slate-950 tracking-tight leading-tight">{project.title}</h2>
                      
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
                      <CaseStudyVisual id={project.id} />
                   </div>
                </motion.div>
              ))}
           </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
