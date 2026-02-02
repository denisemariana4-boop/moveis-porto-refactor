import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import { servicos, bairros } from "@/lib/data";
import { NeighborhoodScrollBand } from "./NeighborhoodScrollBand";

export const Footer = () => {
  const featuredBairros = bairros.slice(0, 10);
  const featuredServicos = servicos.slice(0, 6);

  return (
    <footer className="bg-foreground text-secondary">
      {/* Scroll band with all neighborhoods */}
      <NeighborhoodScrollBand />
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

          {/* Regiões */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-card">
              Regiões Atendidas
            </h3>
            <ul className="space-y-2 text-sm">
              {featuredBairros.map((bairro) => (
                <li key={bairro.slug}>
                  <Link 
                    to={`/regioes-atendidas/${bairro.slug}/`}
                    className="text-muted hover:text-card transition-colors"
                  >
                    {bairro.nome}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/regioes-atendidas/"
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Ver todas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-card">
              Links Úteis
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/"
                  className="text-muted hover:text-card transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre/"
                  className="text-muted hover:text-card transition-colors"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicos/"
                  className="text-muted hover:text-card transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog/"
                  className="text-muted hover:text-card transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato/"
                  className="text-muted hover:text-card transition-colors"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link 
                  to="/regioes-atendidas/"
                  className="text-muted hover:text-card transition-colors"
                >
                  Regiões Atendidas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-muted/30 text-center">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} {siteConfig.name} | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
