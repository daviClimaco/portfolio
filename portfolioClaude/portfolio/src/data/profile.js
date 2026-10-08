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
        "Sou desenvolvedor full stack júnior na B5's Tecnologia, em Maringá, trabalhando com manutenção e evolução de sistemas em produção desenvolvidos em Progress/OpenEdge. No dia a dia, atuo em melhorias, correções e desenvolvimento de novas funcionalidades em sistemas existentes.",

        'Estudo Engenharia de Software na Unicesumar e também desenvolvo projetos próprios para ampliar minha experiência prática. Entre eles está uma plataforma de análise de avaliações utilizando Python, processamento de linguagem natural, machine learning e uma API, além de projetos envolvendo desenvolvimento de software e aplicações interativas.',

        'Busco continuar evoluindo como desenvolvedor, trabalhando com desenvolvimento de software, APIs, dados e soluções que resolvam problemas reais, enquanto amplio minha experiência com tecnologias modernas e boas práticas de engenharia de software.',
    ],
}
