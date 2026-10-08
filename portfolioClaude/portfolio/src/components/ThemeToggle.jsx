import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme.js'

export default function ThemeToggle() {
    const { theme, toggle } = useTheme()
    const isDark = theme === 'dark'
    const label = isDark ? 'Ativar modo claro' : 'Ativar modo escuro'

    return (
        <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
            {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
        </button>
    )
}
