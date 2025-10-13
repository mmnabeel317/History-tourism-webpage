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
    <section className="py-20 md:py-32 px-8 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-[52%_48%] gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div
              ref={firstParaRef}
              className={`space-y-6 transition-all duration-[2000ms] ease-out ${
                firstVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-24'
              }`}
            >
              <h2 
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', 'Times New Roman', serif",
                  fontWeight: 300,
                  fontSize: 'clamp(32px, 3.5vw, 48px)',
                  lineHeight: 1.15,
                  letterSpacing: '0.02em',
                  color: '#1f1c16',
                  textTransform: 'uppercase',
                  maxWidth: '20ch'
                }}
              >
                UNCOVER HIDDEN PASSAGEWAYS, IMMERSE YOURSELF IN THE STORIES.
              </h2>
              
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 font-body font-medium text-sm">
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
              <h3 
                style={{
                  fontFamily: "'Playfair Display', 'Georgia', 'Times New Roman', serif",
                  fontWeight: 300,
                  fontSize: 'clamp(20px, 1.8vw, 26px)',
                  lineHeight: 1.2,
                  letterSpacing: '0.05em',
                  color: '#1f1c16',
                  textTransform: 'uppercase'
                }}
              >
                EVENTS & EXPERIENCES
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body text-base max-w-[48ch]">
                Whether you're drawn by history, mystery, or breathtaking views, we welcome you to step back in time.
              </p>
            </div>
          </div>

          {/* Right column - Portrait video */}
          <div className="relative">
            <div 
              className="relative overflow-hidden shadow-lg"
              style={{
                aspectRatio: '9 / 16',
                border: '8px solid #efe6c7',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)'
              }}
            >
              <img 
                src={castleAerial}
                alt="Castle aerial view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTextSection;
