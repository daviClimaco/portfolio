import { useEffect, useState } from 'react'

// Retorna o id da seção que está cruzando a faixa central da tela.
export function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
