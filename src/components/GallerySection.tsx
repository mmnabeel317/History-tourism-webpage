import { useEffect, useRef, useState } from 'react';
import treePathway from '@/assets/tree-pathway.jpg';
import neuschwanstein from '@/assets/neuschwanstein.jpg';
import castleArchway from '@/assets/castle-archway.jpg';
import churchCastle from '@/assets/church-castle.jpg';

const GallerySection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const [textVisible, setTextVisible] = useState(false);
  const [imagesVisible, setImagesVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
        }
      });
    }, observerOptions);

    const imagesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => setImagesVisible(true), 200);
        }
      });
    }, observerOptions);

    if (textRef.current) textObserver.observe(textRef.current);
    if (imagesRef.current) imagesObserver.observe(imagesRef.current);

    return () => {
      if (textRef.current) textObserver.unobserve(textRef.current);
      if (imagesRef.current) imagesObserver.unobserve(imagesRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-stretch">
      {/* Left Side - Text Content with Cream Background */}
      <div className="w-full lg:w-2/5 bg-background-cream flex items-center px-8 md:px-16 py-20">
        <div
          ref={textRef}
          className={`space-y-8 transition-all duration-[1200ms] ease-out ${
            textVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
        >
          <p className="text-muted-foreground text-base font-body leading-relaxed">
            Discover how knights, nobles, and servants lived within the castle's towering walls during its golden age. We welcome you to step back in time.
          </p>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight">
            YOUR JOURNEY THROUGH TIME BEGINS HERE
          </h2>

          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 font-body font-medium">
            OUR EVENTS
          </button>
        </div>
      </div>

      {/* Right Side - Image Grid */}
      <div 
        ref={imagesRef}
        className="w-full lg:w-3/5 grid grid-cols-2 grid-rows-2"
      >
        {/* Top Left - Tree Pathway */}
        <div 
          className={`relative overflow-hidden transition-all duration-[1200ms] ease-out ${
            imagesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
          style={{ transitionDelay: '0ms' }}
        >
          <img 
            src={treePathway}
            alt="Tree-lined pathway to castle"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Right - Neuschwanstein Castle */}
        <div 
          className={`relative overflow-hidden transition-all duration-[1200ms] ease-out ${
            imagesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <img 
            src={neuschwanstein}
            alt="Neuschwanstein Castle at sunset"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Left - Castle Archway */}
        <div 
          className={`relative overflow-hidden transition-all duration-[1200ms] ease-out ${
            imagesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <img 
            src={castleArchway}
            alt="Castle archway with flowers"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Right - Church Castle */}
        <div 
          className={`relative overflow-hidden transition-all duration-[1200ms] ease-out ${
            imagesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          <img 
            src={churchCastle}
            alt="Church and castle towers"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
