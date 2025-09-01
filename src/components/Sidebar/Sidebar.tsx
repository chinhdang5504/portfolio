import { useState } from 'react'
import { contactInfo } from '../../data/contact'
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoChevronDown,
  IoChevronUp
} from 'react-icons/io5'
import { chinhdangAva } from '../../assets/images/image'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='card-surface sidebar p-6 shadow-var-1'>
      {/* avatar + name */}
      <div className='relative flex flex-row lg:flex-col items-center lg:items-center gap-4 lg:gap-0 text-left lg:text-center'>
        <figure className='rounded-2xl overflow-hidden bg-[var(--bg-gradient-onyx)] shrink-0'>
          <img src={chinhdangAva} alt='chinh dang' className='w-24 h-24 lg:w-32 lg:h-32 object-cover' />
        </figure>

        <div className='flex-1'>
          <h1 className='text-[var(--white-2)] text-xl font-semibold mt-0 lg:mt-4'>Chinh Dang</h1>
          <p className='bg-[var(--onyx)] text-[12px] font-light px-3 py-1 rounded-md text-[var(--white-1)] mt-2 inline-block'>
            Web developer
          </p>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className='absolute lg:hidden top-0 right-0 text-[var(--orange-yellow-crayola)] p-2'
          aria-label='Toggle contact info'
        >
          {isOpen ? <IoChevronUp /> : <IoChevronDown />}
        </button>
      </div>

      {/* contact info */}
      <div
        className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-full lg:opacity-100'
          }`}
      >
        <div className='my-6 h-px bg-[var(--jet)]' />

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4'>
          <li className='flex items-center gap-3'>
            <div
              className='w-8 h-8 rounded-lg flex items-center justify-center shadow-var-1 text-[var(--orange-yellow-crayola)]'
              style={{ background: 'var(--border-gradient-onyx)' }}
              aria-hidden
            >
              <IoMailOutline />
            </div>
            <div>
              <p className='text-[var(--light-gray-70)] uppercase text-[11px]'>Email</p>
              <a href={`mailto:${contactInfo.email}`} className='text-[var(--white-2)] text-[13px]'>
                {contactInfo.email}
              </a>
            </div>
          </li>

          <li className='flex items-center gap-3'>
            <div
              className='w-8 h-8 rounded-lg flex items-center justify-center shadow-var-1 text-[var(--orange-yellow-crayola)]'
              style={{ background: 'var(--border-gradient-onyx)' }}
              aria-hidden
            >
              <IoPhonePortraitOutline />
            </div>
            <div>
              <p className='text-[var(--light-gray-70)] uppercase text-[11px]'>Phone</p>
              <a href={`tel:${contactInfo.phone}`} className='text-[var(--white-2)] text-[13px]'>
                {contactInfo.phone}
              </a>
            </div>
          </li>

          <li className='flex items-center gap-3'>
            <div
              className='w-8 h-8 rounded-lg flex items-center justify-center shadow-var-1 text-[var(--orange-yellow-crayola)]'
              style={{ background: 'var(--border-gradient-onyx)' }}
              aria-hidden
            >
              <IoCalendarOutline />
            </div>
            <div>
              <p className='text-[var(--light-gray-70)] uppercase text-[11px]'>Birthday</p>
              <time className='text-[var(--white-2)] text-[13px]'>{contactInfo.birthday}</time>
            </div>
          </li>

          <li className='flex items-center gap-3'>
            <div
              className='w-8 h-8 rounded-lg flex items-center justify-center shadow-var-1 text-[var(--orange-yellow-crayola)]'
              style={{ background: 'var(--border-gradient-onyx)' }}
              aria-hidden
            >
              <IoLocationOutline />
            </div>
            <div>
              <p className='text-[var(--light-gray-70)] uppercase text-[11px]'>Location</p>
              <address className='not-italic text-[var(--white-2)] text-[13px]'>{contactInfo.location}</address>
            </div>
          </li>
        </ul>

        <div className='my-6 h-px bg-[var(--jet)]' />

        <ul className='flex items-center gap-4 justify-center text-[18px] text-[var(--light-gray-70)]'>
          <li>
            <a
              href='https://www.facebook.com/chinh.tran.372244/'
              target='_blank'
              className='hover:text-[var(--light-gray)]'
              aria-label='Facebook'
            >
              <IoLogoFacebook />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/chinhdang5504'
              target='_blank'
              className='hover:text-[var(--light-gray)]'
              aria-label='Github'
            >
              <IoLogoGithub />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/chinhdng/'
              target='_blank'
              className='hover:text-[var(--light-gray)]'
              aria-label='Linkedin'
            >
              <IoLogoLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
