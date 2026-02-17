import { Check } from 'lucide-react'
import { useState } from 'react'

type ContactFormErrors = {
  email?: string[]
  subject?: string[]
  message?: string[]
}

export default function ContactForm() {
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [responseMessage, setResponseMessage] = useState('')
  const [success, setSuccess] = useState(false)

  async function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    setErrors({})
    setResponseMessage('')

    const formData = new FormData(e.currentTarget)
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.message) {
      setResponseMessage(data.message)
      setSuccess(data.success)
    }

    if (data.errors) {
      setErrors(data.errors)
      setSuccess(false)
    }
  }

  return (
    <>
      <form onSubmit={submit} className='space-y-4'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-900'>
            Correo electrónico
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-xs focus:border-teal-500 focus:ring-teal-500'
            placeholder='tunombre@email.com'
            required
          />
          {errors.email && <p className='text-sm text-red-500'>{errors.email[0]}</p>}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='subject' className='block text-sm font-medium text-gray-900'>
            Asunto
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-xs focus:border-teal-500 focus:ring-teal-500'
            placeholder='¿Cómo podemos ayudarte?'
            required
          />
          {errors.subject && <p className='text-sm text-red-500'>{errors.subject[0]}</p>}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='message' className='block text-sm font-medium text-gray-900'>
            Mensaje
          </label>
          <textarea
            id='message'
            rows={6}
            name='message'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-xs focus:border-teal-500 focus:ring-teal-500'
            placeholder='Escribe más detalles aquí.'
            minLength={20}
            required
          ></textarea>
          {errors.message && <p className='text-sm text-red-500'>{errors.message[0]}</p>}
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
          className='rounded-lg bg-teal-700 px-5 py-3 text-center text-sm font-medium text-white transition-all hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 focus:outline-hidden sm:w-fit'
        >
          Enviar Mensaje
        </button>
      </form>
      <div
        id='success_message'
        className='grid grid-cols-[auto_1fr] gap-2 rounded-lg border border-emerald-600 bg-emerald-50 px-3 py-2 text-emerald-600'
      >
        <Check className='size-4' />
        <p>
          {responseMessage ||
            'Se ha enviado su mensaje con éxito! Uno de nuestros asesores se pondrá en contacto contigo en breve.'}
        </p>
      </div>
    </>
  )
}
