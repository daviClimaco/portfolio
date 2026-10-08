# Portfólio

Site estático em React e Vite. Sem backend. Todo o conteúdo fica em `src/data`.

Requisito: Node.js 20.19 ou superior (ou 22.12+), exigência do Vite 8.

## Rodar localmente

```bash
npm install
npm run dev
```

O terminal mostra o endereço (normalmente http://localhost:5173). Para testar o build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

| Caminho | Função |
| --- | --- |
| `index.html` | Título, meta description, Open Graph e favicon |
| `vite.config.js` | Configuração do Vite. `base: './'` faz o build funcionar em subpasta ou na raiz |
| `public/` | Arquivos copiados como estão: `favicon.svg`, `robots.txt`, `curriculo.pdf` |
| `.github/workflows/deploy.yml` | Deploy automático no GitHub Pages a cada push na `main` |
| `src/main.jsx` | Ponto de entrada: carrega fontes, estilos e o `App` |
| `src/App.jsx` | Monta a página na ordem das seções |
| `src/data/` | Seu conteúdo: `profile`, `navigation`, `skills`, `experience`, `education`, `projects` |
| `src/sections/` | Uma seção por arquivo: Hero, About, Skills, Experience, Projects, Education, Contact |
| `src/components/` | Peças reutilizáveis: Navbar, Footer, Section, Tags, botões e ícones de marcas |
| `src/hooks/useActiveSection.js` | Destaca no menu a seção visível |
| `src/styles/tokens.css` | Cores, tipografia, espaçamentos. Tema escuro e claro |
| `src/styles/base.css` | Reset, links, botões, tags, foco e `prefers-reduced-motion` |
| `src/styles/sections.css` | Estilo de cada seção |
| `src/assets/` | Foto e imagens dos projetos |

## Personalizar

1. Abra `src/data/profile.js`. Tudo marcado com `PREENCHER` ou `CONFIRMAR` precisa ser trocado (e-mail, nome completo, parágrafo final do Sobre).
2. Troque `public/curriculo.pdf` pelo seu currículo, mantendo o nome do arquivo.
3. Foto: coloque `src/assets/photo.jpg` e mude o import em `profile.js`.
4. Experiência: adicione um objeto no topo da lista em `src/data/experience.js`.
5. Projetos: copie um objeto em `src/data/projects.js` e salve a imagem em `src/assets/projects/`. Se `github` ou `link` ficarem vazios, o botão some.
6. Tecnologias: edite os grupos em `src/data/skills.js`.
7. Cor de destaque: variável `--accent` em `src/styles/tokens.css`.

### Light mode

As cores do tema claro já existem em `tokens.css`. Para ativar, troque `data-theme="dark"` por `data-theme="light"` na tag `<html>` do `index.html`. Um botão de alternância precisa apenas fazer `document.documentElement.dataset.theme = 'light'`.

## SEO

O `index.html` já tem title, description, Open Graph básico e idioma. Para a pré-visualização de links em redes sociais, gere uma imagem PNG de 1200x630, salve em `public/og.png` e adicione ao `<head>`, com a URL absoluta do site publicado:

```html
<meta property="og:image" content="https://SEU-USUARIO.github.io/NOME-DO-REPO/og.png" />
<meta property="og:url" content="https://SEU-USUARIO.github.io/NOME-DO-REPO/" />
```

## Criar o repositório e subir o código

1. No GitHub, clique em New repository, dê o nome (por exemplo `portfolio`), deixe público e **não** marque README, .gitignore nem licença.
2. Na pasta do projeto:

```bash
git init
git add .
git commit -m "Portfólio inicial"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```

Se o repositório já existir e tiver commits (por exemplo, um README criado pelo GitHub), o `push` será rejeitado. Neste caso rode `git pull origin main --allow-unrelated-histories`, resolva conflitos se houver e envie de novo.

## Publicar no GitHub Pages

1. No repositório: Settings, Pages, em Source escolha **GitHub Actions**.
2. Faça push na `main`. O workflow `Deploy no GitHub Pages` roda sozinho (aba Actions).
3. O site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

Domínio próprio: depois de comprar o domínio, configure em Settings, Pages, Custom domain, e aponte o DNS conforme a documentação do GitHub.

## Publicar na Vercel (alternativa)

1. Em vercel.com, Add New Project e importe o repositório.
2. A Vercel detecta o Vite. Build: `npm run build`. Output: `dist`.
3. Cada push na `main` publica automaticamente.
