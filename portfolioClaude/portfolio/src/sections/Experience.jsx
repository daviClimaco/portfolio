import Section from '../components/Section.jsx'
import Tags from '../components/Tags.jsx'
import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiência">
      <ol className="timeline">
        {experience.map((job) => (
          <li className="timeline-item" key={job.id}>
            <p className="meta">{job.period}</p>
            <h3>
              {job.role}, {job.company}
            </h3>
            <p>{job.description}</p>
            <Tags items={job.tags} />
          </li>
        ))}
      </ol>
    </Section>
  )
}
