import { useEffect, useRef, useState } from 'react';
import treePathway from '@/assets/tree-pathway.jpg';
import neuschwanstein from '@/assets/neuschwanstein.jpg';
import castleArchway from '@/assets/castle-archway.jpg';
import churchCastle from '@/assets/church-castle.jpg';

const GallerySection = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [imagesVisible, setImagesVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const leftObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLeftVisible(true);
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

    if (leftRef.current) leftObserver.observe(leftRef.current);
    if (imagesRef.current) imagesObserver.observe(imagesRef.current);

    return () => {
      if (leftRef.current) leftObserver.unobserve(leftRef.current);
      if (imagesRef.current) imagesObserver.unobserve(imagesRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Photo with text overlay + Yellow section below */}
      <div 
        ref={leftRef}
        className="w-full lg:w-[40%] flex flex-col"
      >
        {/* Top: Photo with text overlay */}
        <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
          <img 
            src={treePathway}
            alt="Castle pathway"
            className="w-full h-full object-cover"
          />
          {/* Text overlay on image */}
          <div className="absolute inset-0 bg-black/20 flex items-center px-8 md:px-12">
            <p 
              className={`font-body text-white transition-all duration-[1200ms] ease-out ${
                leftVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                fontSize: 'clamp(15px, 1.4vw, 18px)',
                lineHeight: 1.6,
                fontWeight: 400,
                maxWidth: '42ch'
              }}
            >
              Discover how knights, nobles, and servants lived within the castle's towering walls during its golden age. We welcome you to step back in time.
            </p>
          </div>
        </div>

        {/* Bottom: Yellow section with headline and button */}
        <div className="flex-1 bg-[#f0e7af] flex items-center px-8 md:px-12 py-12 lg:py-16">
          <div
            className={`space-y-6 transition-all duration-[1200ms] ease-out delay-200 ${
              leftVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <h2 
              style={{
                fontFamily: "'Playfair Display', 'Georgia', 'Times New Roman', serif",
                fontWeight: 300,
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                lineHeight: 1.15,
                letterSpacing: '0.02em',
                color: '#1f1c16',
                textTransform: 'uppercase',
                maxWidth: '18ch'
              }}
            >
              YOUR JOURNEY THROUGH TIME BEGINS HERE
            </h2>

            <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-black/80 transition-all hover:scale-105 font-body font-medium text-sm uppercase">
              OUR EVENTS
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Seamless 2x2 Image Grid */}
      <div 
        ref={imagesRef}
        className="w-full lg:w-[60%] grid grid-cols-2 grid-rows-2 gap-0"
      >
        {/* Top Left - Tree Pathway */}
        <div 
          className={`relative overflow-hidden transition-all duration-[1200ms] ease-out hover:scale-[1.01] ${
            imagesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
          style={{ transitionDelay: '0ms' }}
        >
          <img 
            src={treePathway}
            alt="Tree-lined pathway to castle"
            className="w-full h-full object-cover min-h-[250px] lg:min-h-[50vh]"
          />
        </div>

        {/* Top Right - Neuschwanstein Castle */}
        <div 
          className={`relative overflow-hidden transition-all duration-[1200ms] ease-out hover:scale-[1.01] ${
            imagesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <img 
            src={neuschwanstein}
            alt="Neuschwanstein Castle at sunset"
            className="w-full h-full object-cover min-h-[250px] lg:min-h-[50vh]"
          />
        </div>

        {/* Bottom Left - Castle Archway */}
        <div 
          className={`relative overflow-hidden transition-all duration-[1200ms] ease-out hover:scale-[1.01] ${
            imagesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <img 
            src={castleArchway}
            alt="Castle archway with flowers"
            className="w-full h-full object-cover min-h-[250px] lg:min-h-[50vh]"
          />
        </div>

        {/* Bottom Right - Church Castle */}
        <div 
          className={`relative overflow-hidden transition-all duration-[1200ms] ease-out hover:scale-[1.01] ${
            imagesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          <img 
            src={churchCastle}
            alt="Church and castle towers"
            className="w-full h-full object-cover min-h-[250px] lg:min-h-[50vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
