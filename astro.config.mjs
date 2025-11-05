// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react'

import db from '@astrojs/db'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), db()],
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24, // 1 day
    },
  }),

  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.bgmedicina.com',
      },
    ],
  },

  prefetch: true,
})
