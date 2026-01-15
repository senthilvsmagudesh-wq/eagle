import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesScroll from "@/components/ServicesScroll";
import CategoriesSection from "@/components/CategoriesSection";
import AppOverviewSection from "@/components/AppOverviewSection";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <ServicesScroll />
        <section id="services">
          <CategoriesSection />
        </section>
        <AppOverviewSection />
        <TrustSection />
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
