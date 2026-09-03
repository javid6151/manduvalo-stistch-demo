import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Tag } from 'lucide-react';

export default function QuickSearchModal({ isOpen, onClose, products, categories, onSelectProduct, onSelectCategory }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchingProducts = cleanQuery
    ? products.filter(p => 
        p.name.toLowerCase().includes(cleanQuery) ||
        p.category.toLowerCase().includes(cleanQuery) ||
        p.room.toLowerCase().includes(cleanQuery) ||
        p.materials.toLowerCase().includes(cleanQuery) ||
        p.tags.some(t => t.toLowerCase().includes(cleanQuery))
      )
    : products.slice(0, 4);

  const matchingCategories = cleanQuery
    ? categories.filter(c => c.name.toLowerCase().includes(cleanQuery) || c.description.toLowerCase().includes(cleanQuery))
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-dark-brown/70 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 pt-20 sm:pt-28">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-warm-beige overflow-hidden z-10 flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-warm-beige bg-warm-ivory/50">
          <Search className="w-5 h-5 text-deep-orange shrink-0 mr-3" />
          <input
            type="text"
            placeholder="Search antique furniture, teak jhula, dining, bedroom, pillars..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-dark-brown text-base sm:text-lg placeholder:text-muted-brown/60 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-muted-brown hover:text-dark-brown"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-3 p-1.5 rounded-full text-charcoal-brown hover:bg-warm-beige/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Categories matching if any */}
          {matchingCategories.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-muted-brown uppercase tracking-widest block">
                Collections
              </span>
              <div className="grid grid-cols-2 gap-2">
                {matchingCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onClose();
                      onSelectCategory(cat.slug);
                    }}
                    className="p-3 rounded-xl bg-warm-beige/30 hover:bg-warm-beige/60 text-left flex items-center justify-between transition-colors"
                  >
                    <span className="font-serif text-sm font-semibold text-dark-brown">{cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-deep-orange" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products List */}
          <div className="space-y-3">
            <span className="text-[11px] font-bold text-muted-brown uppercase tracking-widest block">
              {cleanQuery ? `Furniture Pieces (${matchingProducts.length})` : 'Popular Searches'}
            </span>

            {matchingProducts.length === 0 ? (
              <div className="text-center py-8 text-muted-brown text-sm">
                No exact match found for "{query}". You can enquire with us for bespoke requests.
              </div>
            ) : (
              <div className="space-y-2">
                {matchingProducts.map(product => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onClose();
                      onSelectProduct(product);
                    }}
                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-warm-ivory cursor-pointer border border-transparent hover:border-warm-beige transition-all group"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 border border-warm-beige"
                    />
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-deep-orange font-bold uppercase tracking-wider">
                          {product.category}
                        </span>
                        <span className="text-muted-brown text-[10px]">•</span>
                        <span className="text-muted-brown text-[10px]">{product.room}</span>
                      </div>
                      <h4 className="font-serif text-base font-semibold text-dark-brown group-hover:text-deep-orange truncate">
                        {product.name}
                      </h4>
                      <div className="text-xs text-muted-brown truncate">
                        {product.materials}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-brown group-hover:text-dark-brown group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
