import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { siteConfig, generateLocalBusinessSchema, generateFAQSchema } from "@/lib/seo";
import { servicos } from "@/lib/data";
import { blogPosts } from "@/data/blog-posts";
import { CheckCircle, Clock, Shield, Award } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import heroImage from "@/assets/hero-montador.jpg";
import sobreImage from "@/assets/sobre-nos.jpg";

const faqs = [
  {
    question: "Quanto custa para montar um guarda-roupa?",
    answer: "O valor varia de acordo com o tamanho e complexidade do móvel. Entre em contato para um orçamento personalizado sem compromisso."
  },
  {
    question: "Vocês montam móveis de qualquer marca?",
    answer: "Sim, montamos móveis de todas as marcas, incluindo Casas Bahia, Magazine Luiza, Madesa, Bartira e móveis planejados."
  },
  {
    question: "Qual é o prazo de atendimento?",
    answer: "Trabalhamos com agendamento flexível e, dependendo da disponibilidade, podemos atender no mesmo dia ou no dia seguinte."
  }
];

const benefits = [
  {
    icon: Award,
    title: "Experiência Comprovada",
    description: "Mais de 10 anos montando móveis em Porto Alegre"
  },
  {
    icon: Shield,
    title: "Garantia no Serviço",
    description: "Todos os serviços com garantia de qualidade"
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Agendamento flexível, inclusive aos sábados"
  },
  {
    icon: CheckCircle,
    title: "Preço Justo",
    description: "Orçamento transparente e sem surpresas"
  }
];

const Index = () => {
  const featuredServicos = servicos.slice(0, 6);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateLocalBusinessSchema(),
      generateFAQSchema(faqs)
    ]
  };

  return (
    <Layout>
      <SEOHead
        title={`${siteConfig.name} | Montagem Profissional de Móveis`}
        description="Montador de móveis profissional em Porto Alegre e Região Metropolitana. Montagem, desmontagem e conserto de móveis. Orçamento grátis!"
        canonical={siteConfig.url}
        schema={combinedSchema}
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-card mb-6 leading-tight">
              Montador de Móveis Porto Alegre e Região Metropolitana
            </h1>
            <p className="text-xl text-card/90 mb-8">
              Montador de Móveis em Porto Alegre Profissional
            </p>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Hero')}
              className="btn-primary text-lg px-8 py-4 inline-flex"
            >
              Solicite um Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
            Serviços
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServicos.map((servico) => (
              <ServiceCard
                key={servico.slug}
                slug={servico.slug}
                title={servico.shortTitle}
                description={servico.description}
                image={servico.image}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/servicos/"
              className="btn-primary inline-flex"
            >
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={sobreImage}
                alt="Montador de Móveis Porto Alegre - Profissional"
                className="rounded-xl shadow-elegant w-full max-w-md mx-auto"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                Montador de Móveis Porto Alegre | Mais de 10 anos de Experiência
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Somos especialistas em montagem de móveis em Porto Alegre, com mais de 10 anos de experiência 
                no mercado. Nossa equipe de montadores profissionais atende toda Porto Alegre e Região Metropolitana, 
                garantindo um serviço de qualidade com preço justo.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Trabalhamos com montagem de móveis de todas as marcas, incluindo guarda-roupas, cozinhas, 
                camas, escritórios e muito mais. Oferecemos garantia em todos os serviços e atendimento 
                personalizado para cada cliente.
              </p>
              <Link to="/sobre/" className="btn-primary inline-flex">
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Phone */}
      <CTASection />

      {/* Benefícios */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            Por que nos escolher?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-card shadow-soft hover:shadow-card transition-shadow"
              >
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug}
                to={`/blog/${post.slug}/`}
                className="card-service group block"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
