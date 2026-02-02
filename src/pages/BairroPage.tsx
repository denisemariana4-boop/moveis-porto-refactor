import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { siteConfig, generateBreadcrumbSchema } from "@/lib/seo";
import { bairros, generateBairroContent, servicos } from "@/lib/data";
import { Link } from "react-router-dom";

const BairroPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const bairro = bairros.find(b => b.slug === slug);
  
  if (!bairro) {
    return <Navigate to="/regioes-atendidas/" replace />;
  }

  const content = generateBairroContent(bairro);

  const breadcrumbItems = [
    { label: "Regiões Atendidas", href: "/regioes-atendidas/" },
    { label: content.title }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Regiões Atendidas", url: `${siteConfig.url}/regioes-atendidas/` },
    { name: content.title, url: `${siteConfig.url}/regioes-atendidas/${bairro.slug}/` }
  ]);

  // Renderiza markdown simples
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="font-heading font-bold text-xl mt-8 mb-4">
            {line.replace('## ', '')}
          </h2>
        );
      }
      if (line.startsWith('- **')) {
        return (
          <li key={index} className="text-muted-foreground mb-2" dangerouslySetInnerHTML={{
            __html: line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }} />
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-muted-foreground mb-2">
            {line.replace('- ', '')}
          </li>
        );
      }
      if (line.trim() === '') {
        return null;
      }
      return (
        <p key={index} className="text-muted-foreground mb-4 leading-relaxed" dangerouslySetInnerHTML={{
          __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        }} />
      );
    });
  };

  return (
    <Layout>
      <SEOHead
        title={content.title}
        description={`Montador de móveis profissional no ${bairro.nome} em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!`}
        canonical={`${siteConfig.url}/regioes-atendidas/${bairro.slug}/`}
        schema={breadcrumbSchema}
      />

      {/* Hero */}
      <section className="bg-secondary py-12">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="font-heading font-bold text-3xl md:text-4xl">
            {content.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-2xl mb-6">
                Precisa de {content.title}?
              </h2>
              <div className="bg-card rounded-xl p-6 shadow-soft mb-8">
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="font-semibold text-primary hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                  <span className="text-muted-foreground">|</span>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-success-green hover:underline"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="prose max-w-none">
                {renderContent(content.content)}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-secondary rounded-xl p-6 sticky top-24">
                <h3 className="font-heading font-bold text-xl mb-4">
                  Nossos Serviços
                </h3>
                <ul className="space-y-2">
                  {servicos.map((servico) => (
                    <li key={servico.slug}>
                      <Link
                        to={`/servico/${servico.slug}/`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {servico.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center"
                  >
                    Solicitar Orçamento
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

export default BairroPage;
