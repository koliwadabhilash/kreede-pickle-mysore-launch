import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VenturesSection from "@/components/VenturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Comprehensive debugging for scroll issues
  useEffect(() => {
    console.log('Index component mounted');
    
    // Disable any automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Track all potential scroll causes
    let scrollY = window.scrollY;
    
    const logScrollChange = (source: string) => {
      const newScrollY = window.scrollY;
      if (Math.abs(newScrollY - scrollY) > 50) {
        console.log(`MAJOR SCROLL CHANGE from ${source}: ${scrollY} -> ${newScrollY}`);
      }
      scrollY = newScrollY;
    };
    
    // Monitor all scroll events
    const handleScroll = () => logScrollChange('scroll event');
    window.addEventListener('scroll', handleScroll);
    
    // Monitor focus changes (can cause scroll)
    const handleFocusIn = (e: FocusEvent) => {
      console.log('Focus changed to:', e.target);
      setTimeout(() => logScrollChange('focus change'), 0);
    };
    document.addEventListener('focusin', handleFocusIn);
    
    // Monitor DOM mutations that could trigger layout shifts
    const observer = new MutationObserver(() => {
      setTimeout(() => logScrollChange('DOM mutation'), 0);
    });
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true, 
      attributeFilter: ['style', 'class'] 
    });
    
    // Monitor image loads
    const handleImageLoad = (e: Event) => {
      console.log('Image loaded:', (e.target as HTMLImageElement).src);
      setTimeout(() => logScrollChange('image load'), 0);
    };
    document.addEventListener('load', handleImageLoad, true);
    
    // Set a timer to see what happens at 3-4 seconds
    const timer = setTimeout(() => {
      console.log('4 second mark reached, current scroll:', window.scrollY);
      logScrollChange('4 second timer');
    }, 4000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('load', handleImageLoad, true);
      observer.disconnect();
      clearTimeout(timer);
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
