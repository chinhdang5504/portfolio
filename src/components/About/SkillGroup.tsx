import { useState } from 'react'
import SkillBadge from './SkillBadge'

type SkillItem = { name: string; icon: string }

export default function SkillGroup({
  title,
  items,
  initial = 8
}: {
  title: string
  items: SkillItem[]
  initial?: number
}) {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? items : items.slice(0, initial)
  const rest = Math.max(items.length - initial, 0)

  return (
    <div
      className='h-full rounded-2xl border border-[var(--jet)] p-4 relative overflow-hidden group'
      style={{ background: 'var(--border-gradient-onyx)' }}
    >
      <div className='absolute inset-1 -z-10 rounded-2xl' style={{ background: 'var(--bg-gradient-jet)' }} />
      <h4 className='text-[var(--orange-yellow-crayola)] font-semibold mb-3'>
        {title} <span className='text-xs text-[var(--light-gray-70)]'>({items.length})</span>
      </h4>

      <div className='grid gap-2' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
        {visible.map((it) => (
          <div key={it.name} className='min-w-0'>
            <SkillBadge {...it} />
          </div>
        ))}
      </div>

      {rest > 0 && (
        <button
          type='button'
          onClick={() => setShowAll((v) => !v)}
          className='mt-3 text-xs text-[var(--orange-yellow-crayola)] hover:opacity-90 transition'
          aria-expanded={showAll}
        >
          {showAll ? 'Show less' : `Show ${rest} more`}
        </button>
      )}

      {/* sheen nhẹ khi hover card */}
      <span
        className='pointer-events-none absolute -left-1/3 top-0 h-full w-1/3
                  bg-white/5 blur-md rotate-6 opacity-0 group-hover:opacity-100
                    translate-x-0 group-hover:translate-x-[180%] transition-all duration-700'
      />
    </div>
  )
}
