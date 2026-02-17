import { Check, Loader2, AlertCircle } from 'lucide-react'
import { useState, useRef } from 'react'
import { clsx } from 'clsx'

type ContactFormErrors = {
  email?: string[]
  subject?: string[]
  message?: string[]
}

export default function ContactForm() {
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [responseMessage, setResponseMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setIsSubmitting(true)
    setErrors({})
    setResponseMessage('')
    setSuccess(false)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSuccess(true)
        setResponseMessage(data.message)
        formRef.current?.reset()
      } else {
        setSuccess(false)
        if (data.errors) {
          setErrors(data.errors)
        }
        setResponseMessage(data.message || 'Ha ocurrido un error inesperado.')
      }
    } catch (error) {
      setSuccess(false)
      setResponseMessage('Error de conexión. Por favor, verifica tu internet e inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={submit} ref={formRef} className='space-y-4'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-900'>
            Correo electrónico
          </label>
          <input
            type='email'
            id='email'
            name='email'
            disabled={isSubmitting}
            className={clsx(
              'block w-full rounded-lg border p-2.5 text-sm shadow-xs focus:ring-2 focus:outline-hidden',
              errors.email
                ? 'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 bg-gray-50 text-gray-900 focus:border-teal-500 focus:ring-teal-500',
            )}
            placeholder='tunombre@email.com'
            required
          />
          {errors.email && (
            <p className='mt-1 flex items-center text-sm text-red-600'>
              <AlertCircle className='mr-1 size-4' />
              {errors.email[0]}
            </p>
          )}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='subject' className='block text-sm font-medium text-gray-900'>
            Asunto
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            disabled={isSubmitting}
            className={clsx(
              'block w-full rounded-lg border p-3 text-sm shadow-xs focus:ring-2 focus:outline-hidden',
              errors.subject
                ? 'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 bg-gray-50 text-gray-900 focus:border-teal-500 focus:ring-teal-500',
            )}
            placeholder='¿Cómo podemos ayudarte?'
            minLength={5}
            required
          />
          {errors.subject && (
            <p className='mt-1 flex items-center text-sm text-red-600'>
              <AlertCircle className='mr-1 size-4' />
              {errors.subject[0]}
            </p>
          )}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='message' className='block text-sm font-medium text-gray-900'>
            Mensaje
          </label>
          <textarea
            id='message'
            rows={6}
            name='message'
            disabled={isSubmitting}
            className={clsx(
              'block w-full rounded-lg border p-2.5 text-sm shadow-xs focus:ring-2 focus:outline-hidden',
              errors.message
                ? 'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 bg-gray-50 text-gray-900 focus:border-teal-500 focus:ring-teal-500',
            )}
            placeholder='Escribe más detalles aquí.'
            minLength={20}
            required
          ></textarea>
          {errors.message && (
            <p className='mt-1 flex items-center text-sm text-red-600'>
              <AlertCircle className='mr-1 size-4' />
              {errors.message[0]}
            </p>
          )}
        </div>

        <p className='text-justify text-xs font-light text-gray-500'>
          Considerando la vigencia del Decreto Legislativo Nº 1390 (Restricciones a la difusión de publicidad masiva) y,
          siendo <strong>Bioeasy Galenos</strong> respetuoso del ordenamiento jurídico vigente, le solicitamos nos
          brinde su consentimiento para mantenerlo informado acerca de nuestros diferentes servicios a través del envío
          de nuestra publicidad. La información brindada se utilizará exclusivamente para el envío de publicidad, por lo
          que se encontrará protegida por la Ley Nº 29733 - Ley de Protección de datos personales.
        </p>

        <button
          type='submit'
          disabled={isSubmitting}
          className={clsx(
            'flex items-center justify-center rounded-lg px-5 py-3 text-center text-sm font-medium text-white transition-all focus:ring-4 focus:outline-hidden sm:w-fit',
            isSubmitting
              ? 'cursor-not-allowed bg-teal-600 opacity-70'
              : 'bg-teal-700 hover:bg-teal-800 focus:ring-teal-300',
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className='mr-2 size-4 animate-spin' />
              Enviando...
            </>
          ) : (
            'Enviar Mensaje'
          )}
        </button>
        {responseMessage && (
          <div
            id='form-message'
            className={clsx(
              'mt-4 grid w-full grid-cols-[auto_1fr] gap-2 rounded-lg border px-4 py-3 text-sm',
              success ? 'border-emerald-600 bg-emerald-50 text-emerald-600' : 'border-red-600 bg-red-50 text-red-600',
            )}
          >
            {success ? <Check className='size-5' /> : <AlertCircle className='size-5' />}
            <p>{responseMessage}</p>
          </div>
        )}
      </form>
    </>
  )
}
