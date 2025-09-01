import { useEffect, useRef, useState } from 'react'
import { IoChevronDown, IoPricetagsOutline } from 'react-icons/io5'
import type { Timeline } from '../../types/Timeline'

type Props = { item: Timeline; maxLines?: number }

export default function TimelineItem({ item, maxLines = 2 }: Props) {
  const ref = useRef<HTMLLIElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  // Chuẩn hoá description thành mảng
  const descArray: string[] = Array.isArray(item.description)
    ? item.description
    : item.description
      ? [String(item.description)]
      : []

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const showToggle = descArray.length > maxLines
  const renderItems = expanded ? descArray : descArray.slice(0, maxLines)

  return (
    <li
      ref={ref}
      className={[
        'group timeline-item relative pl-8 transition-all duration-500 ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
        'hover:translate-x-1'
      ].join(' ')}
    >
      {/* Node + halo */}
      <span
        className='timeline-node absolute left-[-10px] top-2 w-3 h-3 rounded-full z-10'
        style={{ background: 'var(--text-gradient-yellow)' }}
      />
      <span className='timeline-node-halo absolute left-[-14px] top-[6px] w-5 h-5 rounded-full pointer-events-none' />

      {/* Header */}
      <h4 className='timeline-item-title text-[var(--white-2)] text-base font-semibold transition-colors duration-300'>
        {item.title}
      </h4>

      {item.place && (
        <p className='text-[var(--light-gray-70)] text-sm mb-1 transition-colors duration-300'>{item.place}</p>
      )}

      <span className='inline-flex items-center gap-1 text-[var(--vegas-gold)] text-sm transition-colors duration-300'>
        <IoPricetagsOutline aria-hidden />
        {item.period}
      </span>

      {/* Description list */}
      {renderItems.length > 0 && (
        <ul className='mt-2 space-y-2'>
          {renderItems.map((line, idx) => (
            <li
              key={idx}
              className='relative pl-5 text-[var(--light-gray)] text-sm leading-relaxed transition-all duration-300'
              style={{ transitionDelay: `${visible ? idx * 50 : 0}ms` }}
            >
              {/* Bullet đẹp + căn hàng */}
              <span
                aria-hidden
                className='absolute left-0 top-[7px] h-2 w-2 rounded-full'
                style={{ background: 'var(--orange-yellow-crayola)', boxShadow: '0 0 0 3px var(--jet)' }}
              />
              {line}
            </li>
          ))}
        </ul>
      )}

      {/* Toggle */}
      {showToggle && (
        <button
          type='button'
          onClick={() => setExpanded((v) => !v)}
          className='mt-3 inline-flex items-center gap-1 text-xs text-[var(--orange-yellow-crayola)]
                     hover:opacity-90 active:opacity-80 transition-opacity duration-200'
          aria-expanded={expanded}
        >
          <IoChevronDown className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} aria-hidden />
          {expanded ? 'Show less' : `Show ${descArray.length - maxLines} more`}
        </button>
      )}
    </li>
  )
}
