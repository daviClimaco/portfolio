import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../data/navigation.js'
import { profile } from '../data/profile.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import ThemeToggle from './ThemeToggle.jsx'

const ids = navigation.map((item) => item.id)

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const active = useActiveSection(ids)

    useEffect(() => {
        const onKey = (event) => event.key === 'Escape' && setOpen(false)
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    return (
        <header className="nav">
            <div className="container nav-inner">
                <a className="nav-brand" href="#inicio" onClick={() => setOpen(false)}>
                    {profile.name}
                </a>
                <nav id="menu" className={`nav-links${open ? ' is-open' : ''}`} aria-label="Principal">
                    {navigation.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={active === id ? 'is-active' : undefined}
                            aria-current={active === id ? 'true' : undefined}
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                </nav>
                <div className="nav-actions">
                    <ThemeToggle />
                    <button
                        type="button"
                        className="nav-toggle"
                        aria-expanded={open}
                        aria-controls="menu"
                        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                        onClick={() => setOpen((value) => !value)}
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>
        </header>
    )
}
