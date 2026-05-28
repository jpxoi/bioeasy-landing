import { menuToggle } from '@/lib/header-classes'
import { cn } from '@/lib/utils'
import { isMobileMenuOpen } from '@/stores'
import { useStore } from '@nanostores/react'
import { MenuIcon, XIcon } from 'lucide-react'

export default function HeaderMobileMenuButton() {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen)

  return (
    <button
      data-collapse-toggle='navbar-sticky'
      type='button'
      className={cn(menuToggle, $isMobileMenuOpen && 'border-teal-700/20 bg-teal-50')}
      aria-controls='navbar-sticky'
      aria-expanded={$isMobileMenuOpen}
      aria-label={$isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
      onClick={() => isMobileMenuOpen.set(!$isMobileMenuOpen)}
    >
      <div className='relative size-5'>
        <XIcon
          className={cn(
            'absolute inset-0 size-5 transition-all duration-300',
            $isMobileMenuOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-75 -rotate-90 opacity-0',
          )}
          aria-hidden
        />
        <MenuIcon
          className={cn(
            'absolute inset-0 size-5 transition-all duration-300',
            $isMobileMenuOpen ? 'scale-75 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100',
          )}
          aria-hidden
        />
      </div>
    </button>
  )
}
