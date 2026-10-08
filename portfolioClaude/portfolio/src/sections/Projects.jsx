import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Section from '../components/Section.jsx'
import Tags from '../components/Tags.jsx'
import { GitHubIcon } from '../components/Icons.jsx'
import { projects } from '../data/projects.js'

const ALL = 'Todos'
const categories = [ALL, ...new Set(projects.map((project) => project.category))]

export default function Projects() {
  const [category, setCategory] = useState(ALL)
  const visible = category === ALL ? projects : projects.filter((project) => project.category === category)

  return (
    <Section id="projetos" title="Projetos">
      <div className="filters" role="group" aria-label="Filtrar projetos por categoria">
        {categories.map((name) => (
          <button
            key={name}
            type="button"
            className="filter"
            aria-pressed={category === name}
            onClick={() => setCategory(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <ul className="projects">
        {visible.map((project) => (
          <li className="project" key={project.id}>
            <img
              className="project-image"
              src={project.image}
              alt={project.imageAlt}
              width="1200"
              height="750"
              loading="lazy"
            />
            <div className="project-info">
              <p className="meta">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Tags items={project.tags} />
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon size={16} /> Código
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight size={16} aria-hidden="true" /> Ver projeto
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
