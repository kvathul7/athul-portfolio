import { ArrowUpRight } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import Logo from './Logo'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section
      id="work"
      titleTop="Where I've"
      titleBottom="Been Building"
      lede="An ongoing software development internship, and the six-month Java full-stack program behind it."
    >
      <div className="border-t border-line">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <article className="group grid grid-cols-1 gap-y-7 border-b border-line py-10 lg:grid-cols-12 lg:gap-x-10 lg:py-14">
              {/* Identity */}
              <div className="lg:col-span-4">
                <div className="flex items-start gap-5">
                  <span className="numeral pt-1">{String(i + 1).padStart(2, '0')}</span>
                  <div className="min-w-0">
                    {/* One fixed-height slot for every mark: icon logos and
                        wordmark lockups end up optically matched, sharing a
                        left edge and a vertical centre. */}
                    {job.logo && (
                      <div className="mb-5 flex h-14 items-center">
                        <Logo
                          src={job.logo}
                          alt={`${job.company} logo`}
                          size={job.logoSize ?? 'lg'}
                        />
                      </div>
                    )}

                    <h3 className="font-serif text-2xl leading-tight sm:text-[1.75rem]">
                      {job.company}
                    </h3>
                    <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-muted">
                      {job.role}
                    </p>
                    <p className="mt-2 label">{job.location}</p>

                    {job.site && (
                      <a
                        href={job.site}
                        target="_blank"
                        rel="noreferrer"
                        className="group/site mt-4 inline-flex items-center gap-1.5 label transition-colors duration-300 hover:!text-accent"
                      >
                        {job.siteLabel}
                        <ArrowUpRight
                          size={12}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover/site:translate-x-0.5 group-hover/site:-translate-y-0.5"
                        />
                      </a>
                    )}
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
                <p className="label">{job.kind}</p>
                <p className={`mt-2 ${job.current ? 'label-accent' : 'label-ink'}`}>
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
