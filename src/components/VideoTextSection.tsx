import { useEffect, useRef, useState } from 'react';
import castleAerial from '@/assets/castle-aerial.jpg';

const VideoTextSection = () => {
  const firstParaRef = useRef<HTMLDivElement>(null);
  const secondParaRef = useRef<HTMLHeadingElement>(null);
  const [firstVisible, setFirstVisible] = useState(false);
  const [secondVisible, setSecondVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const firstObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFirstVisible(true);
        }
      });
    }, observerOptions);

    const secondObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSecondVisible(true);
        }
      });
    }, observerOptions);

    if (firstParaRef.current) firstObserver.observe(firstParaRef.current);
    if (secondParaRef.current) secondObserver.observe(secondParaRef.current);

    return () => {
      if (firstParaRef.current) firstObserver.unobserve(firstParaRef.current);
      if (secondParaRef.current) secondObserver.unobserve(secondParaRef.current);
    };
  }, []);

  return (
    <section className="py-20 md:py-32 px-8 bg-background-cream">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <div
            ref={firstParaRef}
              className={`transition-all duration-[2000ms] ease-out ${
                firstVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-24'
              }`}
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6">
                UNCOVER HIDDEN PASSAGEWAYS, IMMERSE YOURSELF IN THE STORIES.
              </h2>
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 font-body font-medium">
                ABOUT US
              </button>
            </div>
            
            <div
            ref={secondParaRef}
              className={`space-y-4 transition-all duration-[2000ms] ease-out delay-300 ${
                secondVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <h3 className="font-display text-2xl md:text-3xl font-light text-foreground">
                EVENTS & EXPERIENCES
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body text-base">
                Whether you're drawn by history, mystery, or breathtaking views, we welcome you to step back in time.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border-[12px] border-gold/20 shadow-2xl">
              <img 
                src={castleAerial}
                alt="Aerial view of castle grounds"
                className="w-full h-[500px] object-cover"
              />
              {/* Text overlay on image */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8 text-center">
                <div className="bg-[#f0e7af] px-8 py-4 mb-6">
                  <h3 
                    className="font-display text-2xl md:text-3xl font-light"
                    style={{ color: '#111318' }}
                  >
                    YOUR JOURNEY THROUGH TIME BEGINS
                  </h3>
                </div>
                <p 
                  className="font-body text-base md:text-lg leading-relaxed max-w-[50ch]"
                  style={{ color: '#f0e7af' }}
                >
                  Discover how knights, nobles, and servants lived within the castle's towering walls during its golden age. We welcome you to step back in time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTextSection;
