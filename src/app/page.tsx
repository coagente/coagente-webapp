import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <BenefitsSection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
