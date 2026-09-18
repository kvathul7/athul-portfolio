import Section from './Section'
import Reveal from './Reveal'
import { certification, education, profile } from '../data/content'

export default function About() {
  return (
    <Section id="about" titleTop="A Little" titleBottom="More Context">
      <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-14">
        {/* Narrative — first paragraph set larger as a standfirst. */}
        <Reveal className="lg:col-span-7">
          <div className="max-w-prose">
            {profile.about.map((para, i) =>
              i === 0 ? (
                <p
                  key={para}
                  className="font-serif text-[1.35rem] leading-[1.5] text-ink sm:text-[1.55rem]"
                >
                  {para}
                </p>
              ) : (
                <p key={para} className="mt-6 text-[15px] leading-relaxed text-muted">
                  {para}
                </p>
              )
            )}
          </div>
        </Reveal>

        {/* Education + certification as an editorial index. */}
        <div className="lg:col-span-5">
          <Reveal delay={0.08}>
            <p className="label-accent">Education</p>
            <ul className="mt-6 border-t border-line">
              {education.map((e) => (
                <li key={`${e.school}-${e.detail}`} className="border-b border-line py-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-lg leading-snug">{e.school}</h3>
                    {e.period ? <span className="label shrink-0">{e.period}</span> : null}
                  </div>
                  <p className="mt-2 flex items-baseline justify-between gap-4 text-sm text-muted">
                    <span>{e.detail}</span>
                    <span className="shrink-0 font-serif text-base text-accent">{e.result}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-12 label-accent">Certification</p>
            <div className="mt-6 border-t border-line pt-5">
              <h3 className="font-serif text-lg leading-snug">{certification.name}</h3>
              <p className="mt-2 text-sm text-muted">{certification.issuer}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="tag">{certification.duration}</span>
                <span className="tag-accent">{certification.status}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
