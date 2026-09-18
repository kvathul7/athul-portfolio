import { Award, GraduationCap } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { certification, education, profile } from '../data/content'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A little more context">
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
        <Reveal className="lg:col-span-3">
          <div className="space-y-5">
            {profile.about.map((para) => (
              <p key={para} className="max-w-prose text-base leading-relaxed text-muted">
                {para}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                <GraduationCap size={14} aria-hidden="true" />
                Education
              </h3>
              <ul className="mt-5 space-y-5">
                {education.map((e, i) => (
                  <li
                    key={`${e.school}-${e.detail}`}
                    className={i > 0 ? 'border-t border-line pt-5' : ''}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-sm font-semibold leading-snug">{e.school}</p>
                      {e.period ? (
                        <span className="shrink-0 font-mono text-[11px] text-faint">
                          {e.period}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {e.detail} — <span className="text-accent">{e.result}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                <Award size={14} aria-hidden="true" />
                Certification
              </h3>
              <p className="mt-5 text-sm font-semibold">{certification.name}</p>
              <p className="mt-1 text-sm text-muted">{certification.issuer}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="chip">{certification.duration}</span>
                <span className="chip-accent">{certification.status}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
