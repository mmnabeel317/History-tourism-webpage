import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-castle.jpg';
import stainedGlass from '@/assets/stained-glass.jpg';
import hallway from '@/assets/castle-hallway.jpg';
import library from '@/assets/castle-library.jpg';
import ornament from '@/assets/side_flower_artifact.svg';

const carouselImages = [stainedGlass, hallway, library, stainedGlass];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [titleScale, setTitleScale] = useState(1.5);
  const [scrollY, setScrollY] = useState(0);

  // Animate title from large to normal on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleScale(1);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax effect for ornaments
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

      {/* Border Ornaments - Left and Right - Flush to edges */}
      {/* Left ornament - top */}
      <div 
        className="absolute left-0 top-0 w-auto pointer-events-none z-[5] hidden md:block"
        style={{ 
          height: 'clamp(350px, 42vh, 500px)',
          transform: `translateY(${scrollY * 0.2}%)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src={ornament} 
          alt="" 
          className="h-full w-auto object-contain opacity-100"
          style={{ paddingLeft: '8px' }}
        />
      </div>

      {/* Left ornament - bottom (flipped vertically so flowers face inward) */}
      <div 
        className="absolute left-0 bottom-0 w-auto pointer-events-none z-[5] hidden md:block"
        style={{ 
          height: 'clamp(350px, 42vh, 500px)',
          transform: `translateY(${-scrollY * 0.2}%) scaleY(-1)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src={ornament} 
          alt="" 
          className="h-full w-auto object-contain opacity-100"
          style={{ paddingLeft: '8px' }}
        />
      </div>
      
      {/* Right ornament - top, mirrored */}
      <div 
        className="absolute right-0 top-0 w-auto pointer-events-none z-[5] hidden md:block"
        style={{ 
          height: 'clamp(350px, 42vh, 500px)',
          transform: `translateY(${scrollY * 0.2}%) scaleX(-1)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src={ornament} 
          alt="" 
          className="h-full w-auto object-contain opacity-100"
          style={{ paddingRight: '8px' }}
        />
      </div>

      {/* Right ornament - bottom, mirrored and flipped vertically so flowers face inward */}
      <div 
        className="absolute right-0 bottom-0 w-auto pointer-events-none z-[5] hidden md:block"
        style={{ 
          height: 'clamp(350px, 42vh, 500px)',
          transform: `translateY(${-scrollY * 0.2}%) scaleX(-1) scaleY(-1)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src={ornament} 
          alt="" 
          className="h-full w-auto object-contain opacity-100"
          style={{ paddingRight: '8px' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center pb-24">
        <h1 
          className="mb-6 transition-all duration-[800ms] ease-out"
          style={{ 
            fontFamily: "'Playfair Display', 'Georgia', 'Times New Roman', serif",
            fontWeight: 300,
            fontSize: titleScale === 1.5 ? 'clamp(3rem, 10vw, 10rem)' : 'clamp(42px, 6vw, 72px)',
            lineHeight: 1.1,
            letterSpacing: 0,
            color: '#f0e7af',
            textShadow: '0 1px 0 rgba(0,0,0,0.25)',
            maxWidth: '18ch',
            transform: `scale(${titleScale})`,
            transformOrigin: 'center'
          }}
        >
          A FORTRESS OF LEGENDS, HISTORY & MYSTERY
        </h1>
        <p 
          className="font-body max-w-[42ch]"
          style={{
            fontSize: '18px',
            lineHeight: 1.6,
            fontWeight: 400,
            color: '#f0e7af'
          }}
        >
          Discover how knights, nobles, and servants lived within the castle's towering walls during its golden age. We welcome you to step back in time.
        </p>
      </div>

      {/* Image Carousel */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button 
          onClick={prevImage}
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all active:translate-y-px focus-visible:outline focus-visible:outline-2"
          style={{
            background: '#111',
            border: '1px solid #d6caa0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
            outlineColor: '#f0e7af'
          }}
          aria-label="Previous image"
          onMouseEnter={(e) => e.currentTarget.style.background = '#fff'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#111'}
        >
          <ChevronLeft className="h-6 w-6" style={{ color: '#f0e7af' }} />
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
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all active:translate-y-px focus-visible:outline focus-visible:outline-2"
          style={{
            background: '#111',
            border: '1px solid #d6caa0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
            outlineColor: '#f0e7af'
          }}
          aria-label="Next image"
          onMouseEnter={(e) => e.currentTarget.style.background = '#fff'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#111'}
        >
          <ChevronRight className="h-6 w-6" style={{ color: '#f0e7af' }} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
