// ============================================
// DADOS DOS POSTS DO BLOG
// ============================================
// Edite este arquivo para adicionar, remover ou
// modificar posts do blog.
// ============================================

import type { BlogPost } from "./types";

/**
 * Autor padrão para posts do blog
 */
const defaultAuthor = {
  name: "Equipe Montador de Móveis",
  avatar: "/placeholder.svg",
  bio: "Especialistas em montagem de móveis em Porto Alegre com mais de 10 anos de experiência.",
};

/**
 * Lista de todos os posts do blog
 * 
 * COMO ADICIONAR UM NOVO POST:
 * 1. Copie um objeto existente
 * 2. Altere o id e slug (devem ser únicos)
 * 3. Preencha todas as informações
 * 4. Adicione a imagem em public/assets/
 * 
 * IMPORTANTE:
 * - O slug será usado na URL: /blog/[slug]/
 * - O content suporta Markdown
 * - publishedDate deve estar no formato YYYY-MM-DD
 */
export const blogPosts: BlogPost[] = [
  {
    id: "como-escolher-montador",
    slug: "como-escolher-montador-de-moveis",
    title: "Como Escolher um Montador de Móveis Profissional",
    metaTitle: "Como Escolher um Montador de Móveis Profissional",
    metaDescription: "Descubra o que avaliar na hora de contratar um montador de móveis para garantir um serviço de qualidade. Dicas práticas!",
    author: defaultAuthor,
    publishedDate: "2025-01-15",
    modifiedDate: "2025-01-15",
    category: "Dicas",
    tags: ["montador de móveis", "como escolher", "dicas", "qualidade"],
    excerpt: "Descubra o que avaliar na hora de contratar um montador de móveis para garantir um serviço de qualidade.",
    featuredImage: "/assets/artigo1-como-escolher-montador.jpg",
    readTime: 5,
    relatedPosts: ["dicas-para-montar-moveis", "moveis-planejados-vs-modulados"],
    content: `Escolher um montador de móveis profissional pode parecer simples, mas alguns cuidados são essenciais para garantir um serviço de qualidade. Neste artigo, vamos compartilhar dicas valiosas para você fazer a escolha certa.

## 1. Verifique a Experiência

Um montador experiente conhece diferentes marcas e modelos de móveis. Pergunte há quanto tempo ele trabalha na área e se já montou móveis similares aos seus.

## 2. Peça Referências

Profissionais de qualidade não têm problema em fornecer referências de clientes anteriores. Se possível, procure avaliações online ou peça indicações de amigos e familiares.

## 3. Confirme se Possui Ferramentas Adequadas

Um montador profissional deve ter suas próprias ferramentas, incluindo:

- Furadeira e parafusadeira
- Chaves de fenda e phillips
- Martelo de borracha
- Nível de bolha
- Trena

## 4. Solicite Orçamento Detalhado

Um bom profissional fornece orçamento claro, especificando:

- Valor do serviço
- O que está incluso
- Prazo de execução
- Garantia oferecida

## 5. Verifique a Garantia

Profissionais sérios oferecem garantia pelo serviço realizado. Isso demonstra confiança na qualidade do trabalho.

## 6. Observe a Pontualidade

Um profissional comprometido é pontual. Se ele se atrasa para o orçamento, pode fazer o mesmo no dia da montagem.

## Conclusão

Investir tempo na escolha de um montador de móveis profissional evita dores de cabeça e garante que seus móveis sejam montados corretamente. Para garantir isso, conheça nossas [5 dicas essenciais para montar móveis](/blog/dicas-para-montar-moveis/) e saiba também como escolher entre [móveis planejados e modulados](/blog/moveis-planejados-vs-modulados/). Lembre-se: o barato pode sair caro!

Se você está em Porto Alegre e precisa de um montador de confiança, entre em contato conosco. Oferecemos serviço profissional com garantia e orçamento gratuito.`,
  },
  {
    id: "dicas-para-montar-moveis",
    slug: "dicas-para-montar-moveis",
    title: "5 Dicas Essenciais Para Montar Móveis Corretamente",
    metaTitle: "5 Dicas Essenciais Para Montar Móveis Corretamente",
    metaDescription: "Saiba quais são os principais cuidados e técnicas para uma montagem de móveis perfeita. Guia completo!",
    author: defaultAuthor,
    publishedDate: "2025-01-10",
    modifiedDate: "2025-01-10",
    category: "Tutoriais",
    tags: ["montagem de móveis", "dicas", "tutorial", "passo a passo"],
    excerpt: "Saiba quais são os principais cuidados e técnicas para uma montagem de móveis perfeita.",
    featuredImage: "/assets/artigo2-dicas-montagem.jpg",
    readTime: 7,
    relatedPosts: ["como-escolher-montador", "moveis-planejados-vs-modulados"],
    content: `A montagem de móveis pode parecer desafiadora, mas com as dicas certas, o processo fica muito mais fácil. Confira nossas 5 dicas essenciais para uma montagem perfeita.

## 1. Organize Todas as Peças Antes de Começar

Antes de iniciar a montagem:

- Abra todas as caixas
- Separe as peças por tipo
- Confira se todas as peças estão presentes
- Organize as ferragens em saquinhos identificados

Isso economiza tempo e evita surpresas durante a montagem.

## 2. Leia o Manual Completamente

Pode parecer óbvio, mas muitas pessoas pulam essa etapa. O manual contém:

- Ordem correta de montagem
- Especificações de parafusos
- Dicas importantes do fabricante
- Alertas de segurança

## 3. Use as Ferramentas Corretas

Utilizar ferramentas inadequadas pode danificar o móvel. As ferramentas básicas necessárias são:

- Chave de fenda (phillips e fenda)
- Chave Allen (geralmente vem com o móvel)
- Martelo de borracha
- Nível de bolha
- Trena

## 4. Não Aperte Tudo de Uma Vez

Uma dica de ouro: deixe os parafusos semi-apertados até finalizar a montagem completa. Isso permite:

- Fazer ajustes necessários
- Alinhar corretamente as peças
- Evitar desmontar partes já fixadas

Só aperte completamente no final, quando tudo estiver alinhado.

## 5. Trabalhe em Dupla Quando Possível

Para móveis grandes como guarda-roupas e armários de cozinha — especialmente se você ainda está decidindo entre [móveis planejados ou modulados](/blog/moveis-planejados-vs-modulados/) — ter uma segunda pessoa ajuda a:

- Segurar peças pesadas
- Alinhar partes grandes
- Prevenir acidentes
- Acelerar o processo

## Dica Bônus: Quando Contratar um Profissional

Se você não tem experiência ou ferramentas adequadas, considere [contratar um montador profissional](/blog/como-escolher-montador-de-moveis/). O custo do serviço é compensado pela:

- Garantia de qualidade
- Economia de tempo
- Preservação da garantia do móvel
- Tranquilidade

Precisa de ajuda com a montagem dos seus móveis em Porto Alegre? Entre em contato conosco para um orçamento gratuito!`,
  },
  {
    id: "moveis-planejados-vs-modulados",
    slug: "moveis-planejados-vs-modulados",
    title: "Móveis Planejados vs Modulados: Qual Escolher?",
    metaTitle: "Móveis Planejados vs Modulados: Qual Escolher?",
    metaDescription: "Entenda as diferenças entre móveis planejados e modulados para fazer a melhor escolha para sua casa. Comparativo completo!",
    author: defaultAuthor,
    publishedDate: "2025-01-05",
    modifiedDate: "2025-01-05",
    category: "Guias",
    tags: ["móveis planejados", "móveis modulados", "comparativo", "decoração"],
    excerpt: "Entenda as diferenças entre móveis planejados e modulados para fazer a melhor escolha para sua casa.",
    featuredImage: "/assets/artigo3-moveis-planejados.jpg",
    readTime: 8,
    relatedPosts: ["como-escolher-montador", "dicas-para-montar-moveis"],
    content: `Na hora de mobiliar a casa, uma dúvida comum é: móveis planejados ou modulados? Cada opção tem suas vantagens e desvantagens. Vamos analisar cada uma para ajudar você a decidir.

## O Que São Móveis Planejados?

Móveis planejados são feitos sob medida para o seu espaço. Eles são:

- **Personalizados**: Projetados especificamente para suas necessidades
- **Sob medida**: Aproveitam 100% do espaço disponível
- **Exclusivos**: Design único para sua casa
- **Premium**: Geralmente com acabamentos de alta qualidade

### Vantagens dos Móveis Planejados

1. Aproveitamento total do espaço
2. Design personalizado
3. Materiais de alta qualidade
4. Valorização do imóvel
5. Durabilidade superior

### Desvantagens dos Móveis Planejados

1. Preço mais elevado
2. Prazo de entrega maior
3. Não podem ser levados em mudança
4. Necessitam de projeto arquitetônico

## O Que São Móveis Modulados?

Móveis modulados são peças pré-fabricadas que podem ser combinadas de diferentes formas:

- **Padronizados**: Tamanhos fixos definidos pelo fabricante
- **Combináveis**: Você escolhe os módulos que precisa
- **Versáteis**: Podem ser reorganizados
- **Acessíveis**: Preços mais competitivos

### Vantagens dos Móveis Modulados

1. Preço mais acessível
2. Entrega mais rápida
3. Podem ser levados em mudança
4. Fácil substituição de peças
5. Várias opções de cores e acabamentos

### Desvantagens dos Móveis Modulados

1. Não aproveitam 100% do espaço
2. Menos opções de personalização
3. Qualidade pode variar
4. Design menos exclusivo

## Comparativo Resumido

| Característica | Planejados | Modulados |
|----------------|------------|-----------|
| Preço | Alto | Médio/Baixo |
| Personalização | Total | Limitada |
| Prazo de entrega | 30-60 dias | Imediato a 15 dias |
| Aproveitamento | 100% | 70-90% |
| Mobilidade | Não | Sim |
| Durabilidade | Alta | Média |

## Qual Escolher?

A escolha depende das suas prioridades:

**Escolha móveis planejados se você:**
- Busca design exclusivo
- Precisa aproveitar espaços irregulares
- Planeja ficar muitos anos no imóvel
- Pode investir mais

**Escolha móveis modulados se você:**
- Tem orçamento limitado
- Mora de aluguel
- Precisa de entrega rápida
- Valoriza flexibilidade

## Montagem de Ambos os Tipos

Independente da sua escolha, a montagem profissional é essencial. Se ainda não sabe como escolher o montador certo, leia nosso artigo sobre [como escolher um montador de móveis profissional](/blog/como-escolher-montador-de-moveis/). E para não errar na hora de montar, não deixe de conferir as [dicas essenciais para montar móveis corretamente](/blog/dicas-para-montar-moveis/). Trabalhamos com os dois tipos de móveis e garantimos uma instalação perfeita.

Entre em contato para saber mais sobre nossos serviços de montagem em Porto Alegre!`,
  },
];

/**
 * Busca um post pelo slug
 */
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

/**
 * Busca um post pelo ID
 */
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.id === id);
};

/**
 * Retorna todos os slugs de posts (útil para sitemap)
 */
export const getAllBlogPostSlugs = (): string[] => {
  return blogPosts.map((post) => post.slug);
};

/**
 * Retorna posts relacionados
 */
export const getRelatedPosts = (postId: string): BlogPost[] => {
  const post = getBlogPostById(postId);
  if (!post || !post.relatedPosts) return [];
  
  return post.relatedPosts
    .map((id) => getBlogPostById(id))
    .filter((p): p is BlogPost => p !== undefined);
};

/**
 * Retorna posts por categoria
 */
export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter((post) => post.category === category);
};

/**
 * Retorna todas as categorias únicas
 */
export const getAllCategories = (): string[] => {
  return [...new Set(blogPosts.map((post) => post.category))];
};

/**
 * Retorna todas as tags únicas
 */
export const getAllTags = (): string[] => {
  const allTags = blogPosts.flatMap((post) => post.tags);
  return [...new Set(allTags)];
};

export default blogPosts;
