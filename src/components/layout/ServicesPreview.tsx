"use client";

import { motion } from "framer-motion";
import { Brain, Database, LineChart, Code, Bot, TrendingUp } from "lucide-react";
import { Container, Section } from "@/components/ui/Layout";

const services = [
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Dashboards",
    description: "See your business data clearly in real-time.",
    color: "accent-cyan"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Prediction",
    description: "Know what your customers will do next.",
    color: "accent-indigo"
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Smart Systems",
    description: "Software that learns and gets better over time.",
    color: "accent-violet"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Automation",
    description: "Let AI handle the boring repetitive tasks.",
    color: "accent-cyan"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Infrastructure",
    description: "Building the solid foundation for your data.",
    color: "accent-indigo"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Products",
    description: "We build your dream AI product from scratch.",
    color: "accent-violet"
  }
];

import TiltCard from "@/components/ui/TiltCard";
import Magnetic from "@/components/ui/Magnetic";

export default function ServicesPreview() {
  return (
    <Section className="bg-slate-50/50 border-y border-slate-100">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <h2 className="text-accent-cyan font-bold tracking-widest uppercase text-xs mb-4">How We Help</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 leading-tight">We Build What <br /> You Need.</h3>
            <p className="text-slate-600 text-lg font-medium">From simple dashboards to complex AI, we handle the hard tech stuff so you can focus on business.</p>
          </div>
          <Magnetic distance={0.2}>
            <button className="px-8 py-3 border border-slate-200 rounded-full text-slate-900 font-bold hover:bg-slate-50 transition-all shadow-sm">
              View All Services
            </button>
          </Magnetic>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
            >
              <TiltCard className="h-full">
                <div className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-accent-cyan/20 transition-all shadow-premium h-full min-h-[200px] flex flex-col">
                  <div className={`w-12 h-12 rounded-xl bg-${service.color}/10 text-${service.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-sm shrink-0`}>
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-950 mb-2">{service.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium flex-grow">
                    {service.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
