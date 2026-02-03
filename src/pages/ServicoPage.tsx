import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { siteConfig, generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { servicos } from "@/lib/data";

const ServicoPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const servico = servicos.find(s => s.slug === slug);
  
  if (!servico) {
    return <Navigate to="/servicos/" replace />;
  }

  const breadcrumbItems = [
    { label: "Serviços", href: "/servicos/" },
    { label: servico.title }
  ];

  const serviceSchema = generateServiceSchema({
    name: servico.title,
    description: servico.description,
    slug: servico.slug
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Serviços", url: `${siteConfig.url}/servicos/` },
    { name: servico.title, url: `${siteConfig.url}/servico/${servico.slug}/` }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, breadcrumbSchema]
  };

  return (
    <Layout>
      <SEOHead
        title={`${servico.title} em Porto Alegre`}
        description={servico.description}
        canonical={`${siteConfig.url}/servico/${servico.slug}/`}
        schema={combinedSchema}
      />

      {/* Hero */}
      <section className="bg-secondary py-12">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="font-heading font-bold text-3xl md:text-4xl">
            {servico.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <img
                src={`/assets/${servico.image}`}
                alt={servico.title}
                className="w-full rounded-xl shadow-elegant mb-8"
                loading="lazy"
              />
              <div className="prose prose-lg max-w-none">
                <h2 className="font-heading font-bold text-2xl mb-4">
                  {servico.title} em Porto Alegre
                </h2>
                {servico.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-secondary rounded-xl p-6 sticky top-24">
                <h3 className="font-heading font-bold text-xl mb-4">
                  Solicite um Orçamento
                </h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato agora mesmo e receba um orçamento sem compromisso para {servico.title.toLowerCase()}.
                </p>
                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="block text-center py-3 px-4 bg-card rounded-lg font-semibold hover:bg-card/80 transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicoPage;
