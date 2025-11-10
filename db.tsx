interface Technology {
  name: string;
  color: string;
  icon: any;
}

interface Technologies {
  [key: string]: Technology;
}

interface Challenge {
  title: string;
  text: string;
}

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  link: string;
  id: string;
  created: string;
  fastDescription: string;
  overview: string;
  challenges: Challenge[];
}

export const PROJECTS: Project[] = [
  {
    title: 'Let Me Ask',
    id: '1',
    created: '19/027/2004',
    description:
      'O Let Me Ask é um app de perguntas e respostas em tempo real para lives e eventos, onde os participantes podem enviar questões, votar nas mais relevantes e acompanhar se já foram respondidas. A proposta é organizar a participação do público, promovendo engajamento e clareza na comunicação.',
    fastDescription:
      'App de perguntas e respostas em tempo real para eventos e transmissões ao vivo.',
    overview:
      'O projeto Let Me Ask foi desenvolvido para modernizar a interação em lives, eventos e conferências, tornando o processo de perguntas mais simples e democrático. A aplicação é totalmente responsiva, conta com autenticação via Google e integrações em tempo real via WebSocket.',
    images: ['/letmeasktwo.jpeg', '/letmeaskone.jpeg'],
    technologies: [
      'react',
      'vite',
      'typescript',
      'tailwind',
      'reactRouter',
      'reactQuery',
      'hooks',
      'node',
      'fastify',
      'postgres',
      'drizzle',
      'zod',
    ],
    link: 'https://github.com/wolfhackd/let-me-ask',
    challenges: [
      {
        title: 'Gerenciamento em tempo real',
        text: 'Implementar o sistema de votação e atualização de perguntas sem recarregar a página exigiu o uso eficiente de WebSockets e React Query.',
      },
      {
        title: 'Autenticação segura com Google',
        text: 'Garantir uma autenticação fluida e segura usando OAuth2 e persistência de sessão foi um dos maiores desafios técnicos.',
      },
    ],
  },
  {
    title: 'Spotify',
    id: '2',
    created: '19/027/2004',
    description:
      'Website de música inspirado no Spotify, que permite ao usuário navegar entre playlists, ouvir prévias de faixas e explorar artistas e álbuns.',
    fastDescription: 'Clone funcional do Spotify com navegação fluida e foco em UX e performance.',
    overview:
      'O projeto foi desenvolvido para estudar arquitetura de aplicações complexas com React e Node.js, simulando uma plataforma de streaming real. A aplicação inclui rotas dinâmicas, autenticação e integração com uma API de músicas mockada.',
    images: ['/spotify.jpg', '/spotify2.jpg', '/spotify3.jpg'],
    technologies: [
      'react',
      'vite',
      'javascript',
      'tailwind',
      'reactRouter',
      'hooks',
      'node',
      'express',
      'mongodb',
      'zod',
    ],
    link: 'https://github.com/wolfhackd/Spotify-Project',
    challenges: [
      {
        title: 'Renderização de listas dinâmicas',
        text: 'Gerenciar listas grandes de músicas sem perda de performance foi desafiador, exigindo otimização de renderização e uso de lazy loading.',
      },
      {
        title: 'Simulação de player funcional',
        text: 'Reproduzir a experiência de um player real com controle de progresso, volume e pausa exigiu lógica assíncrona e estados bem estruturados.',
      },
    ],
  },
  {
    title: 'PortuGênio',
    id: '3',
    created: '19/027/2004',
    description:
      'O PortuGênio é um projeto web voltado para o ensino e aprimoramento da língua portuguesa, com foco inicial na gramática. A plataforma utiliza inteligência artificial para oferecer correções automáticas, explicações personalizadas e exemplos práticos, tornando o aprendizado mais dinâmico e interativo.',
    fastDescription:
      'Plataforma inteligente para aprendizado de gramática com correções automáticas e explicações personalizadas.',
    overview:
      'Desenvolvido com React, Node e integração com IA, o PortuGênio busca tornar o estudo de português mais acessível e prático. A aplicação fornece feedback em tempo real, análises gramaticais e sugestões de melhoria baseadas em contexto.',
    images: ['/portugenio.jpeg', '/portugenio2.jpeg'],
    technologies: [
      'react',
      'vite',
      'typescript',
      'tailwind',
      'fastify',
      'hooks',
      'gemini',
      'node',
      'shadcn',
      'docker',
    ],
    link: 'https://github.com/wolfhackd/PortuGenio',
    challenges: [
      {
        title: 'Integração com modelo de IA',
        text: 'Criar uma comunicação eficiente com a API de IA para interpretar e corrigir textos foi o maior desafio técnico do projeto.',
      },
      {
        title: 'Interface responsiva e acessível',
        text: 'Garantir boa experiência em dispositivos móveis e para pessoas com deficiência visual exigiu foco em acessibilidade e design adaptativo.',
      },
    ],
  },
];
