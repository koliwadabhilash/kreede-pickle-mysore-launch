import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import VenturesSection from "@/components/VenturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="hero" className="scroll-mt-20">
          <HeroSection />
        </div>
        <div id="gallery" className="scroll-mt-20">
          <GallerySection />
        </div>
        <div id="ventures" className="scroll-mt-20">
          <VenturesSection />
        </div>
        <div id="about" className="scroll-mt-20">
          <AboutSection />
        </div>
        <div id="contact" className="scroll-mt-20">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
