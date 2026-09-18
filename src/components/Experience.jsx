import Section from './Section'
import Reveal from './Reveal'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section
      id="work"
      titleTop="Where I've"
      titleBottom="Been Building"
      lede="Two internships — one ongoing, one a six-month structured full-stack program."
    >
      <div className="border-t border-line">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <article className="group grid grid-cols-1 gap-y-7 border-b border-line py-10 lg:grid-cols-12 lg:gap-x-10 lg:py-14">
              {/* Identity */}
              <div className="lg:col-span-4">
                <div className="flex items-start gap-5">
                  <span className="numeral pt-1">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight transition-colors duration-300 group-hover:text-accent sm:text-[1.75rem]">
                      {job.company}
                    </h3>
                    <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-muted">
                      {job.role}
                    </p>
                    <p className="mt-2 label">{job.location}</p>
                  </div>
                </div>
              </div>

              {/* Detail */}
              <div className="lg:col-span-5">
                <ul className="space-y-4">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-4 text-[14.5px] leading-relaxed text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-4 shrink-0 bg-accent"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Period + stack */}
              <div className="lg:col-span-3 lg:text-right">
                <p className={job.current ? 'label-accent' : 'label'}>
                  {job.current ? `${job.period} · Current` : job.period}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 lg:justify-end">
                  {job.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
