// ============================================
// TIPOS DO CMS - MONTADOR DE MÓVEIS PORTO ALEGRE
// ============================================
// Este arquivo contém todas as interfaces TypeScript
// para o sistema de gerenciamento de conteúdo.
// ============================================

/**
 * Estrutura de uma FAQ (Pergunta Frequente)
 */
export interface FAQ {
  question: string;
  answer: string;
}

/**
 * Estrutura de um depoimento
 */
export interface Testimonial {
  author: string;
  text: string;
  rating: number; // 1-5
}

/**
 * Estrutura de Call-to-Action
 */
export interface CTA {
  text: string;
  link: string;
}

/**
 * Estrutura de coordenadas do mapa
 */
export interface MapCoordinates {
  lat: number;
  lng: number;
}

/**
 * Estrutura de autor para blog posts
 */
export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
}

/**
 * Estrutura de horário de funcionamento
 */
export interface OpeningHours {
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

/**
 * Estrutura de endereço
 */
export interface Address {
  street?: string;
  neighborhood?: string;
  city: string;
  state: string;
  postalCode?: string;
  country: string;
}

/**
 * Estrutura de links de redes sociais
 */
export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
}

// ============================================
// SERVIÇOS
// ============================================

/**
 * Estrutura completa de um Serviço
 * 
 * @example
 * {
 *   id: "montagem-guarda-roupa",
 *   slug: "montagem-de-guarda-roupa",
 *   title: "Montagem de Guarda-Roupa",
 *   metaTitle: "Montagem de Guarda-Roupa em Porto Alegre",
 *   metaDescription: "Montagem profissional de guarda-roupas...",
 *   ...
 * }
 */
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
  h1: string;
  description: string;
  content: string; // Suporta Markdown
  image: string;
  icon?: string;
  price?: string;
  benefits: string[];
  faqs: FAQ[];
  gallery?: string[];
  cta: CTA;
}

// ============================================
// BAIRROS / NEIGHBORHOODS
// ============================================

/**
 * Estrutura completa de um Bairro/Região
 * 
 * @example
 * {
 *   id: "centro-historico",
 *   slug: "centro-historico",
 *   name: "Centro Histórico",
 *   metaTitle: "Montador de Móveis no Centro Histórico",
 *   ...
 * }
 */
export interface Neighborhood {
  id: string;
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
  h1: string;
  description: string;
  content: string; // Suporta Markdown
  mapCoordinates?: MapCoordinates;
  servicesAvailable: string[]; // IDs dos serviços
  testimonials?: Testimonial[];
  coverageArea?: string;
  specificInfo?: string;
}

// ============================================
// BLOG POSTS
// ============================================

/**
 * Estrutura completa de um Post do Blog
 * 
 * @example
 * {
 *   id: "como-escolher-montador",
 *   slug: "como-escolher-montador-de-moveis",
 *   title: "Como Escolher um Montador de Móveis",
 *   ...
 * }
 */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
  h1?: string;
  author: Author;
  publishedDate: string; // ISO 8601: YYYY-MM-DD
  modifiedDate?: string; // ISO 8601: YYYY-MM-DD
  category: string;
  tags: string[];
  excerpt: string;
  featuredImage?: string;
  content: string; // Suporta Markdown
  readTime: number; // em minutos
  relatedPosts?: string[]; // IDs de posts relacionados
}

// ============================================
// CONFIGURAÇÃO DO SITE
// ============================================

/**
 * Configurações globais do site
 */
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappLink: string;
  email: string;
  address: Address;
  socialLinks?: SocialLinks;
  openingHours: OpeningHours[];
  priceRange: string;
  geoCoordinates: MapCoordinates;
}

// ============================================
// HELPERS
// ============================================

/**
 * Estrutura básica de bairro (compatibilidade)
 */
export interface BairroBasic {
  slug: string;
  nome: string;
}

/**
 * Estrutura básica de serviço (compatibilidade)
 */
export interface ServicoBasic {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  content: string;
  image: string;
}
