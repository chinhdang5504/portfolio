import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

type Page = 'About' | 'Resume' | 'Portfolio' | 'Blog' | 'Contact'

export default function App() {
  const [active, setActive] = useState<Page>('About')

  return (
    <main className='max-w-[1200px] mx-auto flex flex-col gap-6 lg:flex-row md:gap-6 p-4 md:pt-14 pb-16'>
      {/* Sidebar: sticky khi >= md, có top và không bị co giãn */}
      <aside className='w-full lg:w-[320px] lg:sticky lg:top-14 lg:self-start lg:flex-none'>
        <Sidebar />
      </aside>

      {/* Nội dung */}
      <section className='flex-1 space-y-6 relative custom-scroll overflow-auto'>
        <Navbar active={active} onChange={setActive} />
        {active === 'About' && <About />}
        {active === 'Resume' && <Resume />}
        {active === 'Portfolio' && <Portfolio />}
        {active === 'Contact' && <Contact />}
      </section>
    </main>
  )
}
