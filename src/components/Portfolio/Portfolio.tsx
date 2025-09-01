import { useState, useEffect } from 'react'
import { projects } from '../../data/projects'
import ProjectItem from './ProjectItem'

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // khi component mount → bật animation
    setMounted(true)
  }, [])
  return (
    <article className='card-surface p-6 shadow-var-1'>
      <h2 className='article-title relative text-[var(--white-2)] text-2xl mb-8'>Portfolio</h2>

      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
        {projects.map((p, idx) => (
          <ProjectItem key={p.id} project={p} mounted={mounted} index={idx} />
        ))}
      </ul>
    </article>
  )
}
