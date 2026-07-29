import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const courseCategories = sqliteTable('CourseCategories', {
  id: text('id').primaryKey(),
  tag: text('tag').notNull(),
  name: text('name').notNull(),
})

export const courses = sqliteTable('Courses', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  imageKey: text('imageKey').notNull(),
  tag: text('tag').notNull(),
  category: text('category')
    .notNull()
    .references(() => courseCategories.id),
})

export const team = sqliteTable('Team', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  title: text('title').notNull(),
  avatarKey: text('avatarKey').notNull(),
})

export const contactFormSubmissions = sqliteTable('ContactFormSubmissions', {
  id: text('id').primaryKey(),
  email: text('email').notNull(),
  subject: text('subject').notNull(),
  message: text('message').notNull(),
})
