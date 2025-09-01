import { useState, useEffect } from 'react'
import { IoPaperPlane } from 'react-icons/io5'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    const ok = name.trim().length > 0 && /\S+@\S+\.\S+/.test(email) && message.trim().length > 0
    setDisabled(!ok)
  }, [name, email, message])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (isSending || disabled) return

    setIsSending(true)

    const payload = {
      from_name: name,
      from_email: email,
      message: message,
      title: 'Portfolio Contact'
    }

    try {
      await toast.promise(
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          payload,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ),
        {
          loading: 'Sending...',
          success: 'Sended successfully. I will get back to you soon!',
          error: 'Failed to send. Please try again later.'
        }
      )

      // Reset form when success
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
    } finally {
      setIsSending(false)
    }
  }

  const isBtnDisabled = disabled || isSending

  return (
    <form onSubmit={onSubmit} className='space-y-4'>
      <div className='grid md:grid-cols-2 gap-4'>
        <input
          type='text'
          placeholder='Full name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='text-[var(--white-2)] text-sm p-3 rounded-xl border border-[var(--jet)] bg-transparent outline-none
             transition-all duration-300 ease-in-out
             hover:border-[var(--light-gray-70)]
             focus:border-[var(--orange-yellow-crayola)]
             focus:shadow-var-3'
        />
        <input
          type='email'
          placeholder='Email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='text-[var(--white-2)] text-sm p-3 rounded-xl border border-[var(--jet)] bg-transparent outline-none
             transition-all duration-300 ease-in-out
             hover:border-[var(--light-gray-70)]
             focus:border-[var(--orange-yellow-crayola)]
             focus:shadow-var-3'
        />
      </div>

      <textarea
        placeholder='Your Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='min-h-[120px] max-h-[240px] text-[var(--white-2)] text-sm p-3 rounded-xl border border-[var(--jet)] bg-transparent outline-none w-full resize-vertical
             transition-all duration-300 ease-in-out
             hover:border-[var(--light-gray-70)]
             focus:border-[var(--orange-yellow-crayola)]
             focus:shadow-var-3'
      />

      <button
        type='submit'
        disabled={isBtnDisabled}
        className={`relative w-full md:w-auto px-5 py-3 rounded-xl text-[var(--orange-yellow-crayola)] shadow-var-3
          transition-all duration-300 ease-in-out
          ${isBtnDisabled ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 active:scale-95 hover:shadow-var-4'}
        `}
        style={{ background: 'var(--border-gradient-onyx)' }}
        aria-busy={isSending}
      >
        <span
          className='absolute inset-1 rounded-xl -z-10 transition-colors duration-300 ease-in-out'
          style={{ background: 'var(--bg-gradient-jet)' }}
        />
        <span className='inline-flex items-center gap-2'>
          {isSending ? (
            <span
              className='inline-block h-4 w-4 rounded-full border-2 border-[var(--orange-yellow-crayola)] border-t-transparent animate-spin'
              aria-hidden
            />
          ) : (
            <IoPaperPlane />
          )}
          {isSending ? 'Sending…' : 'Send Message'}
        </span>
      </button>
    </form>
  )
}
