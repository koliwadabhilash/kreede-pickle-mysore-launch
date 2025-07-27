import { useEffect, useState } from 'react';

const BouncerSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const bouncerImages = [
    "https://images.unsplash.com/photo-1517022812141-236209515c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // sheep running
    "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // whale jumping
    "https://images.unsplash.com/photo-1452378174528-3090455bba7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // horses
    "https://images.unsplash.com/photo-1438565434616-3ef039228b15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"  // mountain goats
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bouncerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [bouncerImages.length]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative w-20 h-20 animate-bounce">
        {bouncerImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Bouncer ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover rounded-full border-4 border-kreede-cream shadow-lg transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BouncerSection;