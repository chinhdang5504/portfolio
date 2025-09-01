// src/components/_shared/Reveal.tsx
import { useEffect, useRef, useState, type PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ delay?: number; y?: number }>
export default function Reveal({ children, delay = 0, y = 8 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true)
          io.unobserve(e.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform will-change-opacity
        ${show ? 'opacity-100 translate-y-0' : `opacity-0 translate-y-[${y}px]`} h-full`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
