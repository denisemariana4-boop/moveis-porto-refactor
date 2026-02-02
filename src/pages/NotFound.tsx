import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <SEOHead
        title="Página não encontrada | Montador de Móveis Porto Alegre"
        description="A página que você está procurando não foi encontrada."
      />
      
      <section className="section-padding min-h-[60vh] flex items-center">
        <div className="container-custom text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="font-heading font-bold text-6xl md:text-8xl text-primary mb-4">
              404
            </h1>
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Página não encontrada
            </h2>
            <p className="text-muted-foreground mb-8">
              Esta página foi movida ou não existe. Volte para a página inicial.
            </p>
            <Link 
              to="/"
              className="btn-primary inline-flex gap-2"
            >
              <Home className="w-5 h-5" />
              Voltar para Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
