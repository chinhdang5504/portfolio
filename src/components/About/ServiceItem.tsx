import type { Service } from '../../types/Service'

export default function ServiceItem({ service }: { service: Service }) {
  return (
    <li
      className='relative rounded-xl shadow-var-2 p-6 overflow-hidden group
                 border border-[var(--jet)] transition-all duration-300
                 hover:shadow-var-4 hover:-translate-y-0.5
                 min-h-[220px] flex flex-col justify-between'
      style={{ background: 'var(--border-gradient-onyx)' }}
    >
      <div className='absolute inset-1 rounded-xl -z-10' style={{ background: 'var(--bg-gradient-jet)' }} />

      {/* sheen chạy khi hover */}
      <span
        className='pointer-events-none absolute -left-1/3 top-0 h-full w-1/3
                   bg-white/10 blur-md rotate-6 opacity-0 group-hover:opacity-100
                   translate-x-0 group-hover:translate-x-[180%] transition-all duration-700'
      />

      {/* Nội dung */}
      <div className='flex flex-col items-center flex-1 justify-center text-center'>
        <div className='mb-3 flex justify-center'>
          <img
            src={service.icon}
            alt={service.title}
            width={40}
            height={40}
            className='transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105'
          />
        </div>
        <h4 className='text-[var(--white-2)] font-semibold text-base mb-1'>{service.title}</h4>
        <p className='text-[var(--light-gray)] text-sm'>{service.description}</p>
      </div>
    </li>
  )
}
