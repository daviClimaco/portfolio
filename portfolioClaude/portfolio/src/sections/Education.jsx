import Section from '../components/Section.jsx'
import { education } from '../data/education.js'

export default function Education() {
    return (
        <Section id="formacao" title="Formação">
            <ul className="education">
                {education.map((item) => (
                    <li key={item.id}>
                        <p className="meta">{item.period}</p>
                        <h3>{item.course}</h3>
                        <p>
                            {item.institution}, {item.place}
                        </p>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
