import { cn } from '@/lib/utils'

/** Header shell — self variants for scrolled; group for children reacting to data-at-hero */
export const headerShell = cn(
  'group/site-header fixed inset-x-0 top-0 z-20 border-b border-transparent',
  'transition-[background-color,box-shadow,border-color] duration-300 ease-out',
  '[&.is-scrolled]:border-teal-700/10 [&.is-scrolled]:bg-white/95',
  '[&.is-scrolled]:shadow-sm [&.is-scrolled]:shadow-teal-950/5 [&.is-scrolled]:backdrop-blur-md',
)

export const headerHeroScrim = cn(
  'pointer-events-none absolute inset-x-0 top-0 z-0 h-24',
  'bg-linear-to-b from-teal-950/55 via-teal-950/30 to-transparent',
  'opacity-0 transition-opacity duration-300',
  'group-data-[at-hero]/site-header:opacity-100',
)

export const brandImg = cn(
  'w-auto transition-[filter] duration-300',
  'group-data-[at-hero]/site-header:brightness-0 group-data-[at-hero]/site-header:invert',
)

export const headerCta = cn(
  'max-lg:hidden inline-flex items-center justify-center rounded-xl px-5 py-2.5',
  'text-sm font-semibold shadow-sm transition-all focus:ring-4 focus:outline-hidden',
  'bg-teal-700 text-white shadow-teal-900/15 hover:bg-teal-800 hover:shadow-md hover:shadow-teal-900/20 focus:ring-teal-300/50',
  'group-data-[at-hero]/site-header:border-2 group-data-[at-hero]/site-header:border-white/90',
  'group-data-[at-hero]/site-header:bg-white/15 group-data-[at-hero]/site-header:text-white',
  'group-data-[at-hero]/site-header:backdrop-blur-sm',
  'group-data-[at-hero]/site-header:hover:border-white group-data-[at-hero]/site-header:hover:bg-white',
  'group-data-[at-hero]/site-header:hover:text-teal-800 group-data-[at-hero]/site-header:focus:ring-white/40',
)

export const menuToggle = cn(
  'relative inline-flex size-10 shrink-0 items-center justify-center rounded-xl border transition-all lg:hidden',
  'border-transparent text-teal-700 hover:border-teal-700/15 hover:bg-teal-50',
  'focus:ring-2 focus:ring-teal-300/50 focus:outline-hidden',
  'group-data-[at-hero]/site-header:border-white/25 group-data-[at-hero]/site-header:bg-white/10',
  'group-data-[at-hero]/site-header:text-white group-data-[at-hero]/site-header:backdrop-blur-sm',
  'group-data-[at-hero]/site-header:hover:border-white/40 group-data-[at-hero]/site-header:hover:bg-white/20',
  'group-data-[at-hero]/site-header:focus-visible:ring-white/30',
)

export const mobileNavLink = cn(
  'nav__link block rounded-xl px-5 py-4 text-lg font-medium text-gray-800 transition-colors',
  'hover:bg-teal-50 hover:text-teal-800 active:bg-teal-50',
)

export const navLink = cn(
  'nav__link relative hidden font-medium transition-colors lg:block',
  'lg:rounded-lg lg:px-3.5 lg:py-2 lg:text-sm lg:text-gray-600 lg:hover:bg-teal-50/90 lg:hover:text-teal-800',
  'after:absolute after:inset-x-3.5 after:-bottom-0.5 after:hidden after:h-0.5 after:origin-left after:scale-x-0',
  'after:rounded-full after:bg-teal-700 after:transition-transform after:duration-200 hover:after:scale-x-100 lg:after:block',
  'group-data-[at-hero]/site-header:lg:text-white/95',
  'group-data-[at-hero]/site-header:lg:hover:bg-white/10 group-data-[at-hero]/site-header:lg:hover:text-white',
  'group-data-[at-hero]/site-header:after:bg-white',
)
