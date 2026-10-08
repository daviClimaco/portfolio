import { MapPin } from 'lucide-react'
import Section from '../components/Section.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  return (
    <Section id="sobre" title="Sobre">
      <div className="about">
        <div className="about-text">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="about-place">
            <MapPin size={16} aria-hidden="true" /> {profile.location}
          </p>
        </div>
        <img className="about-photo" src={profile.photo} alt={profile.photoAlt} width="400" height="500" loading="lazy" />
      </div>
    </Section>
  )
}
