import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VenturesSection from "@/components/VenturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Final debugging attempt - override scroll properties
  useEffect(() => {
    console.log('Index component mounted');
    
    // Disable scroll restoration completely
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Override window.scrollTo to catch direct calls
    const originalScrollTo = window.scrollTo;
    window.scrollTo = function(...args: any[]) {
      console.log('BLOCKED scrollTo call:', args, new Error().stack);
      // Don't execute the scroll - block it completely
      return;
    };
    
    // Override scrollIntoView to catch those calls  
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function(...args: any[]) {
      console.log('BLOCKED scrollIntoView call on:', this, args, new Error().stack);
      // Don't execute the scroll - block it completely
      return;
    };
    
    // Monitor direct scroll property changes
    let lastScrollY = window.scrollY;
    const checkScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 50) {
        console.log(`DIRECT SCROLL DETECTED: ${lastScrollY} -> ${currentScrollY}`);
      }
      lastScrollY = currentScrollY;
    };
    
    const scrollChecker = setInterval(checkScroll, 100);
    
    return () => {
      window.scrollTo = originalScrollTo;
      Element.prototype.scrollIntoView = originalScrollIntoView;
      clearInterval(scrollChecker);
    };
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="ventures">
          <VenturesSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
