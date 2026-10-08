import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'
const BROWSER_BAR = { light: '#e4e6e9', dark: '#1d2227' }

// O tema inicial é definido por um script no index.html (antes do React carregar),
// para a página não piscar na cor errada. Aqui só lemos o resultado.
const readTheme = () => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')

export function useTheme() {
    const [theme, setTheme] = useState(readTheme)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', BROWSER_BAR[theme])
    }, [theme])

    const toggle = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        try {
            localStorage.setItem(STORAGE_KEY, next)
        } catch {
            // Armazenamento bloqueado: o tema só vale até recarregar a página.
        }
    }

    return { theme, toggle }
}
