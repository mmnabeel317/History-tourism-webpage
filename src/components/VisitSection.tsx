import ScrollSection from './ScrollSection';
import { Sparkles } from 'lucide-react';

const VisitSection = () => {
  return (
    <section className="py-20 md:py-32 px-8 bg-background-cream">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <ScrollSection animation="slide-left">
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight">
                PLAN YOUR VISIT
              </h2>
            </ScrollSection>

            <ScrollSection animation="slide-left" delay={200}>
              <p className="text-muted-foreground leading-relaxed text-lg font-body">
                Nestled in the heart of a forest, Fortress of Legends stands as a testament to centuries of history, legend, and architectural grandeur. Walk through its ancient halls, uncover its hidden passageways, and immerse yourself in the stories that have shaped this iconic landmark.
              </p>
            </ScrollSection>

            <ScrollSection animation="slide-left" delay={400}>
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 font-body">
                LEARN MORE
              </button>
            </ScrollSection>
          </div>

          <ScrollSection animation="slide-right" delay={200}>
            <div className="relative bg-primary text-primary-foreground p-12 rounded-lg">
              {/* Decorative sparkles */}
              <Sparkles className="absolute top-6 left-6 h-8 w-8 text-gold" />
              <Sparkles className="absolute top-6 right-6 h-8 w-8 text-gold" />
              <Sparkles className="absolute bottom-6 left-6 h-8 w-8 text-gold" />
              <Sparkles className="absolute bottom-6 right-6 h-8 w-8 text-gold" />

              <div className="text-center space-y-8">
                <p className="text-background-cream text-lg font-body">
                  Experience the magic of Fortress of Legends at your own pace
                </p>

                <div className="space-y-6">
                  <div>
                    <p className="text-gold-light text-sm mb-2 font-body">
                      Jan - Feb - Mar - Oct - Nov - Dec
                    </p>
                    <p className="text-5xl font-display font-light">
                      9:00 – 20:00
                    </p>
                  </div>

                  <div>
                    <p className="text-gold-light text-sm mb-2 font-body">
                      April - May - June - July - Aug - Sept
                    </p>
                    <p className="text-5xl font-display font-light">
                      8:00 – 22:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
