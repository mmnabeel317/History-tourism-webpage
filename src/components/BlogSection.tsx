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
    <section className="py-20 md:py-32 px-8" style={{ background: 'hsl(var(--wheat-hero))' }}>
      <div className="max-w-[1440px] mx-auto">
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-[2000ms] ease-out ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
            <h2 
              style={{
                fontFamily: "'Beatrix Antiqua', 'Playfair Display', 'Times New Roman', serif",
                fontWeight: 300,
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                color: '#1f1c16',
                maxWidth: '16ch'
              }}
            >
              DISCOVER THE STORIES ETCHED IN STONE
            </h2>
            <p 
              className="font-body"
              style={{
                fontSize: '18px',
                lineHeight: 1.75,
                color: '#3b372f',
                maxWidth: '48ch'
              }}
            >
              From immersive night tours to seasonal festivals, We offer unforgettable events throughout the year. Step into history and discover something extraordinary. Book a private tour and explore the castle like never before.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-7 lg:gap-10">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              ref={el => cardsRefs.current[index] = el}
              className={`group transition-all duration-[2000ms] ease-out hover:scale-[1.02] ${
                cardsVisible[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Sparkles 
                  className="absolute z-10" 
                  style={{ 
                    top: '10px', 
                    left: '10px', 
                    width: '20px', 
                    height: '20px',
                    color: 'hsl(var(--gold))' 
                  }} 
                />
                <Sparkles 
                  className="absolute z-10" 
                  style={{ 
                    top: '10px', 
                    right: '10px', 
                    width: '20px', 
                    height: '20px',
                    color: 'hsl(var(--gold))' 
                  }} 
                />
                <Sparkles 
                  className="absolute z-10" 
                  style={{ 
                    bottom: '10px', 
                    left: '10px', 
                    width: '20px', 
                    height: '20px',
                    color: 'hsl(var(--gold))' 
                  }} 
                />
                <Sparkles 
                  className="absolute z-10" 
                  style={{ 
                    bottom: '10px', 
                    right: '10px', 
                    width: '20px', 
                    height: '20px',
                    color: 'hsl(var(--gold))' 
                  }} 
                />
                
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <p 
                    className="font-body text-meta"
                    style={{ color: '#7a7368' }}
                  >
                    {post.date}
                  </p>
                </div>

                <h3
                  style={{
                    fontFamily: "'Beatrix Antiqua', 'Playfair Display', 'Times New Roman', serif",
                    fontWeight: 300,
                    fontSize: 'clamp(24px, 2vw, 30px)',
                    lineHeight: 1.25,
                    color: '#2a2721'
                  }}
                >
                  {post.title}
                </h3>

                <p 
                  className="font-body"
                  style={{
                    fontSize: 'clamp(16px, 1.1vw, 17px)',
                    lineHeight: 1.75,
                    color: '#4a453c'
                  }}
                >
                  {post.excerpt}
                </p>

                <a 
                  href="#" 
                  className="inline-block font-body transition-all"
                  style={{
                    fontSize: 'clamp(14px, 1vw, 15px)',
                    fontWeight: 500,
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                    color: '#2a2721'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecorationThickness = '2px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecorationThickness = '1px';
                  }}
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
