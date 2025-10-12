import ScrollSection from './ScrollSection';
import { Sparkles } from 'lucide-react';
import castleAerial from '@/assets/castle-aerial.jpg';
import neuschwanstein from '@/assets/neuschwanstein.jpg';
import crown from '@/assets/crown.jpg';
import pathway from '@/assets/castle-pathway.jpg';

const galleryImages = [
  { src: castleAerial, title: 'The Grand Approach', span: 'col-span-1' },
  { src: neuschwanstein, title: 'Fortress Majesty', span: 'col-span-2' },
  { src: crown, title: 'Royal Heritage', span: 'col-span-1' },
  { src: pathway, title: 'Hidden Passages', span: 'col-span-1' },
];

const GallerySection = () => {
  return (
    <section className="py-20 md:py-32 px-8 bg-secondary">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16 space-y-6">
          <ScrollSection animation="slide-up">
            <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight">
              YOUR JOURNEY THROUGH TIME BEGINS HERE
            </h2>
          </ScrollSection>
          
          <ScrollSection animation="slide-up" delay={200}>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-body">
              Discover how knights, nobles, and servants lived within the castle's towering walls during its golden age. We welcome you to step back in time.
            </p>
          </ScrollSection>

          <ScrollSection animation="slide-up" delay={400}>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 font-body mt-4">
              OUR EVENTS
            </button>
          </ScrollSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <ScrollSection 
              key={index}
              animation="slide-up"
              delay={index * 150}
              className={`relative group ${image.span}`}
            >
              <div className="relative overflow-hidden rounded-lg border-[14px] border-background-cream shadow-xl">
                {/* Sparkle decorations */}
                <Sparkles className="absolute top-4 left-4 h-8 w-8 text-gold z-10" />
                <Sparkles className="absolute top-4 right-4 h-8 w-8 text-gold z-10" />
                <Sparkles className="absolute bottom-4 left-4 h-8 w-8 text-gold z-10" />
                <Sparkles className="absolute bottom-4 right-4 h-8 w-8 text-gold z-10" />
                
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-2xl text-primary-foreground">
                    {image.title}
                  </h3>
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
