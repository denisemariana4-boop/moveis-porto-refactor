// ============================================
// CONFIGURAÇÕES E SCHEMAS SEO
// ============================================
// Este arquivo contém funções para gerar schemas
// JSON-LD e configurações de SEO.
// ============================================

import { siteConfig } from "@/data/site-config";
import type { Service, Neighborhood, BlogPost, FAQ } from "@/data/types";

// Re-exportar siteConfig para compatibilidade
export { siteConfig } from "@/data/site-config";

/**
 * Gera o schema LocalBusiness completo para a home page
 */
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  url: siteConfig.url,
  image: `${siteConfig.url}/assets/hero-montador.jpg`,
  logo: `${siteConfig.url}/favicon.svg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geoCoordinates.lat.toString(),
    longitude: siteConfig.geoCoordinates.lng.toString(),
  },
  areaServed: {
    "@type": "City",
    name: siteConfig.address.city,
  },
  priceRange: siteConfig.priceRange,
  openingHoursSpecification: siteConfig.openingHours.map((hours) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: hours.dayOfWeek,
    opens: hours.opens,
    closes: hours.closes,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: Object.values(siteConfig.socialLinks || {}).filter(Boolean),
});

/**
 * Gera o schema Service para uma página de serviço
 */
export const generateServiceSchema = (service: {
  name: string;
  description: string;
  slug: string;
  price?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    "@id": `${siteConfig.url}/#organization`,
  },
  areaServed: {
    "@type": "City",
    name: siteConfig.address.city,
  },
  url: `${siteConfig.url}/servico/${service.slug}/`,
  ...(service.price && {
    offers: {
      "@type": "Offer",
      price: service.price.replace(/[^\d]/g, ""),
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  }),
});

/**
 * Gera schema completo para página de serviço (com FAQs)
 */
export const generateFullServiceSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@graph": [
    generateServiceSchema({
      name: service.title,
      description: service.description,
      slug: service.slug,
      price: service.price,
    }),
    ...(service.faqs.length > 0 ? [generateFAQSchema(service.faqs)] : []),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Serviços", url: `${siteConfig.url}/servicos/` },
      { name: service.shortTitle, url: `${siteConfig.url}/servico/${service.slug}/` },
    ]),
  ],
});

/**
 * Gera o schema LocalBusiness com serviceArea para páginas de bairro
 */
export const generateNeighborhoodSchema = (neighborhood: Neighborhood) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      description: `Montador de móveis profissional no ${neighborhood.name}, Porto Alegre.`,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      url: siteConfig.url,
      areaServed: {
        "@type": "Place",
        name: `${neighborhood.name}, ${siteConfig.address.city}`,
        geo: neighborhood.mapCoordinates
          ? {
              "@type": "GeoCoordinates",
              latitude: neighborhood.mapCoordinates.lat.toString(),
              longitude: neighborhood.mapCoordinates.lng.toString(),
            }
          : undefined,
      },
      priceRange: siteConfig.priceRange,
    },
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Regiões Atendidas", url: `${siteConfig.url}/regioes-atendidas/` },
      { name: neighborhood.name, url: `${siteConfig.url}/regioes-atendidas/${neighborhood.slug}/` },
    ]),
  ],
});

/**
 * Gera o schema BreadcrumbList
 */
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

/**
 * Gera o schema FAQPage
 */
export const generateFAQSchema = (faqs: FAQ[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

/**
 * Gera o schema Article para posts do blog
 */
export const generateArticleSchema = (post: BlogPost) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${siteConfig.url}/blog/${post.slug}/`,
      headline: post.title,
      description: post.metaDescription,
      image: post.featuredImage || `${siteConfig.url}/assets/hero-montador.jpg`,
      datePublished: post.publishedDate,
      dateModified: post.modifiedDate || post.publishedDate,
      author: {
        "@type": "Person",
        name: post.author.name,
        description: post.author.bio,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/favicon.svg`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/blog/${post.slug}/`,
      },
      wordCount: post.content.split(/\s+/).length,
      articleSection: post.category,
      keywords: post.tags.join(", "),
    },
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Blog", url: `${siteConfig.url}/blog/` },
      { name: post.title, url: `${siteConfig.url}/blog/${post.slug}/` },
    ]),
  ],
});

/**
 * Gera schema para a página de lista do blog
 */
export const generateBlogListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${siteConfig.url}/blog/`,
  name: `Blog | ${siteConfig.name}`,
  description: "Dicas, tutoriais e novidades sobre montagem de móveis em Porto Alegre.",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    "@id": `${siteConfig.url}/#organization`,
  },
  url: `${siteConfig.url}/blog/`,
});

/**
 * Gera schema para a página de serviços
 */
export const generateServicesListSchema = (services: Service[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Serviços de Montagem de Móveis",
  description: "Lista completa de serviços de montagem de móveis em Porto Alegre.",
  numberOfItems: services.length,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: `${siteConfig.url}/servico/${service.slug}/`,
    },
  })),
});

/**
 * Gera meta tags de imagem OG padrão
 */
export const getDefaultOgImage = (): string => {
  return `${siteConfig.url}/assets/hero-montador.jpg`;
};
