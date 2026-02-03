import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { generateArticleSchema, siteConfig } from "@/lib/seo";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blog-posts";
import { Calendar, Clock, User, Tag, ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog/" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id);
  const articleSchema = generateArticleSchema(post);

  const breadcrumbItems = [
    { label: "Blog", href: "/blog/" },
    { label: post.title },
  ];

  // Formatar data para exibição
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Layout>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`${siteConfig.url}/blog/${post.slug}/`}
        schema={articleSchema}
        ogType="article"
        ogImage={post.ogImage || post.featuredImage}
        articleMeta={{
          publishedTime: post.publishedDate,
          modifiedTime: post.modifiedDate,
          author: post.author.name,
          section: post.category,
          tags: post.tags,
        }}
        noSuffix
      />

      {/* Hero */}
      <section className="bg-secondary py-12">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="font-heading font-bold text-3xl md:text-4xl max-w-4xl">
            {post.h1 || post.title}
          </h1>
          
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 mt-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishedDate}>
                {formatDate(post.publishedDate)}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min de leitura</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            {post.featuredImage && post.featuredImage !== "/placeholder.svg" && (
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto rounded-xl mb-8 shadow-card"
                loading="lazy"
              />
            )}

            {/* Article Content */}
            <MarkdownRenderer content={post.content} className="text-lg" />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-heading font-semibold mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Box */}
            <div className="mt-12 p-6 bg-secondary rounded-xl">
              <div className="flex items-start gap-4">
                {post.author.avatar && (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                    loading="lazy"
                  />
                )}
                <div>
                  <h3 className="font-heading font-semibold">{post.author.name}</h3>
                  {post.author.bio && (
                    <p className="text-muted-foreground mt-1">{post.author.bio}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-8">
              <Link
                to="/blog/"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para o Blog
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 max-w-5xl mx-auto">
              <h2 className="font-heading font-bold text-2xl mb-8">
                Posts Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}/`}
                    className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all"
                  >
                    {relatedPost.featuredImage && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-heading font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTASection />
    </Layout>
  );
};

export default BlogPost;
