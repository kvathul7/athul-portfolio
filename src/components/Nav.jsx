import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FileText, Menu, Moon, Sun, X } from 'lucide-react'
import { nav, profile } from '../data/content'

function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return active
}

function useTheme() {
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : true
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch (e) {
      /* storage unavailable — theme simply won't persist */
    }
  }, [dark])

  return [dark, () => setDark((d) => !d)]
}

export default function Nav() {
  const active = useActiveSection()
  const [dark, toggleTheme] = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
          scrolled
            ? 'border-b border-line bg-bg/80 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <nav className="shell flex h-16 items-center justify-between gap-4" aria-label="Primary">
          <a
            href="#top"
            className="group flex items-center gap-3 rounded-lg"
            aria-label={`${profile.name} — back to top`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent font-display text-sm font-bold text-white">
              {profile.initials}
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
              {profile.name}
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition ${
                      isActive ? 'text-accent' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="icon-link"
              aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {dark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
            </button>

            <a
              href={profile.resume}
              className="btn-ghost hidden !px-4 !py-2 sm:inline-flex"
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={15} aria-hidden="true" />
              Resume
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="icon-link md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={18} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="absolute right-0 top-0 flex h-full w-[min(20rem,85vw)] flex-col border-l border-line bg-surface p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="icon-link"
                  aria-label="Close menu"
                  autoFocus
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-8 flex flex-col gap-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-3 text-lg font-medium text-ink transition hover:bg-elevated"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-auto w-full"
              >
                <FileText size={16} aria-hidden="true" />
                Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
