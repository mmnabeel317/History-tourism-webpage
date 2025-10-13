import { useState, useEffect, useRef } from 'react';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('ticket');
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

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

    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => setCardsVisible(true), 300);
        }
      });
    }, observerOptions);

    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (cardsRef.current) cardsObserver.observe(cardsRef.current);

    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
      if (cardsRef.current) cardsObserver.unobserve(cardsRef.current);
    };
  }, []);

  const pricingCards = [
    {
      title: 'ADULTS',
      price: '$9',
      period: '/DAY',
      description: 'We accept cash, credit/debit cards, and online payments.'
    },
    {
      title: 'SENIORS (65+)',
      price: '$59',
      period: '/DAY',
      description: 'We accept cash, credit/debit cards, and online payments.'
    },
    {
      title: 'STUDENTS',
      price: '$19',
      period: '/DAY',
      description: 'We accept cash, credit/debit cards, and online payments.'
    }
  ];

  return (
    <section className="relative py-20 md:py-32 px-8 bg-background overflow-hidden">
      {/* Decorative Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-gold/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            ✦
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 space-y-8 transition-all duration-[2000ms] ease-out ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight">
              TICKET PRICES & ADMISSIONS
            </h2>

            <p className="text-muted-foreground text-base font-body leading-relaxed">
              From immersive night tours to seasonal festivals, We offer unforgettable events throughout the year. Step into history and discover something extraordinary. Book a private tour & explore the castle like never before.
            </p>
          </div>

          <div className="inline-flex rounded-full bg-secondary p-1">
            <button
              onClick={() => setActiveTab('ticket')}
              className={`px-8 py-3 rounded-full transition-all font-body font-medium ${
                activeTab === 'ticket'
                  ? 'bg-gold text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Ticket
            </button>
            <button
              onClick={() => setActiveTab('membership')}
              className={`px-8 py-3 rounded-full transition-all font-body font-medium ${
                activeTab === 'membership'
                  ? 'bg-gold text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Membership
            </button>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {pricingCards.map((card, index) => (
            <div
              key={index}
              className={`bg-background border border-border p-8 text-center space-y-6 hover:shadow-xl transition-all hover:-translate-y-2 h-full flex flex-col duration-[2000ms] ${
                cardsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="font-display text-2xl font-light text-foreground">
                {card.title}
              </h3>
              
              <div>
                <span className="text-5xl font-display font-light text-foreground">
                  {card.price}
                </span>
                <span className="text-muted-foreground font-body">
                  {card.period}
                </span>
              </div>

              <p className="text-muted-foreground font-body text-base flex-grow">
                {card.description}
              </p>

              <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 font-body font-medium">
                EXPLORE MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
