import { Helmet } from "react-helmet-async";
import { siteConfig, getDefaultOgImage } from "@/lib/seo";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object | object[];
  ogImage?: string;
  ogType?: "website" | "article";
  articleMeta?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  noindex?: boolean;
  noSuffix?: boolean;
}

export const SEOHead = ({
  title,
  description,
  canonical,
  schema,
  ogImage,
  ogType = "website",
  articleMeta,
  noindex = false,
  noSuffix = false,
}: SEOHeadProps) => {
  // Garante que o título tenha no máximo 60 caracteres
  const optimizedTitle = title.length > 60 ? title.substring(0, 57) + "..." : title;
  
  // Garante que a descrição tenha no máximo 160 caracteres
  const optimizedDescription = description.length > 160 
    ? description.substring(0, 157) + "..." 
    : description;

  // Se noSuffix for true, não adiciona sufixo
  // Caso contrário, não adiciona sufixo se o título já terminar com "Melhor Preço" (páginas de bairro) ou já contiver o nome do site
  const shouldAddSuffix = !noSuffix && !optimizedTitle.includes("Melhor Preço") && !optimizedTitle.includes(siteConfig.name);
  const fullTitle = shouldAddSuffix 
    ? `${optimizedTitle} | ${siteConfig.name}` 
    : optimizedTitle;

  const finalOgImage = ogImage || getDefaultOgImage();
  const canonicalUrl = canonical || siteConfig.url;

  return (
    <Helmet>
      {/* Title */}
      <title>{fullTitle}</title>

      {/* Primary Meta Tags */}
      <meta name="description" content={optimizedDescription} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={finalOgImage} />

      {/* Article specific meta tags */}
      {ogType === "article" && articleMeta && (
        <>
          {articleMeta.publishedTime && (
            <meta property="article:published_time" content={articleMeta.publishedTime} />
          )}
          {articleMeta.modifiedTime && (
            <meta property="article:modified_time" content={articleMeta.modifiedTime} />
          )}
          {articleMeta.author && (
            <meta property="article:author" content={articleMeta.author} />
          )}
          {articleMeta.section && (
            <meta property="article:section" content={articleMeta.section} />
          )}
          {articleMeta.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
