import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import CallBookModal from "./CallBookModal";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  
  const backgroundImages = [
    "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80", // Pickleball court
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80", // People playing pickleball
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80", // Pickleball racket and ball
    "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" // Pickleball match
  ];

  // Background slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Debug logging to track what's causing scroll resets
  useEffect(() => {
    const originalScrollTo = window.scrollTo;
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    
    window.scrollTo = function(...args) {
      console.log('scrollTo called:', args, new Error().stack);
      return originalScrollTo.apply(this, args);
    };
    
    Element.prototype.scrollIntoView = function(...args) {
      console.log('scrollIntoView called on:', this, args, new Error().stack);
      return originalScrollIntoView.apply(this, args);
    };
    
    return () => {
      window.scrollTo = originalScrollTo;
      Element.prototype.scrollIntoView = originalScrollIntoView;
    };
  }, []);

  const handleBookCourt = () => {
    // Redirect to external booking software
    window.open("https://booking.example.com", "_blank");
  };

  const handleCallToBook = () => {
    setIsCallModalOpen(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Slideshow with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`Pickleball Court ${index + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-40' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-6">
            <p className="text-kreede-cream text-sm sm:text-lg md:text-xl lg:text-2xl font-light mb-1">
              Welcome to Mysuru's Fully Indoor
            </p>
            <div className="-mt-1 mb-0">
              <h1 className="text-kreede-cream text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wider leading-tight">
                PICKLEBALL COURTS
              </h1>
            </div>
            <p className="text-kreede-cream text-sm sm:text-lg md:text-xl lg:text-2xl font-light -mt-2">
              Unite. Thrive. Play.
            </p>
          </div>
          
          
          <p className="text-kreede-cream/80 text-sm sm:text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Experience premium pickleball courts, connect with fellow players, and enjoy our thoughtfully curated snack bar. Join the fastest-growing sport in the world at Kreede.
          </p>

          {/* Operating Hours Badge */}
          <div className="mb-8 inline-flex items-center gap-3 px-6 py-4 bg-kreede-cream/10 backdrop-blur-sm rounded-full border-2 border-kreede-cream/30">
            <Clock className="h-6 w-6 text-kreede-cream" />
            <span className="text-kreede-cream font-bold text-lg">
              Open 6 AM - 11 PM | 7 Days a Week
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Button 
              size="lg" 
              onClick={handleCallToBook}
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto sm:min-w-[200px] bg-kreede-cream text-kreede-black hover:bg-kreede-cream/90 border border-kreede-cream"
            >
              <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              Call & Book
            </Button>
            
            <Button 
              size="lg"
              onClick={handleBookCourt}
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto sm:min-w-[200px] bg-kreede-cream text-kreede-black hover:bg-kreede-cream/90 border border-kreede-cream"
            >
              <Calendar className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              Book a Court
            </Button>
          </div>

          {/* Location Badge */}
          <div className="mt-8 md:mt-12 inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-kreede-cream/10 backdrop-blur-sm rounded-full border border-kreede-cream/20">
            <span className="text-kreede-cream/90 font-medium text-sm sm:text-base">
              📍 Mysuru, Karnataka
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-kreede-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-kreede-cream/70 rounded-full mt-2"></div>
        </div>
      </div>
      
      <CallBookModal isOpen={isCallModalOpen} onClose={() => setIsCallModalOpen(false)} />
    </section>
  );
};

export default HeroSection;