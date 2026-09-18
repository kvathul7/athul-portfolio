import Reveal, { MaskReveal, RuleReveal } from './Reveal'

/**
 * Editorial section scaffold, mirroring the reference's masthead composition:
 * a two-line serif title on the left, a short lede in the middle column, and
 * an optional action anchored right — all sitting under a full-bleed hairline.
 */
export default function Section({
  id,
  titleTop,
  titleBottom,
  lede,
  action,
  children,
  className = '',
}) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="shell">
        <RuleReveal />

        <div className="grid grid-cols-1 gap-x-10 gap-y-6 pt-12 sm:pt-16 lg:grid-cols-12 lg:pt-20">
          <div className="lg:col-span-5">
            <h2 className="heading">
              <MaskReveal>{titleTop}</MaskReveal>
              <MaskReveal delay={0.08} className="text-accent">
                {titleBottom}
              </MaskReveal>
            </h2>
          </div>

          {lede ? (
            <Reveal delay={0.12} className="lg:col-span-4 lg:pt-2">
              <p className="max-w-prose text-[15px] leading-relaxed text-muted">{lede}</p>
            </Reveal>
          ) : (
            <div className="hidden lg:col-span-4 lg:block" />
          )}

          {action ? (
            <Reveal delay={0.18} className="lg:col-span-3 lg:flex lg:justify-end lg:pt-3">
              {action}
            </Reveal>
          ) : null}
        </div>

        <div className="pb-24 pt-12 sm:pb-28 sm:pt-16 lg:pb-32 lg:pt-20">{children}</div>
      </div>
    </section>
  )
}
