import { useState } from 'react'
import type { Project } from '../../types/Project'
import { IoEyeOutline } from 'react-icons/io5'
import ProjectModal from './PortfolioModal'

type Props = {
  project: Project
  mounted?: boolean
  index?: number
}

export default function ProjectItem({ project, mounted, index = 0 }: Props) {
  const [open, setOpen] = useState(false)
  const techChips = (project.technology ?? []).slice(0, 3)

  return (
    <>
      <li
        className={`
          relative rounded-2xl overflow-hidden border border-[var(--jet)]
          shadow-var-2 hover:shadow-var-4 hover:-translate-y-0.5
          transition-all duration-500 ease-out
          ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
        `}
        style={{
          transitionDelay: mounted ? `${index * 100}ms` : '0ms',
          background: 'var(--border-gradient-onyx)'
        }}
      >
        {/* inner surface */}
        <span className='absolute inset-1 rounded-2xl -z-10' style={{ background: 'var(--bg-gradient-jet)' }} />

        <button
          type='button'
          onClick={() => setOpen(true)}
          className='block w-full text-left group outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange-yellow-crayola)]/40 rounded-2xl'
        >
          {/* Image + overlay */}
          <figure className='relative h-52 md:h-56 rounded-2xl overflow-hidden mb-3'>
            <div className='absolute inset-0 bg-transparent group-hover:bg-black/50 transition-colors duration-300 z-10' />
            <div
              className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                         opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
                         transition-all duration-300 z-20
                         bg-[var(--jet)] text-[var(--orange-yellow-crayola)]
                         p-4 rounded-xl'
            >
              <IoEyeOutline size={22} />
            </div>
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
            />
          </figure>

          {/* title + role/time + chips + desc */}
          <div className='px-3 pb-3 space-y-2'>
            <h3 className='text-[var(--white-2)] text-base font-medium transition-colors duration-300 group-hover:text-[var(--orange-yellow-crayola)]'>
              {project.title}
            </h3>

            {(project.role || project.time) && (
              <p className='text-[var(--light-gray-70)] text-xs'>
                {project.role} {project.role && project.time ? ' • ' : ''}
                {project.time}
              </p>
            )}

            {/* 3 tech chips */}
            {techChips.length > 0 && (
              <ul className='flex flex-wrap gap-2'>
                {techChips.map((t) => (
                  <li
                    key={t}
                    className='px-2 py-0.5 rounded-md border border-[var(--jet)]
                               text-[11px] uppercase tracking-wide
                               text-[var(--white-2)] bg-[var(--eerie-black-2)]/70'
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}

            <p className='text-[var(--light-gray-70)] text-sm line-clamp-2'>{project.shortDescription}</p>
          </div>
        </button>
      </li>

      <ProjectModal project={project} open={open} onClose={() => setOpen(false)} />
    </>
  )
}
