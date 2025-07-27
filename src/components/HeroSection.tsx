import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/pickleball-hero.jpg";

const HeroSection = () => {
  const handleBookCourt = () => {
    // Redirect to external booking software
    window.open("https://booking.example.com", "_blank");
  };

  const handleCallToBook = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Slideshow with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="slideshow-container w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
            alt="Pickleball Court 1" 
            className="slideshow-image w-full h-full object-cover opacity-40"
          />
          <img 
            src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Pickleball Court 2" 
            className="slideshow-image w-full h-full object-cover opacity-40"
          />
          <img 
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80" 
            alt="Pickleball Players" 
            className="slideshow-image w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-6">
            <p className="text-kreede-cream text-xl md:text-2xl font-light mb-1">
              Welcome to
            </p>
            <div className="-mt-1 mb-0">
              <img 
                src="/lovable-uploads/5794e2fc-e136-4926-ace9-13a3b803a0c7.png" 
                alt="Kreede" 
                style={{ height: '40rem' }}
                className="mx-auto md:max-h-[48rem]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <p className="text-kreede-cream text-xl md:text-2xl font-light -mt-2">
              Unite. Thrive. Play.
            </p>
          </div>
          
          <p className="text-kreede-cream/90 text-xl md:text-2xl mb-4 font-light max-w-2xl mx-auto leading-relaxed">
            Mysuru's Premier Pickleball Destination
          </p>
          
          <p className="text-kreede-cream/80 text-lg mb-12 max-w-3xl mx-auto">
            Experience premium pickleball courts, connect with fellow players, and enjoy our thoughtfully curated snack bar. Join the fastest-growing sport in the world at Kreede.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleBookCourt}
              className="text-lg px-8 py-4 min-w-[200px] bg-kreede-cream text-kreede-black hover:bg-kreede-cream/90 border border-kreede-cream"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Court
            </Button>
            
            <Button 
              size="lg"
              onClick={handleCallToBook}
              className="text-lg px-8 py-4 min-w-[200px] bg-kreede-cream text-kreede-black hover:bg-kreede-cream/90 border border-kreede-cream"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call & Book
            </Button>
          </div>

          {/* Location Badge */}
          <div className="mt-12 inline-flex items-center px-6 py-3 bg-kreede-cream/10 backdrop-blur-sm rounded-full border border-kreede-cream/20">
            <span className="text-kreede-cream/90 font-medium">
              📍 Coming Soon to Mysuru, Karnataka
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-kreede-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-kreede-cream/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;