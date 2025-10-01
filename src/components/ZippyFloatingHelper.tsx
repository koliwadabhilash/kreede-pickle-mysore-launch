import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import zippyMascot from "@/assets/zippy-mascot.png";
import { Card, CardContent } from "@/components/ui/card";

const ZippyFloatingHelper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTip, setShowTip] = useState(true);

  const tips = [
    "🎾 First time playing? Our courts are perfect for beginners!",
    "☕ Don't forget to check out our snack bar after your game!",
    "📅 Book early to secure your favorite time slot!",
    "👥 Bring your friends - pickleball is more fun in groups!",
    "🏆 Join our community tournaments and events!",
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <>
      {/* Floating Zippy Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && showTip && (
          <div className="absolute bottom-full right-0 mb-2 animate-fade-in">
            <Card className="bg-kreede-black text-kreede-cream border-kreede-cream/20 shadow-2xl max-w-xs">
              <CardContent className="p-4 relative">
                <button
                  onClick={() => setShowTip(false)}
                  className="absolute top-2 right-2 text-kreede-cream/60 hover:text-kreede-cream"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-kreede-cream flex-shrink-0 mt-1" />
                  <p className="text-sm">{randomTip}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
          aria-label="Chat with Zippy"
        >
          <div className="absolute inset-0 bg-kreede-cream rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <img
            src={zippyMascot}
            alt="Zippy the Fox"
            className="relative w-20 h-20 object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform cursor-pointer"
          />
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          )}
        </button>
      </div>

      {/* Zippy Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 z-50 animate-scale-in">
          <Card className="bg-kreede-black text-kreede-cream border-2 border-kreede-cream/30 shadow-2xl w-80">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={zippyMascot}
                  alt="Zippy"
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="font-bold text-lg mb-1">Hey there! I'm Zippy! 🦊</h3>
                  <p className="text-sm text-kreede-cream/80">
                    Your friendly Kreede guide
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm leading-relaxed">
                  Welcome to Kreede! I'm here to help you have the best pickleball experience. 
                </p>

                <div className="bg-kreede-cream/10 rounded-lg p-3 border border-kreede-cream/20">
                  <p className="text-xs font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Quick Tips:
                  </p>
                  <ul className="text-xs space-y-1 text-kreede-cream/90">
                    <li>• Book your court online or call us</li>
                    <li>• Try our delicious snacks & drinks</li>
                    <li>• Follow us on Instagram for updates</li>
                    <li>• Bring friends and join the fun!</li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    window.open("tel:+919845809169", "_self");
                  }}
                  className="w-full bg-kreede-cream text-kreede-black font-semibold py-2 rounded-lg hover:bg-kreede-cream/90 transition-colors"
                >
                  📞 Call & Book Now
                </button>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-kreede-cream/60 hover:text-kreede-cream transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ZippyFloatingHelper;
