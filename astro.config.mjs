// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  adapter: vercel({
    edgeMiddleware: true,
    isr: {
      expiration: 60 * 60 * 24, // 1 day
      exclude: [/^\/api\/.+/],
    },
  }),

  fonts: [
    {
      name: 'Nunito',
      cssVariable: '--font-nunito',
      provider: fontProviders.fontsource(),
      weights: ['200 1000'],
      styles: ['normal'],
      subsets: ['latin'],
    },
  ],

  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.bgmedicina.com',
      },
    ],
  },

  redirects: {
    '/campusvirtual': 'https://canvas.instructure.com',
  },

  prefetch: true,
})
