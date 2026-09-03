export const categories = [
  {
    id: "antique-furniture",
    name: "Antique Furniture",
    slug: "antique-furniture",
    tagline: "Timeless relics of royal Indian heritage",
    description: "Centuries-old aesthetic carved in dense, aged timber with authentic patina and historic motifs.",
    image: "/images/manduva-antique-1.jpg",
    featured: true,
    count: 14
  },
  {
    id: "vintage-furniture",
    name: "Vintage Furniture",
    slug: "vintage-furniture",
    tagline: "Mid-century and colonial character",
    description: "Classic colonial silhouettes and mid-century teak heirlooms restored with meticulous care.",
    image: "/images/manduva-vintage-carved.jpg",
    featured: true,
    count: 18
  },
  {
    id: "traditional-furniture",
    name: "Traditional Furniture",
    slug: "traditional-furniture",
    tagline: "Rooted in Manduva courtyard traditions",
    description: "Architectural wooden pillars, carved brass swing jhulas, and traditional daybeds honoring South Indian home lore.",
    image: "/images/manduva-courtyard-swing.jpg",
    featured: true,
    count: 22
  },
  {
    id: "wooden-furniture",
    name: "Wooden Furniture",
    slug: "wooden-furniture",
    tagline: "Solid aged teakwood & rosewood",
    description: "Heavy solid wood joinery crafted without compromise using durable natural oils and waxes.",
    image: "/images/manduva-hero.jpg",
    featured: true,
    count: 30
  },
  {
    id: "luxury-furniture",
    name: "Luxury Furniture",
    slug: "luxury-furniture",
    tagline: "Opulence meets understated warmth",
    description: "Bespoke statement pieces for grand villas, heritage estates, and luxury resort suites.",
    image: "/images/manduva-carved-sofa.jpg",
    featured: true,
    count: 16
  },
  {
    id: "living-room",
    name: "Living Room",
    slug: "living-room",
    tagline: "Conversational grandeur and comfort",
    description: "Carved wooden sofa sets, royal Diwans, brass-inlaid coffee tables, and regal armchairs.",
    image: "/images/manduva-carved-sofa.jpg",
    featured: false,
    count: 24
  },
  {
    id: "bedroom",
    name: "Bedroom",
    slug: "bedroom",
    tagline: "Sanctuary of restful elegance",
    description: "Grand four-poster canopy beds, solid teak wardrobes, bedside consoles, and dressing mirrors.",
    image: "/images/manduva-bedroom-luxury.jpg",
    featured: false,
    count: 12
  },
  {
    id: "dining",
    name: "Dining",
    slug: "dining",
    tagline: "Feasting tables carved for memorable gatherings",
    description: "Monolithic solid wood dining tables paired with cane-back and carved teak dining chairs.",
    image: "/images/manduva-dining-table.jpg",
    featured: false,
    count: 15
  },
  {
    id: "custom-furniture",
    name: "Custom Furniture",
    slug: "custom-furniture",
    tagline: "Bespoke commissions tailored to your blueprints",
    description: "Collaborate directly with our master artisans to sculpt unique furniture for your architectural vision.",
    image: "/images/manduva-craft-detail.jpg",
    featured: false,
    count: "Bespoke"
  }
];

export const furnitureProducts = [
  {
    id: "heritage-manduva-courtyard-swing",
    slug: "heritage-manduva-courtyard-swing",
    name: "Royal Manduva Teakwood Jhula Swing",
    category: "Traditional Furniture",
    categorySlug: "traditional-furniture",
    room: "Living / Courtyard",
    shortDescription: "Hand-carved solid teakwood swing suspended with pure cast brass chains and peacock motifs.",
    description: "Inspired by the central courtyards of ancestral Manduva Logillu homes, this majestic swing (Jhula) is handcrafted from seasoned teakwood. Featuring intricately hand-chiseled backrests, ornate arm supports, and heavy brass hanging chains with artisan peacock finials, it serves as an emotional centerpiece that commands attention.",
    price: "Enquire for Price",
    priceNote: "Custom sizing and brass finish options available",
    images: [
      "/images/manduva-courtyard-swing.jpg",
      "/images/manduva-hero.jpg",
      "/images/manduva-brass-accent.jpg",
      "/images/manduva-craft-detail.jpg"
    ],
    materials: "Solid Seasoned Teakwood, Pure Cast Brass Hardware, Natural Wax Polish",
    dimensions: "Details available on enquiry (Standard: 6.5ft W x 3ft D)",
    availability: "Available for Order / Custom Sizing",
    featured: true,
    badge: "Signature Piece",
    tags: ["Antique", "Traditional", "Teakwood", "Courtyard"]
  },
  {
    id: "carved-royal-sheesham-almirah",
    slug: "carved-royal-sheesham-almirah",
    name: "Ancestral Carved Teakwood Almirah Cabinet",
    category: "Antique Furniture",
    categorySlug: "antique-furniture",
    room: "Living / Bedroom",
    shortDescription: "Architectural tall wooden wardrobe cabinet with fluted columns and antique brass hardware.",
    description: "A monumental cabinet that captures the dignity of vintage Indian manor houses. Features hand-planed solid wood panels, brass latches, deep shelved compartments, and hand-carved cornices that preserve the natural wood grain and organic warmth.",
    price: "Enquire for Price",
    priceNote: "Restored antique original & custom recreations",
    images: [
      "/images/manduva-wooden-cabinet.jpg",
      "/images/manduva-antique-1.jpg",
      "/images/manduva-vintage-carved.jpg"
    ],
    materials: "Reclaimed Aged Teakwood & Solid Rosewood, Hand-forged Brass Fixtures",
    dimensions: "Details available on enquiry (Approx. 44in W x 22in D x 78in H)",
    availability: "In Showroom Display",
    featured: true,
    badge: "Heritage Collector",
    tags: ["Antique", "Vintage", "Storage", "Handcrafted"]
  },
  {
    id: "maharaja-carved-living-sofa",
    slug: "maharaja-carved-living-sofa",
    name: "Maharaja Ornate Carved Teak Sofa",
    category: "Luxury Furniture",
    categorySlug: "luxury-furniture",
    room: "Living Room",
    shortDescription: "Grand high-relief hand-carved sofa frame with ergonomic cushioning and regal presence.",
    description: "Designed for grand drawing rooms and luxury villas, this sofa showcases deep architectural carvings along the crown, armrests, and cabriole legs. Upholstered in premium textured linen-blend fabric that balances rich vintage timber with contemporary comfort.",
    price: "Enquire for Price",
    priceNote: "Available in 3-Seater, 2-Seater & Matching Armchair sets",
    images: [
      "/images/manduva-carved-sofa.jpg",
      "/images/manduva-hero.jpg",
      "/images/manduva-showroom-1.jpg"
    ],
    materials: "Grade-A Indian Teakwood, High-Density Comfort Core, Belgian Linen Upholstery",
    dimensions: "Details available on enquiry",
    availability: "Available for Custom Upholstery",
    featured: true,
    badge: "Bestseller",
    tags: ["Luxury", "Living Room", "Teakwood", "Comfort"]
  },
  {
    id: "monolithic-solid-teak-dining-table",
    slug: "monolithic-solid-teak-dining-table",
    name: "Sanctuary 8-Seater Teak Dining Suite",
    category: "Dining",
    categorySlug: "dining",
    room: "Dining Room",
    shortDescription: "Monolithic solid teakwood dining table with hand-turned pedestal pillars and cane-weave chairs.",
    description: "A celebration of generous Indian hospitality. The solid plank teak tabletop displays the raw natural grain swirls, protected by natural matte organic sealants. Accompanied by ergonomic chairs featuring hand-woven natural rattan cane backs.",
    price: "Enquire for Price",
    priceNote: "Available in 6-Seater, 8-Seater and 10-Seater configurations",
    images: [
      "/images/manduva-dining-table.jpg",
      "/images/manduva-showroom-2.jpg",
      "/images/manduva-craft-detail.jpg"
    ],
    materials: "100% Solid Indian Teakwood, Natural Organic Wax, Hand-woven Rattan Cane",
    dimensions: "Details available on enquiry (8-Seater: 96in L x 42in W x 30in H)",
    availability: "Made to Order & In-Store Stock",
    featured: true,
    badge: "Editorial Favorite",
    tags: ["Dining", "Teakwood", "Handcrafted", "Solid Wood"]
  },
  {
    id: "palace-canopy-four-poster-bed",
    slug: "palace-canopy-four-poster-bed",
    name: "Haveli Four-Poster Royal Teak Bed",
    category: "Bedroom",
    categorySlug: "bedroom",
    room: "Bedroom",
    shortDescription: "Architectural four-poster king bed with hand-turned columns and carved headboard lattice.",
    description: "Transform your master suite into a royal retreat. This architectural four-poster bed is constructed using traditional mortise-and-tenon joinery without hidden screws. The soaring turned posts can be draped in sheer linens or left open to celebrate pure silhouette.",
    price: "Enquire for Price",
    priceNote: "Available in King and Queen sizing",
    images: [
      "/images/manduva-bedroom-luxury.jpg",
      "/images/manduva-pillars.jpg",
      "/images/manduva-vintage-carved.jpg"
    ],
    materials: "Solid Seasoned Teakwood, Non-toxic Organic Stains",
    dimensions: "Details available on enquiry (King: 78in W x 84in L x 82in H)",
    availability: "Custom Crafted for Villas & Estates",
    featured: true,
    badge: "Master Suite",
    tags: ["Bedroom", "Luxury", "Four-Poster", "Teakwood"]
  },
  {
    id: "vintage-brass-accent-console",
    slug: "vintage-brass-accent-console",
    name: "Chettinad Brass-Clad Entryway Console",
    category: "Vintage Furniture",
    categorySlug: "vintage-furniture",
    room: "Foyer / Accent",
    shortDescription: "Rare antique entryway console featuring embossed brass sheeting, floral carvings, and drawers.",
    description: "An extraordinary entryway statement that greets guests with authentic vintage grandeur. Handcrafted with distressed timber framing, antique brass studs, and hand-embossed repoussé metal plates that catch ambient light with an alluring warm glow.",
    price: "Enquire for Price",
    priceNote: "Limited edition piece",
    images: [
      "/images/manduva-brass-accent.jpg",
      "/images/manduva-antique-1.jpg",
      "/images/manduva-craft-detail.jpg"
    ],
    materials: "Reclaimed Solid Timber, Embossed Pure Brass Plates, Antique Patina Finish",
    dimensions: "Details available on enquiry (54in W x 18in D x 34in H)",
    availability: "Showroom Piece Available",
    featured: true,
    badge: "Rare Find",
    tags: ["Vintage", "Brass", "Console", "Foyer"]
  },
  {
    id: "handcarved-manduva-teak-door",
    slug: "handcarved-manduva-teak-door",
    name: "Heritage Manduva Main Entrance Portal",
    category: "Traditional Furniture",
    categorySlug: "traditional-furniture",
    room: "Entrance / Villa Projects",
    shortDescription: "Heirloom double door set with deep geometric rosettes, brass lion-head knockers, and carved frame.",
    description: "The soul of traditional South Indian courtyard mansions. Built from centuries-dense teak timber with heavy carved lintels and brass studs designed to protect and dignify grand villa entrances.",
    price: "Enquire for Price",
    priceNote: "Custom sized for architectural openings",
    images: [
      "/images/manduva-teak-door.jpg",
      "/images/manduva-pillars.jpg",
      "/images/manduva-craft-detail.jpg"
    ],
    materials: "100% Solid Seasoned Teakwood, Antique Brass Studs & Knockers",
    dimensions: "Custom fabricated to architectural specifications",
    availability: "Custom Project Order",
    featured: false,
    badge: "Architectural",
    tags: ["Traditional", "Doors", "Architecture", "Teakwood"]
  },
  {
    id: "manduva-antique-carved-pillar-pair",
    slug: "manduva-antique-carved-pillar-pair",
    name: "Chettinad Carved Teakwood Pillar Pair",
    category: "Antique Furniture",
    categorySlug: "antique-furniture",
    room: "Courtyard / Foyer",
    shortDescription: "Architectural salvaged teakwood columns with lotus capitals and stone base pedestals.",
    description: "Authentic salvaged pillars sourced from restored heritage estates in South India. Each pillar is carved from single solid timber logs featuring traditional lotus capitals (Bodika) and graceful fluting.",
    price: "Enquire for Price",
    priceNote: "Sold as individual focal points or matching pairs",
    images: [
      "/images/manduva-pillars.jpg",
      "/images/manduva-antique-1.jpg",
      "/images/manduva-showroom-1.jpg"
    ],
    materials: "Century-old Solid Teakwood, Hand-chiseled Details",
    dimensions: "Details available on enquiry (Height: 8ft to 10ft)",
    availability: "In Stock at Hyderabad Showroom",
    featured: false,
    badge: "Historic Relic",
    tags: ["Antique", "Pillars", "Architecture"]
  }
];

export const galleryItems = [
  {
    id: "gal-1",
    title: "Artisan Courtyard Swing with Brass Hardware",
    category: "Traditional & Antiques",
    image: "/images/manduva-courtyard-swing.jpg",
    span: "col-span-12 md:col-span-8 row-span-2",
    description: "Suspended solid teakwood jhula crafted for ancestral living rooms and breezy verandas."
  },
  {
    id: "gal-2",
    title: "Ornate Hand-Carved Teakwood Living Ensemble",
    category: "Living Room",
    image: "/images/manduva-carved-sofa.jpg",
    span: "col-span-12 md:col-span-4 row-span-1",
    description: "Regal silhouettes with deep floral relief carvings."
  },
  {
    id: "gal-3",
    title: "Master Solid Teak Dining Table",
    category: "Dining",
    image: "/images/manduva-dining-table.jpg",
    span: "col-span-12 md:col-span-4 row-span-1",
    description: "Monolithic timber surfaces finished with organic plant oils."
  },
  {
    id: "gal-4",
    title: "Ancestral Wardrobe Cabinet & Brass Latches",
    category: "Storage & Consoles",
    image: "/images/manduva-wooden-cabinet.jpg",
    span: "col-span-12 md:col-span-4 row-span-1",
    description: "Hand-planed vintage timber with antique locking mechanisms."
  },
  {
    id: "gal-5",
    title: "Embossed Brass Accent Workmanship",
    category: "Details & Craft",
    image: "/images/manduva-brass-accent.jpg",
    span: "col-span-12 md:col-span-4 row-span-1",
    description: "Intricate repoussé brass detailing created by generational metalsmiths."
  },
  {
    id: "gal-6",
    title: "Royal Four-Poster Canopy Sanctuary",
    category: "Bedroom",
    image: "/images/manduva-bedroom-luxury.jpg",
    span: "col-span-12 md:col-span-4 row-span-1",
    description: "Four-poster architectural symmetry in seasoned golden teakwood."
  },
  {
    id: "gal-7",
    title: "Manduva Showroom Display & Curated Antiques",
    category: "Showroom Experience",
    image: "/images/manduva-showroom-1.jpg",
    span: "col-span-12 md:col-span-6 row-span-1",
    description: "Step into our Hyderabad showroom to feel the heavy grain and authentic warmth."
  },
  {
    id: "gal-8",
    title: "Heritage Carved Entrance Door",
    category: "Traditional & Antiques",
    image: "/images/manduva-teak-door.jpg",
    span: "col-span-12 md:col-span-6 row-span-1",
    description: "Monumental doorway portals designed for grand villas and heritage residences."
  }
];
