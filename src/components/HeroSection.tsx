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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Kreede Pickleball Courts" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Brand */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/2f368600-c4a1-4e0f-9443-56d6df43ad2c.png" 
              alt="Kreede Logo" 
              className="h-40 mx-auto mb-6"
            />
            <p className="text-kreede-cream text-2xl font-medium tracking-wider bg-kreede-cream/10 px-6 py-2 rounded-full inline-block">
              Unite. Thrive. Play.
            </p>
          </div>

          {/* Hero Text */}
          <h1 className="text-kreede-cream text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Welcome to
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Kreede
            </span>
          </h1>
          
          <p className="text-kreede-cream/90 text-xl md:text-2xl mb-4 font-light max-w-2xl mx-auto leading-relaxed">
            Mysuru's Premier Pickleball Destination
          </p>
          
          <p className="text-kreede-cream/80 text-lg mb-12 max-w-3xl mx-auto">
            Experience premium pickleball courts, connect with fellow players, and enjoy our thoughtfully curated snack bar. Join the fastest-growing sport in the world at Kreede.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="kreede-cta" 
              size="lg" 
              onClick={handleBookCourt}
              className="text-lg px-8 py-4 min-w-[200px]"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Court
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="kreede-outline" 
              size="lg"
              onClick={handleCallToBook}
              className="text-lg px-8 py-4 min-w-[200px] border-kreede-cream text-kreede-cream hover:bg-kreede-cream hover:text-kreede-black"
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