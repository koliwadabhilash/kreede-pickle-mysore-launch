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
    <section className="relative min-h-[100svh] overflow-hidden bg-gradient-hero pt-24 pb-12 md:pt-32 md:pb-16 flex flex-col justify-center">
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center my-auto">
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">
          {/* Hero Text */}
          <div className="text-center space-y-1 sm:space-y-2">
            <p className="text-kreede-cream text-[10px] sm:text-xs md:text-sm lg:text-base font-light">
              Welcome to Mysuru's Fully Indoor
            </p>
            <h1 className="text-kreede-cream text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-wider leading-none">
              PICKLEBALL
            </h1>
            <h1 className="text-kreede-cream text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-wider leading-none">
              COURTS
            </h1>
            <p className="text-kreede-cream text-xs sm:text-sm md:text-base lg:text-xl font-light pt-1 sm:pt-2">
              Unite. Thrive. Play.
            </p>
          </div>
          
          <div className="pt-2 sm:pt-3 md:pt-4">
            <p className="text-kreede-cream/80 text-[10px] sm:text-xs md:text-sm lg:text-base max-w-2xl mx-auto px-2 leading-relaxed">
              Experience premium pickleball courts, connect with<br className="hidden sm:block" /> 
              fellow players, and enjoy our thoughtfully<br className="hidden sm:block" /> 
              curated snack bar.
            </p>
          </div>

          {/* Operating Hours Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 bg-kreede-cream/10 backdrop-blur-sm rounded-full border border-kreede-cream/30">
            <Clock className="h-2.5 w-2.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-kreede-cream" />
            <span className="text-kreede-cream font-bold text-[9px] sm:text-xs md:text-sm">
              Open 6 AM - 11 PM | 7 Days
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center px-4">
            <Button 
              onClick={handleCallToBook}
              className="text-[10px] sm:text-sm md:text-base px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 h-auto w-full sm:w-auto sm:min-w-[160px] bg-kreede-cream text-kreede-black hover:bg-kreede-cream/90 border border-kreede-cream"
            >
              <Phone className="mr-1.5 sm:mr-2 h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
              Call & Book
            </Button>
            
            <Button 
              disabled
              className="text-[10px] sm:text-sm md:text-base px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 h-auto w-full sm:w-auto sm:min-w-[160px] bg-kreede-cream text-kreede-black opacity-60 cursor-not-allowed border border-kreede-cream"
            >
              <Calendar className="mr-1.5 sm:mr-2 h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
              Book Court (Soon)
            </Button>
          </div>

          {/* Location Badge */}
          <a 
            href="https://maps.app.goo.gl/df54eiUaB4ythams7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-4 py-1 sm:py-1.5 bg-kreede-cream/10 backdrop-blur-sm rounded-full border border-kreede-cream/20 hover:bg-kreede-cream/20 hover:border-kreede-cream/40 transition-all duration-300 group"
          >
            <span className="text-kreede-cream/90 group-hover:text-kreede-cream font-medium text-[9px] sm:text-xs transition-colors">
              📍 Hebbal, Mysuru
            </span>
            <span className="text-kreede-cream/70 group-hover:text-kreede-cream/90 text-[8px] sm:text-[10px] transition-colors">
              (Directions)
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-4 h-7 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-kreede-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-kreede-cream/70 rounded-full mt-1 md:mt-2 animate-bounce"></div>
        </div>
      </div>
      
      <CallBookModal isOpen={isCallModalOpen} onClose={() => setIsCallModalOpen(false)} />
    </section>
  );
};

export default HeroSection;