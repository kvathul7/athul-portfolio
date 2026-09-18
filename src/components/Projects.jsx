import { ArrowUpRight, Github, Lock, ShieldCheck } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { profile, projects } from '../data/content'

function StatTile({ value, label }) {
  return (
    <div className="rounded-xl border border-line bg-elevated px-4 py-3">
      <p className="font-display text-2xl font-semibold tracking-tight text-accent">{value}</p>
      <p className="mt-0.5 text-xs text-faint">{label}</p>
    </div>
  )
}

function FeaturedProject({ p }) {
  return (
    <Reveal>
      <article className="card overflow-hidden">
        <div className="grid lg:grid-cols-5">
          {/* Left: the narrative */}
          <div className="p-6 sm:p-8 lg:col-span-3 lg:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="chip-accent">Featured</span>
              <span className="text-xs text-faint">
                {p.role} · {p.year}
              </span>
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              {p.name}
            </h3>
            <p className="mt-4 max-w-prose leading-relaxed text-muted">{p.summary}</p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {p.stats.map((s) => (
                <StatTile key={s.label} {...s} />
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span className="max-w-prose">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              <Github size={16} aria-hidden="true" />
              {p.repoLabel}
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Right: what the system is made of */}
          <div className="border-t border-line bg-elevated/60 p-6 sm:p-8 lg:col-span-2 lg:border-l lg:border-t-0 lg:p-10">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              Modules
            </h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.modules.map((m, i) => (
                <li
                  key={m}
                  className="rounded-lg border border-line bg-surface px-2.5 py-1.5 text-xs text-muted"
                >
                  <span className="mr-1.5 font-mono text-[10px] text-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {m}
                </li>
              ))}
            </ul>

            <h4 className="mt-10 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              <ShieldCheck size={13} aria-hidden="true" />
              Role-based access control
            </h4>
            <ul className="mt-4 space-y-2">
              {p.roles.map((r, i) => (
                <li
                  key={r.name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-3 py-2.5"
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                      style={{ opacity: 1 - i * 0.2 }}
                    />
                    <span className="text-sm font-medium">{r.name}</span>
                  </span>
                  <span className="text-right text-[11px] text-faint">{r.scope}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 flex items-start gap-2 text-[11px] leading-relaxed text-faint">
              <Lock size={12} aria-hidden="true" className="mt-0.5 shrink-0" />
              Enforced with Spring Security and JWT — every endpoint checks the caller's role
              before returning data.
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function ProjectCard({ p, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card card-hover flex h-full flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs text-faint">
            {p.role} · {p.year}
          </span>
          <span className="chip">{p.short}</span>
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight">
          {p.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>

        <ul className="mt-5 space-y-3">
          {p.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <a
          href={p.repo}
          target="_blank"
          rel="noreferrer"
          className="group mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-accent"
        >
          <Github size={16} aria-hidden="true" />
          {p.repoLabel}
          <ArrowUpRight
            size={15}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built end to end"
      lede="Both projects were taken from requirements through to a working, deployed application."
    >
      <div className="space-y-6">
        {featured && <FeaturedProject p={featured} />}

        <div className="grid gap-6 lg:grid-cols-3">
          {rest.map((p, i) => (
            <div key={p.name} className="lg:col-span-2">
              <ProjectCard p={p} delay={i * 0.08} />
            </div>
          ))}

          <Reveal delay={0.12} className="h-full">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="card card-hover flex h-full flex-col justify-between p-6 sm:p-8"
            >
              <Github size={22} aria-hidden="true" className="text-accent" />
              <div className="mt-8">
                <p className="font-display text-lg font-semibold tracking-tight">
                  More on GitHub
                </p>
                <p className="mt-2 text-sm text-muted">
                  Source for both projects, plus practice work from my full-stack training.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  @{profile.githubHandle}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
