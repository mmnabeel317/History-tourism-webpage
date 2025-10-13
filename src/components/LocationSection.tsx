import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

const LocationSection = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSection1Visible(true);
        }
      });
    }, observerOptions);

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSection2Visible(true);
        }
      });
    }, observerOptions);

    if (section1Ref.current) observer1.observe(section1Ref.current);
    if (section2Ref.current) observer2.observe(section2Ref.current);

    return () => {
      if (section1Ref.current) observer1.unobserve(section1Ref.current);
      if (section2Ref.current) observer2.unobserve(section2Ref.current);
    };
  }, []);

  return (
    <section className="py-20 md:py-32 px-8 bg-primary text-primary-foreground">
      <div className="max-w-[1440px] mx-auto">
        {/* Single row layout: Map on left, text sections on right */}
        <div className="grid lg:grid-cols-[1fr,1fr] gap-12 items-start">
          {/* Left - Map */}
          <div
            ref={section1Ref}
            className={`transition-all duration-[2000ms] ease-out ${
              section1Visible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.192401284355!2d10.747796!3d47.557574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479cf5d231e9d3eb%3A0xabfa4e1ff9d34c24!2sNeuschwanstein%20Castle!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right - Text sections */}
          <div
            ref={section2Ref}
            className={`space-y-16 transition-all duration-[2000ms] ease-out ${
              section2Visible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            {/* Location & Directions */}
            <div className="space-y-6 pb-16">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-8 w-8 text-gold" />
                <h2 className="font-display text-3xl md:text-4xl font-light">
                  LOCATION & DIRECTIONS
                </h2>
              </div>

              <p className="text-primary-foreground/80 leading-relaxed text-base font-body">
                Through eco-conscious practices and a focus on preserving biodiversity, we invite you to be a part of our conservation mission
              </p>
            </div>

            {/* Divider Line */}
            <div className="border-t border-primary-foreground/20 mb-16" />

            {/* Accessibility & Facilities */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-8 w-8 text-gold" />
                <h2 className="font-display text-3xl md:text-4xl font-light">
                  ACCESSIBILITY & FACILITIES
                </h2>
              </div>

              <p className="text-primary-foreground/80 leading-relaxed text-base font-body mb-4">
                Through eco-conscious practices and a focus on preserving biodiversity, we invite you to be a part of our conservation mission
              </p>

              <div className="space-y-3 text-primary-foreground/80 font-body text-base">
                <p className="leading-relaxed">
                  • Wheelchair accessible routes throughout main areas
                </p>
                <p className="leading-relaxed">
                  • Accessible restrooms available
                </p>
                <p className="leading-relaxed">
                  • Guided tours with audio assistance
                </p>
                <p className="leading-relaxed">
                  • Gift shop and café on premises
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
