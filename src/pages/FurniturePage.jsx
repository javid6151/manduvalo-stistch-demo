import React, { useState, useEffect } from 'react';
import { Search, Sparkles, Filter, X, Eye, MessageSquare, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export default function FurniturePage({
  products,
  categories,
  selectedCategorySlug,
  onSelectProduct,
  onOpenEnquiryWithPiece,
  onClearCategoryFilter
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(selectedCategorySlug || 'all');
  const [selectedRoom, setSelectedRoom] = useState('all');

  useEffect(() => {
    if (selectedCategorySlug) {
      setSelectedCategory(selectedCategorySlug);
    }
  }, [selectedCategorySlug]);

  const rooms = ['all', 'Living Room', 'Dining Room', 'Bedroom', 'Living / Courtyard', 'Entrance / Villa Projects'];

  // Filter logic
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.categorySlug === selectedCategory;
    const matchesRoom = selectedRoom === 'all' || product.room.toLowerCase().includes(selectedRoom.toLowerCase());
    const matchesSearch = !searchQuery.trim() || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.materials.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesRoom && matchesSearch;
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedRoom('all');
    if (onClearCategoryFilter) onClearCategoryFilter();
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-beige/60 text-dark-brown text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-deep-orange" />
          <span>FURNITURE CATALOGUE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-dark-brown leading-tight">
          Timeless Furniture Catalog
        </h1>
        <p className="text-muted-brown text-base sm:text-lg font-light leading-relaxed">
          Explore our complete archive of solid teakwood, antique, vintage, and handcrafted traditional creations.
        </p>
      </div>

      {/* Interactive Filter Control Panel */}
      <div className="p-6 rounded-3xl bg-white border border-warm-beige shadow-lux space-y-5">
        
        {/* Top search & status row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-deep-orange absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by furniture name, teakwood, antique, swing, sofa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-warm-ivory/50 border border-warm-beige text-xs sm:text-sm text-dark-brown focus:outline-none focus:border-dark-brown transition-colors"
            />
          </div>

          <div className="md:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-warm-ivory/50 border border-warm-beige text-xs sm:text-sm text-dark-brown focus:outline-none focus:border-dark-brown transition-colors"
            >
              <option value="all">All Categories ({categories.length})</option>
              {categories.map(cat => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3">
            <select
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-warm-ivory/50 border border-warm-beige text-xs sm:text-sm text-dark-brown focus:outline-none focus:border-dark-brown transition-colors"
            >
              <option value="all">All Placement Rooms</option>
              {rooms.filter(r => r !== 'all').map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Active filters pill display */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-warm-beige/60 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-brown font-medium">Showing {filteredProducts.length} pieces</span>
            {(selectedCategory !== 'all' || selectedRoom !== 'all' || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-warm-beige text-dark-brown font-semibold hover:bg-dark-brown hover:text-white transition-colors"
              >
                <X className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          <span className="text-muted-brown text-[11px] hidden sm:inline">
            Custom sizing & finishes available upon enquiry
          </span>
        </div>

      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-warm-beige shadow-lux space-y-4">
          <p className="font-serif text-2xl text-dark-brown">No furniture pieces matched your criteria</p>
          <p className="text-muted-brown text-sm max-w-md mx-auto font-light">
            We regularly source rare antiques and craft bespoke pieces on demand. Contact our Hyderabad specialists to discuss your custom project.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-6 py-2.5 rounded-full bg-dark-brown text-warm-ivory text-xs font-semibold"
          >
            Clear Filters & View All
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden border border-warm-beige shadow-lux hover:shadow-lux-hover transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div 
                onClick={() => onSelectProduct(product)}
                className="relative aspect-[4/3] bg-dark-brown overflow-hidden cursor-pointer img-zoom-container"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-4 left-4 flex flex-col gap-1">
                  <span className="px-3 py-1 rounded-full bg-dark-brown/90 text-warm-ivory text-[10px] uppercase font-bold tracking-wider">
                    {product.category}
                  </span>
                  {product.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-brand-peach text-dark-brown text-[9px] font-bold uppercase">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="absolute inset-0 bg-dark-brown/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="px-4 py-2 rounded-full bg-white text-dark-brown text-xs font-semibold shadow-lg flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-deep-orange" />
                    Quick View
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-muted-brown font-semibold block">
                    {product.room}
                  </span>
                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="font-serif text-xl text-dark-brown hover:text-deep-orange transition-colors cursor-pointer font-normal"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-charcoal-brown/80 line-clamp-2 font-light leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-warm-beige/70 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-brown">Price on request:</span>
                    <span className="font-serif text-base font-semibold text-dark-brown">{product.price}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="py-2.5 px-3 rounded-xl border border-warm-beige text-dark-brown text-xs font-semibold hover:bg-warm-beige/40 text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => {
                        openWhatsApp({
                          pieceName: product.name,
                          category: product.category,
                          intent: 'piece'
                        });
                      }}
                      className="py-2.5 px-3 rounded-xl bg-dark-brown text-warm-ivory text-xs font-semibold hover:bg-charcoal-brown flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-light-peach" />
                      Enquire
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
