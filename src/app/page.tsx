import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import ServicesPreview from "@/components/layout/ServicesPreview";
import AboutSection from "@/components/layout/AboutSection";
import Footer from "@/components/layout/Footer";
import CaseStudiesPreview from "@/components/layout/CaseStudiesPreview";
import CTASection from "@/components/layout/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <CaseStudiesPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
