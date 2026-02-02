# 📚 Guia do Sistema de Gerenciamento de Conteúdo (CMS)

Este documento explica como editar e adicionar conteúdo ao site Montador de Móveis Porto Alegre.

---

## 📁 Estrutura de Arquivos

```
src/data/
├── types.ts           # Interfaces TypeScript
├── site-config.ts     # Configurações globais do site
├── services.ts        # Dados dos serviços
├── neighborhoods.ts   # Dados dos bairros (94 oficiais de POA)
└── blog-posts.ts      # Posts do blog
```

---

## ⚙️ Configurações do Site

**Arquivo:** `src/data/site-config.ts`

Edite para alterar:
- Nome e descrição do site
- Telefone e WhatsApp
- E-mail
- Horário de funcionamento

---

## 🔧 Adicionar Novo Serviço

**Arquivo:** `src/data/services.ts`

1. Copie um serviço existente
2. Altere `id` e `slug` (únicos)
3. Preencha os campos
4. Adicione imagem em `public/assets/`

```typescript
{
  id: "novo-servico",
  slug: "novo-servico",
  title: "Novo Serviço",
  shortTitle: "Novo",
  metaTitle: "Novo Serviço em Porto Alegre",
  metaDescription: "Descrição para SEO (até 160 caracteres)",
  h1: "Novo Serviço em Porto Alegre",
  description: "Descrição curta",
  content: "Conteúdo em Markdown...",
  image: "servico-novo.jpg",
  price: "A partir de R$ 100",
  benefits: ["Benefício 1", "Benefício 2"],
  faqs: [{ question: "Pergunta?", answer: "Resposta." }],
  cta: { text: "Solicitar Orçamento", link: "/contato/" }
}
```

---

## 📍 Adicionar Novo Bairro

**Arquivo:** `src/data/neighborhoods.ts`

Os 94 bairros oficiais de Porto Alegre já estão cadastrados. Para adicionar mais:

```typescript
{
  id: "novo-bairro",
  slug: "novo-bairro",
  name: "Novo Bairro",
  metaTitle: "Montador de Móveis no Novo Bairro",
  metaDescription: "Descrição para SEO",
  h1: "Montador de Móveis no Novo Bairro",
  description: "Descrição curta",
  content: generateNeighborhoodContent("Novo Bairro"),
  servicesAvailable: allServiceIds
}
```

---

## ✍️ Criar Post no Blog

**Arquivo:** `src/data/blog-posts.ts`

```typescript
{
  id: "novo-post",
  slug: "titulo-do-post",
  title: "Título do Post",
  metaTitle: "Título para SEO",
  metaDescription: "Descrição para SEO (até 160 chars)",
  author: defaultAuthor,
  publishedDate: "2025-02-01",
  category: "Dicas",
  tags: ["tag1", "tag2"],
  excerpt: "Resumo do post",
  content: `Conteúdo em Markdown...`,
  readTime: 5,
  relatedPosts: ["id-post-relacionado"]
}
```

---

## 🚀 Deploy na Vercel

1. Conecte o repositório GitHub à Vercel
2. Configure:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automático a cada push

---

## 📋 Checklist SEO

- ✅ Títulos com até 60 caracteres
- ✅ Descrições com até 160 caracteres
- ✅ Imagens com alt text
- ✅ URLs amigáveis (slugs)
- ✅ Schema.org JSON-LD
- ✅ Sitemap.xml atualizado
- ✅ Robots.txt configurado

---

## 📞 Contato

Para dúvidas sobre o sistema, consulte a documentação ou entre em contato com o desenvolvedor.
