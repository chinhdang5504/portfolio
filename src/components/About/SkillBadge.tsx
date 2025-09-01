import SkillIcon from './SkillIcon'

type Props = { name: string; icon: string }

export default function SkillBadge({ name, icon }: Props) {
  return (
    <div
      tabIndex={0}
      className='group flex items-center gap-2 px-3 py-2 min-h-[44px] rounded-lg border border-[var(--jet)] 
                 bg-[var(--eerie-black-2)] shadow-var-1 transition-all duration-300 outline-none
                 hover:shadow-var-3 hover:-translate-y-0.5 focus:-translate-y-0.5
                 focus:ring-2 focus:ring-[var(--orange-yellow-crayola)]/40 min-w-0'
    >
      <div className='w-[18px] h-[18px] flex items-center justify-center'>
        <SkillIcon
          icon={icon}
          className='text-[20px] text-[var(--orange-yellow-crayola)] transition-transform duration-300 
                     group-hover:-translate-y-0.5'
        />
      </div>
      <span className='text-sm text-[var(--white-2)]'>{name}</span>
    </div>
  )
}
