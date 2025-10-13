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
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_1fr] gap-12 mb-12 items-start">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-gold" />
              <span className="text-2xl font-display font-light tracking-wider">HISTORY</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed font-body max-w-xs">
              Whether you're drawn by history, mystery, or breathtaking views, we welcome you to step back in time.
            </p>
          </div>

          {/* Navigation Links - Column 1 */}
          <div>
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
            </ul>
          </div>

          {/* Navigation Links - Column 2 */}
          <div>
            <ul className="space-y-3">
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
          <div className="flex gap-4 justify-end">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-all"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-all"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-all"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
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
