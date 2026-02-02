import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig, generateBreadcrumbSchema } from "@/lib/seo";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contato = () => {
  const breadcrumbItems = [{ label: "Contato" }];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Contato", url: `${siteConfig.url}/contato/` }
  ]);

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.nome}. ${formData.mensagem} Meu contato: ${formData.telefone} / ${formData.email}`;
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <Layout>
      <SEOHead
        title="Contato | Montador de Móveis Porto Alegre"
        description="Entre em contato conosco. Solicite um orçamento para montagem de móveis em Porto Alegre. Atendimento rápido e profissional."
        canonical={`${siteConfig.url}/contato/`}
        schema={breadcrumbSchema}
      />

      {/* Hero */}
      <section className="bg-secondary py-12">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="font-heading font-bold text-3xl md:text-4xl">
            Contato
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-heading font-bold text-2xl mb-6">
                Fale conosco
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    rows={5}
                    required
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-secondary rounded-xl p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-lg flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Endereço
                    </h3>
                    <p className="text-muted-foreground">
                      Atendemos toda Porto Alegre e Região Metropolitana!
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg flex items-center gap-2 mb-2">
                      <Phone className="w-5 h-5 text-primary" />
                      Telefone
                    </h3>
                    <a 
                      href={`tel:${siteConfig.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg flex items-center gap-2 mb-2">
                      <MessageCircle className="w-5 h-5 text-success-green" />
                      WhatsApp
                    </h3>
                    <a 
                      href={siteConfig.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-success-green transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg flex items-center gap-2 mb-2">
                      <Mail className="w-5 h-5 text-primary" />
                      E-mail
                    </h3>
                    <a 
                      href={`mailto:${siteConfig.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
