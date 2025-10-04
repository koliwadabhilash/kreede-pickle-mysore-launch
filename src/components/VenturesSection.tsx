import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Users } from "lucide-react";

const VenturesSection = () => {
  return (
    <section className="py-20 bg-kreede-black text-kreede-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Current Ventures
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            We are proud to launch two flagship ventures under the Kreede umbrella, representing our first step toward a larger vision of blending fitness, sport, and community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Pickleball Club */}
          <Card className="bg-kreede-cream text-kreede-black border-0 group hover:shadow-glow transition-sport flex flex-col">
            <CardHeader className="text-center pb-6">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/cdf490ee-7c3b-4946-8781-a7dfd8ba4e04.png" 
                  alt="Pickleball Club Logo" 
                  className="h-36 mx-auto"
                />
              </div>
              <CardTitle className="text-3xl font-bold">Kreede Pickleball Club</CardTitle>
            </CardHeader>
            <CardContent className="text-center flex flex-col flex-1">
              <p className="text-lg mb-8 opacity-80 leading-relaxed">
                A professionally designed pickleball court experience, aimed at introducing and popularizing one of the fastest-growing sports in the world within the Mysuru community.
              </p>
              
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-center justify-center gap-3">
                  <Users className="h-5 w-5" />
                  <span>3 Professional Courts</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Users className="h-5 w-5" />
                  <span>All Skill Levels Welcome</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Users className="h-5 w-5" />
                  <span>Community Tournaments</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Snack Bar */}
          <Card className="bg-kreede-cream text-kreede-black border-0 group hover:shadow-glow transition-sport flex flex-col">
            <CardHeader className="text-center pb-6">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/snack-bar-logo.png" 
                  alt="Snack Bar Logo" 
                  className="h-36 mx-auto"
                />
              </div>
              <CardTitle className="text-3xl font-bold">Kreede Snack Bar</CardTitle>
            </CardHeader>
            <CardContent className="text-center flex flex-col flex-1">
              <p className="text-lg mb-8 opacity-80 leading-relaxed">
                A thoughtfully curated cafe space for players and visitors to unwind, socialize, and build lasting connections off the court.
              </p>
              
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-center justify-center gap-3">
                  <Coffee className="h-5 w-5" />
                  <span>Fresh Coffee & Beverages</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Coffee className="h-5 w-5" />
                  <span>Healthy Snacks</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Coffee className="h-5 w-5" />
                  <span>Social Community Space</span>
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