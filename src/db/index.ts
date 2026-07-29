import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './schema'

const url = import.meta.env.ASTRO_DB_REMOTE_URL ?? process.env.ASTRO_DB_REMOTE_URL
const authToken = import.meta.env.ASTRO_DB_APP_TOKEN ?? process.env.ASTRO_DB_APP_TOKEN

if (!url) {
  throw new Error('Missing ASTRO_DB_REMOTE_URL environment variable.')
}

const client = createClient({
  url,
  authToken,
})

export const db = drizzle(client, { schema })

export { contactFormSubmissions, courseCategories, courses, team } from './schema'
