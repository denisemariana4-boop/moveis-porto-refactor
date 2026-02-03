import { siteConfig } from "@/lib/seo";
import { trackCTAClick } from "@/lib/analytics";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  sectionName?: string;
}

export const CTASection = ({ 
  title = "Solicite um Orçamento",
  subtitle = "Entre em contato agora mesmo e receba um orçamento sem compromisso!",
  sectionName = "CTA"
}: CTASectionProps) => {
  const handleWhatsAppClick = () => {
    trackCTAClick('WhatsApp', sectionName);
  };

  const handlePhoneClick = () => {
    trackCTAClick('Telefone', sectionName);
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container-custom text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="btn-whatsapp text-lg px-8 py-4"
          >
            WhatsApp: {siteConfig.phone}
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-card text-foreground hover:bg-card/90 transition-all duration-300"
          >
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  );
};
