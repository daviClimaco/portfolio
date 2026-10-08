import { profile } from '../data/profile.js'
import ProfileLinks from '../components/Buttons.jsx'

const quote = (value) => JSON.stringify(value)

// Painel que mostra os próprios dados do perfil como código.
function CodePanel() {
    const handle = profile.name.split(' ')[0].toLowerCase()
    const entries = [
        ['cargo', quote(profile.role)],
        ['empresa', quote(profile.company)],
        ['local', quote(profile.location)],
        ['foco', `[${profile.focus.map(quote).join(', ')}]`],
    ]
    return (
        <figure className="code hero-item" style={{ '--i': 4 }} aria-label="Resumo do perfil em formato de código">
            <figcaption className="code-tab">profile.js</figcaption>
            <pre>
                <code>
                    <span className="line">
                        <span className="tk-kw">const</span> {handle} = {'{'}
                    </span>
                    {entries.map(([key, value]) => (
                        <span className="line indent" key={key}>
                            <span className="tk-key">{key}</span>: <span className="tk-str">{value}</span>,
                        </span>
                    ))}
                    <span className="line">{'}'}</span>
                </code>
            </pre>
        </figure>
    )
}

export default function Hero() {
    return (
        <header id="inicio" className="hero">
            <div className="container hero-grid">
                <div className="hero-copy">
                    <p className="hero-role hero-item" style={{ '--i': 0 }}>
                        {profile.role} na {profile.company}
                    </p>
                    <h1 className="hero-name hero-item" style={{ '--i': 1 }}>
                        {profile.name}
                    </h1>
                    <p className="hero-headline hero-item" style={{ '--i': 2 }}>
                        {profile.headline}
                    </p>
                    <div className="hero-item" style={{ '--i': 3 }}>
                        <ProfileLinks />
                    </div>
                </div>
                <CodePanel />
            </div>
        </header>
    )
}
