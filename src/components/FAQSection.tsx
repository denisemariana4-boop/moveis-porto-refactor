import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/data/types";

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  className?: string;
}

/**
 * Componente de seção de FAQs com accordion
 * Usa dados estruturados e renderiza perguntas frequentes
 */
export const FAQSection = ({ 
  faqs, 
  title = "Perguntas Frequentes",
  className = "" 
}: FAQSectionProps) => {
  if (faqs.length === 0) return null;

  return (
    <section className={`py-12 ${className}`}>
      <div className="container-custom">
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8">
          {title}
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`faq-${index}`}
              className="bg-card rounded-lg shadow-soft px-6 border-none"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
