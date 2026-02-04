import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import ServicesPreview from "@/components/layout/ServicesPreview";
import AboutSection from "@/components/layout/AboutSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <AboutSection />
      <Footer />
    </main>
  );
}
