import { useState } from 'react';
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${castleBridge})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 h-full flex items-center">
        <div className="flex items-center justify-end w-full">
          <div className="w-full lg:w-[480px] bg-background p-12 shadow-2xl">
            <div className="space-y-8">
              <blockquote className="text-2xl md:text-3xl font-display font-light text-foreground leading-relaxed">
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
                  <p className="text-muted-foreground font-body">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>

              <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                <button 
                  onClick={prevTestimonial}
                  className="p-3 bg-gold text-foreground hover:bg-gold/90 transition-all hover:scale-105"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-3 bg-gold text-foreground hover:bg-gold/90 transition-all hover:scale-105"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
