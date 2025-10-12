import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-castle.jpg';
import stainedGlass from '@/assets/stained-glass.jpg';
import hallway from '@/assets/castle-hallway.jpg';
import library from '@/assets/castle-library.jpg';

const carouselImages = [stainedGlass, hallway, library];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: 'scale(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Decorative Borders */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24">
        <div className="h-full w-full opacity-60" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'1000\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 0 Q30 50 50 100 T50 200 T50 300 T50 400 T50 500 T50 600 T50 700 T50 800 T50 900 T50 1000\' stroke=\'%23C5B896\' fill=\'none\' stroke-width=\'2\'/%3E%3Ccircle cx=\'50\' cy=\'100\' r=\'4\' fill=\'%23C5B896\'/%3E%3Ccircle cx=\'50\' cy=\'300\' r=\'4\' fill=\'%23C5B896\'/%3E%3Ccircle cx=\'50\' cy=\'500\' r=\'4\' fill=\'%23C5B896\'/%3E%3Ccircle cx=\'50\' cy=\'700\' r=\'4\' fill=\'%23C5B896\'/%3E%3Ccircle cx=\'50\' cy=\'900\' r=\'4\' fill=\'%23C5B896\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'contain'
        }} />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24">
        <div className="h-full w-full opacity-60" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'1000\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 0 Q70 50 50 100 T50 200 T50 300 T50 400 T50 500 T50 600 T50 700 T50 800 T50 900 T50 1000\' stroke=\'%23C5B896\' fill=\'none\' stroke-width=\'2\'/%3E%3Ccircle cx=\'50\' cy=\'100\' r=\'4\' fill=\'%23C5B896\'/%3E%3Ccircle cx=\'50\' cy=\'300\' r=\'4\' fill=\'%23C5B896\'/%3E%3Ccircle cx=\'50\' cy=\'500\' r=\'4\' fill=\'%23C5B896\'/%3E%3Ccircle cx=\'50\' cy=\'700\' r=\'4\' fill=\'%23C5B896\'/%3E%3Ccircle cx=\'50\' cy=\'900\' r=\'4\' fill=\'%23C5B896\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'contain'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        <h1 
          className={`font-display font-light text-gold text-4xl md:text-6xl lg:text-8xl mb-6 max-w-5xl leading-tight tracking-wide transition-all duration-800 ${
            isAnimating ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
          }`}
          style={{ letterSpacing: '0.05em' }}
        >
          A FORTRESS OF LEGENDS, HISTORY & MYSTERY
        </h1>
        <p className="text-primary-foreground text-lg md:text-xl max-w-3xl font-body font-light leading-relaxed">
          Discover how knights, nobles, and servants lived within the castle's towering walls during its golden age. We welcome you to step back in time.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button 
          onClick={prevImage}
          className="p-2 rounded-full border-2 border-gold/50 bg-black/30 hover:bg-black/50 transition-all backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6 text-gold" />
        </button>
        
        <div className="flex gap-4">
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`relative w-24 h-24 md:w-32 md:h-32 rounded overflow-hidden border-4 transition-all duration-300 cursor-pointer ${
                index === currentImageIndex 
                  ? 'border-gold scale-110' 
                  : 'border-gold/30 scale-100 opacity-70'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img 
                src={img} 
                alt={`Castle detail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button 
          onClick={nextImage}
          className="p-2 rounded-full border-2 border-gold/50 bg-black/30 hover:bg-black/50 transition-all backdrop-blur-sm"
        >
          <ChevronRight className="h-6 w-6 text-gold" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
