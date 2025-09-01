import { awards, certificate, education, experience } from '../../data/timeline'
import TimelineItem from './TimelineItem'
import { IoBookOutline, IoBriefcaseOutline, IoRibbonOutline, IoTrophyOutline } from 'react-icons/io5'

export default function Resume() {
  return (
    <article className='card-surface p-6 shadow-var-1'>
      <h2 className='article-title relative text-[var(--white-2)] text-2xl mb-8'>Resume</h2>

      {/* Education */}
      <section className='mb-8'>
        <div className='flex items-center gap-3 mb-4'>
          <div
            className='w-8 h-8 rounded-lg flex items-center justify-center text-[var(--orange-yellow-crayola)] shadow-var-1'
            style={{ background: 'var(--border-gradient-onyx)' }}
            aria-hidden
          >
            <IoBookOutline />
          </div>
          <h3 className='text-[var(--white-2)] text-xl'>Education</h3>
        </div>

        <ol className='timeline-list space-y-6'>
          {education.map((e) => (
            <TimelineItem key={e.id} item={e} />
          ))}
        </ol>
      </section>

      {/* Experience */}
      <section className='mb-8'>
        <div className='flex items-center gap-3 mb-4'>
          <div
            className='w-8 h-8 rounded-lg flex items-center justify-center text-[var(--orange-yellow-crayola)] shadow-var-1'
            style={{ background: 'var(--border-gradient-onyx)' }}
            aria-hidden
          >
            <IoBriefcaseOutline />
          </div>
          <h3 className='text-[var(--white-2)] text-xl'>Experience</h3>
        </div>

        <ol className='timeline-list space-y-6'>
          {experience.map((e) => (
            <TimelineItem key={e.id} item={e} />
          ))}
        </ol>
      </section>

      {/* Certificate */}
      <section className='mb-8'>
        <div className='flex items-center gap-3 mb-4'>
          <div
            className='w-8 h-8 rounded-lg flex items-center justify-center text-[var(--orange-yellow-crayola)] shadow-var-1'
            style={{ background: 'var(--border-gradient-onyx)' }}
            aria-hidden
          >
            <IoRibbonOutline />
          </div>
          <h3 className='text-[var(--white-2)] text-xl'>Certificate</h3>
        </div>

        <ol className='timeline-list space-y-6'>
          {certificate.map((e) => (
            <TimelineItem key={e.id} item={e} />
          ))}
        </ol>
      </section>

      {/* Award */}
      <section className='mb-8'>
        <div className='flex items-center gap-3 mb-4'>
          <div
            className='w-8 h-8 rounded-lg flex items-center justify-center text-[var(--orange-yellow-crayola)] shadow-var-1'
            style={{ background: 'var(--border-gradient-onyx)' }}
            aria-hidden
          >
            <IoTrophyOutline />
          </div>
          <h3 className='text-[var(--white-2)] text-xl'>Award</h3>
        </div>

        <ol className='timeline-list space-y-6'>
          {awards.map((e) => (
            <TimelineItem key={e.id} item={e} />
          ))}
        </ol>
      </section>
    </article>
  )
}
