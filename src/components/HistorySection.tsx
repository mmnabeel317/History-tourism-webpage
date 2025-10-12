import ScrollSection from './ScrollSection';
import castlePainting from '@/assets/castle-painting.jpg';

const HistorySection = () => {
  return (
    <section className="py-20 md:py-32 px-8 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollSection animation="slide-left">
            <div className="relative">
              <div className="border-[12px] border-background-cream rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={castlePainting}
                  alt="Historical castle painting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </ScrollSection>

          <div className="space-y-12">
            <ScrollSection animation="slide-right">
              <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight">
                CENTURIES OF LEGEND & POWER
              </h2>
            </ScrollSection>

            <ScrollSection animation="slide-right" delay={200}>
              <p className="text-muted-foreground leading-relaxed text-lg font-body">
                Perched high atop the misty cliffs of Raven's Hollow, Blackthorn Castle has stood as a guardian of the land for over 800 years. Built in 1247, this medieval stronghold has witnessed centuries of royal feuds, legendary battles, and whispered secrets that still linger within its stone walls.
              </p>
            </ScrollSection>

            <ScrollSection animation="slide-right" delay={400}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-medium text-foreground mb-3">
                    1247 – THE CASTLE IS BORN
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    Construction of Blackthorn Castle begins under the command of Lord Edric Blackthorn, establishing a stronghold that will shape the region's history for centuries.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-medium text-foreground mb-3">
                    1892 – THE GRAND RESTORATION
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    After decades of abandonment, Blackthorn Castle is restored, reviving its former grandeur and opening its gates to the world once again.
                  </p>
                </div>
              </div>
            </ScrollSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
