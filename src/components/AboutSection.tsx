import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Trophy, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission",
      description: "To offer high-quality sporting facilities that are accessible and community driven, creating a culture where fitness, fun, and friendships thrive through sport."
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Vision", 
      description: "To become Mysuru's leading hub for sports and active living, creating a multi-sport ecosystem that nurtures talent, builds community, and inspires a healthy lifestyle."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Kreede is not just a facility—it's a lifestyle movement designed to foster active living and social engagement in Mysuru.",
      hasButton: true
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Location",
      description: "Strategically located in Mysuru, Karnataka, bringing premium sporting facilities to the heart of the city."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 relative space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            About Kreede
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed px-4">
            Kreede is a Mysuru-based company dedicated to transforming the city's recreational and fitness landscape. We are on a mission to create vibrant, inclusive, and accessible spaces where sports, community, and wellness come together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-sport transition-sport border-2 border-transparent hover:border-kreede-black/10">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-kreede-black text-kreede-cream rounded-full mb-4 md:mb-6 group-hover:scale-110 transition-sport">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-foreground/90 leading-relaxed font-medium mb-4 md:mb-6">
                  {feature.description}
                </p>
                {feature.hasButton && (
                  <Button 
                    variant="kreede-primary"
                    size="sm"
                    className="w-full text-xs sm:text-sm"
                    onClick={() => window.open("https://chat.whatsapp.com/C6ufGupeMMYBiFnyNgnIMZ", "_blank")}
                  >
                    Join WhatsApp Community
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16 text-center">
          <div className="bg-kreede-black text-kreede-cream rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Future</h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed opacity-90">
              Over the coming years, Kreede will evolve to include additional sports facilities, programs, and events—all designed to support athletes of all levels and ages. Whether you're a beginner, a seasoned player, or someone seeking an active social outlet, Kreede will be your go-to destination.
            </p>
            <div className="mt-6 md:mt-8 inline-block px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-kreede-cream/10 rounded-full border border-kreede-cream/20">
              <span className="font-semibold text-xs sm:text-sm md:text-base">Building a legacy of movement, wellness, and community in Mysuru</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;