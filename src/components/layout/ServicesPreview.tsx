"use client";

import { motion } from "framer-motion";
import { Brain, Database, LineChart, Code, Bot, TrendingUp } from "lucide-react";
import { Container, Section } from "@/components/ui/Layout";

const services = [
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Data Analytics & Dashboards",
    description: "Transform complex data into intuitive, real-time visual insights for strategic clarity.",
    color: "accent-cyan"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Predictive Modeling",
    description: "Anticipate market trends and customer behavior with advanced statistical forecasting.",
    color: "accent-indigo"
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Machine Learning Solutions",
    description: "Build adaptive systems that learn and grow with your business requirements.",
    color: "accent-violet"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "AI Automation",
    description: "Streamline workflows and eliminate bottlenecks with intelligent process automation.",
    color: "accent-cyan"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Engineering",
    description: "Robust, scalable data pipelines and infrastructures built for modern enterprises.",
    color: "accent-indigo"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom AI Products",
    description: "Bespoke software solutions powered by the latest breakthroughs in Artificial Intelligence.",
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
            <h2 className="text-accent-cyan font-bold tracking-widest uppercase text-xs mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 leading-tight">Cutting-Edge Solutions <br /> for the AI Era.</h3>
            <p className="text-slate-600 text-lg font-medium">We provide a full spectrum of data science and AI services designed to solve your most complex business challenges.</p>
          </div>
          <Magnetic distance={0.2}>
            <button className="px-8 py-3 border border-slate-200 rounded-full text-slate-900 font-bold hover:bg-slate-50 transition-all shadow-sm">
              View All Services
            </button>
          </Magnetic>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
            >
              <TiltCard className="h-full">
                <div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-accent-cyan/20 transition-all shadow-premium h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-${service.color}/10 text-${service.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm`}>
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-950 mb-4">{service.title}</h4>
                  <p className="text-slate-500 leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>
                  <div className="flex items-center text-accent-cyan text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <Code className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
