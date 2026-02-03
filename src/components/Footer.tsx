import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import { servicos, bairros } from "@/lib/data";

export const Footer = () => {
  const featuredServicos = servicos.slice(0, 6);

  return (
    <footer className="bg-foreground text-secondary">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-card">
              {siteConfig.name}
            </h3>
            <p className="text-muted mb-4 text-sm leading-relaxed">
              Montador de móveis profissional em Porto Alegre e Região Metropolitana. 
              Mais de 10 anos de experiência em montagem, desmontagem e conserto de móveis.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a 
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-muted hover:text-card transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
              <a 
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-muted hover:text-card transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
              <span className="flex items-center gap-2 text-muted">
                <MapPin className="w-4 h-4" />
                {`${siteConfig.address.city} - ${siteConfig.address.state}`}
              </span>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-card">
              Serviços
            </h3>
            <ul className="space-y-2 text-sm">
              {featuredServicos.map((servico) => (
                <li key={servico.slug}>
                  <Link 
                    to={`/servico/${servico.slug}/`}
                    className="text-muted hover:text-card transition-colors"
                  >
                    {servico.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/servicos/"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Ver todos →
                </Link>
              </li>
            </ul>
          </div>

          {/* Regiões Atendidas - Todos os bairros em scroll */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-lg mb-4 text-card">
              Regiões Atendidas
            </h3>
            <div className="h-64 overflow-y-auto pr-2 scrollbar-thin">
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-sm">
                {bairros.map((bairro) => (
                  <li key={bairro.slug}>
                    <Link 
                      to={`/regioes-atendidas/${bairro.slug}/`}
                      className="text-muted hover:text-card transition-colors"
                    >
                      {bairro.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link 
              to="/regioes-atendidas/"
              className="inline-block mt-3 text-primary hover:text-primary/80 font-medium transition-colors text-sm"
            >
              Ver todas →
            </Link>
          </div>
        </div>

        {/* Links Úteis - Movidos para uma linha separada */}
        <div className="mt-8 pt-6 border-t border-muted/30">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              to="/"
              className="text-muted hover:text-card transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/sobre/"
              className="text-muted hover:text-card transition-colors"
            >
              Quem Somos
            </Link>
            <Link 
              to="/servicos/"
              className="text-muted hover:text-card transition-colors"
            >
              Serviços
            </Link>
            <Link 
              to="/blog/"
              className="text-muted hover:text-card transition-colors"
            >
              Blog
            </Link>
            <Link 
              to="/contato/"
              className="text-muted hover:text-card transition-colors"
            >
              Contato
            </Link>
            <Link 
              to="/regioes-atendidas/"
              className="text-muted hover:text-card transition-colors"
            >
              Regiões Atendidas
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-muted/30 text-center">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} {siteConfig.name} | Todos os direitos reservados
          </p>
          <Link 
            to="/politica-privacidade/"
            className="text-muted hover:text-card transition-colors text-sm mt-2 inline-block"
          >
            Política de Privacidade
          </Link>
          <p className="text-muted/70 text-xs mt-4">
            Site Desenvolvido e Otimizado por Pedro Dombrowski - Especialista em SEO Local
          </p>
        </div>
      </div>
    </footer>
  );
};
