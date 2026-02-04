"use client";

import { motion } from "framer-motion";
import { Brain, Database, LineChart, Code, Bot, TrendingUp, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Container, Section } from "@/components/ui/Layout";

import ServiceVisual from "@/components/ui/ServiceVisual";

const services = [
  {
    id: 0,
    icon: <LineChart className="w-12 h-12" />,
    title: "Data Analytics & Dashboards",
    description: "Go beyond static reports. We build interactive data ecosystems that provide a single source of truth for your business metrics.",
    features: ["Real-time Data Visualization", "Custom KPI Development", "Executive Dashboards", "Data Storytelling"],
    color: "accent-cyan"
  },
  {
    id: 1,
    icon: <Brain className="w-12 h-12" />,
    title: "Predictive Modeling",
    description: "Leverage historical data to map future possibilities. Our models help you anticipate churn, demand, and risk with high precision.",
    features: ["Time-series Forecasting", "Customer Churn Prediction", "Risk Assessment", "Market Trend Analysis"],
    color: "accent-indigo"
  },
  {
    id: 2,
    icon: <Bot className="w-12 h-12" />,
    title: "Machine Learning Solutions",
    description: "Implement production-grade ML models. From natural language processing to computer vision, we build systems that scale.",
    features: ["NLP & Sentiment Analysis", "Computer Vision Systems", "Recommendation Engines", "Fraud Detection"],
    color: "accent-violet"
  },
  {
    id: 3,
    icon: <TrendingUp className="w-12 h-12" />,
    title: "AI Automation",
    description: "Automate cognitive tasks. We optimize your business processes using intelligent agents and automated decision-making pipelines.",
    features: ["Robotic Process Automation", "Intelligent Document Processing", "Workflow Optimization", "Self-learning Systems"],
    color: "accent-cyan"
  },
  {
    id: 4,
    icon: <Database className="w-12 h-12" />,
    title: "Data Engineering",
    description: "The foundation of AI is clean data. We design and build the infrastructure required to handle large-scale data ingestion and storage.",
    features: ["ETL/ELT Pipeline Design", "Cloud Data Warehousing", "Data Lake Architecture", "Data Governance & Quality"],
    color: "accent-indigo"
  },
  {
    id: 5,
    icon: <Code className="w-12 h-12" />,
    title: "Custom AI Products",
    description: "Have a unique vision? We specialize in building end-to-end AI products from initial prototype to global scale.",
    features: ["SaaS AI Integration", "MVP Development", "Scalable Microservices", "User-centric AI UX"],
    color: "accent-violet"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-white border-b border-slate-100">
        <Container>
          <div className="max-w-3xl text-left">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-slate-950">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              We provide end-to-end data science and AI solutions designed to solve complex business problems and drive measurable outcomes.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section className="bg-slate-50/30">
        <Container>
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2">
                   <div className={`w-20 h-20 rounded-2xl bg-white shadow-premium border border-slate-100 text-${service.color} flex items-center justify-center mb-10`}>
                      {service.icon}
                   </div>
                   <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-950 tracking-tight">{service.title}</h2>
                   <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                     {service.description}
                   </p>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3 text-slate-700">
                           <div className="p-1 bg-accent-cyan/10 rounded-full">
                              <CheckCircle2 size={16} className="text-accent-cyan" />
                           </div>
                           <span className="text-sm font-bold tracking-tight">{feature}</span>
                        </li>
                      ))}
                   </ul>
                </div>
                
                <div className="w-full lg:w-1/2">
                   <div className="relative aspect-square lg:aspect-video rounded-[40px] bg-white border border-slate-100 flex items-center justify-center overflow-hidden group shadow-premium">
                      <div className={`absolute inset-0 bg-gradient-to-tr from-${service.color}/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity`} />
                      <div className="w-full h-full p-8 relative z-10">
                         <ServiceVisual id={service.id} color={service.color} />
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-slate-950 py-24">
          <Container>
            <div className="flex flex-col items-center text-center text-white">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to transform <br /> your business?</h2>
                <p className="text-white/70 text-xl max-w-2xl mb-12 font-medium">
                   Join world-leading organizations leveraging our AI expertise to gain a competitive advantage.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
                   <button className="px-10 py-5 bg-white text-slate-950 font-bold rounded-2xl hover:scale-105 transition-all shadow-xl">
                      Schedule a Consultation
                   </button>
                   <button className="px-10 py-5 bg-transparent text-white border border-white/20 font-bold rounded-2xl hover:bg-white/5 transition-all">
                      View Case Studies
                   </button>
                </div>
            </div>
          </Container>
      </Section>

      <Footer />
    </main>
  );
}
