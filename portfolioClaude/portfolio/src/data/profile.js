import photo from '../assets/photo.svg'

// Dados pessoais. Linhas marcadas com PREENCHER precisam ser trocadas.
export const profile = {
  name: 'Davi Climaco', // CONFIRMAR: nome completo como quer que apareça
  role: 'Desenvolvedor Full Stack Júnior',
  company: "B5's Tecnologia",
  location: 'Maringá, PR',
  headline:
    'Mantenho e moderno sistemas legados Progress/OpenEdge em produção e construo APIs e análise de dados em projetos próprios.',
  // Aparece no painel de código do topo (src/sections/Hero.jsx).
  focus: ['Progress/OpenEdge', 'Python', 'Java'],

  email: 'PREENCHER@exemplo.com', // PREENCHER
  github: 'https://github.com/daviClimaco',
  linkedin: 'https://www.linkedin.com/in/davibclimaco/',
  repo: 'https://github.com/daviClimaco/portfolio',

  // Arquivo dentro de /public. Substitua public/curriculo.pdf pelo seu.
  resume: 'curriculo.pdf',
  photo, // Para usar uma foto sua: coloque src/assets/photo.jpg e importe aqui.
  photoAlt: 'Foto de Davi Climaco', // PREENCHER depois de trocar a foto

  about: [
    "Sou desenvolvedor full stack júnior na B5's Tecnologia, em Maringá. Trabalho com sistemas legados em Progress/OpenEdge que estão em produção, onde mexer em código existente com cuidado faz parte da rotina.",
    'Estudo Engenharia de Software na Unicesumar e desenvolvo projetos próprios em Python, Java e C#, como uma plataforma de análise de avaliações de restaurantes e um jogo de luta 2D em Unity.',
    'PREENCHER: um parágrafo sobre o que você busca agora (tipo de vaga, área, problemas que quer resolver).',
  ],
}
