export const prerender = false
import type { APIRoute } from 'astro'
import { z } from 'astro/zod'
import { db, ContactFormSubmissions } from 'astro:db'
import { nanoid } from 'nanoid'

const ContactFormSchema = z.object({
  email: z.string().email(),
  subject: z.string(),
  message: z.string().min(20),
})

export const POST: APIRoute = async ({ request }) => {
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
      }),
      { status: 400 },
    )
  }

  const submissionId = nanoid(8)

  await db.insert(ContactFormSubmissions).values({
    id: submissionId,
    email: email as string,
    subject: subject as string,
    message: message as string,
  })

  return new Response(
    JSON.stringify({
      message: '¡Se ha enviado su mensaje con éxito! Uno de nuestros asesores se pondrá en contacto contigo en breve.',
      success: true,
    }),
    { status: 200 },
  )
}
