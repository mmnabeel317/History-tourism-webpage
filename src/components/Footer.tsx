import { Building2, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Section: Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-0">
          {/* Left - HISTORY on Yellow */}
          <div className="bg-[#f0e7af] py-16 px-8 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8" style={{ color: '#2a2721' }} />
              <span className="text-2xl font-display font-light tracking-wider" style={{ color: '#2a2721' }}>
                HISTORY
              </span>
            </div>
          </div>

          {/* Center - Tagline on White */}
          <div className="bg-white py-16 px-8 flex items-center justify-center">
            <p className="text-center leading-relaxed font-body max-w-md" style={{ color: '#3b372f' }}>
              Whether you're drawn by history, mystery, or breathtaking views, we welcome you to step back in time.
            </p>
          </div>

          {/* Right - Navigation Links on Yellow */}
          <div className="bg-[#f0e7af] py-16 px-8 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              <a href="#" className="hover:text-gold transition-colors font-body" style={{ color: '#3b372f' }}>
                Home 1
              </a>
              <a href="#" className="hover:text-gold transition-colors font-body" style={{ color: '#3b372f' }}>
                About us
              </a>
              <a href="#" className="hover:text-gold transition-colors font-body" style={{ color: '#3b372f' }}>
                Home 2
              </a>
              <a href="#" className="hover:text-gold transition-colors font-body" style={{ color: '#3b372f' }}>
                Pricing
              </a>
              <a href="#" className="hover:text-gold transition-colors font-body" style={{ color: '#3b372f' }}>
                Home 3
              </a>
              <a href="#" className="hover:text-gold transition-colors font-body" style={{ color: '#3b372f' }}>
                Contact us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright on Dark */}
        <div className="bg-primary text-primary-foreground py-8 px-8">
          <p className="text-center text-primary-foreground/50 text-sm font-body">
            © {new Date().getFullYear()} History Castle Museum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
