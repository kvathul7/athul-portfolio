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
      className="relative z-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-label text-faint transition-colors duration-300 hover:text-accent"
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
    >
      {copied ? (
        <>
          <Check size={13} aria-hidden="true" className="text-accent" />
          <span className="hidden sm:inline">Copied</span>
        </>
      ) : (
        <>
          <Copy size={13} aria-hidden="true" />
          <span className="hidden sm:inline">Copy</span>
        </>
      )}
    </button>
  )
}

function ContactRow({ icon: Icon, label, value, href, external, copyable, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="group relative flex items-center gap-5 border-b border-line py-6 sm:py-7">
        <Icon
          size={16}
          aria-hidden="true"
          className="shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-0.5"
        />

        <div className="min-w-0 flex-1">
          <p className="label">{label}</p>
          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className="mt-1.5 block truncate font-serif text-lg transition-colors duration-300 group-hover:text-accent sm:text-xl after:absolute after:inset-0 after:content-['']"
          >
            {value}
          </a>
        </div>

        {copyable ? (
          <CopyButton value={value} label={label} />
        ) : (
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="shrink-0 text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
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
      titleTop="Let's"
      titleBottom="Talk"
      lede="I'm looking for a Software Engineer or Backend Developer role. The quickest way to reach me is email."
    >
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-14">
        {/* Oversized call to action, echoing the hero's wordmark. */}
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p
              className="leading-[0.86] text-ink"
              style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: 'clamp(3rem,8vw,5rem)' }}
            >
              GET IN
              <br />
              <span className="text-accent">TOUCH</span>
            </p>
            <p className="mt-7 max-w-prose text-[15px] leading-relaxed text-muted">
              Based in {profile.location}. Open to on-site, hybrid, and remote roles.
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <div className="border-t border-line">
            <ContactRow
              icon={Mail}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
              copyable
              delay={0}
            />
            <ContactRow
              icon={Phone}
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              copyable
              delay={0.06}
            />
            <ContactRow
              icon={Github}
              label="GitHub"
              value={profile.githubHandle}
              href={profile.github}
              external
              delay={0.12}
            />
            <ContactRow
              icon={Linkedin}
              label="LinkedIn"
              value={profile.linkedinHandle}
              href={profile.linkedin}
              external
              delay={0.18}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
