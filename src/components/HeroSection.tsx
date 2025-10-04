import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import CallBookModal from "./CallBookModal";

const HeroSection = () => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  

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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/kreede-court-3.jpeg" 
          alt="Kreede Pickleball Courts" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-kreede-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-4 md:mb-6">
            <p className="text-kreede-cream text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light mb-1">
              Welcome to Mysuru's Fully Indoor
            </p>
            <div className="-mt-1 mb-1 md:mb-2">
              <h1 className="text-kreede-cream text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-wider leading-tight">
                PICKLEBALL COURTS
              </h1>
            </div>
            <p className="text-kreede-cream text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light mt-1">
              Unite. Thrive. Play.
            </p>
          </div>
          
          
          <p className="text-kreede-cream/80 text-xs sm:text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Experience premium pickleball courts, connect with fellow players, and enjoy our thoughtfully curated snack bar. Join the fastest-growing sport in the world at Kreede.
          </p>

          {/* Operating Hours Badge */}
          <div className="mb-4 md:mb-6 inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 lg:px-6 py-2 md:py-3 bg-kreede-cream/10 backdrop-blur-sm rounded-full border border-kreede-cream/30">
            <Clock className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-kreede-cream" />
            <span className="text-kreede-cream font-bold text-xs sm:text-sm md:text-base lg:text-lg">
              Open 6 AM - 11 PM | 7 Days a Week
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4 mb-4 md:mb-6">
            <Button 
              onClick={handleCallToBook}
              className="text-sm md:text-base lg:text-lg px-5 sm:px-6 md:px-8 py-2.5 md:py-3 lg:py-4 h-auto w-full sm:w-auto sm:min-w-[180px] md:min-w-[200px] bg-kreede-cream text-kreede-black hover:bg-kreede-cream/90 border border-kreede-cream"
            >
              <Phone className="mr-2 h-4 md:h-5 w-4 md:w-5" />
              Call & Book
            </Button>
            
            <Button 
              disabled
              className="text-sm md:text-base lg:text-lg px-5 sm:px-6 md:px-8 py-2.5 md:py-3 lg:py-4 h-auto w-full sm:w-auto sm:min-w-[180px] md:min-w-[200px] bg-kreede-cream text-kreede-black opacity-60 cursor-not-allowed border border-kreede-cream"
            >
              <Calendar className="mr-2 h-4 md:h-5 w-4 md:w-5" />
              Book a Court (Coming Soon)
            </Button>
          </div>

          {/* Location Badge - Fully Clickable */}
          <a 
            href="https://maps.app.goo.gl/df54eiUaB4ythams7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 md:mt-4 inline-flex items-center gap-2 px-3 sm:px-4 md:px-6 py-1.5 md:py-2 lg:py-3 bg-kreede-cream/10 backdrop-blur-sm rounded-full border border-kreede-cream/20 hover:bg-kreede-cream/20 hover:border-kreede-cream/40 transition-all duration-300 group"
          >
            <span className="text-kreede-cream/90 group-hover:text-kreede-cream font-medium text-xs sm:text-sm md:text-base transition-colors">
              📍 Hebbal, Mysuru
            </span>
            <span className="text-kreede-cream/70 group-hover:text-kreede-cream/90 text-xs sm:text-sm transition-colors">
              (Get Directions)
            </span>
          </a>
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