import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Asterisk, Menu, Moon, Sun, X } from 'lucide-react'
import { nav, profile } from '../data/content'

function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1))
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)

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
      : false
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', dark ? '#0E1114' : '#F7F7F5')
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
    const onScroll = () => setScrolled(window.scrollY > 24)
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
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:bg-accent focus:px-5 focus:py-3 focus:text-[11px] focus:uppercase focus:tracking-label focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? 'border-b border-line bg-bg/90 backdrop-blur-sm'
            : 'border-b border-transparent'
        }`}
      >
        <nav className="shell flex h-[72px] items-center justify-between gap-6" aria-label="Primary">
          {/* Masthead mark */}
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label={`${profile.name} — back to top`}
          >
            <Asterisk size={16} aria-hidden="true" className="text-accent" />
            <span className="label-ink !tracking-wider2">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block py-1 label transition-colors duration-300 ${
                      isActive ? '!text-accent' : 'hover:!text-ink'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-0.5 left-0 h-px w-full bg-accent"
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={toggleTheme}
              className="text-muted transition-colors duration-300 hover:text-accent"
              aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {dark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
            </button>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="group link-arrow hidden sm:inline-flex"
            >
              Resume
              <ArrowRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-ink transition-colors duration-300 hover:text-accent md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={20} aria-hidden="true" />
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
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-ink/40"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="absolute right-0 top-0 flex h-full w-[min(22rem,88vw)] flex-col border-l border-line bg-bg px-7 py-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="label">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-ink transition-colors hover:text-accent"
                  aria-label="Close menu"
                  autoFocus
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-10 flex flex-col">
                {nav.map((item, i) => (
                  <li key={item.href} className="border-b border-line">
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-5 transition-colors duration-300 hover:text-accent"
                    >
                      <span className="label !text-accent">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-serif text-2xl">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="btn-solid mt-auto w-full"
              >
                Resume
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
