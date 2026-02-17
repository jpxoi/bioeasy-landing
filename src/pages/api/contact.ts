export const prerender = false

import type { APIRoute } from 'astro'
import { z } from 'astro/zod'
import { db, ContactFormSubmissions } from 'astro:db'
import { nanoid } from 'nanoid'

const ContactFormSchema = z.object({
  email: z
    .string({ required_error: 'El correo electrónico es obligatorio.' })
    .email('Ingrese un correo electrónico válido.'),
  subject: z
    .string({ required_error: 'El asunto es obligatorio.' })
    .min(5, 'El asunto debe tener al menos 5 caracteres.'),
  message: z
    .string({ required_error: 'El mensaje es obligatorio.' })
    .min(20, 'El mensaje debe tener al menos 20 caracteres.'),
})

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData()
    const email = data.get('email')
    const subject = data.get('subject')
    const message = data.get('message')

    const validatedData = ContactFormSchema.safeParse({ email, subject, message })

    if (!validatedData.success) {
      const errors = validatedData.error.flatten().fieldErrors
      return new Response(
        JSON.stringify({
          errors,
          success: false,
          message: 'Por favor, corrija los errores en el formulario.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    const { email: validEmail, subject: validSubject, message: validMessage } = validatedData.data
    const submissionId = nanoid(8)

    await db.insert(ContactFormSubmissions).values({
      id: submissionId,
      email: validEmail,
      subject: validSubject,
      message: validMessage,
    })

    return new Response(
      JSON.stringify({
        message:
          '¡Se ha enviado su mensaje con éxito! Uno de nuestros asesores se pondrá en contacto contigo en breve.',
        success: true,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return new Response(
      JSON.stringify({
        message: 'Ocurrió un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.',
        success: false,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
