import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const galleryImages = [
    {
      url: "/lovable-uploads/kreede-court-1.jpeg",
      alt: "Kreede Pickleball Courts - Indoor Facility with Seating"
    },
    {
      url: "/lovable-uploads/kreede-court-2.jpeg",
      alt: "Kreede Pickleball Courts - Multiple Professional Courts"
    },
    {
      url: "/lovable-uploads/kreede-court-3.jpeg",
      alt: "Kreede Pickleball Courts - Spacious Indoor Arena"
    },
    {
      url: "/lovable-uploads/kreede-court-5.jpg",
      alt: "Kreede Pickleball Courts - Indoor Courts in Action"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-kreede-cream/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
            Our Gallery
          </h2>
          <p className="text-sm md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Premium facilities and vibrant community
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
            {/* Images */}
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-kreede-black/70 hover:bg-kreede-black text-kreede-cream p-3 rounded-full transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-kreede-black/70 hover:bg-kreede-black text-kreede-cream p-3 rounded-full transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-kreede-black/70 text-kreede-cream px-4 py-2 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Thumbnail Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'bg-kreede-black w-8' 
                    : 'bg-kreede-black/30 hover:bg-kreede-black/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
