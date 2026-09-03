import { furnitureProducts, categories, galleryItems } from '../data/furnitureData';
import { verifiedReviews, googleProfileSummary } from '../data/reviewsData';
import { storeConfig } from '../data/storeConfig';

const STORAGE_KEYS = {
  PRODUCTS: 'ml_products_v1',
  CATEGORIES: 'ml_categories_v1',
  REVIEWS: 'ml_reviews_v1',
  CONFIG: 'ml_config_v1',
};

export function getStoredProducts() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    return data ? JSON.parse(data) : furnitureProducts;
  } catch (e) {
    return furnitureProducts;
  }
}

export function saveProducts(products) {
  try {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  } catch (e) {
    console.error("Failed to save products:", e);
  }
}

export function getStoredCategories() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
    return data ? JSON.parse(data) : categories;
  } catch (e) {
    return categories;
  }
}

export function saveCategories(cats) {
  try {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(cats));
  } catch (e) {
    console.error("Failed to save categories:", e);
  }
}

export function getStoredConfig() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CONFIG);
    return data ? JSON.parse(data) : storeConfig;
  } catch (e) {
    return storeConfig;
  }
}

export function saveConfig(cfg) {
  try {
    localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(cfg));
  } catch (e) {
    console.error("Failed to save config:", e);
  }
}

export function resetToDefaults() {
  localStorage.removeItem(STORAGE_KEYS.PRODUCTS);
  localStorage.removeItem(STORAGE_KEYS.CATEGORIES);
  localStorage.removeItem(STORAGE_KEYS.CONFIG);
  localStorage.removeItem(STORAGE_KEYS.REVIEWS);
  window.location.reload();
}
