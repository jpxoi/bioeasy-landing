import { cn } from '@/lib/utils'
import { isMobileMenuOpen } from '@/stores'
import { useStore } from '@nanostores/react'
import { useEffect } from 'react'

export default function HeaderNavLinks() {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen)

  const handleClick = () => {
    setTimeout(() => isMobileMenuOpen.set(false), 150)
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    function scrollActive() {
      const scrollY = window.scrollY

      sections.forEach((current) => {
        const sectionElement = current as HTMLElement
        const sectionHeight = sectionElement.offsetHeight
        const sectionTop = sectionElement.offsetTop - 128
        const sectionId = sectionElement.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.getElementById(`selector_${sectionId}`)?.classList.add('active_link')
        } else {
          document.getElementById(`selector_${sectionId}`)?.classList.remove('active_link')
        }
      })
    }

    window.addEventListener('scroll', scrollActive)
  }, [])
  return (
    <div
      className={cn(
        'nav__menu w-full items-center justify-between max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:w-full max-lg:bg-white max-lg:p-4 max-lg:shadow-md max-lg:duration-300 max-lg:ease-in-out lg:order-1 lg:flex lg:w-auto',
        !$isMobileMenuOpen
          ? 'max-lg:pointer-events-none max-lg:translate-y-4 max-lg:opacity-0 max-lg:duration-300 max-lg:ease-out'
          : 'max-lg:translate-y-0 max-lg:opacity-100 max-lg:duration-300 max-lg:ease-in',
      )}
      id='navbar-sticky'
    >
      <ul className='flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:bg-white lg:p-0 rtl:space-x-reverse'>
        <li>
          <a
            href='/#inicio'
            className='active_link block rounded-sm px-3 py-2 text-gray-900 transition-all hover:bg-gray-100 lg:p-0 lg:hover:bg-transparent lg:hover:text-teal-700'
            id='selector_inicio'
            onClick={handleClick}
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href='/#nosotros'
            className='block rounded-sm px-3 py-2 text-gray-900 transition-all hover:bg-gray-100 lg:p-0 lg:hover:bg-transparent lg:hover:text-teal-700'
            id='selector_nosotros'
            onClick={handleClick}
          >
            Nosotros
          </a>
        </li>
        <li>
          <a
            href='/#cursos'
            className='block rounded-sm px-3 py-2 text-gray-900 transition-all hover:bg-gray-100 lg:p-0 lg:hover:bg-transparent lg:hover:text-teal-700'
            id='selector_cursos'
            onClick={handleClick}
          >
            Cursos
          </a>
        </li>
        <li>
          <a
            href='/#docentes'
            className='block rounded-sm px-3 py-2 text-gray-900 transition-all hover:bg-gray-100 lg:p-0 lg:hover:bg-transparent lg:hover:text-teal-700'
            id='selector_docentes'
            onClick={handleClick}
          >
            Docentes
          </a>
        </li>
        <li>
          <a
            href='/#contacto'
            className='block rounded-sm px-3 py-2 text-gray-900 transition-all hover:bg-gray-100 lg:p-0 lg:hover:bg-transparent lg:hover:text-teal-700'
            id='selector_contacto'
            onClick={handleClick}
          >
            Contáctanos
          </a>
        </li>
      </ul>
    </div>
  )
}
