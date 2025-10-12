import { Building2, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-8 relative overflow-hidden">
      {/* Decorative sparkle pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0 L32 28 L60 30 L32 32 L30 60 L28 32 L0 30 L28 28 Z\' fill=\'%23C5B896\'/%3E%3C/svg%3E")',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-gold" />
              <span className="text-2xl font-display font-light tracking-wider">HISTORY</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed font-body">
              Whether you're drawn by history, mystery, or breathtaking views, we welcome you to step back in time.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-display text-xl mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors font-body">
                  Home 1
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors font-body">
                  Home 2
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors font-body">
                  Home 3
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors font-body">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors font-body">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors font-body">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-display text-xl mb-6 text-gold">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/50 text-sm font-body">
            © {new Date().getFullYear()} History Castle Museum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
