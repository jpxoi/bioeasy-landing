import { XIcon, MenuIcon } from 'lucide-react'
import { useStore } from '@nanostores/react'
import { isMobileMenuOpen } from '@/stores'

export default function HeaderMobileMenuButton() {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen)

  return (
    <button
      data-collapse-toggle='navbar-sticky'
      type='button'
      className='inline-flex size-9 items-center justify-center rounded-lg p-2 text-sm text-gray-500 transition-all hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-hidden lg:hidden'
      aria-controls='navbar-sticky'
      aria-expanded='false'
      onClick={() => isMobileMenuOpen.set(!$isMobileMenuOpen)}
    >
      <span className='sr-only'>Open main menu</span>
      <div className='group' data-state={$isMobileMenuOpen ? 'open' : 'closed'}>
        <XIcon className='absolute size-5 scale-0 -rotate-90 transition-transform duration-300 group-data-[state=open]:scale-100 group-data-[state=open]:rotate-0' />
        <MenuIcon className='size-5 scale-100 rotate-0 transition-transform duration-300 group-data-[state=open]:scale-0 group-data-[state=open]:rotate-90' />
      </div>
    </button>
  )
}
