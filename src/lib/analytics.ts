// Google Analytics 4 - Utilitário de Rastreamento

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara um evento personalizado para o Google Analytics 4
 */
export const trackEvent = (
  action: string,
  category: string,
  label: string
): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
    console.log(`[GA4] Event: ${action} | Category: ${category} | Label: ${label}`);
  }
};

/**
 * Rastreia clique no WhatsApp
 */
export const trackWhatsAppClick = (location: string): void => {
  trackEvent('click', 'Contato', `WhatsApp - ${location}`);
};

/**
 * Rastreia clique no Telefone
 */
export const trackPhoneClick = (location: string): void => {
  trackEvent('click', 'Contato', `Telefone - ${location}`);
};

/**
 * Rastreia clique em botões de CTA
 */
export const trackCTAClick = (type: 'WhatsApp' | 'Telefone', section: string): void => {
  trackEvent('click', 'Contato', `${type} - ${section}`);
};
