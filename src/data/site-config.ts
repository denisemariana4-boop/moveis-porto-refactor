// ============================================
// CONFIGURAÇÕES GLOBAIS DO SITE
// ============================================
// Edite este arquivo para alterar informações
// de contato, endereço, redes sociais, etc.
// ============================================

import type { SiteConfig } from "./types";

/**
 * Configurações principais do site
 * 
 * COMO EDITAR:
 * - phone: Apenas números (usado em links tel:)
 * - phoneFormatted: Formato de exibição para usuários
 * - whatsapp: Código do país + DDD + número (sem espaços)
 * - whatsappLink: Link completo do WhatsApp com mensagem padrão
 */
export const siteConfig: SiteConfig = {
  // Identidade
  name: "Montador de Móveis Porto Alegre",
  tagline: "Montagem Profissional de Móveis",
  description: "Montador de móveis profissional em Porto Alegre e Região Metropolitana. Montagem, desmontagem e conserto de móveis com garantia. Orçamento grátis!",
  url: "https://montadorparamoveis.com.br",

  // Contato
  phone: "51998429902",
  phoneFormatted: "(51) 99842-9902",
  whatsapp: "5551998429902",
  whatsappLink: "https://wa.me/5551998429902?text=Olá%20estou%20em%20contato%20pelo%20Site%20Montador%20de%20Móveis%20Porto%20Alegre",
  email: "contato@montadormoveis.com.br",

  // Endereço
  address: {
    city: "Porto Alegre",
    state: "RS",
    country: "BR",
  },

  // Coordenadas geográficas (centro de Porto Alegre)
  geoCoordinates: {
    lat: -30.0346,
    lng: -51.2177,
  },

  // Redes sociais (opcional)
  socialLinks: {
    // facebook: "https://facebook.com/montadormoveis",
    // instagram: "https://instagram.com/montadormoveis",
  },

  // Horário de funcionamento
  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],

  // Faixa de preço ($ = barato, $$ = moderado, $$$ = caro)
  priceRange: "$$",
};

/**
 * Gera o link do WhatsApp com mensagem customizada
 * 
 * @param message - Mensagem personalizada
 * @returns Link completo do WhatsApp
 * 
 * @example
 * getWhatsAppLink("Olá, quero orçamento para montagem de guarda-roupa")
 */
export const getWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodedMessage}`;
};

/**
 * Gera link do WhatsApp com contexto de serviço
 * 
 * @param serviceName - Nome do serviço
 * @returns Link do WhatsApp com mensagem contextualizada
 */
export const getWhatsAppLinkForService = (serviceName: string): string => {
  const message = `Olá! Vim do site e gostaria de um orçamento para ${serviceName}.`;
  return getWhatsAppLink(message);
};

/**
 * Gera link do WhatsApp com contexto de bairro
 * 
 * @param neighborhoodName - Nome do bairro
 * @returns Link do WhatsApp com mensagem contextualizada
 */
export const getWhatsAppLinkForNeighborhood = (neighborhoodName: string): string => {
  const message = `Olá! Moro no ${neighborhoodName} e gostaria de um orçamento para montagem de móveis.`;
  return getWhatsAppLink(message);
};

export default siteConfig;
