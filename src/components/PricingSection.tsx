import { useState } from 'react';
import ScrollSection from './ScrollSection';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('ticket');

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
    <section className="py-20 md:py-32 px-8 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12 space-y-8">
          <ScrollSection animation="slide-up">
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight mb-4">
              TICKET PRICES & ADMISSIONS
            </h2>
          </ScrollSection>

          <ScrollSection animation="slide-up" delay={200}>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-body mb-8">
              From immersive night tours to seasonal festivals, We offer unforgettable events throughout the year. Step into history and discover something extraordinary. Book a private tour & explore the castle like never before.
            </p>
          </ScrollSection>

          <ScrollSection animation="slide-up" delay={400}>
            <div className="inline-flex rounded-full bg-secondary p-1">
              <button
                onClick={() => setActiveTab('ticket')}
                className={`px-8 py-3 rounded-full transition-all font-body ${
                  activeTab === 'ticket'
                    ? 'bg-gold text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Ticket
              </button>
              <button
                onClick={() => setActiveTab('membership')}
                className={`px-8 py-3 rounded-full transition-all font-body ${
                  activeTab === 'membership'
                    ? 'bg-gold text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Membership
              </button>
            </div>
          </ScrollSection>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {pricingCards.map((card, index) => (
            <ScrollSection 
              key={index}
              animation="slide-up"
              delay={300 + index * 200}
            >
              <div className="bg-card border border-border rounded-lg p-8 text-center space-y-6 hover:shadow-xl transition-all hover:-translate-y-2 h-full flex flex-col">
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

                <p className="text-muted-foreground font-body flex-grow">
                  {card.description}
                </p>

                <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 font-body">
                  EXPLORE MORE
                </button>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
