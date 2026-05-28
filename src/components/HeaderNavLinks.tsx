import { navLink } from '@/lib/header-classes'
import { cn } from '@/lib/utils'
import { isMobileMenuOpen } from '@/stores'
import { useStore } from '@nanostores/react'
import { ExternalLink } from 'lucide-react'
import { useEffect } from 'react'

const navItems = [
  { href: '/#inicio', label: 'Inicio', id: 'selector_inicio' },
  { href: '/#nosotros', label: 'Nosotros', id: 'selector_nosotros' },
  { href: '/#cursos', label: 'Cursos', id: 'selector_cursos' },
  { href: '/#docentes', label: 'Docentes', id: 'selector_docentes' },
  { href: '/#contacto', label: 'Contáctanos', id: 'selector_contacto' },
] as const

export default function HeaderNavLinks() {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen)

  const handleClick = () => {
    setTimeout(() => isMobileMenuOpen.set(false), 150)
  }

  const closeMenu = () => isMobileMenuOpen.set(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    function scrollActive() {
      const scrollY = window.scrollY

      sections.forEach((current) => {
        const sectionElement = current as HTMLElement
        const sectionHeight = sectionElement.offsetHeight
        const sectionTop = sectionElement.offsetTop - 72
        const sectionId = sectionElement.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.getElementById(`selector_${sectionId}`)?.classList.add('active_link')
        } else {
          document.getElementById(`selector_${sectionId}`)?.classList.remove('active_link')
        }
      })
    }

    window.addEventListener('scroll', scrollActive, { passive: true })
    scrollActive()

    return () => window.removeEventListener('scroll', scrollActive)
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

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-10 bg-teal-950/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          $isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!$isMobileMenuOpen}
        onClick={closeMenu}
      />
      <div
        className={cn(
          'w-full lg:flex lg:justify-center lg:justify-self-center',
          'max-lg:absolute max-lg:inset-x-0 max-lg:top-full max-lg:z-10',
          'max-lg:overflow-hidden max-lg:rounded-b-2xl max-lg:border-b max-lg:border-teal-700/10',
          'max-lg:bg-white/98 max-lg:shadow-xl max-lg:shadow-teal-950/10 max-lg:backdrop-blur-md',
          'max-lg:transition-[opacity,transform] max-lg:duration-300 max-lg:ease-out',
          !$isMobileMenuOpen
            ? 'max-lg:pointer-events-none max-lg:-translate-y-2 max-lg:opacity-0'
            : 'max-lg:translate-y-0 max-lg:opacity-100',
        )}
        id='navbar-sticky'
      >
        <ul className='flex flex-col p-2 font-medium lg:flex-row lg:items-center lg:gap-0.5 lg:p-0'>
          {navItems.map((item, index) => (
            <li key={item.id} className='max-lg:border-b max-lg:border-gray-100 max-lg:last:border-b-0'>
              <a
                href={item.href}
                className={cn(navLink, index === 0 && 'active_link')}
                id={item.id}
                onClick={handleClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='border-t border-gray-100 p-3 lg:hidden'>
          <a
            href='/campusvirtual'
            target='_blank'
            rel='noreferrer noopener'
            className='inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-3.5 text-sm font-semibold text-white shadow-sm shadow-teal-900/15 transition-colors hover:bg-teal-800 focus:ring-4 focus:ring-teal-300/50 focus:outline-hidden'
            onClick={handleClick}
          >
            Campus Virtual
            <ExternalLink className='size-4 opacity-80' aria-hidden />
          </a>
        </div>
      </div>
    </>
  )
}
