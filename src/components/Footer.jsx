import { ArrowUp, Asterisk } from 'lucide-react'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-5 py-9 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-3 label">
          <Asterisk size={12} aria-hidden="true" className="text-accent" />© 2026 {profile.name}
        </p>
        <p className="label">Built with React, Vite &amp; Tailwind CSS</p>
        <a href="#top" className="group link-arrow">
          Back to top
          <ArrowUp
            size={13}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </footer>
  )
}
