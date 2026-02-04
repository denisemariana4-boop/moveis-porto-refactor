// ============================================
// DADOS DOS BAIRROS / REGIÕES ATENDIDAS
// ============================================
// Este arquivo contém os 94 bairros oficiais de
// Porto Alegre com dados completos para SEO.
// ============================================

import type { Neighborhood } from "./types";
import { services } from "./services";

/**
 * IDs de todos os serviços (para servicesAvailable)
 */
const allServiceIds = services.map((s) => s.id);

/**
 * Gera conteúdo padrão para um bairro
 */
const generateNeighborhoodContent = (name: string): string => {
  return `Procurando um **montador de móveis profissional no ${name}**? Você está no lugar certo! Atendemos toda a região do ${name} em Porto Alegre com serviços de montagem, desmontagem e conserto de móveis.

## Por Que Contratar um Montador Profissional no ${name}

Contratar um **montador de móveis profissional** no ${name} é essencial para garantir que seus móveis sejam montados corretamente. Um profissional experiente:

- Possui as ferramentas adequadas para cada tipo de montagem
- Conhece as técnicas corretas para cada marca de móvel
- Oferece garantia pelo serviço realizado
- Economiza seu tempo e evita dores de cabeça

## Serviços de Montagem no ${name}

Oferecemos diversos serviços de montagem de móveis no ${name}:

- **Montagem de guarda-roupas** de todas as marcas
- **Montagem de cozinhas** moduladas e planejadas
- **Montagem de camas**, beliches e cabeceiras
- **Montagem de móveis de escritório** e home office
- **Instalação de prateleiras** e suportes de TV
- **Desmontagem de móveis** para mudança
- **Conserto e reparos** em móveis

## Atendimento Rápido no ${name}

Nossa equipe de montadores está pronta para atender você no ${name} com agilidade e profissionalismo. Trabalhamos de segunda a sábado e oferecemos orçamento gratuito.

Entre em contato agora mesmo e solicite seu orçamento sem compromisso!`;
};

/**
 * Lista completa dos 94 bairros oficiais de Porto Alegre
 */
export const neighborhoods: Neighborhood[] = [
  { id: "aberta-dos-morros", slug: "aberta-dos-morros", name: "Aberta dos Morros", metaTitle: "Montador de Móveis no Aberta dos Morros com o Melhor Preço", metaDescription: "Montador de móveis profissional no Aberta dos Morros em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Aberta dos Morros", description: "Serviços de montagem de móveis na Aberta dos Morros", content: `Está procurando um montador de móveis profissional no Aberta dos Morros? Aqui você encontra atendimento especializado para montagem, desmontagem e conserto de móveis, com serviço feito do jeito certo e sem dor de cabeça.

Atendemos toda a região do Aberta dos Morros, em Porto Alegre, com pontualidade, cuidado e foco em um bom acabamento.

## Por Que Contratar um Montador de Móveis Profissional no Aberta dos Morros

Contratar um montador experiente faz toda a diferença no resultado final. Um profissional qualificado garante que cada peça seja montada corretamente, evitando problemas futuros.

Ao contratar um montador de móveis no Aberta dos Morros, você conta com:

- Ferramentas adequadas para cada tipo de móvel
- Conhecimento técnico para montagem de diferentes marcas
- Montagem segura, alinhada e bem ajustada
- Garantia no serviço realizado
- Economia de tempo e menos estresse no dia a dia

## Serviços de Montagem de Móveis no Aberta dos Morros

Oferecemos uma solução completa para quem precisa de montagem ou ajustes em móveis residenciais e comerciais.

### Montagem de Móveis Residenciais

- Montagem de guarda-roupas de todas as marcas
- Montagem de cozinhas moduladas e planejadas
- Montagem de camas, beliches e cabeceiras

### Montagem de Móveis Comerciais e Escritório

- Montagem de móveis de escritório
- Montagem de estações de trabalho e home office

### Outros Serviços Disponíveis

- Instalação de prateleiras e suportes de TV
- Desmontagem de móveis para mudança
- Conserto, ajustes e reparos em móveis

## Atendimento Rápido e Local no Aberta dos Morros

Atendemos o Aberta dos Morros com agilidade e compromisso. Trabalhamos de segunda a sábado, sempre buscando encaixar o atendimento no horário que for melhor para você.

O orçamento é gratuito, sem compromisso, e o serviço é realizado com cuidado desde a primeira peça até o acabamento final.

## Solicite Seu Orçamento

Entre em contato agora mesmo e agende o serviço com um montador de móveis no Aberta dos Morros. Atendimento rápido, preço justo e trabalho bem feito.`, servicesAvailable: allServiceIds },
  { id: "agronomia", slug: "agronomia", name: "Agronomia", metaTitle: "Montador de Móveis na Agronomia com o Melhor Preço", metaDescription: "Montador de móveis profissional na Agronomia em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Agronomia", description: "Serviços de montagem de móveis na Agronomia", content: generateNeighborhoodContent("Agronomia"), servicesAvailable: allServiceIds },
  { id: "anchieta", slug: "anchieta", name: "Anchieta", metaTitle: "Montador de Móveis na Anchieta com o Melhor Preço", metaDescription: "Montador de móveis profissional na Anchieta em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Anchieta", description: "Serviços de montagem de móveis no Anchieta", content: `Está precisando de um montador de móveis no Anchieta confiável e experiente? Então você acabou de encontrar a solução ideal. Atendemos todo o bairro Anchieta, em Porto Alegre, oferecendo serviços completos de montagem, desmontagem e reparo de móveis com qualidade e segurança.

## Vantagens de Contratar um Montador Especializado no Anchieta

Optar por um montador profissional no Anchieta garante que seus móveis sejam instalados da forma correta, evitando danos e retrabalho. Nosso serviço se destaca porque:

- Utilizamos ferramentas apropriadas para cada tipo de móvel
- Seguimos os padrões de montagem indicados por cada fabricante
- Garantimos o serviço executado
- Ajudamos você a ganhar tempo e evitar transtornos

## Serviços de Montagem de Móveis no Anchieta

Atuamos com uma ampla variedade de serviços no bairro Anchieta, incluindo:

- Montagem de guarda-roupas de diferentes modelos e marcas
- Montagem de cozinhas planejadas e moduladas
- Montagem de camas, beliches e cabeceiras
- Montagem de móveis corporativos e para home office
- Instalação de prateleiras, nichos e suportes para TV
- Desmontagem de móveis para transporte ou mudança
- Ajustes, consertos e manutenção de móveis

## Atendimento Ágil no Bairro Anchieta

Nossa equipe atende o Anchieta com rapidez, organização e profissionalismo. Trabalhamos de segunda a sábado, com orçamento gratuito e sem compromisso.

📞 Entre em contato agora mesmo e solicite seu orçamento!`, servicesAvailable: allServiceIds },
  { id: "arquipelago", slug: "arquipelago", name: "Arquipélago", metaTitle: "Montador de Móveis no Arquipélago com o Melhor Preço", metaDescription: "Montador de móveis profissional no Arquipélago em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Arquipélago", description: "Serviços de montagem de móveis no Arquipélago", content: generateNeighborhoodContent("Arquipélago"), servicesAvailable: allServiceIds },
  { id: "auxiliadora", slug: "auxiliadora", name: "Auxiliadora", metaTitle: "Montador de Móveis na Auxiliadora com o Melhor Preço", metaDescription: "Montador de móveis profissional na Auxiliadora em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Auxiliadora", description: "Serviços de montagem de móveis na Auxiliadora", content: generateNeighborhoodContent("Auxiliadora"), servicesAvailable: allServiceIds },
  { id: "azenha", slug: "azenha", name: "Azenha", metaTitle: "Montador de Móveis na Azenha com o Melhor Preço", metaDescription: "Montador de móveis profissional na Azenha em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Azenha", description: "Serviços de montagem de móveis na Azenha", content: generateNeighborhoodContent("Azenha"), servicesAvailable: allServiceIds },
  { id: "bela-vista", slug: "bela-vista", name: "Bela Vista", metaTitle: "Montador de Móveis na Bela Vista com o Melhor Preço", metaDescription: "Montador de móveis profissional na Bela Vista em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Bela Vista", description: "Serviços de montagem de móveis na Bela Vista", content: generateNeighborhoodContent("Bela Vista"), servicesAvailable: allServiceIds },
  { id: "belem-novo", slug: "belem-novo", name: "Belém Novo", metaTitle: "Montador de Móveis no Belém Novo com o Melhor Preço", metaDescription: "Montador de móveis profissional no Belém Novo em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Belém Novo", description: "Serviços de montagem de móveis no Belém Novo", content: generateNeighborhoodContent("Belém Novo"), servicesAvailable: allServiceIds },
  { id: "belem-velho", slug: "belem-velho", name: "Belém Velho", metaTitle: "Montador de Móveis no Belém Velho com o Melhor Preço", metaDescription: "Montador de móveis profissional no Belém Velho em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Belém Velho", description: "Serviços de montagem de móveis no Belém Velho", content: generateNeighborhoodContent("Belém Velho"), servicesAvailable: allServiceIds },
  { id: "boa-vista", slug: "boa-vista", name: "Boa Vista", metaTitle: "Montador de Móveis na Boa Vista com o Melhor Preço", metaDescription: "Montador de móveis profissional na Boa Vista em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Boa Vista", description: "Serviços de montagem de móveis na Boa Vista", content: generateNeighborhoodContent("Boa Vista"), servicesAvailable: allServiceIds },
  { id: "bom-fim", slug: "bom-fim", name: "Bom Fim", metaTitle: "Montador de Móveis no Bom Fim com o Melhor Preço", metaDescription: "Montador de móveis profissional no Bom Fim em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Bom Fim", description: "Serviços de montagem de móveis no Bom Fim", content: generateNeighborhoodContent("Bom Fim"), servicesAvailable: allServiceIds },
  { id: "bom-jesus", slug: "bom-jesus", name: "Bom Jesus", metaTitle: "Montador de Móveis no Bom Jesus com o Melhor Preço", metaDescription: "Montador de móveis profissional no Bom Jesus em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Bom Jesus", description: "Serviços de montagem de móveis no Bom Jesus", content: generateNeighborhoodContent("Bom Jesus"), servicesAvailable: allServiceIds },
  { id: "camaqua", slug: "camaqua", name: "Camaquã", metaTitle: "Montador de Móveis no Camaquã com o Melhor Preço", metaDescription: "Montador de móveis profissional no Camaquã em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Camaquã", description: "Serviços de montagem de móveis no Camaquã", content: generateNeighborhoodContent("Camaquã"), servicesAvailable: allServiceIds },
  { id: "campo-novo", slug: "campo-novo", name: "Campo Novo", metaTitle: "Montador de Móveis no Campo Novo com o Melhor Preço", metaDescription: "Montador de móveis profissional no Campo Novo em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Campo Novo", description: "Serviços de montagem de móveis no Campo Novo", content: generateNeighborhoodContent("Campo Novo"), servicesAvailable: allServiceIds },
  { id: "cascata", slug: "cascata", name: "Cascata", metaTitle: "Montador de Móveis na Cascata com o Melhor Preço", metaDescription: "Montador de móveis profissional na Cascata em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Cascata", description: "Serviços de montagem de móveis na Cascata", content: generateNeighborhoodContent("Cascata"), servicesAvailable: allServiceIds },
  { id: "cavalhada", slug: "cavalhada", name: "Cavalhada", metaTitle: "Montador de Móveis na Cavalhada com o Melhor Preço", metaDescription: "Montador de móveis profissional na Cavalhada em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Cavalhada", description: "Serviços de montagem de móveis na Cavalhada", content: generateNeighborhoodContent("Cavalhada"), servicesAvailable: allServiceIds },
  { id: "centro-historico", slug: "centro-historico", name: "Centro Histórico", metaTitle: "Montador de Móveis no Centro Histórico com o Melhor Preço", metaDescription: "Montador de móveis profissional no Centro Histórico em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Centro Histórico", description: "Serviços de montagem de móveis no Centro Histórico", content: generateNeighborhoodContent("Centro Histórico"), servicesAvailable: allServiceIds },
  { id: "chacara-das-pedras", slug: "chacara-das-pedras", name: "Chácara das Pedras", metaTitle: "Montador de Móveis no Chácara das Pedras com o Melhor Preço", metaDescription: "Montador de móveis profissional no Chácara das Pedras em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Chácara das Pedras", description: "Serviços de montagem de móveis na Chácara das Pedras", content: generateNeighborhoodContent("Chácara das Pedras"), servicesAvailable: allServiceIds },
  { id: "chapeu-do-sol", slug: "chapeu-do-sol", name: "Chapéu do Sol", metaTitle: "Montador de Móveis no Chapéu do Sol com o Melhor Preço", metaDescription: "Montador de móveis profissional no Chapéu do Sol em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Chapéu do Sol", description: "Serviços de montagem de móveis no Chapéu do Sol", content: generateNeighborhoodContent("Chapéu do Sol"), servicesAvailable: allServiceIds },
  { id: "cidade-baixa", slug: "cidade-baixa", name: "Cidade Baixa", metaTitle: "Montador de Móveis na Cidade Baixa com o Melhor Preço", metaDescription: "Montador de móveis profissional na Cidade Baixa em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Cidade Baixa", description: "Serviços de montagem de móveis na Cidade Baixa", content: generateNeighborhoodContent("Cidade Baixa"), servicesAvailable: allServiceIds },
  { id: "coronel-aparicio-borges", slug: "coronel-aparicio-borges", name: "Coronel Aparício Borges", metaTitle: "Montador de Móveis no Coronel Aparício Borges com o Melhor Preço", metaDescription: "Montador de móveis profissional no Coronel Aparício Borges em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Coronel Aparício Borges", description: "Serviços de montagem de móveis no Coronel Aparício Borges", content: generateNeighborhoodContent("Coronel Aparício Borges"), servicesAvailable: allServiceIds },
  { id: "costa-e-silva", slug: "costa-e-silva", name: "Costa e Silva", metaTitle: "Montador de Móveis na Costa e Silva com o Melhor Preço", metaDescription: "Montador de móveis profissional na Costa e Silva em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Costa e Silva", description: "Serviços de montagem de móveis no Costa e Silva", content: generateNeighborhoodContent("Costa e Silva"), servicesAvailable: allServiceIds },
  { id: "cristal", slug: "cristal", name: "Cristal", metaTitle: "Montador de Móveis no Cristal com o Melhor Preço", metaDescription: "Montador de móveis profissional no Cristal em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Cristal", description: "Serviços de montagem de móveis no Cristal", content: generateNeighborhoodContent("Cristal"), servicesAvailable: allServiceIds },
  { id: "cristo-redentor", slug: "cristo-redentor", name: "Cristo Redentor", metaTitle: "Montador de Móveis no Cristo Redentor com o Melhor Preço", metaDescription: "Montador de móveis profissional no Cristo Redentor em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Cristo Redentor", description: "Serviços de montagem de móveis no Cristo Redentor", content: generateNeighborhoodContent("Cristo Redentor"), servicesAvailable: allServiceIds },
  { id: "espirito-santo", slug: "espirito-santo", name: "Espírito Santo", metaTitle: "Montador de Móveis no Espírito Santo com o Melhor Preço", metaDescription: "Montador de móveis profissional no Espírito Santo em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Espírito Santo", description: "Serviços de montagem de móveis no Espírito Santo", content: generateNeighborhoodContent("Espírito Santo"), servicesAvailable: allServiceIds },
  { id: "extrema", slug: "extrema", name: "Extrema", metaTitle: "Montador de Móveis na Extrema com o Melhor Preço", metaDescription: "Montador de móveis profissional na Extrema em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Extrema", description: "Serviços de montagem de móveis na Extrema", content: generateNeighborhoodContent("Extrema"), servicesAvailable: allServiceIds },
  { id: "farrapos", slug: "farrapos", name: "Farrapos", metaTitle: "Montador de Móveis no Farrapos com o Melhor Preço", metaDescription: "Montador de móveis profissional no Farrapos em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Farrapos", description: "Serviços de montagem de móveis no Farrapos", content: generateNeighborhoodContent("Farrapos"), servicesAvailable: allServiceIds },
  { id: "farroupilha", slug: "farroupilha", name: "Farroupilha", metaTitle: "Montador de Móveis na Farroupilha com o Melhor Preço", metaDescription: "Montador de móveis profissional na Farroupilha em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Farroupilha", description: "Serviços de montagem de móveis no Farroupilha", content: generateNeighborhoodContent("Farroupilha"), servicesAvailable: allServiceIds },
  { id: "floresta", slug: "floresta", name: "Floresta", metaTitle: "Montador de Móveis na Floresta com o Melhor Preço", metaDescription: "Montador de móveis profissional na Floresta em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Floresta", description: "Serviços de montagem de móveis na Floresta", content: generateNeighborhoodContent("Floresta"), servicesAvailable: allServiceIds },
  { id: "gloria", slug: "gloria", name: "Glória", metaTitle: "Montador de Móveis na Glória com o Melhor Preço", metaDescription: "Montador de móveis profissional na Glória em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Glória", description: "Serviços de montagem de móveis na Glória", content: generateNeighborhoodContent("Glória"), servicesAvailable: allServiceIds },
  { id: "guaruja", slug: "guaruja", name: "Guarujá", metaTitle: "Montador de Móveis no Guarujá com o Melhor Preço", metaDescription: "Montador de móveis profissional no Guarujá em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Guarujá", description: "Serviços de montagem de móveis no Guarujá", content: generateNeighborhoodContent("Guarujá"), servicesAvailable: allServiceIds },
  { id: "higienopolis", slug: "higienopolis", name: "Higienópolis", metaTitle: "Montador de Móveis no Higienópolis com o Melhor Preço", metaDescription: "Montador de móveis profissional no Higienópolis em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis em Higienópolis", description: "Serviços de montagem de móveis em Higienópolis", content: generateNeighborhoodContent("Higienópolis"), servicesAvailable: allServiceIds },
  { id: "hipica", slug: "hipica", name: "Hípica", metaTitle: "Montador de Móveis na Hípica com o Melhor Preço", metaDescription: "Montador de móveis profissional na Hípica em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Hípica", description: "Serviços de montagem de móveis na Hípica", content: generateNeighborhoodContent("Hípica"), servicesAvailable: allServiceIds },
  { id: "humaita", slug: "humaita", name: "Humaitá", metaTitle: "Montador de Móveis no Humaitá com o Melhor Preço", metaDescription: "Montador de móveis profissional no Humaitá em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Humaitá", description: "Serviços de montagem de móveis no Humaitá", content: generateNeighborhoodContent("Humaitá"), servicesAvailable: allServiceIds },
  { id: "independencia", slug: "independencia", name: "Independência", metaTitle: "Montador de Móveis na Independência com o Melhor Preço", metaDescription: "Montador de móveis profissional na Independência em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Independência", description: "Serviços de montagem de móveis na Independência", content: generateNeighborhoodContent("Independência"), servicesAvailable: allServiceIds },
  { id: "ipanema", slug: "ipanema", name: "Ipanema", metaTitle: "Montador de Móveis na Ipanema com o Melhor Preço", metaDescription: "Montador de móveis profissional na Ipanema em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis em Ipanema", description: "Serviços de montagem de móveis em Ipanema", content: generateNeighborhoodContent("Ipanema"), servicesAvailable: allServiceIds },
  { id: "jardim-botanico", slug: "jardim-botanico", name: "Jardim Botânico", metaTitle: "Montador de Móveis no Jardim Botânico com o Melhor Preço", metaDescription: "Montador de móveis profissional no Jardim Botânico em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Jardim Botânico", description: "Serviços de montagem de móveis no Jardim Botânico", content: generateNeighborhoodContent("Jardim Botânico"), servicesAvailable: allServiceIds },
  { id: "jardim-carvalho", slug: "jardim-carvalho", name: "Jardim Carvalho", metaTitle: "Montador de Móveis no Jardim Carvalho com o Melhor Preço", metaDescription: "Montador de móveis profissional no Jardim Carvalho em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Jardim Carvalho", description: "Serviços de montagem de móveis no Jardim Carvalho", content: generateNeighborhoodContent("Jardim Carvalho"), servicesAvailable: allServiceIds },
  { id: "jardim-do-salso", slug: "jardim-do-salso", name: "Jardim do Salso", metaTitle: "Montador de Móveis no Jardim do Salso com o Melhor Preço", metaDescription: "Montador de móveis profissional no Jardim do Salso em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Jardim do Salso", description: "Serviços de montagem de móveis no Jardim do Salso", content: generateNeighborhoodContent("Jardim do Salso"), servicesAvailable: allServiceIds },
  { id: "jardim-europa", slug: "jardim-europa", name: "Jardim Europa", metaTitle: "Montador de Móveis na Jardim Europa com o Melhor Preço", metaDescription: "Montador de móveis profissional na Jardim Europa em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Jardim Europa", description: "Serviços de montagem de móveis no Jardim Europa", content: generateNeighborhoodContent("Jardim Europa"), servicesAvailable: allServiceIds },
  { id: "jardim-floresta", slug: "jardim-floresta", name: "Jardim Floresta", metaTitle: "Montador de Móveis na Jardim Floresta com o Melhor Preço", metaDescription: "Montador de móveis profissional na Jardim Floresta em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Jardim Floresta", description: "Serviços de montagem de móveis no Jardim Floresta", content: generateNeighborhoodContent("Jardim Floresta"), servicesAvailable: allServiceIds },
  { id: "jardim-isabel", slug: "jardim-isabel", name: "Jardim Isabel", metaTitle: "Montador de Móveis no Jardim Isabel com o Melhor Preço", metaDescription: "Montador de móveis profissional no Jardim Isabel em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Jardim Isabel", description: "Serviços de montagem de móveis no Jardim Isabel", content: generateNeighborhoodContent("Jardim Isabel"), servicesAvailable: allServiceIds },
  { id: "jardim-itu", slug: "jardim-itu", name: "Jardim Itu", metaTitle: "Montador de Móveis no Jardim Itu com o Melhor Preço", metaDescription: "Montador de móveis profissional no Jardim Itu em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Jardim Itu", description: "Serviços de montagem de móveis no Jardim Itu", content: generateNeighborhoodContent("Jardim Itu"), servicesAvailable: allServiceIds },
  { id: "jardim-leopoldina", slug: "jardim-leopoldina", name: "Jardim Leopoldina", metaTitle: "Montador de Móveis na Jardim Leopoldina com o Melhor Preço", metaDescription: "Montador de móveis profissional na Jardim Leopoldina em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Jardim Leopoldina", description: "Serviços de montagem de móveis no Jardim Leopoldina", content: generateNeighborhoodContent("Jardim Leopoldina"), servicesAvailable: allServiceIds },
  { id: "jardim-lindoia", slug: "jardim-lindoia", name: "Jardim Lindóia", metaTitle: "Montador de Móveis na Jardim Lindóia com o Melhor Preço", metaDescription: "Montador de móveis profissional na Jardim Lindóia em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Jardim Lindóia", description: "Serviços de montagem de móveis no Jardim Lindóia", content: generateNeighborhoodContent("Jardim Lindóia"), servicesAvailable: allServiceIds },
  { id: "jardim-sabara", slug: "jardim-sabara", name: "Jardim Sabará", metaTitle: "Montador de Móveis no Jardim Sabará com o Melhor Preço", metaDescription: "Montador de móveis profissional no Jardim Sabará em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Jardim Sabará", description: "Serviços de montagem de móveis no Jardim Sabará", content: generateNeighborhoodContent("Jardim Sabará"), servicesAvailable: allServiceIds },
  { id: "jardim-sao-pedro", slug: "jardim-sao-pedro", name: "Jardim São Pedro", metaTitle: "Montador de Móveis no Jardim São Pedro com o Melhor Preço", metaDescription: "Montador de móveis profissional no Jardim São Pedro em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Jardim São Pedro", description: "Serviços de montagem de móveis no Jardim São Pedro", content: generateNeighborhoodContent("Jardim São Pedro"), servicesAvailable: allServiceIds },
  { id: "lageado", slug: "lageado", name: "Lageado", metaTitle: "Montador de Móveis no Lageado com o Melhor Preço", metaDescription: "Montador de móveis profissional no Lageado em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Lageado", description: "Serviços de montagem de móveis no Lageado", content: generateNeighborhoodContent("Lageado"), servicesAvailable: allServiceIds },
  { id: "lami", slug: "lami", name: "Lami", metaTitle: "Montador de Móveis no Lami com o Melhor Preço", metaDescription: "Montador de móveis profissional no Lami em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Lami", description: "Serviços de montagem de móveis no Lami", content: generateNeighborhoodContent("Lami"), servicesAvailable: allServiceIds },
  { id: "lomba-do-pinheiro", slug: "lomba-do-pinheiro", name: "Lomba do Pinheiro", metaTitle: "Montador de Móveis no Lomba do Pinheiro com o Melhor Preço", metaDescription: "Montador de móveis profissional no Lomba do Pinheiro em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Lomba do Pinheiro", description: "Serviços de montagem de móveis na Lomba do Pinheiro", content: generateNeighborhoodContent("Lomba do Pinheiro"), servicesAvailable: allServiceIds },
  { id: "mario-quintana", slug: "mario-quintana", name: "Mário Quintana", metaTitle: "Montador de Móveis na Mário Quintana com o Melhor Preço", metaDescription: "Montador de móveis profissional na Mário Quintana em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Mário Quintana", description: "Serviços de montagem de móveis no Mário Quintana", content: generateNeighborhoodContent("Mário Quintana"), servicesAvailable: allServiceIds },
  { id: "medianeira", slug: "medianeira", name: "Medianeira", metaTitle: "Montador de Móveis na Medianeira com o Melhor Preço", metaDescription: "Montador de móveis profissional na Medianeira em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Medianeira", description: "Serviços de montagem de móveis na Medianeira", content: generateNeighborhoodContent("Medianeira"), servicesAvailable: allServiceIds },
  { id: "menino-deus", slug: "menino-deus", name: "Menino Deus", metaTitle: "Montador de Móveis no Menino Deus com o Melhor Preço", metaDescription: "Montador de móveis profissional no Menino Deus em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Menino Deus", description: "Serviços de montagem de móveis no Menino Deus", content: generateNeighborhoodContent("Menino Deus"), servicesAvailable: allServiceIds },
  { id: "moinhos-de-vento", slug: "moinhos-de-vento", name: "Moinhos de Vento", metaTitle: "Montador de Móveis no Moinhos de Vento com o Melhor Preço", metaDescription: "Montador de móveis profissional no Moinhos de Vento em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Moinhos de Vento", description: "Serviços de montagem de móveis no Moinhos de Vento", content: generateNeighborhoodContent("Moinhos de Vento"), servicesAvailable: allServiceIds },
  { id: "mont-serrat", slug: "mont-serrat", name: "Mont Serrat", metaTitle: "Montador de Móveis no Mont Serrat com o Melhor Preço", metaDescription: "Montador de móveis profissional no Mont Serrat em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Mont Serrat", description: "Serviços de montagem de móveis no Mont Serrat", content: generateNeighborhoodContent("Mont Serrat"), servicesAvailable: allServiceIds },
  { id: "morro-santana", slug: "morro-santana", name: "Morro Santana", metaTitle: "Montador de Móveis na Morro Santana com o Melhor Preço", metaDescription: "Montador de móveis profissional na Morro Santana em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Morro Santana", description: "Serviços de montagem de móveis no Morro Santana", content: generateNeighborhoodContent("Morro Santana"), servicesAvailable: allServiceIds },
  { id: "navegantes", slug: "navegantes", name: "Navegantes", metaTitle: "Montador de Móveis no Navegantes com o Melhor Preço", metaDescription: "Montador de móveis profissional no Navegantes em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Navegantes", description: "Serviços de montagem de móveis no Navegantes", content: generateNeighborhoodContent("Navegantes"), servicesAvailable: allServiceIds },
  { id: "nonoai", slug: "nonoai", name: "Nonoai", metaTitle: "Montador de Móveis no Nonoai com o Melhor Preço", metaDescription: "Montador de móveis profissional no Nonoai em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Nonoai", description: "Serviços de montagem de móveis no Nonoai", content: generateNeighborhoodContent("Nonoai"), servicesAvailable: allServiceIds },
  { id: "parque-santa-fe", slug: "parque-santa-fe", name: "Parque Santa Fé", metaTitle: "Montador de Móveis no Parque Santa Fé com o Melhor Preço", metaDescription: "Montador de móveis profissional no Parque Santa Fé em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Parque Santa Fé", description: "Serviços de montagem de móveis no Parque Santa Fé", content: generateNeighborhoodContent("Parque Santa Fé"), servicesAvailable: allServiceIds },
  { id: "partenon", slug: "partenon", name: "Partenon", metaTitle: "Montador de Móveis no Partenon com o Melhor Preço", metaDescription: "Montador de móveis profissional no Partenon em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Partenon", description: "Serviços de montagem de móveis no Partenon", content: generateNeighborhoodContent("Partenon"), servicesAvailable: allServiceIds },
  { id: "passo-da-areia", slug: "passo-da-areia", name: "Passo da Areia", metaTitle: "Montador de Móveis na Passo da Areia com o Melhor Preço", metaDescription: "Montador de móveis profissional na Passo da Areia em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Passo da Areia", description: "Serviços de montagem de móveis no Passo da Areia", content: generateNeighborhoodContent("Passo da Areia"), servicesAvailable: allServiceIds },
  { id: "passo-das-pedras", slug: "passo-das-pedras", name: "Passo das Pedras", metaTitle: "Montador de Móveis no Passo das Pedras com o Melhor Preço", metaDescription: "Montador de móveis profissional no Passo das Pedras em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Passo das Pedras", description: "Serviços de montagem de móveis no Passo das Pedras", content: generateNeighborhoodContent("Passo das Pedras"), servicesAvailable: allServiceIds },
  { id: "pedra-redonda", slug: "pedra-redonda", name: "Pedra Redonda", metaTitle: "Montador de Móveis na Pedra Redonda com o Melhor Preço", metaDescription: "Montador de móveis profissional na Pedra Redonda em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Pedra Redonda", description: "Serviços de montagem de móveis na Pedra Redonda", content: generateNeighborhoodContent("Pedra Redonda"), servicesAvailable: allServiceIds },
  { id: "petropolis", slug: "petropolis", name: "Petrópolis", metaTitle: "Montador de Móveis no Petrópolis com o Melhor Preço", metaDescription: "Montador de móveis profissional no Petrópolis em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis em Petrópolis", description: "Serviços de montagem de móveis em Petrópolis", content: generateNeighborhoodContent("Petrópolis"), servicesAvailable: allServiceIds },
  { id: "ponta-grossa", slug: "ponta-grossa", name: "Ponta Grossa", metaTitle: "Montador de Móveis na Ponta Grossa com o Melhor Preço", metaDescription: "Montador de móveis profissional na Ponta Grossa em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Ponta Grossa", description: "Serviços de montagem de móveis na Ponta Grossa", content: generateNeighborhoodContent("Ponta Grossa"), servicesAvailable: allServiceIds },
  { id: "praia-de-belas", slug: "praia-de-belas", name: "Praia de Belas", metaTitle: "Montador de Móveis no Praia de Belas com o Melhor Preço", metaDescription: "Montador de móveis profissional no Praia de Belas em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Praia de Belas", description: "Serviços de montagem de móveis na Praia de Belas", content: generateNeighborhoodContent("Praia de Belas"), servicesAvailable: allServiceIds },
  { id: "restinga", slug: "restinga", name: "Restinga", metaTitle: "Montador de Móveis na Restinga com o Melhor Preço", metaDescription: "Montador de móveis profissional na Restinga em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Restinga", description: "Serviços de montagem de móveis na Restinga", content: generateNeighborhoodContent("Restinga"), servicesAvailable: allServiceIds },
  { id: "rio-branco", slug: "rio-branco", name: "Rio Branco", metaTitle: "Montador de Móveis no Rio Branco com o Melhor Preço", metaDescription: "Montador de móveis profissional no Rio Branco em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Rio Branco", description: "Serviços de montagem de móveis no Rio Branco", content: generateNeighborhoodContent("Rio Branco"), servicesAvailable: allServiceIds },
  { id: "rubem-berta", slug: "rubem-berta", name: "Rubem Berta", metaTitle: "Montador de Móveis na Rubem Berta com o Melhor Preço", metaDescription: "Montador de móveis profissional na Rubem Berta em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Rubem Berta", description: "Serviços de montagem de móveis no Rubem Berta", content: generateNeighborhoodContent("Rubem Berta"), servicesAvailable: allServiceIds },
  { id: "santa-cecilia", slug: "santa-cecilia", name: "Santa Cecília", metaTitle: "Montador de Móveis na Santa Cecília com o Melhor Preço", metaDescription: "Montador de móveis profissional na Santa Cecília em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Santa Cecília", description: "Serviços de montagem de móveis na Santa Cecília", content: generateNeighborhoodContent("Santa Cecília"), servicesAvailable: allServiceIds },
  { id: "santa-maria-goretti", slug: "santa-maria-goretti", name: "Santa Maria Goretti", metaTitle: "Montador de Móveis no Santa Maria Goretti com o Melhor Preço", metaDescription: "Montador de móveis profissional no Santa Maria Goretti em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Santa Maria Goretti", description: "Serviços de montagem de móveis na Santa Maria Goretti", content: generateNeighborhoodContent("Santa Maria Goretti"), servicesAvailable: allServiceIds },
  { id: "santa-rosa-de-lima", slug: "santa-rosa-de-lima", name: "Santa Rosa de Lima", metaTitle: "Montador de Móveis na Santa Rosa de Lima com o Melhor Preço", metaDescription: "Montador de móveis profissional na Santa Rosa de Lima em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Santa Rosa de Lima", description: "Serviços de montagem de móveis na Santa Rosa de Lima", content: generateNeighborhoodContent("Santa Rosa de Lima"), servicesAvailable: allServiceIds },
  { id: "santa-tereza", slug: "santa-tereza", name: "Santa Tereza", metaTitle: "Montador de Móveis na Santa Tereza com o Melhor Preço", metaDescription: "Montador de móveis profissional na Santa Tereza em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Santa Tereza", description: "Serviços de montagem de móveis na Santa Tereza", content: generateNeighborhoodContent("Santa Tereza"), servicesAvailable: allServiceIds },
  { id: "santana", slug: "santana", name: "Santana", metaTitle: "Montador de Móveis na Santana com o Melhor Preço", metaDescription: "Montador de móveis profissional na Santana em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis em Santana", description: "Serviços de montagem de móveis em Santana", content: generateNeighborhoodContent("Santana"), servicesAvailable: allServiceIds },
  { id: "santo-antonio", slug: "santo-antonio", name: "Santo Antônio", metaTitle: "Montador de Móveis no Santo Antônio com o Melhor Preço", metaDescription: "Montador de móveis profissional no Santo Antônio em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Santo Antônio", description: "Serviços de montagem de móveis no Santo Antônio", content: generateNeighborhoodContent("Santo Antônio"), servicesAvailable: allServiceIds },
  { id: "sao-caetano", slug: "sao-caetano", name: "São Caetano", metaTitle: "Montador de Móveis no São Caetano com o Melhor Preço", metaDescription: "Montador de móveis profissional no São Caetano em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no São Caetano", description: "Serviços de montagem de móveis no São Caetano", content: generateNeighborhoodContent("São Caetano"), servicesAvailable: allServiceIds },
  { id: "sao-geraldo", slug: "sao-geraldo", name: "São Geraldo", metaTitle: "Montador de Móveis no São Geraldo com o Melhor Preço", metaDescription: "Montador de móveis profissional no São Geraldo em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no São Geraldo", description: "Serviços de montagem de móveis no São Geraldo", content: generateNeighborhoodContent("São Geraldo"), servicesAvailable: allServiceIds },
  { id: "sao-joao", slug: "sao-joao", name: "São João", metaTitle: "Montador de Móveis no São João com o Melhor Preço", metaDescription: "Montador de móveis profissional no São João em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no São João", description: "Serviços de montagem de móveis no São João", content: generateNeighborhoodContent("São João"), servicesAvailable: allServiceIds },
  { id: "sao-sebastiao", slug: "sao-sebastiao", name: "São Sebastião", metaTitle: "Montador de Móveis no São Sebastião com o Melhor Preço", metaDescription: "Montador de móveis profissional no São Sebastião em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no São Sebastião", description: "Serviços de montagem de móveis no São Sebastião", content: generateNeighborhoodContent("São Sebastião"), servicesAvailable: allServiceIds },
  { id: "sarandi", slug: "sarandi", name: "Sarandi", metaTitle: "Montador de Móveis no Sarandi com o Melhor Preço", metaDescription: "Montador de móveis profissional no Sarandi em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Sarandi", description: "Serviços de montagem de móveis no Sarandi", content: generateNeighborhoodContent("Sarandi"), servicesAvailable: allServiceIds },
  { id: "serraria", slug: "serraria", name: "Serraria", metaTitle: "Montador de Móveis na Serraria com o Melhor Preço", metaDescription: "Montador de móveis profissional na Serraria em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Serraria", description: "Serviços de montagem de móveis na Serraria", content: generateNeighborhoodContent("Serraria"), servicesAvailable: allServiceIds },
  { id: "setimo-ceu", slug: "setimo-ceu", name: "Sétimo Céu", metaTitle: "Montador de Móveis no Sétimo Céu com o Melhor Preço", metaDescription: "Montador de móveis profissional no Sétimo Céu em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Sétimo Céu", description: "Serviços de montagem de móveis no Sétimo Céu", content: generateNeighborhoodContent("Sétimo Céu"), servicesAvailable: allServiceIds },
  { id: "teresopolis", slug: "teresopolis", name: "Teresópolis", metaTitle: "Montador de Móveis na Teresópolis com o Melhor Preço", metaDescription: "Montador de móveis profissional na Teresópolis em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis em Teresópolis", description: "Serviços de montagem de móveis em Teresópolis", content: generateNeighborhoodContent("Teresópolis"), servicesAvailable: allServiceIds },
  { id: "tres-figueiras", slug: "tres-figueiras", name: "Três Figueiras", metaTitle: "Montador de Móveis no Três Figueiras com o Melhor Preço", metaDescription: "Montador de móveis profissional no Três Figueiras em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis no Três Figueiras", description: "Serviços de montagem de móveis no Três Figueiras", content: generateNeighborhoodContent("Três Figueiras"), servicesAvailable: allServiceIds },
  { id: "tristeza", slug: "tristeza", name: "Tristeza", metaTitle: "Montador de Móveis na Tristeza com o Melhor Preço", metaDescription: "Montador de móveis profissional na Tristeza em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Tristeza", description: "Serviços de montagem de móveis na Tristeza", content: generateNeighborhoodContent("Tristeza"), servicesAvailable: allServiceIds },
  { id: "vila-assuncao", slug: "vila-assuncao", name: "Vila Assunção", metaTitle: "Montador de Móveis na Vila Assunção com o Melhor Preço", metaDescription: "Montador de móveis profissional na Vila Assunção em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Vila Assunção", description: "Serviços de montagem de móveis na Vila Assunção", content: generateNeighborhoodContent("Vila Assunção"), servicesAvailable: allServiceIds },
  { id: "vila-conceicao", slug: "vila-conceicao", name: "Vila Conceição", metaTitle: "Montador de Móveis na Vila Conceição com o Melhor Preço", metaDescription: "Montador de móveis profissional na Vila Conceição em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Vila Conceição", description: "Serviços de montagem de móveis na Vila Conceição", content: generateNeighborhoodContent("Vila Conceição"), servicesAvailable: allServiceIds },
  { id: "vila-ipiranga", slug: "vila-ipiranga", name: "Vila Ipiranga", metaTitle: "Montador de Móveis na Vila Ipiranga com o Melhor Preço", metaDescription: "Montador de móveis profissional na Vila Ipiranga em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Vila Ipiranga", description: "Serviços de montagem de móveis na Vila Ipiranga", content: generateNeighborhoodContent("Vila Ipiranga"), servicesAvailable: allServiceIds },
  { id: "vila-jardim", slug: "vila-jardim", name: "Vila Jardim", metaTitle: "Montador de Móveis na Vila Jardim com o Melhor Preço", metaDescription: "Montador de móveis profissional na Vila Jardim em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Vila Jardim", description: "Serviços de montagem de móveis na Vila Jardim", content: generateNeighborhoodContent("Vila Jardim"), servicesAvailable: allServiceIds },
  { id: "vila-joao-pessoa", slug: "vila-joao-pessoa", name: "Vila João Pessoa", metaTitle: "Montador de Móveis na Vila João Pessoa com o Melhor Preço", metaDescription: "Montador de móveis profissional na Vila João Pessoa em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Vila João Pessoa", description: "Serviços de montagem de móveis na Vila João Pessoa", content: generateNeighborhoodContent("Vila João Pessoa"), servicesAvailable: allServiceIds },
  { id: "vila-nova", slug: "vila-nova", name: "Vila Nova", metaTitle: "Montador de Móveis na Vila Nova com o Melhor Preço", metaDescription: "Montador de móveis profissional na Vila Nova em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Vila Nova", description: "Serviços de montagem de móveis na Vila Nova", content: generateNeighborhoodContent("Vila Nova"), servicesAvailable: allServiceIds },
  { id: "vila-sao-jose", slug: "vila-sao-jose", name: "Vila São José", metaTitle: "Montador de Móveis na Vila São José com o Melhor Preço", metaDescription: "Montador de móveis profissional na Vila São José em Porto Alegre. Montagem, desmontagem e conserto de móveis. Orçamento grátis!", h1: "Montador de Móveis na Vila São José", description: "Serviços de montagem de móveis na Vila São José", content: generateNeighborhoodContent("Vila São José"), servicesAvailable: allServiceIds },
];

/**
 * Busca um bairro pelo slug
 */
export const getNeighborhoodBySlug = (slug: string): Neighborhood | undefined => {
  return neighborhoods.find((n) => n.slug === slug);
};

/**
 * Busca um bairro pelo ID
 */
export const getNeighborhoodById = (id: string): Neighborhood | undefined => {
  return neighborhoods.find((n) => n.id === id);
};

/**
 * Retorna todos os slugs de bairros (útil para sitemap)
 */
export const getAllNeighborhoodSlugs = (): string[] => {
  return neighborhoods.map((n) => n.slug);
};

/**
 * Retorna bairros agrupados por letra inicial
 */
export const getNeighborhoodsGroupedByLetter = (): Record<string, Neighborhood[]> => {
  return neighborhoods.reduce((acc, neighborhood) => {
    const firstLetter = neighborhood.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(neighborhood);
    return acc;
  }, {} as Record<string, Neighborhood[]>);
};

/**
 * Compatibilidade com estrutura antiga (bairros simples)
 */
export const bairros = neighborhoods.map((n) => ({
  slug: n.slug,
  nome: n.name,
}));

export default neighborhoods;
