/**
 * Shared logo slot.
 *
 * The three marks have very different proportions — ORGGU is a circle, Axon a
 * rounded square, Pentagon Space a wide horizontal lockup. Constraining height
 * and letting width follow (object-contain, object-left) makes them share one
 * optical baseline and one left edge wherever they appear.
 */
export default function Logo({ src, alt, size = 'md', className = '', invertOnDark = false }) {
  if (!src) return null

  // Icon-shaped marks (ORGGU, Axon) and wordmark lockups (Pentagon Space) need
  // different heights to read at the same optical size. Callers centre them in
  // one fixed-height slot, so they still share a baseline and a left edge.
  const heights = {
    sm: 'h-6',
    md: 'h-9',
    lg: 'h-12',
    xl: 'h-14',
  }

  const widths = {
    sm: 'max-w-[84px]',
    md: 'max-w-[124px]',
    lg: 'max-w-[152px]',
    xl: 'max-w-[184px]',
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`${heights[size]} ${widths[size]} w-auto object-contain object-left ${
        invertOnDark ? 'dark:brightness-0 dark:invert' : ''
      } ${className}`}
    />
  )
}
