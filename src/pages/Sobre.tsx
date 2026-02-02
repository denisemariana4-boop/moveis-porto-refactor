import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { siteConfig, generateBreadcrumbSchema } from "@/lib/seo";
import sobreImage from "@/assets/sobre-nos.jpg";

const Sobre = () => {
  const breadcrumbItems = [{ label: "Quem somos" }];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Quem somos", url: `${siteConfig.url}/sobre/` }
  ]);

  return (
    <Layout>
      <SEOHead
        title="Quem Somos | Montador de Móveis Porto Alegre"
        description="Conheça nossa história. Mais de 10 anos de experiência em montagem de móveis em Porto Alegre e Região Metropolitana."
        canonical={`${siteConfig.url}/sobre/`}
        schema={breadcrumbSchema}
      />

      {/* Hero */}
      <section className="bg-secondary py-12">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="font-heading font-bold text-3xl md:text-4xl">
            Quem somos
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">
                Quem somos
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Somos o <strong>Montador de Móveis Porto Alegre</strong>, com mais de 10 anos de experiência 
                em montagem de móveis na capital gaúcha e Região Metropolitana.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Nossa trajetória começou há uma década, quando percebemos a necessidade do mercado por 
                profissionais qualificados e comprometidos com a qualidade na montagem de móveis. Ao longo 
                dos anos, nossa empresa ganhou reconhecimento e prestígio na cidade de Porto Alegre e região, 
                se tornando extremamente relevante e lembrada sempre como uma empresa de referência e destaque 
                no ramo de montagem de móveis.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Por isso, ao contratar qualquer serviço nesta empresa, você estará investindo em profissionais 
                altamente capacitados que prezam pela qualidade e agilidade na montagem dos seus móveis!
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Faça um orçamento hoje mesmo e tenha seus móveis montados por profissionais de verdade!
              </p>
            </div>
            <div>
              <img
                src={sobreImage}
                alt="Montador de Móveis Porto Alegre - Nossa equipe"
                className="rounded-xl shadow-elegant w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Sobre;
