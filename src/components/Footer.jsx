import { ArrowUp } from 'lucide-react'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="shell flex flex-col items-center justify-between gap-4 text-sm text-faint sm:flex-row">
        <p>© 2026 {profile.name}</p>
        <p>Built with React, Vite &amp; Tailwind CSS</p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 transition hover:text-accent"
        >
          Back to top
          <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
