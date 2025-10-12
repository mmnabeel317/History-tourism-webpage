import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-castle.jpg';
import stainedGlass from '@/assets/stained-glass.jpg';
import hallway from '@/assets/castle-hallway.jpg';
import library from '@/assets/castle-library.jpg';

const carouselImages = [stainedGlass, hallway, library, stainedGlass];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [titleScale, setTitleScale] = useState(1.5);

  // Animate title from large to normal on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleScale(1);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate carousel
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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Decorative Borders */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 opacity-60">
        <svg className="h-full w-full" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <path d="M50 0 Q30 50 50 100 T50 200 T50 300 T50 400 T50 500 T50 600 T50 700 T50 800 T50 900 T50 1000" 
                stroke="#C5B896" fill="none" strokeWidth="2"/>
          <circle cx="50" cy="100" r="4" fill="#C5B896"/>
          <circle cx="50" cy="300" r="4" fill="#C5B896"/>
          <circle cx="50" cy="500" r="4" fill="#C5B896"/>
          <circle cx="50" cy="700" r="4" fill="#C5B896"/>
          <circle cx="50" cy="900" r="4" fill="#C5B896"/>
        </svg>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 opacity-60">
        <svg className="h-full w-full" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <path d="M50 0 Q70 50 50 100 T50 200 T50 300 T50 400 T50 500 T50 600 T50 700 T50 800 T50 900 T50 1000" 
                stroke="#C5B896" fill="none" strokeWidth="2"/>
          <circle cx="50" cy="100" r="4" fill="#C5B896"/>
          <circle cx="50" cy="300" r="4" fill="#C5B896"/>
          <circle cx="50" cy="500" r="4" fill="#C5B896"/>
          <circle cx="50" cy="700" r="4" fill="#C5B896"/>
          <circle cx="50" cy="900" r="4" fill="#C5B896"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        <h1 
          className="font-display font-light text-gold mb-6 max-w-5xl leading-[1.1] tracking-[0.05em] transition-all duration-[800ms] ease-out"
          style={{ 
            fontSize: titleScale === 1.5 ? 'clamp(3rem, 10vw, 10rem)' : 'clamp(3rem, 8vw, 6.5rem)',
            transform: `scale(${titleScale})`,
            transformOrigin: 'center'
          }}
        >
          A FORTRESS OF LEGENDS, HISTORY & MYSTERY
        </h1>
        <p className="text-primary-foreground text-base md:text-lg max-w-3xl font-body font-light leading-relaxed">
          Discover how knights, nobles, and servants lived within the castle's towering walls during its golden age. We welcome you to step back in time.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button 
          onClick={prevImage}
          className="p-2 rounded-full border-2 border-gold/50 bg-black/30 hover:bg-black/50 transition-all backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6 text-gold" />
        </button>
        
        <div className="flex gap-4">
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`relative w-20 h-20 md:w-28 md:h-28 overflow-hidden border-4 transition-all duration-500 cursor-pointer ${
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
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6 text-gold" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
