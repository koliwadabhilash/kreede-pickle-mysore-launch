import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookCourt = () => {
    window.open("https://booking.example.com", "_blank");
  };

  const handleCallToBook = () => {
    window.open("tel:+919845809169", "_self");
  };

  const handleEmailContact = () => {
    window.open("mailto:kreedesporting@gmail.com", "_self");
  };

  const handleNewsletterSignup = async () => {
    const emailInput = document.getElementById('newsletter-email') as HTMLInputElement;
    const email = emailInput?.value;
    
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // EmailJS integration
      const serviceId = 'service_k5mn56n';
      const templateId = 'template_j7lje38';
      const publicKey = 'DsvKuMvSMFUcuOAvJ';
      
      const templateParams = {
        user_email: email,
        to_email: 'kreedesporting@gmail.com',
        subject: 'New Newsletter Subscription - Kreede',
        timestamp: new Date().toLocaleString()
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      alert('Thank you for subscribing! We\'ll keep you updated.');
      emailInput.value = '';
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Sorry, there was an error. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Ready to experience Kreede? Book your court or get in touch with us. We're here to help you start your pickleball journey.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <Card className="group hover:shadow-sport transition-sport border-2 hover:border-kreede-black/20 cursor-pointer" onClick={handleBookCourt}>
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-kreede-black text-kreede-cream rounded-full mb-6 group-hover:scale-110 transition-sport">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Book Online</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Use our external booking platform to reserve your court time. Select your preferred slot and play!
              </p>
              <Button variant="kreede-primary" size="lg" className="w-full min-h-[56px]">
                Book a Court
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-sport transition-sport border-2 hover:border-kreede-black/20">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-kreede-black text-kreede-cream rounded-full mb-6 group-hover:scale-110 transition-sport">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Call & Book</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Prefer to speak with us directly? Call us and we'll help you find the perfect time to play.
              </p>
              <div className="bg-kreede-black text-kreede-cream px-6 py-4 rounded-lg flex items-center justify-center gap-2 text-lg font-semibold min-h-[56px]">
                <Phone className="h-5 w-5" />
                +91 98458 09169
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <Card className="text-center border-2 border-transparent hover:border-kreede-black/10 transition-sport">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-4">Location</h4>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-kreede-black/10 text-kreede-black rounded-full mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="text-foreground text-xl font-bold">
                Vijayanagar 1st stage, Mysuru<br />
                <span className="text-lg">Karnataka</span>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-transparent hover:border-kreede-black/10 transition-sport cursor-pointer" onClick={handleEmailContact}>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-4">Contact</h4>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-kreede-black/10 text-kreede-black rounded-full mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <p className="text-foreground text-lg font-bold hover:text-kreede-black transition-colors">
                kreedesporting@gmail.com<br />
                <span className="text-foreground text-lg font-bold">+91 98458 09169</span>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-transparent hover:border-kreede-black/10 transition-sport">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-4">Hours</h4>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-kreede-black/10 text-kreede-black rounded-full mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <p className="text-foreground text-xl font-bold">
                6 AM - 11 PM<br />
                <span className="text-lg">7 days a week</span>
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-transparent hover:border-kreede-black/10 transition-sport">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-foreground mb-4">Social</h4>
              <div className="flex justify-center gap-4 mb-4">
                <a 
                  href="https://instagram.com/kreede" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-kreede-black/10 text-kreede-black rounded-full hover:bg-kreede-black hover:text-kreede-cream transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://chat.whatsapp.com/kreede" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 bg-kreede-black/10 text-kreede-black rounded-full hover:bg-kreede-black hover:text-kreede-cream transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
              <p className="text-foreground text-lg">
                Follow us for updates<br />
                <span className="text-sm">Join our community</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-kreede-black text-kreede-cream rounded-2xl p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-lg opacity-90 mb-6">
              Be the first to know about our grand opening, special events, discounts, and court availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                id="newsletter-email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-kreede-cream text-kreede-black border-0 focus:outline-none focus:ring-2 focus:ring-kreede-cream/50"
              />
              <Button 
                variant="kreede-outline" 
                className="border-kreede-cream text-kreede-cream hover:bg-kreede-cream hover:text-kreede-black"
                onClick={handleNewsletterSignup}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Subscribe'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;