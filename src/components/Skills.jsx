import Section from './Section'
import Reveal from './Reveal'
import { editorial, skills } from '../data/content'

export default function Skills() {
  return (
    <Section
      id="skills"
      titleTop="Skills &"
      titleBottom="Expertise"
      lede="Grouped by where they sit in the stack, not ranked by a made-up percentage."
    >
      <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-14">
        {/* Pull quote */}
        <Reveal className="lg:col-span-4">
          <figure className="lg:sticky lg:top-28">
            <span
              aria-hidden="true"
              className="block font-serif text-6xl leading-none text-accent/40"
            >
              &ldquo;
            </span>
            <blockquote className="mt-2 font-serif text-[1.4rem] leading-[1.45] text-ink sm:text-[1.6rem]">
              {editorial.pullQuote}
            </blockquote>
          </figure>
        </Reveal>

        {/* Skill groups as an editorial index */}
        <div className="lg:col-span-8">
          <div className="border-t border-line">
            {skills.map((group, i) => (
              <Reveal key={group.group} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-y-4 border-b border-line py-7 sm:grid-cols-12 sm:gap-x-8">
                  <div className="sm:col-span-3">
                    <p className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="label-ink">{group.group}</span>
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2 sm:col-span-9">
                    {group.items.map((item) => (
                      <li key={item} className="tag !text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
