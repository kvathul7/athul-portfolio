import Reveal from './Reveal'

export default function Section({ id, eyebrow, title, lede, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 lg:py-32 ${className}`}>
      <div className="shell">
        <Reveal>
          <p className="eyebrow">
            <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
            {eyebrow}
          </p>
          <h2 className="section-title">{title}</h2>
          {lede ? <p className="mt-4 max-w-prose text-muted">{lede}</p> : null}
        </Reveal>
        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  )
}
