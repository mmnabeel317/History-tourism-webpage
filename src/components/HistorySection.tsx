import { useEffect, useRef, useState } from 'react';
import castlePainting from '@/assets/castle-painting.jpg';

const HistorySection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const para1Ref = useRef<HTMLParagraphElement>(null);
  const para2Ref = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [para1Visible, setPara1Visible] = useState(false);
  const [para2Visible, setPara2Visible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setTitleVisible(true);
      });
    }, observerOptions);

    const para1Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setPara1Visible(true);
      });
    }, observerOptions);

    const para2Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setPara2Visible(true);
      });
    }, observerOptions);

    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (para1Ref.current) para1Observer.observe(para1Ref.current);
    if (para2Ref.current) para2Observer.observe(para2Ref.current);

    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
      if (para1Ref.current) para1Observer.unobserve(para1Ref.current);
      if (para2Ref.current) para2Observer.unobserve(para2Ref.current);
    };
  }, []);

  return (
    <section className="py-20 md:py-32 px-8 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="border-[12px] border-background-cream overflow-hidden shadow-2xl">
              <img 
                src={castlePainting}
                alt="Historical castle painting"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div
              ref={titleRef}
              className={`transition-all duration-[800ms] ease-out ${
                titleVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-24'
              }`}
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
                CENTURIES OF LEGEND & POWER
              </h2>
            </div>

            <p
              ref={para1Ref}
              className={`text-muted-foreground leading-relaxed text-base font-body transition-all duration-[800ms] ease-out delay-200 ${
                para1Visible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-24'
              }`}
            >
              Perched high atop the misty cliffs of Raven's Hollow, Blackthorn Castle has stood as a guardian of the land for over 800 years. Built in 1247, this medieval stronghold has witnessed centuries of royal feuds, legendary battles, and whispered secrets that still linger within its stone walls.
            </p>

            <div
              ref={para2Ref}
              className={`space-y-8 transition-all duration-[800ms] ease-out delay-400 ${
                para2Visible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-24'
              }`}
            >
              <div>
                <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                  1247 – THE CASTLE IS BORN
                </h3>
                <p className="text-muted-foreground leading-relaxed font-body text-base">
                  Construction of Blackthorn Castle begins under the command of Lord Edric Blackthorn, establishing a stronghold that will shape the region's history for centuries.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                  1892 – THE GRAND RESTORATION
                </h3>
                <p className="text-muted-foreground leading-relaxed font-body text-base">
                  After decades of abandonment, Blackthorn Castle is restored, reviving its former grandeur and opening its gates to the world once again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
