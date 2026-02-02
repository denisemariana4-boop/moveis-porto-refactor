import { Link } from "react-router-dom";
import { bairros } from "@/lib/data";

export const NeighborhoodScrollBand = () => {
  // Duplicate the list for seamless infinite scroll
  const duplicatedBairros = [...bairros, ...bairros];

  return (
    <div className="bg-primary/10 py-4 overflow-hidden">
      <div className="mb-3 text-center">
        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
          Atendemos todos os bairros de Porto Alegre
        </span>
      </div>
      <div className="relative">
        <div className="flex animate-scroll-left gap-3 whitespace-nowrap">
          {duplicatedBairros.map((bairro, index) => (
            <Link
              key={`${bairro.slug}-${index}`}
              to={`/regioes-atendidas/${bairro.slug}/`}
              className="inline-block px-3 py-1.5 bg-background/80 hover:bg-primary hover:text-primary-foreground rounded-full text-sm transition-colors duration-200 border border-border/50 hover:border-primary whitespace-nowrap"
            >
              {bairro.nome}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
