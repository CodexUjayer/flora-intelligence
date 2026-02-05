"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/#about" },
  { name: "Careers", href: "/careers" },
];

import Magnetic from "@/components/ui/Magnetic";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoRotation, setLogoRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    setLogoRotation(prev => prev + 360 * (1 + Math.floor(prev / 360) % 3));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-100" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Magnetic distance={0.3}>
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            onClick={handleLogoClick}
          >
            <motion.div 
              animate={{ rotate: logoRotation }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="relative w-10 h-10 overflow-hidden group-hover:scale-110 transition-transform"
            >
              <Image 
                src="/logo.jpg" 
                alt="Flora Logo" 
                fill 
                className="object-cover"
              />
            </motion.div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-950">
              Flora<span className="text-accent-cyan">.</span>
            </span>
          </Link>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-accent-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center space-x-4">
            <Magnetic distance={0.2}>
              <Link
                href="/contact"
                className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center group shadow-xl hover:shadow-slate-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            className="text-slate-950 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] md:hidden border-t border-slate-100"
          >
            <div className="flex flex-col p-10 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-extrabold text-slate-950 tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="w-full py-5 bg-slate-950 text-white rounded-2xl text-center font-extrabold uppercase tracking-widest text-sm shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
