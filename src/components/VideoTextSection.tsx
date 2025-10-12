import ScrollSection from './ScrollSection';
import castleAerial from '@/assets/castle-aerial.jpg';

const VideoTextSection = () => {
  return (
    <section className="py-20 md:py-32 px-8 bg-background-cream">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <ScrollSection animation="slide-left">
              <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight">
                UNCOVER HIDDEN PASSAGEWAYS, IMMERSE YOURSELF IN THE STORIES.
              </h2>
            </ScrollSection>
            
            <ScrollSection animation="slide-left" delay={300}>
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 font-body">
                ABOUT US
              </button>
            </ScrollSection>

            <ScrollSection animation="slide-left" delay={500}>
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-light text-foreground">
                  EVENTS & EXPERIENCES
                </h3>
                <p className="text-muted-foreground leading-relaxed font-body">
                  Whether you're drawn by history, mystery, or breathtaking views, we welcome you to step back in time.
                </p>
              </div>
            </ScrollSection>
          </div>

          <ScrollSection animation="slide-right" className="relative">
            <div className="relative rounded-lg overflow-hidden border-8 border-gold/20 shadow-2xl">
              <img 
                src={castleAerial}
                alt="Aerial view of castle grounds"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </ScrollSection>
        </div>
      </div>
    </section>
  );
};

export default VideoTextSection;
