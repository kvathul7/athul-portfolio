import { motion, useReducedMotion } from 'framer-motion'

// Fade-and-rise on scroll-into-view. Fires once, staggered by index.
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const reduced = useReducedMotion()
  const Tag = motion[as] ?? motion.div

  if (reduced) return <Tag className={className}>{children}</Tag>

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
