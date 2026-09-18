import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// Fade-and-rise on scroll-into-view. Fires once, staggered by delay.
export default function Reveal({ children, delay = 0, className = '', as = 'div', y = 18 }) {
  const reduced = useReducedMotion()
  const Tag = motion[as] ?? motion.div

  if (reduced) return <Tag className={className}>{children}</Tag>

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}

/**
 * Editorial type reveal: the line slides up from behind a clipping mask.
 * `immediate` runs it on mount — use that above the fold, where waiting for a
 * scroll event would leave the headline hidden on first paint.
 */
export function MaskReveal({ children, delay = 0, className = '', immediate = false }) {
  const reduced = useReducedMotion()

  // Must stay a block: these stack as separate lines of a heading.
  if (reduced) return <span className={`block ${className}`}>{children}</span>

  const play = immediate
    ? { animate: { y: 0 } }
    : { whileInView: { y: 0 }, viewport: { once: true, margin: '-60px' } }

  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        {...play}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  )
}

// A hairline that draws itself across when scrolled into view.
export function RuleReveal({ delay = 0, className = '' }) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={`rule ${className}`} />

  return (
    <motion.div
      className={`h-px w-full origin-left bg-line ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: EASE }}
    />
  )
}
