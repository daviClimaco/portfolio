import reviewImg from '../assets/projects/review.svg'
import gameImg from '../assets/projects/game.svg'
import portfolioImg from '../assets/projects/portfolio.svg'

// Para adicionar um projeto, copie um objeto e cole na lista.
// github e link são opcionais: deixe '' e o botão não aparece.
export const projects = [
    {
        id: 'review-intelligence-platform',
        title: 'Review Intelligence Platform',
        category: 'Dados',
        description:
            'Plataforma de análise de avaliações de restaurantes: pipeline de ETL com cerca de 1.100 avaliações do Google Maps, classificação de sentimento com VADER e com regressão logística + TF-IDF, API em FastAPI e dashboard em Streamlit.',
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Streamlit'],
        image: reviewImg,
        imageAlt: 'Captura do dashboard do Review Intelligence Platform', // PREENCHER ao trocar a imagem
        github: 'https://github.com/daviClimaco/review-intelligence-platform',
        link: '',
    },
    {
        id: 'fighting-game',
        title: 'Jogo de luta 2D',
        category: 'Jogos',
        description:
            'Jogo de luta 2D em Unity, desenvolvido com um amigo, inspirado em Guilty Gear e Capcom vs. SNK 2. Máquina de estados de personagem, buffer de inputs, dados de frame em ScriptableObjects e hitboxes por componente.',
        tags: ['Unity', 'C#'],
        image: gameImg,
        imageAlt: 'Captura do jogo de luta 2D', // PREENCHER ao trocar a imagem
        github: '', // PREENCHER quando o repositório estiver público
        link: '',
    },
    {
        id: 'portfolio',
        title: 'Este portfólio',
        category: 'Web',
        description:
            'Site estático em React e Vite. Todo o conteúdo fica em arquivos separados em src/data, e o deploy é automático pelo GitHub Actions a cada push na branch main.',
        tags: ['React', 'Vite', 'CSS', 'GitHub Actions'],
        image: portfolioImg,
        imageAlt: 'Captura deste portfólio', // PREENCHER ao trocar a imagem
        github: 'https://github.com/daviClimaco/portfolio',
        link: '', // PREENCHER com a URL publicada
    },
]
