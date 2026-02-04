"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, Search, X, Upload, Link as LinkIcon, Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Container, Section } from "@/components/ui/Layout";
import Magnetic from "@/components/ui/Magnetic";

const jobs = [
  {
    id: 1,
    role: "Data Scientist",
    department: "AI Research",
    location: "Remote",
    type: "Full-time",
    description: "Build advanced predictive models and lead statistical analysis for complex datasets.",
    skills: ["Python", "PyTorch", "SQL", "Statistics"]
  },
  {
    id: 2,
    role: "Machine Learning Engineer",
    department: "Core Engineering",
    location: "London or Remote",
    type: "Full-time",
    description: "Design and deploy scalable ML pipelines and productionize AI models.",
    skills: ["Kubernetes", "Docker", "AWS", "TensorFlow"]
  },
  {
    id: 3,
    role: "Data Analyst",
    department: "Business Intelligence",
    location: "San Francisco",
    type: "Full-time",
    description: "Extract actionable business insights and create high-impact visualizations.",
    skills: ["PowerBI", "SQL", "Excel", "Data Modeling"]
  },
  {
    id: 4,
    role: "AI Research Intern",
    department: "Flora Labs",
    location: "Global Remote",
    type: "Internship",
    description: "Conduct research in Generative AI and contribute to open-source prototypes.",
    skills: ["Research Fundamentals", "Python", "Problem Solving"]
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [filter, setFilter] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const filteredJobs = jobs.filter(j => 
    j.role.toLowerCase().includes(filter.toLowerCase()) || 
    j.department.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        alert("Only PDF files are allowed.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB.");
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      if (resumeFile) {
        formData.append("resume", resumeFile);
      }
      if (selectedJob) {
        formData.append("role", selectedJob.role);
      }

      // Simulate API call for now since we don't have the real endpoint logic here
      await new Promise(r => setTimeout(r, 2000));

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedJob(null);
        setResumeFile(null);
      }, 3000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-[84px] font-black mb-8 text-slate-950 leading-[0.9] italic tracking-tighter">
              Join the <br />
              <span className="text-gradient">Future</span> of AI.
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              We're looking for visionary minds to help us bridge the gap between complex data and strategic business impact at Flora.
            </p>
          </div>
        </Container>
      </section>

      {/* Jobs List Section */}
      <Section className="bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <h2 className="text-4xl font-black text-slate-950">
              Open Roles ({filteredJobs.length})
            </h2>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search roles or departments..." 
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-950 focus:outline-none focus:border-accent-cyan transition-colors shadow-sm font-medium"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  className="p-10 rounded-[32px] bg-white border border-slate-100 hover:border-accent-cyan/20 transition-all flex flex-col justify-between shadow-premium group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                       <span className="px-4 py-1.5 bg-accent-cyan/10 text-accent-cyan text-[10px] font-black rounded-full uppercase tracking-widest">{job.department}</span>
                       <span className="text-slate-400 text-xs font-bold flex items-center"><Clock className="w-3.5 h-3.5 mr-1.5" /> {job.type}</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-950 mb-3 group-hover:text-accent-cyan transition-colors italic tracking-tight">{job.role}</h3>
                    <div className="flex items-center text-slate-500 text-sm mb-6 font-medium">
                       <MapPin className="w-4 h-4 mr-1.5 text-slate-400" /> {job.location}
                    </div>
                    <p className="text-slate-600 mb-8 line-clamp-2 font-medium leading-relaxed">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {job.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-black rounded uppercase tracking-tight border border-slate-100">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Magnetic distance={0.1}>
                    <button 
                      onClick={() => setSelectedJob(job)}
                      className="w-full py-4 bg-slate-950 text-white hover:bg-slate-800 font-black rounded-2xl transition-all shadow-lg hover:shadow-slate-200 uppercase tracking-widest text-[10px]"
                    >
                      Apply Now
                    </button>
                  </Magnetic>
                </motion.div>
             ))}
          </div>
        </Container>
      </Section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-slate-950">
            <motion.div 
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" 
            />
            <motion.div 
              className="relative w-full max-w-2xl bg-white border border-slate-100 rounded-[40px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]"
            >
               <button 
                 onClick={() => setSelectedJob(null)}
                 className="absolute top-8 right-8 text-slate-400 hover:text-slate-950 transition-colors z-20"
               >
                 <X size={24} />
               </button>

               <div className="p-8 md:p-16 max-h-[90vh] overflow-y-auto">
                  {!submitted ? (
                    <>
                      <div className="mb-10">
                        <span className="text-accent-cyan text-xs font-black uppercase tracking-[0.2em]">{selectedJob.department}</span>
                        <h2 className="text-4xl font-black text-slate-950 mt-2 italic tracking-tighter">Apply for {selectedJob.role}</h2>
                        <p className="text-slate-500 mt-4 font-medium">Fill out the form below to start your application.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-3">
                              <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                              <input name="name" required type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-accent-cyan text-slate-950 font-medium" placeholder="John Doe" />
                           </div>
                           <div className="space-y-3">
                              <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                              <input name="email" required type="email" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-accent-cyan text-slate-950 font-medium" placeholder="john@example.com" />
                           </div>
                        </div>

                        <div className="space-y-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">LinkedIn / Portfolio URL</label>
                           <div className="relative">
                              <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                              <input name="links" type="url" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-accent-cyan text-slate-950 font-medium" placeholder="https://linkedin.com/in/..." />
                           </div>
                        </div>

                        <div className="space-y-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Skills & Experience Summary</label>
                           <textarea name="experience" required rows={3} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-accent-cyan text-slate-950 font-medium" placeholder="Briefly describe your relevant background..."></textarea>
                        </div>

                        <div className="space-y-3">
                           <label className="text-xs font-black uppercase tracking-widest text-slate-400">Resume / CV (PDF)</label>
                           <label className="block border-2 border-dashed border-slate-100 rounded-[24px] p-10 text-center hover:border-accent-cyan/50 transition-colors cursor-pointer group bg-slate-50/50">
                              <input type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
                              <Upload className="mx-auto w-10 h-10 text-slate-300 group-hover:text-accent-cyan transition-colors mb-4" />
                              <p className="text-sm text-slate-500 font-bold">
                                {resumeFile ? resumeFile.name : "Click to upload or drag and drop"}
                              </p>
                              <p className="text-xs text-slate-400 mt-2 font-medium">PDF max 5MB</p>
                           </label>
                        </div>

                        {error && (
                          <div className="p-4 bg-red-50 border border-red-100 text-red-500 text-sm rounded-2xl font-bold">
                            {error}
                          </div>
                        )}

                        <Magnetic distance={0.1}>
                          <button 
                            disabled={isSubmitting}
                            type="submit" 
                            className="w-full py-5 bg-gradient-to-r from-accent-cyan to-accent-indigo text-white font-black rounded-[24px] flex items-center justify-center group disabled:opacity-50 shadow-xl hover:scale-[1.02] transition-all uppercase tracking-widest text-xs"
                          >
                            {isSubmitting ? "Sending..." : (
                              <>
                                Submit Application <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                              </>
                            )}
                          </button>
                        </Magnetic>
                      </form>
                    </>
                  ) : (
                    <div className="py-20 text-center">
                       <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-premium">
                            <CheckCircle2 size={48} />
                       </div>
                       <h2 className="text-4xl font-black text-slate-950 mb-4">Application Received!</h2>
                       <p className="text-slate-500 font-medium text-lg">Our HR team will review your application and get back to you soon.</p>
                       <button 
                          onClick={() => setSelectedJob(null)}
                          className="mt-12 px-12 py-4 bg-slate-950 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl"
                       >
                          Close
                       </button>
                    </div>
                  )}
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
