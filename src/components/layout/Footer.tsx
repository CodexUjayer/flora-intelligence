import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 shadow-premium relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Col */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform bg-slate-100">
                <Image 
                  src="/logo.jpg" 
                  alt="Flora Logo" 
                  fill 
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-950">
                Flora
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
              Empowering enterprises with cutting-edge AI and Data Science solutions. turning raw data into strategic business decisions since 2020.
            </p>
            <div className="flex space-x-5">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <Link key={i} href="#" className="text-slate-400 hover:text-accent-cyan transition-all transform hover:-translate-y-1">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-slate-950 font-black text-xs uppercase tracking-[0.2em] mb-8">Services</h4>
            <ul className="space-y-4">
              {["Data Analytics", "Predictive Modeling", "ML Solutions", "AI Automation", "Data Engineering"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-slate-500 text-sm hover:text-accent-cyan transition-colors font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-slate-950 font-black text-xs uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/#about" className="text-slate-500 text-sm hover:text-accent-cyan transition-colors font-medium">About Us</Link></li>
              <li><Link href="/case-studies" className="text-slate-500 text-sm hover:text-accent-cyan transition-colors font-medium">Case Studies</Link></li>
              <li><Link href="/careers" className="text-slate-500 text-sm hover:text-accent-cyan transition-colors font-medium">Careers</Link></li>
              <li><Link href="/contact" className="text-slate-500 text-sm hover:text-accent-cyan transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-slate-950 font-black text-xs uppercase tracking-[0.2em] mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-sm text-slate-500 font-medium leading-tight">
                <MapPin size={20} className="text-accent-cyan shrink-0" />
                <span>One Infinite Loop, San Francisco, CA 94111</span>
              </li>
              <li className="flex items-center space-x-4 text-sm text-slate-500 font-medium">
                <Phone size={20} className="text-accent-cyan shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-4 text-sm text-slate-500 font-medium">
                <Mail size={20} className="text-accent-cyan shrink-0" />
                <span>hello@floraintelligence.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-[0.1em] text-center md:text-left">
            © {currentYear} Flora Intelligence Inc. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-slate-400 text-[10px] font-black uppercase tracking-[0.1em] hover:text-accent-cyan transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-400 text-[10px] font-black uppercase tracking-[0.1em] hover:text-accent-cyan transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
