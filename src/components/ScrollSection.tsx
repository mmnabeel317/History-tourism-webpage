import { useEffect, useRef, ReactNode } from 'react';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-left' | 'slide-right' | 'slide-up' | 'scale';
  delay?: number;
}

const ScrollSection = ({ 
  children, 
  className = '', 
  animation = 'fade',
  delay = 0 
}: ScrollSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  const animationClass = {
    'fade': 'opacity-0',
    'slide-left': 'opacity-0 -translate-x-24',
    'slide-right': 'opacity-0 translate-x-24',
    'slide-up': 'opacity-0 translate-y-16',
    'scale': 'opacity-0 scale-95'
  }[animation];

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-800 ease-out ${animationClass} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollSection;
