import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { siteConfig, generateBreadcrumbSchema } from "@/lib/seo";
import { bairros } from "@/lib/data";
import { MapPin } from "lucide-react";

const RegioesAtendidas = () => {
  const breadcrumbItems = [{ label: "Regiões Atendidas" }];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Regiões Atendidas", url: `${siteConfig.url}/regioes-atendidas/` }
  ]);

  // Agrupar bairros por letra inicial
  const groupedBairros = bairros.reduce((acc, bairro) => {
    const firstLetter = bairro.nome.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(bairro);
    return acc;
  }, {} as Record<string, typeof bairros>);

  const sortedLetters = Object.keys(groupedBairros).sort();

  return (
    <Layout>
      <SEOHead
        title="Regiões Atendidas | Montador de Móveis Porto Alegre"
        description="Atendemos Porto Alegre e Região Metropolitana. Veja todos os bairros onde realizamos montagem de móveis profissional."
        canonical={`${siteConfig.url}/regioes-atendidas/`}
        schema={breadcrumbSchema}
      />

      {/* Hero */}
      <section className="bg-secondary py-12">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="font-heading font-bold text-3xl md:text-4xl">
            Regiões Atendidas
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <p className="text-muted-foreground text-lg mb-10 max-w-3xl">
            Atendemos toda <strong>Porto Alegre</strong> e <strong>Região Metropolitana</strong>. 
            Clique em uma região abaixo para saber mais sobre nossos serviços de montagem de móveis no seu bairro.
          </p>

          <div className="space-y-8">
            {sortedLetters.map((letter) => (
              <div key={letter}>
                <h2 className="font-heading font-bold text-2xl mb-4 text-primary">
                  {letter}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {groupedBairros[letter].map((bairro) => (
                    <Link
                      key={bairro.slug}
                      to={`/regioes-atendidas/${bairro.slug}/`}
                      className="flex items-center gap-2 p-3 bg-card rounded-lg shadow-soft hover:shadow-card hover:bg-secondary transition-all group"
                    >
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium group-hover:text-primary transition-colors truncate">
                        {bairro.nome}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default RegioesAtendidas;
