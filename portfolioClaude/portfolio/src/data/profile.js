import photo from '../assets/photo.jpg'

// Dados pessoais.
// Troque os campos marcados com PREENCHER quando tiver as informações finais.
export const profile = {
    name: 'Davi Bomfim Climaco',
    role: 'Desenvolvedor Full Stack Júnior',
    company: "B5's Tecnologia",
    location: 'Maringá, PR',

    headline:
        'Atuo com desenvolvimento e manutenção de sistemas em produção com Progress/OpenEdge e desenvolvo projetos próprios com APIs, Python, JavaScript e análise de dados.',

    // Aparece no painel de código do topo (src/sections/Hero.jsx).
    focus: ['Progress/OpenEdge', 'Python', 'JavaScript', 'SQL'],

    email: 'davibomfimclimaco@gmail.com',
    github: 'https://github.com/daviClimaco',
    linkedin: 'https://www.linkedin.com/in/davibclimaco/',
    repo: 'https://github.com/daviClimaco/portfolio',

    // Arquivo dentro de /public.
    // Substitua public/curriculo.pdf pelo seu currículo.
    resume: 'curriculo.pdf',

    // Substitua pelo caminho da sua foto quando colocar uma imagem real.
    photo,
    photoAlt: 'Foto de Davi Bomfim Climaco',

    about: [
        'Sou desenvolvedor de software júnior na B5S Tecnologia, em Maringá. Entrei como estagiário em agosto de 2025 e fui efetivado em abril de 2026. Hoje trabalho na manutenção e evolução de sistemas corporativos e ERP em Progress 4GL, incluindo integrações entre sistemas e bases de dados com SQL, JavaScript e APIs.',

        'Acompanho a demanda do começo ao fim: entendo a regra de negócio com as áreas envolvidas, desenvolvo, testo, apoio a homologação e valido a entrega com o time, que trabalha com Scrum.',

        'Estudo Engenharia de Software na UniCesumar, com conclusão prevista para 2027, e desenvolvo projetos próprios, como uma plataforma de análise de avaliações de restaurantes em Python, com API em FastAPI e machine learning, e um jogo de luta 2D em Unity.',
    ],
}
