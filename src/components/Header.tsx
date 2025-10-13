import { useState, useEffect } from 'react';
import { Building2, ShoppingCart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Left Section */}
        <nav className="hidden lg:flex items-center gap-8">
          <button className="flex items-center gap-1 text-gold hover:text-primary-foreground transition-colors">
            Demos <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1 text-gold hover:text-primary-foreground transition-colors">
            About Us <ChevronDown className="h-4 w-4" />
          </button>
          <a href="#events" className="text-gold hover:text-primary-foreground transition-colors">
            Events
          </a>
        </nav>

        {/* Center - Logo */}
        <a href="/" className="flex items-center gap-2 text-primary-foreground">
          <Building2 className="h-8 w-8 text-gold" />
          <span className="text-2xl font-display font-light tracking-wider">HISTORY</span>
        </a>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <a href="#contact" className="hidden lg:block text-gold hover:text-primary-foreground transition-colors">
            Contact Us
          </a>
          <button className="flex items-center gap-1 text-gold hover:text-primary-foreground transition-colors">
            All Pages <ChevronDown className="h-4 w-4" />
          </button>
          <button className="relative w-10 h-10 rounded-full border-2 border-gold hover:bg-gold transition-colors group">
            <ShoppingCart className="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold group-hover:text-primary" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-primary text-xs flex items-center justify-center font-semibold">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
