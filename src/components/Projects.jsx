import { ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { editorial, profile, projects } from '../data/content'

/**
 * Project "cover" — the large visual block the reference gives each project.
 * There are no product screenshots to use, so the cover is built from the
 * project's own real material: its name, its modules, its measured numbers.
 */
function Cover({ p, meta, dark }) {
  return (
    <div
      /* Min-height rather than a fixed aspect ratio: the module list is taller
         than a 4:3 box on narrow screens, and a fixed ratio silently clipped
         the last two modules. */
      className={`relative flex min-h-[320px] w-full flex-col justify-between gap-8 border p-6 transition-colors duration-500 sm:min-h-[420px] sm:p-8 lg:min-h-[520px] lg:p-10 ${
        dark ? 'border-ink bg-ink' : 'border-line bg-elevated'
      }`}
    >
      {/* Head */}
      <div className="flex items-start justify-between gap-4">
        <span
          className={`text-[10px] uppercase tracking-label ${
            dark ? 'text-bg/55' : 'text-faint'
          }`}
        >
          {meta.subtitle}
        </span>
        <span className={`text-[10px] uppercase tracking-label ${dark ? 'text-accent' : 'text-accent'}`}>
          {p.year}
        </span>
      </div>

      {/* Wordmark */}
      <div>
        <span
          className={`block leading-[0.85] ${dark ? 'text-bg' : 'text-ink'}`}
          style={{
            fontFamily: 'Anton, Impact, sans-serif',
            fontSize: 'clamp(3rem, 11vw, 6.5rem)',
          }}
        >
          {meta.cover}
        </span>
      </div>

      {/* Foot: modules for HRMS, stack for anything without them */}
      {p.modules.length > 0 ? (
        <div>
          <p
            className={`text-[10px] uppercase tracking-label ${
              dark ? 'text-bg/45' : 'text-faint'
            }`}
          >
            Modules
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-5 gap-y-1.5 sm:grid-cols-3">
            {p.modules.map((m, i) => (
              <li
                key={m}
                className={`flex items-baseline gap-2 text-[11px] sm:text-xs ${
                  dark ? 'text-bg/75' : 'text-muted'
                }`}
              >
                <span className="font-mono text-[9px] text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="truncate">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p className={`text-[10px] uppercase tracking-label ${dark ? 'text-bg/45' : 'text-faint'}`}>
            Built with
          </p>
          <ul className="mt-3 space-y-1.5">
            {p.stack.map((s) => (
              <li
                key={s}
                className={`border-b pb-1.5 text-[11px] sm:text-xs ${
                  dark ? 'border-bg/15 text-bg/75' : 'border-line text-muted'
                }`}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function ProjectRow({ p, index, flip }) {
  const meta = editorial.projectMeta[p.short] ?? { subtitle: p.role, cover: p.short }

  return (
    <article className="grid grid-cols-1 items-start gap-y-10 border-b border-line py-12 lg:grid-cols-12 lg:gap-x-14 lg:py-20">
      {/* Cover */}
      <Reveal
        delay={0.05}
        className={`lg:col-span-7 ${flip ? 'lg:order-2 lg:col-start-6' : ''}`}
      >
        <Cover p={p} meta={meta} dark={p.featured} />
      </Reveal>

      {/* Detail */}
      <Reveal delay={0.12} className={`lg:col-span-5 ${flip ? 'lg:order-1 lg:row-start-1' : ''}`}>
        <div className="flex items-baseline gap-5">
          <span className="numeral">{String(index + 1).padStart(2, '0')}</span>
          <span className="label">{meta.subtitle}</span>
        </div>

        <h3 className="mt-5 font-serif text-[1.65rem] leading-[1.15] sm:text-[2.1rem]">
          {p.name}
        </h3>

        <p className="mt-3 label">
          {p.role} — {p.year}
        </p>

        <p className="mt-6 max-w-prose text-[15px] leading-relaxed text-muted">{p.summary}</p>

        {/* Measured numbers, set as editorial figures rather than tiles. */}
        {p.stats.length > 0 && (
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5 border-y border-line py-6">
            {p.stats.map((s) => (
              <div key={s.label}>
                <dt className="label">{s.label}</dt>
                <dd className="mt-1.5 font-serif text-3xl leading-none text-accent">{s.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="mt-8 space-y-4">
          {p.bullets.map((b) => (
            <li key={b} className="flex gap-4 text-[14.5px] leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Access model — kept from the original detail panel. */}
        {p.roles.length > 0 && (
          <div className="mt-9">
            <p className="label">Role-based access control</p>
            <ul className="mt-4 border-t border-line">
              {p.roles.map((r) => (
                <li
                  key={r.name}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-3"
                >
                  <span className="font-serif text-base">{r.name}</span>
                  <span className="text-right text-[11.5px] text-faint">{r.scope}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-prose text-[11.5px] leading-relaxed text-faint">
              Enforced with Spring Security and JWT — every endpoint checks the caller&rsquo;s role
              before returning data.
            </p>
          </div>
        )}

        <div className="mt-9 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <a
          href={p.repo}
          target="_blank"
          rel="noreferrer"
          className="group link-arrow mt-9 border-b border-line pb-2"
        >
          <Github size={14} aria-hidden="true" />
          {p.repoLabel}
          <ArrowUpRight
            size={14}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </Reveal>
    </article>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      titleTop="Selected"
      titleBottom="Projects"
      lede="Both projects were taken from requirements through to a working, deployed application."
      action={
        <a href={profile.github} target="_blank" rel="noreferrer" className="group link-arrow">
          All repositories
          <ArrowRight
            size={14}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      }
    >
      <div className="border-t border-line">
        {projects.map((p, i) => (
          <ProjectRow key={p.name} p={p} index={i} flip={i % 2 === 1} />
        ))}

        {/* Tail link — same destination as the old "More on GitHub" card. */}
        <Reveal>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between"
          >
            <span>
              <span className="block font-serif text-xl transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                More on GitHub
              </span>
              <span className="mt-2 block max-w-prose text-sm text-muted">
                Source for both projects, plus practice work from my full-stack training.
              </span>
            </span>
            <span className="flex items-center gap-3 label-ink transition-colors duration-300 group-hover:!text-accent">
              @{profile.githubHandle}
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  )
}
