import { Download } from 'lucide-react'
import { profile } from '../data/profile.js'
import { GitHubIcon, LinkedInIcon } from './Icons.jsx'

// Os três botões principais, reutilizados no Hero e no Contato.
export default function ProfileLinks() {
  return (
    <div className="actions">
      <a className="btn btn-primary" href={profile.github} target="_blank" rel="noopener noreferrer">
        <GitHubIcon /> GitHub
      </a>
      <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon /> LinkedIn
      </a>
      <a className="btn" href={`${import.meta.env.BASE_URL}${profile.resume}`} download>
        <Download size={18} aria-hidden="true" /> Currículo
      </a>
    </div>
  )
}
