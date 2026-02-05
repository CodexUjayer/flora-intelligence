"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, Linkedin, Twitter, Globe, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Container, Section } from "@/components/ui/Layout";
import Magnetic from "@/components/ui/Magnetic";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 bg-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-extrabold mb-8 text-slate-950 leading-tight tracking-tight">
              Let's <br />
              <span className="text-gradient">Collaborate</span>.
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              Whether you're looking to build a custom AI product or optimize your data strategy, our team is ready to help you scale.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-slate-50 border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-16">
               <div>
                  <h3 className="text-3xl font-extrabold mb-10 text-slate-950">Get in Touch</h3>
                  <div className="space-y-8">
                     <div className="flex items-start space-x-6">
                        <div className="w-14 h-14 rounded-2xl bg-white text-accent-cyan flex items-center justify-center shrink-0 shadow-premium border border-slate-100">
                           <Mail size={24} />
                        </div>
                        <div>
                           <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Email Us</div>
                           <div className="text-xl text-slate-950 font-black">flora.intelligence@gmail.com</div>
                        </div>
                     </div>
                     <div className="flex items-start space-x-6">
                        <div className="w-14 h-14 rounded-2xl bg-white text-accent-violet flex items-center justify-center shrink-0 shadow-premium border border-slate-100">
                           <MapPin size={24} />
                        </div>
                        <div>
                           <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Visit Us</div>
                           <div className="text-xl text-slate-950 font-black">500 West 2nd Street, Austin, TX 78701</div>
                        </div>
                     </div>
                  </div>
               </div>

               <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Connect Globally</h3>
                  <div className="flex space-x-4">
                     {[Linkedin, Twitter, Globe].map((Icon, i) => (
                        <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-900 hover:text-accent-cyan hover:border-accent-cyan transition-all shadow-sm hover:shadow-premium">
                           <Icon size={22} />
                        </a>
                     ))}
                  </div>
               </div>

               <div className="p-10 rounded-[32px] bg-white border border-slate-100 relative overflow-hidden shadow-premium">
                  <div className="absolute -top-12 -right-12 p-4 text-accent-cyan opacity-5 scale-150 rotate-12"><MessageSquare size={120} /></div>
                  <h4 className="text-xl font-black mb-3 text-slate-950">Need a demo?</h4>
                  <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed">See our predictive models in action with a custom walkthrough of our capabilities.</p>
                  <button className="text-accent-cyan font-black text-sm uppercase tracking-widest hover:text-accent-indigo transition-colors flex items-center">
                    Request a Demo <span className="ml-2">→</span>
                  </button>
               </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
               <div className="p-10 md:p-16 rounded-[48px] bg-white border border-slate-100 shadow-premium relative">
                  {submitted ? (
                     <motion.div 
                       className="py-20 text-center"
                     >
                        <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-premium">
                           <CheckCircle2 size={48} />
                        </div>
                        <h2 className="text-4xl font-extrabold text-slate-950 mb-4">Message Sent!</h2>
                        <p className="text-slate-500 font-medium text-lg mb-10 leading-relaxed">Thank you for reaching out. A strategy expert will contact you within 24 hours.</p>
                        <button 
                          onClick={() => setSubmitted(false)}
                          className="px-10 py-4 bg-slate-950 text-white font-bold rounded-2xl transition-all shadow-xl hover:scale-105"
                        >
                          Send another message
                        </button>
                     </motion.div>
                   ) : (
                      <form onSubmit={handleSubmit} className="space-y-10">
                        {error && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 bg-red-50 border border-red-100 text-red-500 text-sm rounded-2xl font-bold"
                          >
                            {error}
                          </motion.div>
                        )}
                        
                        {/* Honeypot field for basic spam protection */}
                        <div className="hidden">
                           <input type="text" name="b_honeypot" tabIndex={-1} autoComplete="off" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-3">
                              <label className="text-xs font-black uppercase tracking-widest text-slate-400">Name</label>
                              <input required name="name" type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-accent-cyan transition-colors text-slate-950 font-medium" placeholder="Type your name" />
                           </div>
                           <div className="space-y-3">
                              <label className="text-xs font-black uppercase tracking-widest text-slate-400">Work Email</label>
                              <input required name="email" type="email" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-accent-cyan transition-colors text-slate-950 font-medium" placeholder="name@company.com" />
                           </div>
                        </div>

                        <div className="space-y-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Subject</label>
                           <select required name="subject" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-accent-cyan transition-colors text-slate-950 font-medium cursor-pointer appearance-none">
                              <option value="">Select a subject</option>
                              <option>General Inquiry</option>
                              <option>Data Analytics Project</option>
                              <option>Custom AI Solution</option>
                              <option>Careers & Jobs</option>
                              <option>Partnerships</option>
                           </select>
                        </div>

                        <div className="space-y-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Message</label>
                           <textarea required name="message" rows={5} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-accent-cyan transition-colors resize-none text-slate-950 font-medium" placeholder="Tell us about your project or goals..."></textarea>
                        </div>

                        <Magnetic distance={0.2}>
                          <button 
                            disabled={isSubmitting}
                            type="submit" 
                            className="w-full py-5 bg-gradient-to-r from-accent-cyan to-accent-indigo text-white font-black rounded-2xl hover:opacity-90 transition-all flex items-center justify-center group uppercase tracking-[0.2em] text-xs shadow-xl hover:shadow-accent-indigo/30"
                          >
                             {isSubmitting ? "Sending..." : (
                               <>
                                 Deliver Message <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                               </>
                             )}
                          </button>
                        </Magnetic>
                     </form>
                  )}
               </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
