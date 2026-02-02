import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig, generateBreadcrumbSchema } from "@/lib/seo";
import { blogPosts } from "@/data/blog-posts";

const Blog = () => {
  const breadcrumbItems = [{ label: "Blog" }];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog/` }
  ]);

  return (
    <Layout>
      <SEOHead
        title="Blog | Montador de Móveis Porto Alegre"
        description="Dicas, novidades e informações sobre montagem de móveis em Porto Alegre. Aprenda com nossos especialistas."
        canonical={`${siteConfig.url}/blog/`}
        schema={breadcrumbSchema}
      />

      {/* Hero */}
      <section className="bg-secondary py-12">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="font-heading font-bold text-3xl md:text-4xl">
            Blog
          </h1>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug}
                to={`/blog/${post.slug}/`}
                className="card-service group block"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <span className="text-sm">Imagem do artigo</span>
                  </div>
                </div>
                <div className="p-6">
                  <time className="text-sm text-muted-foreground mb-2 block">
                    {new Date(post.publishedDate).toLocaleDateString('pt-BR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </time>
                  <h2 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-primary font-semibold">
                    Saiba mais →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
