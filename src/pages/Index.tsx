import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideoTextSection from '@/components/VideoTextSection';
import HistorySection from '@/components/HistorySection';
import GallerySection from '@/components/GallerySection';
import VisitSection from '@/components/VisitSection';
import PricingSection from '@/components/PricingSection';
import BlogSection from '@/components/BlogSection';
import TestimonialSection from '@/components/TestimonialSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <VideoTextSection />
        <HistorySection />
        <GallerySection />
        <VisitSection />
        <PricingSection />
        <BlogSection />
        <TestimonialSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
