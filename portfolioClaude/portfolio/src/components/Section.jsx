// Estrutura comum das seções: título na coluna esquerda, conteúdo na direita.
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-titulo`}>
      <div className="container section-grid">
        <h2 id={`${id}-titulo`} className="section-title">
          {title}
        </h2>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
