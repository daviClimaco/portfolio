import Section from '../components/Section.jsx'
import Tags from '../components/Tags.jsx'
import { skills } from '../data/skills.js'

export default function Skills() {
  return (
    <Section id="tecnologias" title="Tecnologias">
      <dl className="skills">
        {skills.map(({ group, items }) => (
          <div className="skills-row" key={group}>
            <dt>{group}</dt>
            <dd>
              <Tags items={items} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
