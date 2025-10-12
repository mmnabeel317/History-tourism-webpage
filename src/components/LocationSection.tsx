import ScrollSection from './ScrollSection';
import { MapPin } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-20 md:py-32 px-8 bg-primary text-primary-foreground">
      <div className="max-w-[1440px] mx-auto space-y-24">
        {/* Location & Directions */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <ScrollSection animation="slide-left">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-8 w-8 text-gold" />
                <h2 className="font-display text-3xl md:text-4xl font-light">
                  LOCATION & DIRECTIONS
                </h2>
              </div>
            </ScrollSection>

            <ScrollSection animation="slide-left" delay={200}>
              <p className="text-primary-foreground/80 leading-relaxed text-lg font-body">
                Through eco-conscious practices and a focus on preserving biodiversity, we invite you to be a part of our conservation mission
              </p>
            </ScrollSection>
          </div>

          <ScrollSection animation="slide-right" delay={400}>
            <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.192401284355!2d10.747796!3d47.557574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479cf5d231e9d3eb%3A0xabfa4e1ff9d34c24!2sNeuschwanstein%20Castle!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </ScrollSection>
        </div>

        {/* Accessibility */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <ScrollSection animation="slide-left">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-8 w-8 text-gold" />
                <h2 className="font-display text-3xl md:text-4xl font-light">
                  ACCESSIBILITY & FACILITIES
                </h2>
              </div>
            </ScrollSection>

            <ScrollSection animation="slide-left" delay={200}>
              <p className="text-primary-foreground/80 leading-relaxed text-lg font-body">
                Through eco-conscious practices and a focus on preserving biodiversity, we invite you to be a part of our conservation mission
              </p>
            </ScrollSection>
          </div>

          <ScrollSection animation="slide-right" delay={400}>
            <div className="space-y-4 text-primary-foreground/80 font-body">
              <p className="leading-relaxed">
                • Wheelchair accessible routes throughout main areas
              </p>
              <p className="leading-relaxed">
                • Accessible restrooms available
              </p>
              <p className="leading-relaxed">
                • Guided tours with audio assistance
              </p>
              <p className="leading-relaxed">
                • Gift shop and café on premises
              </p>
            </div>
          </ScrollSection>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
