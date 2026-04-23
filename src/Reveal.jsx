import { useEffect, useRef } from 'react'

export default function Reveal({ children, stagger = false, delay, className = '', style }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('ww-visible')
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const baseClass = stagger ? 'ww-reveal-stagger' : 'ww-reveal'

  return (
    <div
      ref={ref}
      className={`${baseClass}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: delay, ...style } : style}
    >
      {children}
    </div>
  )
}
