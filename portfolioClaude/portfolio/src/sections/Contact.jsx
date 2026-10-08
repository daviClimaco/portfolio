import Section from '../components/Section.jsx'
import ProfileLinks from '../components/Buttons.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  return (
    <Section id="contato" title="Contato">
      <p className="contact-lead">Quer conversar sobre uma vaga, um projeto ou um trecho de código? O e-mail é o caminho mais rápido.</p>
      <a className="contact-mail" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <ProfileLinks />
    </Section>
  )
}
