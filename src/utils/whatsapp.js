import { storeConfig } from '../data/storeConfig';

/**
 * Creates a WhatsApp click-to-chat URL with a prefilled enquiry message.
 * @param {Object} options
 * @param {string} [options.pieceName] - Optional name of the furniture piece
 * @param {string} [options.category] - Optional category
 * @param {string} [options.intent] - 'piece' | 'visit' | 'bespoke' | 'general'
 * @param {string} [options.customMessage] - Any specific note from user
 */
export function getWhatsAppUrl({ pieceName, category, intent = 'general', customMessage } = {}) {
  const number = storeConfig.whatsappNumber || "919876543210";
  
  let text = `Namaste Manduva Logillu Furniture's,\n\n`;
  
  if (intent === 'piece' && pieceName) {
    text += `I am interested in enquiring about "${pieceName}"${category ? ` (${category})` : ''}.\nCould you please share more details, availability, and pricing?`;
  } else if (intent === 'visit') {
    text += `I would like to plan a visit to your Hyderabad furniture showroom. Could you please share the exact showroom location and suitable timings?`;
  } else if (intent === 'bespoke') {
    text += `I have a custom furniture requirement / interior project in Hyderabad. I would like to discuss bespoke craftsmanship with your design team.`;
  } else if (customMessage) {
    text += customMessage;
  } else {
    text += `I came across your premium furniture collection and would like to learn more about your antique, vintage, and handcrafted teakwood pieces.`;
  }
  
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function openWhatsApp(options) {
  const url = getWhatsAppUrl(options);
  window.open(url, '_blank', 'noopener,noreferrer');
}
