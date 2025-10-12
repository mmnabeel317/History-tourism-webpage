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
        <div className="flex items-center gap-12">
          <a href="/" className="flex items-center gap-2 text-primary-foreground">
            <Building2 className="h-8 w-8 text-gold" />
            <span className="text-2xl font-display font-light tracking-wider">HISTORY</span>
          </a>
          
          <nav className="hidden lg:flex items-center gap-8">
            <button className="flex items-center gap-1 text-primary-foreground hover:text-gold transition-colors">
              Demos <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-1 text-primary-foreground hover:text-gold transition-colors">
              About Us <ChevronDown className="h-4 w-4" />
            </button>
            <a href="#events" className="text-primary-foreground hover:text-gold transition-colors">
              Events
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <a href="#contact" className="hidden lg:block text-primary-foreground hover:text-gold transition-colors">
            Contact Us
          </a>
          <button className="flex items-center gap-1 text-primary-foreground hover:text-gold transition-colors">
            All Pages <ChevronDown className="h-4 w-4" />
          </button>
          <Button variant="ghost" size="icon" className="relative text-primary-foreground hover:text-gold">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-primary text-xs flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
