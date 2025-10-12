import ScrollSection from './ScrollSection';
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
  return (
    <section className="py-20 md:py-32 px-8 bg-secondary">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16 space-y-6">
          <ScrollSection animation="slide-up">
            <h2 className="font-display text-4xl md:text-6xl font-light text-foreground leading-tight">
              DISCOVER THE STORIES ETCHED IN STONE
            </h2>
          </ScrollSection>

          <ScrollSection animation="slide-up" delay={200}>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-body">
              From immersive night tours to seasonal festivals, We offer unforgettable events throughout the year. Step into history and explore the castle like never before.
            </p>
          </ScrollSection>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollSection 
              key={index}
              animation="slide-up"
              delay={index * 200}
            >
              <article className="bg-card rounded-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 group">
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

                <div className="p-8 space-y-4">
                  <p className="text-sm text-muted-foreground font-body">
                    {post.date}
                  </p>

                  <h3 className="font-display text-2xl font-medium text-foreground leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed font-body">
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
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
