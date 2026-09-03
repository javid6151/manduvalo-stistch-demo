import React from 'react';
import Hero from '../components/Hero';
import ScrollWipeReveal from '../components/ScrollWipeReveal';
import BrandIntro from '../components/BrandIntro';
import CollectionsGrid from '../components/CollectionsGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import CraftsmanshipStory from '../components/CraftsmanshipStory';
import WhyManduva from '../components/WhyManduva';
import AntiqueVintageHero from '../components/AntiqueVintageHero';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewsSection';
import LocationSection from '../components/LocationSection';
import EnquirySection from '../components/EnquirySection';

export default function HomePage({
  categories,
  products,
  storeConfig,
  onSelectCategory,
  onSelectProduct,
  onOpenEnquiryWithPiece,
  setCurrentRoute,
  onOpenEnquiry
}) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. Cinematic Portal Hero */}
      <Hero
        onExploreClick={() => scrollToSection('collections-section')}
        onVisitClick={() => scrollToSection('location-section')}
        onOpenReviews={() => scrollToSection('reviews-section')}
      />

      {/* 2. Architectural 320svh Wipe Reveal Stage */}
      <ScrollWipeReveal />

      {/* 3. Brand Architecture & Philosophy */}
      <BrandIntro onNavigateAbout={() => setCurrentRoute('about')} />

      {/* 3. Collections Asymmetric Grid */}
      <CollectionsGrid
        categories={categories}
        onSelectCategory={onSelectCategory}
      />

      {/* 4. Featured Furniture Catalog */}
      <FeaturedProducts
        products={products}
        onSelectProduct={onSelectProduct}
        onOpenEnquiryWithPiece={onOpenEnquiryWithPiece}
        onViewAllClick={() => setCurrentRoute('furniture')}
      />

      {/* 5. Craftsmanship & Generational Joinery */}
      <CraftsmanshipStory onContactClick={() => scrollToSection('enquiry-section')} />

      {/* 6. Why Manduva Logillu 5 Pillars */}
      <WhyManduva />

      {/* 7. Antique / Vintage Dramatic Feature */}
      <AntiqueVintageHero onExploreVintage={() => onSelectCategory('vintage-furniture')} />

      {/* 8. Magazine Gallery with Lightbox */}
      <GallerySection />

      {/* 9. Verified Customer Reviews & Google Credibility */}
      <ReviewsSection />

      {/* 10. Hyderabad Store & Location */}
      <LocationSection storeConfig={storeConfig} />

      {/* 11. Bespoke Enquiry & Consultation Form */}
      <EnquirySection storeConfig={storeConfig} />
    </div>
  );
}
