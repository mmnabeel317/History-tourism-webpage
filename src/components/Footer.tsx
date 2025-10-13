import { Building2, MapPin, Facebook, Instagram } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSection1Visible(true);
        }
      });
    }, observerOptions);

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSection2Visible(true);
        }
      });
    }, observerOptions);

    if (section1Ref.current) observer1.observe(section1Ref.current);
    if (section2Ref.current) observer2.observe(section2Ref.current);

    return () => {
      if (section1Ref.current) observer1.unobserve(section1Ref.current);
      if (section2Ref.current) observer2.unobserve(section2Ref.current);
    };
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[#1a1a1a]">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Section: Three columns on black */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-0">
          {/* Left - HISTORY Logo */}
          <div className="py-16 px-8 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8" style={{ color: '#f0e7af' }} />
              <span className="text-2xl font-display font-light tracking-wider" style={{ color: '#f0e7af' }}>
                HISTORY
              </span>
            </div>
          </div>

          {/* Center - Tagline */}
          <div className="py-16 px-8 flex items-center justify-center">
            <p className="text-center leading-relaxed font-body max-w-md text-white">
              Whether you're drawn by history, mystery, or breathtaking views, we welcome you to step back in time.
            </p>
          </div>

          {/* Right - Navigation Links and Social Icons */}
          <div className="py-16 px-8 flex items-center justify-center">
            <div className="flex items-center gap-8">
              <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                <a href="#" className="hover:opacity-80 transition-colors font-body" style={{ color: '#f0e7af' }}>
                  Home 1
                </a>
                <a href="#" className="hover:opacity-80 transition-colors font-body" style={{ color: '#f0e7af' }}>
                  About us
                </a>
                <a href="#" className="hover:opacity-80 transition-colors font-body" style={{ color: '#f0e7af' }}>
                  Home 2
                </a>
                <a href="#" className="hover:opacity-80 transition-colors font-body" style={{ color: '#f0e7af' }}>
                  Pricing
                </a>
                <a href="#" className="hover:opacity-80 transition-colors font-body" style={{ color: '#f0e7af' }}>
                  Home 3
                </a>
                <a href="#" className="hover:opacity-80 transition-colors font-body" style={{ color: '#f0e7af' }}>
                  Contact us
                </a>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-[#f0e7af] flex items-center justify-center hover:bg-[#f0e7af]/10 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" style={{ color: '#f0e7af' }} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-[#f0e7af] flex items-center justify-center hover:bg-[#f0e7af]/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" style={{ color: '#f0e7af' }} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-[#f0e7af] flex items-center justify-center hover:bg-[#f0e7af]/10 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter className="h-5 w-5" style={{ color: '#f0e7af' }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-white/20" />

        {/* Location Section */}
        <div className="py-20 md:py-32 px-8">
          <div className="grid lg:grid-cols-[1fr,1fr] gap-12 items-start">
            {/* Left - Map */}
            <div
              ref={section1Ref}
              className={`transition-all duration-[2000ms] ease-out ${
                section1Visible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-[#f0e7af]/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.192401284355!2d10.747796!3d47.557574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479cf5d231e9d3eb%3A0xabfa4e1ff9d34c24!2sNeuschwanstein%20Castle!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Right - Text sections */}
            <div
              ref={section2Ref}
              className={`space-y-0 transition-all duration-[2000ms] ease-out ${
                section2Visible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
            >
              {/* Location & Directions */}
              <div className="space-y-6 pb-12">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-8 w-8" style={{ color: '#f0e7af' }} />
                  <h2 className="font-display text-3xl md:text-4xl font-light" style={{ color: '#f0e7af' }}>
                    LOCATION & DIRECTIONS
                  </h2>
                </div>

                <p className="text-white/80 leading-relaxed text-base font-body">
                  Through eco-conscious practices and a focus on preserving biodiversity, we invite you to be a part of our conservation mission
                </p>
              </div>

              {/* Divider Line */}
              <div className="border-t border-white/20 my-12" />

              {/* Accessibility & Facilities */}
              <div className="space-y-6 pt-12">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-8 w-8" style={{ color: '#f0e7af' }} />
                  <h2 className="font-display text-3xl md:text-4xl font-light" style={{ color: '#f0e7af' }}>
                    ACCESSIBILITY & FACILITIES
                  </h2>
                </div>

                <p className="text-white/80 leading-relaxed text-base font-body mb-4">
                  Through eco-conscious practices and a focus on preserving biodiversity, we invite you to be a part of our conservation mission
                </p>

                <div className="space-y-3 text-white/80 font-body text-base">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
