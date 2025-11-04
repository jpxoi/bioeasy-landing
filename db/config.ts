import { defineDb, defineTable, column } from 'astro:db'

const CourseCategories = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    tag: column.text(),
    name: column.text(),
  },
})

const Courses = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    imageKey: column.text(),
    tag: column.text(),
    category: column.text({ references: () => CourseCategories.columns.id }),
  },
})

const Team = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    title: column.text(),
    avatarKey: column.text(),
  },
})

export default defineDb({
  tables: { Team, Courses, CourseCategories },
})
