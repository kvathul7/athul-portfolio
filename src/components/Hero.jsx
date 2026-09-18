import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/content'

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const reduced = useReducedMotion()
  const anim = (i) =>
    reduced
      ? {}
      : { variants: rise, initial: 'hidden', animate: 'show', custom: i }

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-44">
      {/* Background: dot grid + two slow-drifting accent blooms. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-drift" />
        <div
          className="absolute -top-20 right-0 h-[22rem] w-[22rem] rounded-full bg-accent/10 blur-[110px] animate-drift"
          style={{ animationDelay: '-8s' }}
        />
      </div>

      <div className="shell pb-20 sm:pb-28">
        <motion.p
          {...anim(0)}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to Software Engineer / Backend Developer roles
        </motion.p>

        <motion.h1
          {...anim(1)}
          className="mt-6 font-display font-semibold tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05 }}
        >
          {profile.name}
        </motion.h1>

        <motion.p {...anim(2)} className="mt-4 text-lg font-medium text-accent sm:text-xl">
          {profile.title}
        </motion.p>

        <motion.p {...anim(3)} className="mt-6 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
          {profile.positioning}
        </motion.p>

        <motion.p {...anim(4)} className="mt-6 inline-flex items-center gap-2 text-sm text-faint">
          <MapPin size={15} aria-hidden="true" />
          {profile.location}
        </motion.p>

        <motion.div {...anim(5)} className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost">
            <FileText size={16} aria-hidden="true" />
            Download Resume
          </a>

          <span aria-hidden="true" className="mx-1 hidden h-8 w-px bg-line sm:block" />

          <div className="flex items-center gap-2">
            <a href={profile.github} target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub profile">
              <Github size={18} aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-link" aria-label="LinkedIn profile">
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`} className="icon-link" aria-label={`Email ${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
