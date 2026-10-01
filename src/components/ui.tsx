import { useEffect, useRef, useState, type ReactNode, type ElementType, type Key } from 'react'

export function useInView<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin: '80px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen] as const
}

/** Masked line-by-line text reveal. Pass lines as array. */
export function Lines({
  lines,
  className = '',
  as: Tag = 'div',
  delay = 0,
  threshold = 0.1,
}: {
  lines: ReactNode[]
  className?: string
  as?: ElementType
  delay?: number
  threshold?: number
  key?: Key
}) {
  const [ref, seen] = useInView<HTMLElement>(threshold)
  return (
    <Tag ref={ref} className={className}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
          <span
            className="block transition-transform duration-[1400ms] ease-out-expo"
            style={{
              transform: seen ? 'translateY(0)' : 'translateY(110%)',
              transitionDelay: `${delay + i * 110}ms`,
            }}
          >
            {l}
          </span>
        </span>
      ))}
    </Tag>
  )
}

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
  key?: Key
}) {
  const [ref, seen] = useInView<HTMLDivElement>(0.05)
  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-out-expo ${className}`}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? 'none' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function Rule({ className = '' }: { className?: string }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.2)
  return <div ref={ref} className={`rule ${seen ? 'in-view' : ''} ${className}`} />
}

/** Image/visual clip reveal */
export function ClipReveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.05)
  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-out-expo ${className}`}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? 'none' : 'translateY(20px)',
      }}
    >
      {children}
    </div>
  )
}

export function Magnetic({
  children,
  className = '',
  strength = 0.3,
  as: Tag = 'a',
  ...rest
}: {
  children: ReactNode
  className?: string
  strength?: number
  as?: ElementType
  [k: string]: unknown
}) {
  const ref = useRef<HTMLElement>(null)
  const move = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * strength
    const y = (e.clientY - (r.top + r.height / 2)) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }
  const leave = () => {
    if (ref.current) ref.current.style.transform = ''
  }
  return (
    <Tag
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={`inline-flex transition-transform duration-500 ease-out-expo ${className}`}
      data-cursor
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const [big, setBig] = useState(false)
  useEffect(() => {
    let x = 0,
      y = 0,
      cx = 0,
      cy = 0,
      raf = 0
    const mv = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      setBig(!!(e.target as HTMLElement)?.closest?.('a,button,[data-cursor]'))
    }
    const tick = () => {
      cx += (x - cx) * 0.16
      cy += (y - cy) * 0.16
      if (dot.current) dot.current.style.transform = `translate(${cx}px, ${cy}px)`
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', mv)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', mv)
      cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <div ref={dot} className="cursor-dot pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference">
      <div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-500 ease-out-expo"
        style={{ width: big ? 64 : 10, height: big ? 64 : 10 }}
      />
    </div>
  )
}

export function SectionHead({ title, n, className = '' }: { title: string; n: string; className?: string }) {
  return (
    <div className={className}>
      <Rule />
      <div className="flex items-center justify-between py-5">
        <Lines lines={[<span className="label !text-fg">{title}</span>]} />
        <span className="label">/ {n}</span>
      </div>
    </div>
  )
}

export const Arrow = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`h-[1em] w-[1em] ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 19 19 5M8 5h11v11" />
  </svg>
)
