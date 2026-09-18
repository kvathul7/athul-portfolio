import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { profile } from '../data/content'

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 1800)
    return () => clearTimeout(t)
  }, [copied])

  const copy = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
    } catch (err) {
      /* clipboard blocked — the address is still visible and selectable */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="icon-link !h-9 !w-9 shrink-0"
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
    >
      {copied ? (
        <Check size={15} aria-hidden="true" className="text-emerald-500" />
      ) : (
        <Copy size={15} aria-hidden="true" />
      )}
    </button>
  )
}

function ContactCard({ icon: Icon, label, value, href, external, copyable, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="card card-hover group relative flex h-full items-center gap-4 p-5 sm:p-6">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-elevated text-accent">
          <Icon size={18} aria-hidden="true" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            {label}
          </span>
          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className="mt-1 block truncate text-sm font-semibold text-ink transition group-hover:text-accent after:absolute after:inset-0 after:content-['']"
          >
            {value}
          </a>
        </span>

        {copyable ? (
          <span className="relative z-10">
            <CopyButton value={value} label={label} />
          </span>
        ) : (
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="shrink-0 text-faint transition group-hover:text-accent"
          />
        )}
      </div>
    </Reveal>
  )
}

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk"
      lede="I'm looking for a Software Engineer or Backend Developer role. The quickest way to reach me is email."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <ContactCard
          icon={Mail}
          label="Email"
          value={profile.email}
          href={`mailto:${profile.email}`}
          copyable
          delay={0}
        />
        <ContactCard
          icon={Phone}
          label="Phone"
          value={profile.phone}
          href={`tel:${profile.phone.replace(/\s/g, '')}`}
          copyable
          delay={0.05}
        />
        <ContactCard
          icon={Github}
          label="GitHub"
          value={profile.githubHandle}
          href={profile.github}
          external
          delay={0.1}
        />
        <ContactCard
          icon={Linkedin}
          label="LinkedIn"
          value={profile.linkedinHandle}
          href={profile.linkedin}
          external
          delay={0.15}
        />
      </div>
    </Section>
  )
}
