import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Users } from "lucide-react";

const VenturesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-kreede-black text-kreede-cream">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Ventures
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90 max-w-3xl mx-auto leading-relaxed px-4">
            We are proud to launch two flagship ventures under the Kreede umbrella, representing our first step toward a larger vision of blending fitness, sport, and community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Pickleball Club */}
          <Card className="bg-kreede-cream text-kreede-black border-0 group hover:shadow-glow transition-sport flex flex-col">
            <CardHeader className="text-center pb-4 md:pb-6">
              <div className="mb-4 md:mb-6">
                <img 
                  src="/lovable-uploads/cdf490ee-7c3b-4946-8781-a7dfd8ba4e04.png" 
                  alt="Pickleball Club Logo" 
                  className="h-24 sm:h-28 md:h-32 lg:h-36 mx-auto"
                />
              </div>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold">Kreede Pickleball Club</CardTitle>
            </CardHeader>
            <CardContent className="text-center flex flex-col flex-1 px-4 sm:px-6">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 md:mb-8 opacity-80 leading-relaxed">
                A professionally designed pickleball court experience, aimed at introducing and popularizing one of the fastest-growing sports in the world within the Mysuru community.
              </p>
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-1">
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <Users className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">3 Professional Courts</span>
                </div>
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <Users className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">All Skill Levels Welcome</span>
                </div>
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <Users className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">Community Tournaments</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Snack Bar */}
          <Card className="bg-kreede-cream text-kreede-black border-0 group hover:shadow-glow transition-sport flex flex-col">
            <CardHeader className="text-center pb-4 md:pb-6">
              <div className="mb-4 md:mb-6">
                <img 
                  src="/lovable-uploads/snack-bar-logo-transparent.png" 
                  alt="Snack Bar Logo" 
                  className="h-24 sm:h-28 md:h-32 lg:h-36 mx-auto"
                />
              </div>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold">Kreede Snack Bar</CardTitle>
            </CardHeader>
            <CardContent className="text-center flex flex-col flex-1 px-4 sm:px-6">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 md:mb-8 opacity-80 leading-relaxed">
                A thoughtfully curated cafe space for players and visitors to unwind, socialize, and build lasting connections off the court.
              </p>
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-1">
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <Coffee className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">Fresh Coffee & Beverages</span>
                </div>
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <Coffee className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">Healthy Snacks</span>
                </div>
                <div className="flex items-center justify-center gap-2 md:gap-3">
                  <Coffee className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">Social Community Space</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default VenturesSection;