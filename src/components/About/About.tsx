import ServiceItem from './ServiceItem'
import { services } from '../../data/services'
import { skills } from '../../data/skills'
import Reveal from '../../utils/Reveal'
import SkillGroup from './SkillGroup'

export default function About() {
  return (
    <article className='card-surface p-6 shadow-var-1 relative overflow-hidden'>
      <h2 className='article-title relative text-[var(--white-2)] text-2xl mb-8'>About me</h2>

      <Reveal>
        <section className='text-justify text-[var(--light-gray)] text-sm leading-6 space-y-3 mb-6'>
          <p>
            I'm a passionate Web Developer with strong expertise in JavaScript, TypeScript, ReactJS, Node.js, and Java
            Spring. I enjoy building scalable, user-friendly, and visually appealing web applications.
          </p>
          <p>
            I have gained valuable experience through diverse projects, which has allowed me to develop both technical
            expertise and creative problem-solving skills. I am passionate about exploring new technologies, adopting
            best practices, and continually enhancing my abilities to deliver high-quality, impactful solutions.
          </p>
        </section>
      </Reveal>

      {/* Services */}
      <section className='mb-8'>
        <Reveal>
          <h3 className='text-[var(--white-2)] font-semibold text-xl mb-4 col-span-full'>What I’m Passionate About</h3>
        </Reveal>

        {/* auto-fit: cột tự co giãn, card đều nhau */}
        <ul className='grid gap-4' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {services.map((s, i) => (
            <div key={s.id} className='h-full'>
              <Reveal delay={100 + i * 60}>
                <div className='h-full'>
                  <ServiceItem service={s} />
                </div>
              </Reveal>
            </div>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className='mb-0'>
        <Reveal>
          <h3 className='text-[var(--white-2)] font-semibold text-xl mb-4 col-span-full'>Skills</h3>
        </Reveal>

        {/* auto-fit cho nhóm skill + item h-full để thẻ cao bằng nhau */}
        <div
          className='grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] 
             sm:[grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] 
             md:[grid-template-columns:repeat(auto-fit,minmax(350px,1fr))]'
        >
          <div className='h-full'>
            <Reveal delay={60}>
              <div className='h-full'>
                <SkillGroup title='Languages' items={skills.language} />
              </div>
            </Reveal>
          </div>

          <div className='h-full'>
            <Reveal delay={120}>
              <div className='h-full'>
                <SkillGroup title='Frontend' items={skills.frontend} />
              </div>
            </Reveal>
          </div>

          <div className='h-full'>
            <Reveal delay={180}>
              <div className='h-full'>
                <SkillGroup title='Backend' items={skills.backend} />
              </div>
            </Reveal>
          </div>

          <div className='h-full'>
            <Reveal delay={240}>
              <div className='h-full'>
                <SkillGroup title='Database' items={skills.database} />
              </div>
            </Reveal>
          </div>

          {/* Tools full width nếu không muốn chia nhỏ */}
          <div className='h-full col-span-full'>
            <Reveal delay={300}>
              <div className='h-full'>
                <SkillGroup title='Other Tools' items={skills.tools} initial={10} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </article>
  )
}
