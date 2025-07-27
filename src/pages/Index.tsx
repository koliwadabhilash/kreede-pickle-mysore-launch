import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VenturesSection from "@/components/VenturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    console.log('Index component mounted - BLOCKING ALL SCROLLS for 6 seconds');
    
    // Store the scroll position when user scrolls
    let userScrollPosition = 0;
    let isBlocking = true;
    
    // Override ALL scroll methods completely for 6 seconds
    const originalScrollTo = window.scrollTo;
    const originalScroll = window.scroll;
    const originalScrollBy = window.scrollBy;
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    
    // Block all scroll functions
    window.scrollTo = () => console.log('BLOCKED scrollTo');
    window.scroll = () => console.log('BLOCKED scroll');  
    window.scrollBy = () => console.log('BLOCKED scrollBy');
    Element.prototype.scrollIntoView = () => console.log('BLOCKED scrollIntoView');
    
    // Track user's intended scroll position
    const handleUserScroll = () => {
      if (!isBlocking) return;
      userScrollPosition = window.scrollY;
      console.log('User scrolled to:', userScrollPosition);
    };
    
    window.addEventListener('scroll', handleUserScroll);
    
    // Monitor for forced scroll resets
    const preventScrollReset = () => {
      if (isBlocking && window.scrollY !== userScrollPosition && window.scrollY === 0) {
        console.log('DETECTED SCROLL RESET - RESTORING POSITION');
        window.scrollTo = originalScrollTo; // Temporarily restore
        window.scrollTo(0, userScrollPosition);
        window.scrollTo = () => console.log('BLOCKED scrollTo'); // Block again
      }
    };
    
    const resetChecker = setInterval(preventScrollReset, 50);
    
    // Re-enable scrolling after 6 seconds
    const timer = setTimeout(() => {
      console.log('Enabling normal scroll behavior');
      isBlocking = false;
      window.scrollTo = originalScrollTo;
      window.scroll = originalScroll;
      window.scrollBy = originalScrollBy;
      Element.prototype.scrollIntoView = originalScrollIntoView;
      clearInterval(resetChecker);
      window.removeEventListener('scroll', handleUserScroll);
    }, 6000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(resetChecker);
      window.removeEventListener('scroll', handleUserScroll);
      window.scrollTo = originalScrollTo;
      window.scroll = originalScroll;
      window.scrollBy = originalScrollBy;
      Element.prototype.scrollIntoView = originalScrollIntoView;
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
