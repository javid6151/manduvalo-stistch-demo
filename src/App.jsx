import React, { useState, useEffect } from 'react';
import AuraBackground from './components/AuraBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import QuickSearchModal from './components/QuickSearchModal';
import ProductDetailModal from './components/ProductDetailModal';
import AdminDrawer from './components/AdminDrawer';

// Pages
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import FurniturePage from './pages/FurniturePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

// Data & Utilities
import { getStoredProducts, saveProducts, getStoredCategories, saveCategories, getStoredConfig, saveConfig } from './utils/storage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [products, setProductsState] = useState(getStoredProducts);
  const [categories, setCategoriesState] = useState(getStoredCategories);
  const [storeConfig, setStoreConfigState] = useState(getStoredConfig);

  const [selectedCategorySlug, setSelectedCategorySlug] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [enquiryPieceName, setEnquiryPieceName] = useState('');
  
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [adminDrawerOpen, setAdminDrawerOpen] = useState(false);

  // Sync state changes to storage
  const setProducts = (newProducts) => {
    setProductsState(newProducts);
    saveProducts(newProducts);
  };

  const setCategories = (newCats) => {
    setCategoriesState(newCats);
    saveCategories(newCats);
  };

  const setStoreConfig = (newCfg) => {
    setStoreConfigState(newCfg);
    saveConfig(newCfg);
  };

  const handleSelectCategory = (slug) => {
    setSelectedCategorySlug(slug);
    setCurrentRoute('furniture');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleOpenEnquiryWithPiece = (pieceName) => {
    setEnquiryPieceName(pieceName);
    const enquiryEl = document.getElementById('enquiry-section');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentRoute('contact');
      setTimeout(() => {
        const el = document.getElementById('enquiry-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleOpenGeneralEnquiry = () => {
    const enquiryEl = document.getElementById('enquiry-section');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentRoute('contact');
      setTimeout(() => {
        const el = document.getElementById('enquiry-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <AuraBackground>
      {/* Editorial Navigation */}
      <Navbar
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
        storeConfig={storeConfig}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenAdmin={() => setAdminDrawerOpen(true)}
        onOpenEnquiry={handleOpenGeneralEnquiry}
      />

      {/* Main Page Routing */}
      <main className="flex-grow">
        {currentRoute === 'home' && (
          <HomePage
            categories={categories}
            products={products}
            storeConfig={storeConfig}
            onSelectCategory={handleSelectCategory}
            onSelectProduct={handleSelectProduct}
            onOpenEnquiryWithPiece={handleOpenEnquiryWithPiece}
            setCurrentRoute={setCurrentRoute}
            onOpenEnquiry={handleOpenGeneralEnquiry}
          />
        )}

        {currentRoute === 'collections' && (
          <CollectionsPage
            categories={categories}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {currentRoute === 'furniture' && (
          <FurniturePage
            products={products}
            categories={categories}
            selectedCategorySlug={selectedCategorySlug}
            onSelectProduct={handleSelectProduct}
            onOpenEnquiryWithPiece={handleOpenEnquiryWithPiece}
            onClearCategoryFilter={() => setSelectedCategorySlug('all')}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onExploreFurniture={() => {
              setCurrentRoute('furniture');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onContactClick={() => {
              setCurrentRoute('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentRoute === 'gallery' && (
          <GalleryPage />
        )}

        {currentRoute === 'reviews' && (
          <ReviewsPage />
        )}

        {currentRoute === 'contact' && (
          <ContactPage storeConfig={storeConfig} />
        )}
      </main>

      {/* Floating WhatsApp Quick Contact Button */}
      <WhatsAppButton />

      {/* Quick Search Modal */}
      <QuickSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        products={products}
        categories={categories}
        onSelectProduct={handleSelectProduct}
        onSelectCategory={handleSelectCategory}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenEnquiryWithPiece={handleOpenEnquiryWithPiece}
        onSelectRelatedProduct={handleSelectProduct}
        allProducts={products}
      />

      {/* Admin Catalog & CMS Management Drawer */}
      <AdminDrawer
        isOpen={adminDrawerOpen}
        onClose={() => setAdminDrawerOpen(false)}
        products={products}
        setProducts={setProducts}
        storeConfig={storeConfig}
        setStoreConfig={setStoreConfig}
      />

      {/* Dark Luxury Footer */}
      <Footer
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
        storeConfig={storeConfig}
        onOpenAdmin={() => setAdminDrawerOpen(true)}
      />
    </AuraBackground>
  );
}
