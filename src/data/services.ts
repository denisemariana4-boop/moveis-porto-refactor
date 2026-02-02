// ============================================
// DADOS DOS SERVIÇOS
// ============================================
// Edite este arquivo para adicionar, remover ou
// modificar os serviços oferecidos.
// ============================================

import type { Service } from "./types";

/**
 * Lista de todos os serviços oferecidos
 * 
 * COMO ADICIONAR UM NOVO SERVIÇO:
 * 1. Copie um objeto existente
 * 2. Altere o id e slug (devem ser únicos)
 * 3. Preencha todas as informações
 * 4. Adicione a imagem em public/assets/
 * 
 * IMPORTANTE:
 * - O slug será usado na URL: /servico/[slug]/
 * - O content suporta Markdown básico
 * - As FAQs serão usadas no schema.org
 */
export const services: Service[] = [
  {
    id: "montagem-guarda-roupa",
    slug: "montagem-de-guarda-roupa",
    title: "Montagem de Guarda-Roupa",
    shortTitle: "Guarda-Roupa",
    metaTitle: "Montagem de Guarda-Roupa em Porto Alegre | Profissional",
    metaDescription: "Montagem profissional de guarda-roupas de todas as marcas em Porto Alegre. Serviço rápido, garantia e melhor preço. Solicite orçamento grátis!",
    h1: "Montagem de Guarda-Roupa em Porto Alegre",
    description: "Montagem profissional de guarda-roupas de todas as marcas e modelos em Porto Alegre.",
    content: `A montagem de guarda-roupa exige experiência e ferramentas adequadas para garantir que seu móvel fique perfeitamente instalado e funcional. Nossa equipe de montadores profissionais em Porto Alegre está preparada para montar guarda-roupas de qualquer marca, incluindo Casas Bahia, Magazine Luiza, Lojas Americanas, Madesa, Bartira e outras.

Realizamos a montagem seguindo rigorosamente o manual do fabricante, garantindo a estabilidade e segurança do móvel. Todos os nossos serviços incluem garantia e trabalhamos com agilidade para não atrapalhar sua rotina.

## O que está incluso

- Verificação de todas as peças antes da montagem
- Montagem completa do móvel
- Fixação na parede quando necessário
- Limpeza do local após a montagem
- Garantia do serviço

## Marcas que trabalhamos

Montamos guarda-roupas de todas as principais marcas do mercado, incluindo móveis modulados e planejados.`,
    image: "servico-guarda-roupa.jpg",
    icon: "wardrobe",
    price: "A partir de R$ 150",
    benefits: [
      "Montagem no mesmo dia",
      "Garantia de 90 dias",
      "Profissionais experientes",
      "Ferramentas adequadas",
      "Fixação inclusa",
    ],
    faqs: [
      {
        question: "Quanto tempo demora a montagem de um guarda-roupa?",
        answer: "O tempo varia de acordo com o tamanho e complexidade do móvel. Em média, a montagem de um guarda-roupa de 6 portas leva de 2 a 4 horas.",
      },
      {
        question: "Vocês montam guarda-roupas de qualquer marca?",
        answer: "Sim! Montamos guarda-roupas de todas as marcas, incluindo Madesa, Bartira, Demóbile, Novo Horizonte, entre outras.",
      },
      {
        question: "É necessário fixar o guarda-roupa na parede?",
        answer: "Recomendamos a fixação na parede para maior segurança, especialmente em móveis altos. A fixação está inclusa no serviço.",
      },
    ],
    gallery: ["servico-guarda-roupa.jpg"],
    cta: {
      text: "Solicitar Orçamento",
      link: "/contato/",
    },
  },
  {
    id: "montagem-cozinha",
    slug: "montagem-de-cozinha",
    title: "Montagem de Cozinha",
    shortTitle: "Cozinha",
    metaTitle: "Montagem de Móveis de Cozinha em Porto Alegre",
    metaDescription: "Montagem de armários de cozinha, balcões e gabinetes em Porto Alegre. Instalação profissional com garantia. Orçamento grátis!",
    h1: "Montagem de Móveis de Cozinha em Porto Alegre",
    description: "Montagem de móveis de cozinha, armários, balcões e gabinetes em Porto Alegre.",
    content: `A cozinha é o coração da casa e merece uma montagem impecável. Nossos montadores especializados realizam a montagem de armários de cozinha, balcões, gabinetes e módulos com precisão milimétrica.

Trabalhamos com todas as marcas de móveis modulados e planejados, garantindo o perfeito alinhamento das portas, gavetas funcionando corretamente e toda a estabilidade necessária. Também realizamos a fixação de armários aéreos com toda a segurança.

## Serviços inclusos

- Montagem de armários aéreos e de piso
- Instalação de balcões e gabinetes
- Ajuste de portas e gavetas
- Fixação segura na parede
- Verificação final de funcionamento`,
    image: "servico-cozinha.jpg",
    icon: "kitchen",
    price: "A partir de R$ 200",
    benefits: [
      "Alinhamento perfeito",
      "Fixação segura",
      "Gavetas ajustadas",
      "Portas reguladas",
      "Garantia de 90 dias",
    ],
    faqs: [
      {
        question: "Vocês instalam armários aéreos?",
        answer: "Sim, instalamos armários aéreos com fixação segura na parede, usando buchas e parafusos adequados para cada tipo de parede.",
      },
      {
        question: "É possível montar uma cozinha completa em um dia?",
        answer: "Para cozinhas de tamanho médio (8 a 12 módulos), geralmente conseguimos concluir a montagem em um dia de trabalho.",
      },
    ],
    gallery: ["servico-cozinha.jpg"],
    cta: {
      text: "Solicitar Orçamento",
      link: "/contato/",
    },
  },
  {
    id: "montagem-escritorio",
    slug: "montagem-de-escritorio",
    title: "Montagem de Escritório",
    shortTitle: "Escritório",
    metaTitle: "Montagem de Móveis de Escritório em Porto Alegre",
    metaDescription: "Montagem de móveis para escritório e home office em Porto Alegre. Mesas, escrivaninhas, estantes e gaveteiros. Orçamento grátis!",
    h1: "Montagem de Móveis de Escritório em Porto Alegre",
    description: "Montagem de móveis para escritório e home office em Porto Alegre.",
    content: `Seja para um home office ou escritório comercial, realizamos a montagem completa de móveis para ambiente de trabalho. Mesas, escrivaninhas, estantes, gaveteiros, armários e cadeiras são montados com precisão e rapidez.

Nossa equipe entende a importância de um ambiente de trabalho funcional e organizado. Por isso, garantimos uma montagem perfeita que permite você começar a trabalhar imediatamente após nosso serviço.

## Móveis que montamos

- Mesas e escrivaninhas
- Estantes e prateleiras
- Gaveteiros e arquivos
- Armários de escritório
- Cadeiras ergonômicas`,
    image: "servico-escritorio.jpg",
    icon: "desk",
    price: "A partir de R$ 80",
    benefits: [
      "Montagem rápida",
      "Ajustes de altura",
      "Organização do espaço",
      "Atendimento comercial",
      "Garantia inclusa",
    ],
    faqs: [
      {
        question: "Vocês atendem empresas?",
        answer: "Sim, atendemos tanto residências quanto empresas. Para escritórios comerciais, podemos agendar a montagem fora do horário comercial.",
      },
      {
        question: "Montam cadeiras de escritório?",
        answer: "Sim, montamos cadeiras de escritório, incluindo modelos ergonômicos e gamers.",
      },
    ],
    gallery: ["servico-escritorio.jpg"],
    cta: {
      text: "Solicitar Orçamento",
      link: "/contato/",
    },
  },
  {
    id: "montagem-cama",
    slug: "montagem-de-cama",
    title: "Montagem de Cama",
    shortTitle: "Camas e Beliches",
    metaTitle: "Montagem de Camas e Beliches em Porto Alegre",
    metaDescription: "Montagem de camas, beliches, bicamas e cabeceiras em Porto Alegre. Serviço seguro e profissional. Solicite orçamento grátis!",
    h1: "Montagem de Camas e Beliches em Porto Alegre",
    description: "Montagem de camas, beliches, bicamas e cabeceiras em Porto Alegre.",
    content: `A montagem de camas requer atenção especial para garantir segurança e durabilidade. Montamos camas de solteiro, casal, queen, king size, beliches, bicamas e camas com gavetas ou baú.

Também realizamos a instalação de cabeceiras, seja de encaixe ou fixadas na parede. Todos os parafusos são devidamente apertados e verificamos a estabilidade completa do móvel antes de finalizar o serviço.

## Tipos de camas

- Camas de solteiro e casal
- Camas queen e king size
- Beliches e bicamas
- Camas com baú ou gavetas
- Cabeceiras estofadas`,
    image: "servico-cama.jpg",
    icon: "bed",
    price: "A partir de R$ 100",
    benefits: [
      "Montagem segura",
      "Beliches com fixação",
      "Cabeceiras instaladas",
      "Verificação de estabilidade",
      "Garantia de 90 dias",
    ],
    faqs: [
      {
        question: "A montagem de beliche é segura?",
        answer: "Sim! Realizamos a montagem seguindo todas as recomendações do fabricante e, quando necessário, fixamos na parede para maior segurança.",
      },
      {
        question: "Vocês instalam cabeceiras na parede?",
        answer: "Sim, instalamos cabeceiras de encaixe e também modelos que precisam ser fixados na parede.",
      },
    ],
    gallery: ["servico-cama.jpg"],
    cta: {
      text: "Solicitar Orçamento",
      link: "/contato/",
    },
  },
  {
    id: "montagem-banheiro",
    slug: "montagem-de-banheiro",
    title: "Montagem de Banheiro",
    shortTitle: "Banheiro",
    metaTitle: "Montagem de Móveis de Banheiro em Porto Alegre",
    metaDescription: "Montagem de gabinetes, armários e espelheiras para banheiro em Porto Alegre. Instalação profissional com garantia!",
    h1: "Montagem de Móveis de Banheiro em Porto Alegre",
    description: "Montagem de gabinetes, armários e espelheiras para banheiro em Porto Alegre.",
    content: `Realizamos a montagem de móveis para banheiro incluindo gabinetes, armários, espelheiras e nichos. Nossos profissionais têm experiência em trabalhar com móveis que exigem fixação em parede e contato com umidade.

Garantimos uma instalação segura e correta, preservando a integridade do móvel e a funcionalidade do seu banheiro. Trabalhamos com todas as marcas disponíveis no mercado.

## O que montamos

- Gabinetes com cuba
- Armários aéreos
- Espelheiras
- Nichos e prateleiras
- Módulos para lavanderia`,
    image: "servico-banheiro.jpg",
    icon: "bath",
    price: "A partir de R$ 120",
    benefits: [
      "Fixação segura",
      "Vedação adequada",
      "Nivelamento perfeito",
      "Todas as marcas",
      "Garantia inclusa",
    ],
    faqs: [
      {
        question: "Vocês fazem a parte hidráulica?",
        answer: "Não realizamos serviços hidráulicos. Nossa especialidade é a montagem do móvel. Recomendamos contratar um encanador para as conexões.",
      },
      {
        question: "É possível instalar gabinete suspenso?",
        answer: "Sim, instalamos gabinetes suspensos com fixação adequada na parede, garantindo segurança e durabilidade.",
      },
    ],
    gallery: ["servico-banheiro.jpg"],
    cta: {
      text: "Solicitar Orçamento",
      link: "/contato/",
    },
  },
  {
    id: "instalacao-prateleiras",
    slug: "instalacao-de-prateleiras",
    title: "Instalação de Prateleiras",
    shortTitle: "Prateleiras",
    metaTitle: "Instalação de Prateleiras e Suportes de TV em Porto Alegre",
    metaDescription: "Instalação de prateleiras, nichos e suportes de TV em Porto Alegre. Fixação segura em qualquer tipo de parede. Orçamento grátis!",
    h1: "Instalação de Prateleiras em Porto Alegre",
    description: "Instalação de prateleiras, nichos e suportes de TV em Porto Alegre.",
    content: `Além da montagem de móveis, realizamos a instalação de prateleiras, nichos decorativos, suportes de TV e outros itens que precisam ser fixados na parede.

Utilizamos buchas e parafusos adequados para cada tipo de parede (alvenaria, drywall ou concreto), garantindo que seus itens fiquem bem fixados e seguros. Também fazemos a marcação correta para manter o nível e alinhamento perfeitos.

## Serviços de instalação

- Prateleiras de madeira e MDF
- Nichos decorativos
- Suportes de TV (fixo e articulado)
- Quadros e espelhos grandes
- Suportes diversos`,
    image: "servico-prateleiras.jpg",
    icon: "shelf",
    price: "A partir de R$ 50",
    benefits: [
      "Qualquer tipo de parede",
      "Nivelamento perfeito",
      "Buchas adequadas",
      "Suportes de TV",
      "Atendimento rápido",
    ],
    faqs: [
      {
        question: "Vocês instalam em parede de drywall?",
        answer: "Sim! Temos buchas e parafusos especiais para drywall que garantem uma fixação segura mesmo em paredes de gesso.",
      },
      {
        question: "Posso fornecer as prateleiras?",
        answer: "Sim, você pode fornecer as prateleiras e nós fazemos apenas a instalação. Também podemos recomendar lojas caso precise comprar.",
      },
    ],
    gallery: ["servico-prateleiras.jpg"],
    cta: {
      text: "Solicitar Orçamento",
      link: "/contato/",
    },
  },
  {
    id: "desmontagem-moveis",
    slug: "desmontagem-de-moveis",
    title: "Desmontagem de Móveis",
    shortTitle: "Desmontagem",
    metaTitle: "Desmontagem de Móveis para Mudança em Porto Alegre",
    metaDescription: "Desmontagem profissional de móveis para mudança em Porto Alegre. Peças organizadas e identificadas. Solicite orçamento!",
    h1: "Desmontagem de Móveis para Mudança em Porto Alegre",
    description: "Desmontagem profissional de móveis para mudança em Porto Alegre.",
    content: `Vai mudar de casa ou apartamento? Oferecemos serviço de desmontagem de móveis para facilitar seu transporte. Desmontamos guarda-roupas, camas, escrivaninhas e outros móveis com cuidado para evitar danos.

Organizamos e identificamos todas as peças e ferragens para facilitar a remontagem no novo endereço. Se precisar, também realizamos a montagem no destino, oferecendo um serviço completo de desmontagem e montagem.

## Nosso processo

- Avaliação do móvel
- Desmontagem cuidadosa
- Identificação das peças
- Separação das ferragens
- Embalagem quando necessário`,
    image: "servico-desmontagem.jpg",
    icon: "package",
    price: "A partir de R$ 100",
    benefits: [
      "Peças identificadas",
      "Ferragens separadas",
      "Cuidado com o móvel",
      "Agilidade no processo",
      "Remontagem disponível",
    ],
    faqs: [
      {
        question: "Vocês fazem a remontagem no novo endereço?",
        answer: "Sim! Oferecemos o serviço completo de desmontagem no endereço atual e montagem no novo endereço. Consulte nossos pacotes.",
      },
      {
        question: "As peças são identificadas?",
        answer: "Sim, todas as peças e ferragens são identificadas e separadas em sacos para facilitar a remontagem.",
      },
    ],
    gallery: ["servico-desmontagem.jpg"],
    cta: {
      text: "Solicitar Orçamento",
      link: "/contato/",
    },
  },
  {
    id: "conserto-moveis",
    slug: "conserto-de-moveis",
    title: "Conserto de Móveis",
    shortTitle: "Conserto",
    metaTitle: "Conserto e Reparo de Móveis em Porto Alegre",
    metaDescription: "Conserto de móveis, gavetas, dobradiças e corrediças em Porto Alegre. Reparo profissional com garantia. Orçamento grátis!",
    h1: "Conserto e Reparo de Móveis em Porto Alegre",
    description: "Conserto e reparo de móveis, gavetas, dobradiças e corrediças em Porto Alegre.",
    content: `Seu móvel está com problemas? Gavetas que não deslizam, portas desalinhadas, dobradiças quebradas ou estrutura instável? Realizamos consertos e reparos em móveis de todos os tipos.

Substituímos corrediças de gavetas, dobradiças de portas, trilhos de armários e fazemos ajustes na estrutura para devolver a funcionalidade ao seu móvel. Muitas vezes, um reparo simples pode prolongar a vida útil do seu móvel por muitos anos.

## Reparos que fazemos

- Troca de corrediças de gavetas
- Substituição de dobradiças
- Ajuste de portas
- Reforço de estrutura
- Troca de puxadores e trilhos`,
    image: "servico-conserto.jpg",
    icon: "wrench",
    price: "A partir de R$ 80",
    benefits: [
      "Diagnóstico gratuito",
      "Peças de reposição",
      "Reparo no local",
      "Economia vs comprar novo",
      "Garantia do serviço",
    ],
    faqs: [
      {
        question: "Vale a pena consertar ou é melhor comprar um novo?",
        answer: "Na maioria dos casos, o conserto é muito mais econômico. Fazemos uma avaliação gratuita e indicamos a melhor opção para você.",
      },
      {
        question: "Vocês trazem as peças de reposição?",
        answer: "Temos as peças mais comuns em estoque. Para peças específicas, fazemos a compra e agendamos o retorno.",
      },
    ],
    gallery: ["servico-conserto.jpg"],
    cta: {
      text: "Solicitar Orçamento",
      link: "/contato/",
    },
  },
];

/**
 * Busca um serviço pelo slug
 */
export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};

/**
 * Busca um serviço pelo ID
 */
export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};

/**
 * Retorna todos os slugs de serviços (útil para sitemap)
 */
export const getAllServiceSlugs = (): string[] => {
  return services.map((service) => service.slug);
};

export default services;
