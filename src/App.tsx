import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Móveis Porto</h1>
          <nav className="flex gap-6">
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              Início
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              Produtos
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Móveis de Qualidade
            <br />
            <span className="text-primary">Para Sua Casa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Descubra nossa coleção exclusiva de móveis artesanais, 
            feitos com materiais premium e design contemporâneo.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Ver Catálogo</Button>
            <Button variant="outline" size="lg">Fale Conosco</Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛋️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design Exclusivo</h3>
              <p className="text-muted-foreground">
                Peças únicas criadas por designers renomados.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Materiais Sustentáveis</h3>
              <p className="text-muted-foreground">
                Madeira certificada e materiais eco-friendly.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Grátis</h3>
              <p className="text-muted-foreground">
                Frete grátis para todo o Brasil em compras acima de R$500.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container text-center text-muted-foreground">
          <p>© 2024 Móveis Porto. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
