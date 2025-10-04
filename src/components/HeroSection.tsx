import { Button } from "@/components/ui/button";
import { Phone, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import CallBookModal from "./CallBookModal";

const HeroSection = () => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const handleBookCourt = () => {
    // Redirect to external booking software
    window.open("https://booking.example.com", "_blank");
  };

  const handleCallToBook = () => {
    setIsCallModalOpen(true);
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
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
            <p className="text-kreede-cream text-xs sm:text-base md:text-lg lg:text-xl font-light mb-1">
              Welcome to Mysuru's Fully Indoor
            </p>
            <div className="mb-1 md:mb-0">
              <h1 className="text-kreede-cream text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-wider leading-tight">
                PICKLEBALL COURTS
              </h1>
            </div>
            <p className="text-kreede-cream text-xs sm:text-base md:text-lg lg:text-xl font-light mt-1">
              Unite. Thrive. Play.
            </p>
          </div>
          
          
          <p className="text-kreede-cream/80 text-xs sm:text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Experience premium pickleball courts, connect with fellow players, and enjoy our thoughtfully curated snack bar. Join the fastest-growing sport in the world at Kreede.
          </p>

          {/* Operating Hours Badge */}
          <div className="mb-4 md:mb-6 inline-flex items-center gap-2 px-3 md:px-5 py-2 md:py-3 bg-kreede-cream/10 backdrop-blur-sm rounded-full border border-kreede-cream/30">
            <Clock className="h-3 w-3 md:h-5 md:w-5 text-kreede-cream" />
            <span className="text-kreede-cream font-bold text-xs md:text-base">
              Open 6 AM - 11 PM | 7 Days a Week
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button 
              onClick={handleCallToBook}
              className="text-xs sm:text-base px-4 sm:px-6 py-2 sm:py-3 h-auto w-full sm:w-auto sm:min-w-[180px] bg-kreede-cream text-kreede-black hover:bg-kreede-cream/90 border border-kreede-cream"
            >
              <Phone className="mr-2 h-3 sm:h-4 w-3 sm:w-4" />
              Call & Book
            </Button>
            
            <Button 
              disabled
              className="text-xs sm:text-base px-4 sm:px-6 py-2 sm:py-3 h-auto w-full sm:w-auto sm:min-w-[180px] bg-kreede-cream text-kreede-black opacity-60 cursor-not-allowed border border-kreede-cream"
            >
              <Calendar className="mr-2 h-3 sm:h-4 w-3 sm:w-4" />
              Book a Court (Coming Soon)
            </Button>
          </div>

          {/* Location Badge - Fully Clickable */}
          <a 
            href="https://maps.app.goo.gl/df54eiUaB4ythams7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-8 inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 bg-kreede-cream/10 backdrop-blur-sm rounded-full border border-kreede-cream/20 hover:bg-kreede-cream/20 hover:border-kreede-cream/40 transition-all duration-300 group"
          >
            <span className="text-kreede-cream/90 group-hover:text-kreede-cream font-medium text-xs sm:text-sm transition-colors">
              📍 Hebbal, Mysuru
            </span>
            <span className="text-kreede-cream/70 group-hover:text-kreede-cream/90 text-xs transition-colors">
              (Get Directions)
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-kreede-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-kreede-cream/70 rounded-full mt-1 md:mt-2 animate-bounce"></div>
        </div>
      </div>
      
      <CallBookModal isOpen={isCallModalOpen} onClose={() => setIsCallModalOpen(false)} />
    </section>
  );
};

export default HeroSection;