import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          Feito com React e Vite.{' '}
          <a href={profile.repo} target="_blank" rel="noopener noreferrer">
            Código-fonte
          </a>
        </p>
      </div>
    </footer>
  )
}
