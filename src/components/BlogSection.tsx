import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import guard from '@/assets/guard.jpg';
import crown from '@/assets/crown.jpg';
import pathway from '@/assets/castle-pathway.jpg';

const blogPosts = [
  {
    image: guard,
    date: 'MARCH 5, 2025',
    title: 'MEDIEVAL LIFE AT BLACKTHORN CASTLE',
    excerpt: 'In 1745, Prince Alistair vanished without a trace. Murder, escape, or something more? The truth awaits within the castle walls.'
  },
  {
    image: crown,
    date: 'MARCH 5, 2025',
    title: 'THE LOST HEIR: A ROYAL MYSTERY',
    excerpt: 'In 1745, Prince Alistair vanished without a trace. Murder, escape, or something more? The truth awaits within the castle walls.'
  },
  {
    image: pathway,
    date: 'MARCH 5, 2025',
    title: "SECRETS OF THE CASTLE'S HIDDEN PASSAGES",
    excerpt: 'In 1745, Prince Alistair vanished without a trace. Murder, escape, or something more? The truth awaits within the castle walls.'
  }
];

const BlogSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRefs = useRef<(HTMLElement | null)[]>([]);
  const [titleVisible, setTitleVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      });
    }, observerOptions);

    if (titleRef.current) titleObserver.observe(titleRef.current);

    const cardObservers = cardsRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setCardsVisible(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 200);
            }
          });
        },
        observerOptions
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
      cardObservers.forEach((observer, index) => {
        if (observer && cardsRefs.current[index]) {
          observer.unobserve(cardsRefs.current[index]!);
        }
      });
    };
  }, []);

  return (
    <section className="py-20 md:py-32 px-8 bg-[hsl(48,35%,88%)]">
      <div className="max-w-[1440px] mx-auto">
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-[1200ms] ease-out ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight">
              DISCOVER THE STORIES ETCHED IN STONE
            </h2>
            <p className="text-muted-foreground text-base font-body leading-relaxed">
              From immersive night tours to seasonal festivals, We offer unforgettable events throughout the year. Step into history and discover something extraordinary. Book a private tour and explore the castle like never before.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              ref={el => cardsRefs.current[index] = el}
              className={`group transition-all duration-[1200ms] ease-out hover:scale-[1.02] ${
                cardsVisible[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <div className="relative overflow-hidden border-[14px] border-background-cream">
                <Sparkles className="absolute top-4 left-4 h-6 w-6 text-gold z-10" />
                <Sparkles className="absolute top-4 right-4 h-6 w-6 text-gold z-10" />
                <Sparkles className="absolute bottom-4 left-4 h-6 w-6 text-gold z-10" />
                <Sparkles className="absolute bottom-4 right-4 h-6 w-6 text-gold z-10" />
                
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8 space-y-4 bg-background">
                <p className="text-sm text-muted-foreground font-body">
                  {post.date}
                </p>

                <h3 className="font-display text-2xl font-medium text-foreground leading-tight">
                  {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed font-body text-base">
                  {post.excerpt}
                </p>

                <a 
                  href="#" 
                  className="inline-block text-foreground font-medium hover:text-gold transition-colors font-body border-b border-foreground hover:border-gold pb-1"
                >
                  READ FULL POST
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
