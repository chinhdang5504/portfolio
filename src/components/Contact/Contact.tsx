import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <article className='card-surface p-6 shadow-var-1'>
      <h2 className='article-title relative text-[var(--white-2)] text-2xl mb-8'>Contact</h2>

      <section className='relative h-64 rounded-2xl border border-[var(--jet)] overflow-hidden mb-6'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125364.82829554542!2d106.79174069772158!3d10.914114684058958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d952b84aea25%3A0x2111cd93cb5263cb!2zVHAuIEJpw6puIEjDsmEsIMSQ4buTbmcgTmFpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1756624083236!5m2!1svi!2sus'
          className='w-full h-full border-0'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          style={{ filter: 'invert(1) grayscale(1)' }}
        />
      </section>

      <h3 className='text-[var(--white-2)] text-xl mb-4'>Contact Form</h3>
      <ContactForm />
    </article>
  )
}
