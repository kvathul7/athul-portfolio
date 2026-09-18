import Section from './Section'
import Reveal from './Reveal'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section
      id="work"
      eyebrow="Experience"
      title="Where I've been building"
      lede="Two internships — one ongoing, one a six-month structured full-stack program."
    >
      <ol className="relative border-l border-line pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <li key={job.company} className="relative pb-12 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-bg sm:-left-[calc(2.5rem+5px)] ${
                job.current ? 'bg-accent' : 'bg-line'
              }`}
            />
            <Reveal delay={i * 0.08}>
              <div className="card card-hover p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {job.role} · {job.location}
                    </p>
                  </div>
                  <span
                    className={
                      job.current
                        ? 'chip-accent shrink-0'
                        : 'chip shrink-0'
                    }
                  >
                    {job.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span className="max-w-prose">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                  {job.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
