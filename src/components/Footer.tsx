import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const handleEmailContact = () => {
    window.open("mailto:kreedesporting@gmail.com", "_self");
  };

  const handleCallToBook = () => {
    window.open("tel:+919606055181", "_self");
  };

  return (
    <footer className="bg-kreede-black text-kreede-cream">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/2f368600-c4a1-4e0f-9443-56d6df43ad2c.png" 
                alt="Kreede Logo" 
                className="h-8"
              />
            </div>
            <p className="text-kreede-cream/80 leading-relaxed mb-6 max-w-md">
              Mysuru's premier destination for pickleball and active living. Join us in building a community where sports, wellness, and friendships thrive.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/kreede_official/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-kreede-cream/10 rounded-full flex items-center justify-center hover:bg-kreede-cream/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://chat.whatsapp.com/C6ufGupeMMYBiFnyNgnIMZ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-kreede-cream/10 rounded-full flex items-center justify-center hover:bg-kreede-cream/20 transition-colors">
                <span className="text-xs font-bold">WA</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-kreede-cream/80 hover:text-kreede-cream transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#ventures" className="text-kreede-cream/80 hover:text-kreede-cream transition-colors">
                  Our Ventures
                </a>
              </li>
              <li>
                <a href="#contact" className="text-kreede-cream/80 hover:text-kreede-cream transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <span className="text-kreede-cream/80">
                  Book a Court (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-kreede-cream/60 mt-0.5" />
                <div className="text-kreede-cream/80 text-left">
                  <div>1622, Manchegowdana koppalu,</div>
                  <div>Hebbal 2nd Stage, Mysuru</div>
                  <div>Karnataka 570016, India</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-kreede-cream/60" />
                <span className="text-kreede-cream/80">
                  +91 96060 55181
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-kreede-cream/60" />
                <span className="text-kreede-cream/80">
                  kreedesporting@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-kreede-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-kreede-cream/60 text-sm text-center">
              © 2025 Kreede. All rights reserved. | Unite. Thrive. Play.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;