import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import castleBridge from '@/assets/castle-bridge.jpg';

const testimonials = [
  {
    quote: "A breathtaking experience! Walking through the ancient halls felt like stepping back in time. The stories surrounding the castle made the visit truly unforgettable.",
    name: "EMMA R.",
    location: "Our visitor from UK",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    quote: "The castle's history is remarkable. Every room tells a different story. Our guide was knowledgeable and passionate. Highly recommend visiting!",
    name: "JAMES M.",
    location: "Our visitor from USA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    quote: "An incredible journey through medieval times. The architecture is stunning and the atmosphere is magical. A must-visit destination!",
    name: "SOPHIA L.",
    location: "Our visitor from France",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextTestimonial = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevTestimonial = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden min-h-[600px]">
      {/* Background Image - Fixed size */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${castleBridge})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 h-full flex items-center min-h-[600px]">
        <div className="flex items-center justify-end w-full">
          <div className="flex items-center gap-0">
            {/* Static white background card */}
            <div className="w-full lg:w-[520px] bg-background p-16 shadow-2xl">
              {/* Fading content inside */}
              <div className={`space-y-8 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <blockquote 
                  className="text-lg md:text-xl text-foreground leading-relaxed"
                  style={{ fontFamily: "'Gafata', 'Inter', sans-serif" }}
                >
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-display text-xl font-medium text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-muted-foreground font-body text-sm">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col gap-0">
              <button 
                onClick={prevTestimonial}
                disabled={isTransitioning}
                className="w-[80px] h-[100px] flex items-center justify-center transition-all active:translate-y-px disabled:opacity-50 focus-visible:outline focus-visible:outline-2 border-l border-t border-r border-gold"
                style={{
                  background: 'hsl(var(--gold))',
                  outlineColor: 'hsl(var(--gold))'
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-8 w-8 text-primary" />
              </button>
              <button 
                onClick={nextTestimonial}
                disabled={isTransitioning}
                className="w-[80px] h-[100px] flex items-center justify-center transition-all active:translate-y-px disabled:opacity-50 focus-visible:outline focus-visible:outline-2 border-l border-b border-r border-gold"
                style={{
                  background: 'hsl(var(--gold))',
                  outlineColor: 'hsl(var(--gold))'
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-8 w-8 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
