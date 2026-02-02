import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { siteConfig, generateBreadcrumbSchema } from "@/lib/seo";
import { servicos } from "@/lib/data";

const Servicos = () => {
  const breadcrumbItems = [{ label: "Serviços" }];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Serviços", url: `${siteConfig.url}/servicos/` }
  ]);

  return (
    <Layout>
      <SEOHead
        title="Serviços | Montador de Móveis Porto Alegre"
        description="Conheça todos os nossos serviços de montagem de móveis em Porto Alegre: guarda-roupas, cozinhas, camas, escritórios e muito mais."
        canonical={`${siteConfig.url}/servicos/`}
        schema={breadcrumbSchema}
      />

      {/* Hero */}
      <section className="bg-secondary py-12">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="font-heading font-bold text-3xl md:text-4xl">
            Serviços
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-center mb-10">
            Serviços
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico) => (
              <ServiceCard
                key={servico.slug}
                slug={servico.slug}
                title={servico.title}
                description={servico.description}
                image={servico.image}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Servicos;
