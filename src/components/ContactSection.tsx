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
      // EmailJS configuration - you'll need to set these up in EmailJS
      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID  
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
      
      const templateParams = {
        user_email: email,
        to_email: 'kreedesporting@gmail.com',
        subject: 'New Newsletter Subscription - Kreede',
        message: `New newsletter subscription from: ${email}`
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
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center border-2 border-transparent hover:border-kreede-black/10 transition-sport">
            <CardContent className="p-6">
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
              <div className="inline-flex items-center justify-center w-12 h-12 bg-kreede-black/10 text-kreede-black rounded-full mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <p className="text-foreground text-xl font-bold">
                6 AM - 11 PM<br />
                <span className="text-lg">7 days a week</span>
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