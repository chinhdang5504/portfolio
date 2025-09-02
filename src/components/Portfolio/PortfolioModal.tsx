import { useEffect, useRef, useState, useId } from 'react'
import type { Project } from '../../types/Project'
import { IoCloseOutline, IoOpenOutline, IoLogoGithub, IoBriefcaseOutline, IoCalendarOutline } from 'react-icons/io5'

type Props = {
  project: Project
  open: boolean
  onClose: () => void
}

export default function ProjectModal({ project, open, onClose }: Props) {
  const [show, setShow] = useState(false) // animate in/out
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const prevFocusRef = useRef<HTMLElement | null>(null)
  const titleId = useId()

  // open/close + lock scroll + ESC + focus trap
  useEffect(() => {
    if (!open) return
    setShow(true)

    // lock scroll
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // remember & move focus
    prevFocusRef.current = document.activeElement as HTMLElement
    // delay a tick to ensure node is mounted
    const t = setTimeout(() => closeBtnRef.current?.focus(), 0)

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        handleClose()
      }
      if (e.key === 'Tab') {
        // focus trap
        const root = dialogRef.current
        if (!root) return
        const focusables = Array.from(
          root.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetParent !== null)
        if (focusables.length === 0) return

        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
      clearTimeout(t)
      // restore focus
      prevFocusRef.current?.focus?.()
    }
  }, [open])

  if (!open) return null

  const handleClose = () => {
    setShow(false)
    // chờ animation kết thúc rồi mới gọi onClose
    setTimeout(onClose, 200)
  }

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby={titleId}
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
    >
      {/* Backdrop với blur + fade */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200
        ${show ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
        aria-hidden
      />

      {/* Modal panel */}
      <section
        ref={dialogRef}
        className={`relative card-surface w-full max-w-3xl rounded-2xl border border-[var(--jet)] shadow-var-5
                    max-h-[85vh] flex flex-col overflow-hidden
                    transition-all duration-200
                    ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}
      >
        {/* Header */}
        <header className='flex items-start justify-between px-4 py-3 border-b border-[var(--jet)] shrink-0'>
          <div>
            <h4 id={titleId} className='text-[var(--white-2)] text-lg font-semibold'>
              {project.title}
            </h4>

            {/* badges role/time */}
            <div className='mt-1 flex flex-wrap gap-2'>
              {project.role && (
                <span className='inline-flex items-center gap-1 px-2 py-1 rounded-full border border-[var(--jet)] bg-[var(--eerie-black-1)] text-[var(--vegas-gold)] text-xs'>
                  <IoBriefcaseOutline className='opacity-80' />
                  {project.role}
                </span>
              )}
              {project.time && (
                <span className='inline-flex items-center gap-1 px-2 py-1 rounded-full border border-[var(--jet)] bg-[var(--eerie-black-1)] text-[var(--vegas-gold)] text-xs'>
                  <IoCalendarOutline className='opacity-80' />
                  {project.time}
                </span>
              )}
            </div>
          </div>

          <button
            ref={closeBtnRef}
            type='button'
            onClick={handleClose}
            className='w-9 h-9 inline-flex items-center justify-center rounded-md bg-[var(--onyx)]
                       text-white/90 hover:opacity-100 opacity-80 transition focus:outline-none
                       focus:ring-2 focus:ring-[var(--orange-yellow-crayola)]/40'
            aria-label='Close'
          >
            <IoCloseOutline size={20} />
          </button>
        </header>

        {/* Body */}
        <div className='flex-1 overflow-y-auto custom-scroll p-4'>
          {/* 1 cột, ảnh giữa */}
          <div className='grid grid-cols-1 gap-6'>
            {/* Thumbnail */}
            <figure
              className='mx-auto w-1/2 rounded-xl overflow-hidden border border-[var(--jet)] bg-[var(--eerie-black-1)]
                         transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-var-3'
            >
              <div className='relative aspect-[4/3] w-full'>
                <img src={project.image} alt={project.title} className='absolute inset-0 w-full h-full object-cover' />
                {/* Vignette nhẹ */}
                <span className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent,rgba(0,0,0,0.25))]' />
              </div>
            </figure>

            {/* Details */}
            <div className='space-y-4'>
              {project.shortDescription && (
                <div>
                  <h5 className='text-[var(--white-2)] font-semibold mb-1'>Overview</h5>
                  <p className='text-[var(--light-gray)] text-sm leading-relaxed text-justify'>
                    {project.shortDescription}
                  </p>
                </div>
              )}

              {project.technology?.length > 0 && (
                <div>
                  <h5 className='text-[var(--white-2)] font-semibold mb-1'>Technology</h5>
                  <ul className='flex flex-wrap gap-2'>
                    {project.technology.map((t) => (
                      <li
                        key={t}
                        className='px-3 py-1 rounded-full border border-[var(--jet)]
                                  text-[12px] font-medium  tracking-wide
                                  text-[var(--white-2)] bg-[var(--eerie-black-2)]/70
                                  shadow-sm hover:scale-105 transition-transform duration-150'
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.responsibilities?.length > 0 && (
                <div>
                  <h5 className='text-[var(--white-2)] font-semibold mb-1'>Responsibilities</h5>
                  <ul className='list-disc pl-5 space-y-1'>
                    {project.responsibilities.map((r, idx) => (
                      <li key={idx} className='text-[var(--light-gray)] text-sm leading-relaxed'>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        {(project.linkDemo || project.linkSource) && (
          <footer className='px-4 pb-4 pt-2 flex flex-wrap items-center gap-3 shrink-0'>
            {project.linkDemo && (
              <a
                href={project.linkDemo}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--jet)]
                           text-[var(--orange-yellow-crayola)] hover:bg-white/5 transition
                           w-full sm:w-auto justify-center'
              >
                <IoOpenOutline />
                Live Demo
              </a>
            )}
            {project.linkSource && (
              <a
                href={project.linkSource}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--jet)]
                           text-[var(--white-2)] hover:bg-white/5 transition
                           w-full sm:w-auto justify-center'
              >
                <IoLogoGithub />
                Source
              </a>
            )}
          </footer>
        )}
      </section>
    </div>
  )
}
