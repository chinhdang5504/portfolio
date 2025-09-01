type Page = 'About' | 'Resume' | 'Portfolio' | 'Blog' | 'Contact'

type Props = { active: Page; onChange: (p: Page) => void }

const items: Page[] = ['About', 'Resume', 'Portfolio', 'Contact']

export default function Navbar({ active, onChange }: Props) {
  return (
    <nav
      className='
        width-
        fixed bottom-[-25px] left-0 w-full
        rounded-t-2xl
        border-t border-[var(--jet)]
        bg-[hsla(240,1%,17%,0.75)] backdrop-blur-md
        z-40

        md:static md:top-0 md:right-0 md:w-auto
        md:border md:border-[var(--jet)] md:border-t-0
        md:rounded-2xl
        md:px-10 md:py-0
      '
    >
      <ul className='flex items-center justify-center md:gap-16 gap-6 py-4'>
        {items.map((label) => (
          <li key={label}>
            <button
              type='button'
              className={`text-[16px] transition-colors ${active === label
                  ? 'text-[var(--orange-yellow-crayola)]'
                  : 'text-[var(--light-gray)] hover:text-[var(--light-gray-70)]'
                }`}
              onClick={() => onChange(label)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
