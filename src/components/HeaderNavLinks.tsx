import { mobileNavLink, navLink } from '@/lib/header-classes'
import { setActiveNavSection } from '@/lib/scroll-spy'
import { cn } from '@/lib/utils'
import { isMobileMenuOpen } from '@/stores'
import { useStore } from '@nanostores/react'
import { ExternalLink, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const navItems = [
  { href: '/#inicio', label: 'Inicio', sectionId: 'inicio' },
  { href: '/#nosotros', label: 'Nosotros', sectionId: 'nosotros' },
  { href: '/#cursos', label: 'Cursos', sectionId: 'cursos' },
  { href: '/#docentes', label: 'Docentes', sectionId: 'docentes' },
  { href: '/#contacto', label: 'Contáctanos', sectionId: 'contacto' },
] as const

export default function HeaderNavLinks() {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen)
  const [mounted, setMounted] = useState(false)

  const handleClick = () => {
    setTimeout(() => isMobileMenuOpen.set(false), 150)
  }

  const closeMenu = () => isMobileMenuOpen.set(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setActiveNavSection(80)

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = $isMobileMenuOpen ? 'hidden' : ''

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [$isMobileMenuOpen])

  const mobileMenu =
    mounted &&
    createPortal(
      <>
        <div
          className={cn(
            'fixed inset-0 z-50 bg-teal-950/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
            $isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
          aria-hidden={!$isMobileMenuOpen}
          onClick={closeMenu}
        />
        <nav
          id='mobile-nav-panel'
          aria-modal={$isMobileMenuOpen}
          aria-label='Menú principal'
          className={cn(
            'fixed inset-0 z-50 flex flex-col bg-white transition-transform duration-300 ease-out lg:hidden',
            $isMobileMenuOpen ? 'translate-y-0' : 'pointer-events-none translate-y-full',
          )}
        >
          <div className='flex h-16 shrink-0 items-center justify-between border-b border-gray-100 px-5'>
            <span className='text-base font-semibold text-teal-800'>Menú</span>
            <button
              type='button'
              className='inline-flex size-10 items-center justify-center rounded-xl text-teal-700 transition-colors hover:bg-teal-50 focus:ring-2 focus:ring-teal-300/50 focus:outline-hidden'
              aria-label='Cerrar menú'
              onClick={closeMenu}
            >
              <XIcon className='size-5' aria-hidden />
            </button>
          </div>

          <ul className='flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-5 py-6'>
            {navItems.map((item) => (
              <li key={item.sectionId}>
                <a href={item.href} className={mobileNavLink} data-nav-section={item.sectionId} onClick={handleClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className='shrink-0 border-t border-gray-100 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]'>
            <a
              href='/campusvirtual'
              target='_blank'
              rel='noreferrer noopener'
              className='inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-4 text-base font-semibold text-white shadow-sm shadow-teal-900/15 transition-colors hover:bg-teal-800 focus:ring-4 focus:ring-teal-300/50 focus:outline-hidden'
              onClick={handleClick}
            >
              Campus Virtual
              <ExternalLink className='size-4 opacity-80' aria-hidden />
            </a>
          </div>
        </nav>
      </>,
      document.body,
    )

  return (
    <>
      <div id='navbar-sticky' className='hidden w-full lg:flex lg:justify-center lg:justify-self-center'>
        <ul className='flex flex-row items-center gap-0.5'>
          {navItems.map((item) => (
            <li key={item.sectionId}>
              <a href={item.href} className={navLink} data-nav-section={item.sectionId} onClick={handleClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {mobileMenu}
    </>
  )
}
