import Section from './Section'
import Reveal from './Reveal'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      lede="Grouped by where they sit in the stack, not ranked by a made-up percentage."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.05} className="h-full">
            <div className="card card-hover h-full p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip !text-xs !text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
