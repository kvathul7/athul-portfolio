import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, Asterisk } from 'lucide-react'
import { editorial, profile } from '../data/content'
import { MaskReveal } from './Reveal'

const EASE = [0.22, 1, 0.36, 1]

/** Slow-rotating stamp, standing in for the reference's circular badge. */
function Stamp() {
  // One pass around the circle — repeating it overruns the path and the glyphs
  // pile up on top of each other at the start point.
  const text = editorial.badge.toUpperCase()

  return (
    <div className="relative h-[98px] w-[98px] sm:h-[120px] sm:w-[120px]">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full animate-spin-slow text-muted"
        aria-hidden="true"
      >
        <defs>
          <path
            id="stamp-path"
            fill="none"
            d="M 50,50 m -39,0 a 39,39 0 1,1 78,0 a 39,39 0 1,1 -78,0"
          />
        </defs>
        <text fill="currentColor" fontSize="5.1" letterSpacing="0.62" className="font-sans">
          <textPath href="#stamp-path" startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>

      <span className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="text-center font-serif text-[13px] leading-[1.15] text-accent sm:text-[15px]">
          {editorial.badgeLines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </span>
      </span>
    </div>
  )
}

/** Vertical rail label running up the outer margin. */
function Rail({ children, side }) {
  return (
    <span
      className={`absolute top-0 hidden items-center gap-4 xl:flex ${
        side === 'left' ? '-left-9' : '-right-9'
      }`}
    >
      <span
        className="vertical-rl label whitespace-nowrap"
        style={{ transform: 'rotate(180deg)' }}
      >
        {children}
      </span>
    </span>
  )
}

export default function Hero() {
  const reduced = useReducedMotion()

  const fade = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        }

  return (
    <section id="top" className="relative pt-[72px]">
      <div className="shell">
        {/* Top metadata strip — mirrors the reference's thin header rule. */}
        <motion.div
          {...fade(0.05)}
          className="flex items-center justify-between gap-4 border-b border-line py-5"
        >
          <span className="flex items-center gap-3">
            <Asterisk size={13} aria-hidden="true" className="text-accent" />
            <span className="label">Java Full Stack Developer</span>
          </span>
          <a href="#contact" className="group link-arrow">
            <span className="hidden sm:inline">Open to Java developer roles</span>
            <span className="sm:hidden">Open to roles</span>
            <ArrowRight
              size={13}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Oversized editorial wordmark. SVG so it spans the column exactly at
            every viewport width without ever overflowing. */}
        <div className="relative pt-6 sm:pt-8">
          <MaskReveal immediate>
            <svg
              viewBox="0 0 100 23"
              className="block w-full text-ink"
              role="presentation"
              aria-hidden="true"
            >
              <text
                x="50"
                y="19.2"
                textAnchor="middle"
                textLength="100"
                lengthAdjust="spacing"
                fontSize="23"
                fill="currentColor"
                style={{ fontFamily: 'Anton, Impact, sans-serif' }}
              >
                {editorial.heroWord}
              </text>
            </svg>
          </MaskReveal>
        </div>

        {/* Introduction + visual, asymmetric two-column spread. */}
        <div className="relative grid grid-cols-1 items-start gap-y-12 pb-16 pt-10 lg:grid-cols-12 lg:gap-x-12 lg:pb-24 lg:pt-12">
          <Rail side="left">Java 17 — Spring Boot</Rail>
          <Rail side="right">MySQL — React.js</Rail>

          <div className="lg:col-span-7">
            <motion.p {...fade(0.15)} className="label">
              Hello, I&rsquo;m
            </motion.p>

            <h1 className="mt-4 font-serif text-[clamp(2.75rem,9vw,5.5rem)] font-normal uppercase leading-[0.95] tracking-tight">
              <MaskReveal immediate delay={0.2}>{profile.name}</MaskReveal>
            </h1>

            <motion.p
              {...fade(0.34)}
              className="mt-5 max-w-prose font-sans text-[13px] uppercase tracking-wider2 text-accent sm:text-sm"
            >
              {profile.title}
            </motion.p>

            <motion.p
              {...fade(0.42)}
              className="mt-7 max-w-prose text-[15px] leading-relaxed text-muted sm:text-base"
            >
              {profile.positioning}
            </motion.p>

            <motion.p
              {...fade(0.5)}
              className="mt-8 font-serif text-3xl italic text-ink/90 sm:text-4xl"
              aria-hidden="true"
            >
              {profile.name}
            </motion.p>

            <motion.div {...fade(0.58)} className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-solid">
                View Projects
                <ArrowDownRight size={14} aria-hidden="true" />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Download Resume
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Visual area: terracotta disc + monogram, with the stamp overlapping. */}
          <motion.div
            {...fade(0.3)}
            className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-square w-full">
              {/* Portrait sits on a soft tint of the accent and is clipped by
                  the circle. Height is held under 100% and bottom-anchored so
                  the head clears the curve at the top of the circle. */}
              <div className="absolute inset-0 overflow-hidden rounded-full bg-accent-soft">
                <img
                  src={profile.photo}
                  alt={`${profile.name}, ${profile.title}`}
                  width="795"
                  height="1000"
                  fetchPriority="high"
                  decoding="async"
                  className="absolute bottom-0 left-1/2 h-[92%] w-auto max-w-none -translate-x-1/2 object-contain"
                />
              </div>
              <div
                className="absolute inset-0 rounded-full border border-line"
                aria-hidden="true"
              />
            </div>

            {/* Sits in the empty corner outside the disc so the rotating text
                never runs across the terracotta. */}
            <div className="absolute -bottom-4 -left-3 z-10 sm:-bottom-6 sm:-left-5 lg:-bottom-8 lg:-left-9">
              <Stamp />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero metadata strip. */}
      <div className="shell">
        <div className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
          {editorial.meta.map((m, i) => (
            <motion.div
              {...fade(0.65 + i * 0.06)}
              key={m.k}
              className={`px-1 py-6 sm:py-7 ${
                i % 2 === 1 ? 'border-l border-line pl-5' : ''
              } ${i > 1 ? 'border-t border-line lg:border-t-0' : ''} ${
                i > 0 ? 'lg:border-l lg:pl-5' : ''
              }`}
            >
              <p className="label">{m.k}</p>
              <p className="mt-2 font-serif text-base sm:text-lg">{m.v}</p>
            </motion.div>
          ))}
        </div>

        {/* Roles band — the titles Athul is open to, scannable at a glance. */}
        <motion.div
          {...fade(0.9)}
          className="flex flex-col gap-5 border-y border-line py-7 sm:flex-row sm:items-center sm:gap-10 sm:py-8"
        >
          <p className="label shrink-0">Open to</p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {profile.roles.map((r) => (
              <li key={r} className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span className="text-[13.5px] leading-snug text-ink sm:text-[15px]">{r}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
