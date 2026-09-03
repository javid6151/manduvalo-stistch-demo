import React, { useState } from 'react';
import { X, Save, RotateCcw, Plus, Trash2, Edit3, Sliders, CheckCircle, Upload } from 'lucide-react';
import { resetToDefaults } from '../utils/storage';

export default function AdminDrawer({ 
  isOpen, 
  onClose, 
  products, 
  setProducts, 
  storeConfig, 
  setStoreConfig 
}) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('products');
  const [editingProduct, setEditingProduct] = useState(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Form for new/editing product
  const [productForm, setProductForm] = useState({
    name: '',
    category: 'Antique Furniture',
    categorySlug: 'antique-furniture',
    room: 'Living Room',
    shortDescription: '',
    description: '',
    price: 'Enquire for Price',
    materials: 'Solid Teakwood',
    dimensions: 'Details available on enquiry',
    availability: 'In Showroom Display',
    featured: true,
    image: '/images/manduva-hero.jpg'
  });

  // Form for store config
  const [configForm, setConfigForm] = useState({ ...storeConfig });

  const handleEditProductClick = (prod) => {
    setEditingProduct(prod);
    setProductForm({
      ...prod,
      image: prod.images[0] || '/images/manduva-hero.jpg'
    });
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!productForm.name) return;

    if (editingProduct) {
      // Update existing
      const updated = products.map(p => 
        p.id === editingProduct.id 
          ? { 
              ...p, 
              ...productForm, 
              images: [productForm.image, ...(p.images.slice(1))] 
            } 
          : p
      );
      setProducts(updated);
      setEditingProduct(null);
    } else {
      // Add new
      const newProd = {
        id: `prod-${Date.now()}`,
        slug: productForm.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        ...productForm,
        images: [productForm.image],
        tags: [productForm.category, 'Handcrafted']
      };
      setProducts([newProd, ...products]);
    }

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this furniture piece?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleSaveConfig = (e) => {
    e.preventDefault();
    setStoreConfig(configForm);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-dark-brown/75 backdrop-blur-sm flex justify-end">
      {/* Overlay click */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col justify-between z-10 overflow-y-auto">
        
        <div>
          {/* Header */}
          <div className="p-6 border-b border-warm-beige bg-warm-ivory flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-dark-brown text-light-peach">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-dark-brown">Showroom CMS & Catalog Admin</h3>
                <span className="text-xs text-muted-brown">Live updates instantly reflect on the website</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-warm-beige text-dark-brown"
              aria-label="Close admin"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Switcher */}
          <div className="flex border-b border-warm-beige bg-soft-cream px-6">
            <button
              onClick={() => setActiveTab('products')}
              className={`py-3 px-4 font-serif text-sm font-semibold border-b-2 transition-all ${
                activeTab === 'products'
                  ? 'border-deep-orange text-deep-orange'
                  : 'border-transparent text-muted-brown hover:text-dark-brown'
              }`}
            >
              Furniture Catalog ({products.length})
            </button>
            <button
              onClick={() => setActiveTab('store')}
              className={`py-3 px-4 font-serif text-sm font-semibold border-b-2 transition-all ${
                activeTab === 'store'
                  ? 'border-deep-orange text-deep-orange'
                  : 'border-transparent text-muted-brown hover:text-dark-brown'
              }`}
            >
              Store Info & WhatsApp
            </button>
          </div>

          {/* Feedback banner */}
          {savedSuccess && (
            <div className="m-6 p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Changes saved successfully to browser storage!</span>
            </div>
          )}

          {/* Content Area */}
          <div className="p-6 space-y-6">
            
            {activeTab === 'products' && (
              <div className="space-y-6">
                
                {/* Form to Add / Edit */}
                <form onSubmit={handleSaveProduct} className="p-5 rounded-2xl bg-warm-ivory border border-warm-beige space-y-4">
                  <h4 className="font-serif text-base font-bold text-dark-brown flex items-center justify-between">
                    <span>{editingProduct ? 'Edit Furniture Piece' : 'Add New Furniture Item'}</span>
                    {editingProduct && (
                      <button
                        type="button"
                        onClick={() => setEditingProduct(null)}
                        className="text-xs text-muted-brown underline"
                      >
                        Cancel Edit
                      </button>
                    )}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-dark-brown uppercase mb-1">Piece Name</label>
                      <input
                        type="text"
                        value={productForm.name}
                        onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                        placeholder="e.g. Royal Chettinad Diwan"
                        className="w-full px-3 py-2 rounded-lg border border-warm-beige text-xs text-dark-brown"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-dark-brown uppercase mb-1">Category</label>
                      <input
                        type="text"
                        value={productForm.category}
                        onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-warm-beige text-xs text-dark-brown"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-dark-brown uppercase mb-1">Price Text</label>
                      <input
                        type="text"
                        value={productForm.price}
                        onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-warm-beige text-xs text-dark-brown"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-dark-brown uppercase mb-1">Room / Placement</label>
                      <input
                        type="text"
                        value={productForm.room}
                        onChange={(e) => setProductForm({ ...productForm, room: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-warm-beige text-xs text-dark-brown"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-dark-brown uppercase mb-1">Materials</label>
                    <input
                      type="text"
                      value={productForm.materials}
                      onChange={(e) => setProductForm({ ...productForm, materials: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-warm-beige text-xs text-dark-brown"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-dark-brown uppercase mb-1">Short Description</label>
                    <textarea
                      rows={2}
                      value={productForm.shortDescription}
                      onChange={(e) => setProductForm({ ...productForm, shortDescription: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-warm-beige text-xs text-dark-brown resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 text-xs font-semibold text-dark-brown cursor-pointer">
                      <input
                        type="checkbox"
                        checked={productForm.featured}
                        onChange={(e) => setProductForm({ ...productForm, featured: e.target.checked })}
                        className="rounded text-deep-orange"
                      />
                      <span>Feature in Showcase</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-dark-brown text-warm-ivory text-xs font-semibold hover:bg-charcoal-brown flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4 text-light-peach" />
                    <span>{editingProduct ? 'Update Piece' : 'Add Piece to Catalog'}</span>
                  </button>
                </form>

                {/* Existing Products List */}
                <div className="space-y-3">
                  <span className="text-xs font-bold text-muted-brown uppercase tracking-wider block">
                    Catalog Items ({products.length})
                  </span>
                  {products.map(prod => (
                    <div key={prod.id} className="p-3 rounded-xl border border-warm-beige flex items-center justify-between gap-3 bg-white hover:bg-soft-cream/40">
                      <img src={prod.images[0]} alt={prod.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="flex-grow min-w-0">
                        <h5 className="font-serif text-sm font-semibold text-dark-brown truncate">{prod.name}</h5>
                        <div className="text-[11px] text-muted-brown">{prod.category} • {prod.price}</div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => handleEditProductClick(prod)}
                          className="p-1.5 rounded-lg text-charcoal-brown hover:bg-warm-beige"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(prod.id)}
                          className="p-1.5 rounded-lg text-red-600 hover:bg-red-50"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {activeTab === 'store' && (
              <form onSubmit={handleSaveConfig} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-dark-brown uppercase mb-1">Brand Name</label>
                  <input
                    type="text"
                    value={configForm.brandName}
                    onChange={(e) => setConfigForm({ ...configForm, brandName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-warm-beige text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-dark-brown uppercase mb-1">WhatsApp Number (Digits with country code)</label>
                  <input
                    type="text"
                    value={configForm.whatsappNumber}
                    onChange={(e) => setConfigForm({ ...configForm, whatsappNumber: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-warm-beige text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-dark-brown uppercase mb-1">Showroom Phone Display</label>
                  <input
                    type="text"
                    value={configForm.displayPhone}
                    onChange={(e) => setConfigForm({ ...configForm, displayPhone: e.target.value, phoneNumber: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-warm-beige text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-dark-brown uppercase mb-1">Full Store Address</label>
                  <textarea
                    rows={2}
                    value={configForm.fullAddress}
                    onChange={(e) => setConfigForm({ ...configForm, fullAddress: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-warm-beige text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-dark-brown text-warm-ivory text-xs font-semibold hover:bg-charcoal-brown flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4 text-light-peach" />
                  <span>Save Store Configuration</span>
                </button>
              </form>
            )}

          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-warm-beige bg-warm-ivory flex items-center justify-between">
          <button
            onClick={resetToDefaults}
            className="text-xs text-red-600 hover:underline flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Original Store Defaults</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-warm-beige text-dark-brown text-xs font-semibold"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
