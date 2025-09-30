import { Button } from "@/components/ui/button";
import { Calendar, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBookCourt = () => {
    window.open("https://booking.example.com", "_blank");
  };

  const handleCallToBook = () => {
    scrollToSection('contact');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-kreede-black/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/93ef227d-61c9-4604-9bbc-4f22b1f1d791.png" 
              alt="Kreede Logo" 
              className="h-14 sm:h-16 md:h-20"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-white/70 font-medium transition-colors text-lg"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-white/70 font-medium transition-colors text-lg"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('ventures')}
              className="text-white hover:text-white/70 font-medium transition-colors text-lg"
            >
              Our Ventures
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-white/70 font-medium transition-colors text-lg"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleCallToBook}
              className="border-white text-kreede-black bg-white hover:bg-white/90 hover:text-kreede-black"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call & Book
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleBookCourt}
              className="border-white text-kreede-black bg-white hover:bg-white/90 hover:text-kreede-black"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book a Court
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-white/70 font-medium transition-colors text-left text-lg"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-white/70 font-medium transition-colors text-left text-lg"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('ventures')}
                className="text-white hover:text-white/70 font-medium transition-colors text-left text-lg"
              >
                Our Ventures
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-white/70 font-medium transition-colors text-left text-lg"
              >
                Contact
              </button>
              
              <div className="flex flex-col gap-3 pt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleCallToBook}
                  className="justify-start border-white text-kreede-black bg-white hover:bg-white/90 hover:text-kreede-black"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call & Book
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleBookCourt}
                  className="justify-start border-white text-kreede-black bg-white hover:bg-white/90 hover:text-kreede-black"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Court
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;