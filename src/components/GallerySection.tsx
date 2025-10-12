import { useEffect, useRef, useState } from 'react';
import treePathway from '@/assets/tree-pathway.jpg';
import neuschwanstein from '@/assets/neuschwanstein.jpg';
import castleArchway from '@/assets/castle-archway.jpg';
import churchCastle from '@/assets/church-castle.jpg';

const GallerySection = () => {
  const [imagesVisible, setImagesVisible] = useState<boolean[]>([false, false, false, false, false]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = imageRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setImagesVisible(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 150);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && imageRefs.current[index]) {
          observer.unobserve(imageRefs.current[index]!);
        }
      });
    };
  }, []);

  return (
    <section className="relative w-full bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 h-auto md:h-[800px]">
        {/* Large left image - tree pathway */}
        <div
          ref={el => imageRefs.current[0] = el}
          className={`md:col-span-3 md:row-span-2 relative overflow-hidden transition-all duration-700 ${
            imagesVisible[0] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img 
            src={treePathway}
            alt="Tree-lined pathway"
            className="w-full h-full object-cover min-h-[400px] md:min-h-full"
          />
        </div>

        {/* Text overlay section */}
        <div
          ref={el => imageRefs.current[1] = el}
          className={`md:col-span-4 md:row-span-1 relative bg-[#E8E4D8] p-8 md:p-12 flex flex-col justify-center transition-all duration-700 delay-150 ${
            imagesVisible[1] ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`transition-all duration-700 delay-300 ${
            imagesVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-foreground font-body text-base leading-relaxed mb-8">
              Discover how knights, nobles, and servants lived within the castle's towering walls during its golden age. We welcome you to step back in time.
            </p>
          </div>

          <div className={`transition-all duration-700 delay-500 ${
            imagesVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-8">
              YOUR JOURNEY THROUGH TIME BEGINS HERE
            </h2>
            
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 font-body font-medium">
              OUR EVENTS
            </button>
          </div>
        </div>

        {/* Large center image - Neuschwanstein */}
        <div
          ref={el => imageRefs.current[2] = el}
          className={`md:col-span-5 md:row-span-2 relative overflow-hidden group transition-all duration-700 delay-300 ${
            imagesVisible[2] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img 
            src={neuschwanstein}
            alt="Neuschwanstein Castle"
            className="w-full h-full object-cover min-h-[400px] md:min-h-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Top right image - castle archway */}
        <div
          ref={el => imageRefs.current[3] = el}
          className={`md:col-span-4 md:row-span-1 relative overflow-hidden group transition-all duration-700 delay-450 ${
            imagesVisible[3] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img 
            src={castleArchway}
            alt="Castle archway"
            className="w-full h-full object-cover min-h-[300px] transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Bottom left image - church */}
        <div
          ref={el => imageRefs.current[4] = el}
          className={`md:col-span-4 md:row-span-1 relative overflow-hidden group transition-all duration-700 delay-600 ${
            imagesVisible[4] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img 
            src={churchCastle}
            alt="Church and castle"
            className="w-full h-full object-cover min-h-[300px] transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
