import { setActiveNavSection } from '@/lib/scroll-spy'

const MENU_OPEN_LABEL = 'Abrir menú'
const MENU_CLOSE_LABEL = 'Cerrar menú'

function syncHeaderForMobileMenu(header: HTMLElement, open: boolean) {
  if (open) {
    header.setAttribute('data-menu-open', '')
    header.setAttribute('data-scrolled', '')
    header.removeAttribute('data-at-hero')
    return
  }

  header.removeAttribute('data-menu-open')
  window.dispatchEvent(new CustomEvent('landing-header:sync'))
}

function initHeaderNav() {
  const header = document.getElementById('site-header')
  if (!header) return

  const menuButton = header.querySelector<HTMLButtonElement>('[data-menu-toggle]')
  const menuBackdrop = document.querySelector<HTMLElement>('[data-menu-backdrop]')
  const menuPanel = document.querySelector<HTMLElement>('#mobile-nav-panel')
  const openIcon = header.querySelector<HTMLElement>('[data-menu-open-icon]')
  const closeIcon = header.querySelector<HTMLElement>('[data-menu-close-icon]')
  const mobileNavLinks = document.querySelectorAll<HTMLAnchorElement>('[data-mobile-nav-link]')

  if (!menuButton || !menuBackdrop || !menuPanel || !openIcon || !closeIcon) return

  const setMenuOpen = (open: boolean) => {
    syncHeaderForMobileMenu(header, open)

    menuButton.setAttribute('aria-expanded', String(open))
    menuButton.setAttribute('aria-label', open ? MENU_CLOSE_LABEL : MENU_OPEN_LABEL)

    menuBackdrop.setAttribute('aria-hidden', String(!open))
    menuBackdrop.classList.toggle('pointer-events-none', !open)
    menuBackdrop.classList.toggle('opacity-0', !open)
    menuBackdrop.classList.toggle('opacity-100', open)

    menuPanel.setAttribute('aria-hidden', String(!open))
    if (open) menuPanel.setAttribute('aria-modal', 'true')
    else menuPanel.removeAttribute('aria-modal')
    menuPanel.toggleAttribute('inert', !open)
    menuPanel.classList.toggle('pointer-events-none', !open)
    menuPanel.classList.toggle('translate-y-full', !open)
    menuPanel.classList.toggle('translate-y-0', open)

    openIcon.classList.toggle('scale-100', !open)
    openIcon.classList.toggle('rotate-0', !open)
    openIcon.classList.toggle('opacity-100', !open)
    openIcon.classList.toggle('scale-75', open)
    openIcon.classList.toggle('rotate-90', open)
    openIcon.classList.toggle('opacity-0', open)

    closeIcon.classList.toggle('scale-100', open)
    closeIcon.classList.toggle('rotate-0', open)
    closeIcon.classList.toggle('opacity-100', open)
    closeIcon.classList.toggle('scale-75', !open)
    closeIcon.classList.toggle('-rotate-90', !open)
    closeIcon.classList.toggle('opacity-0', !open)

    document.body.style.overflow = open ? 'hidden' : ''
  }

  const closeMenu = () => setMenuOpen(false)

  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true')
  })

  menuBackdrop.addEventListener('click', closeMenu)

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      window.setTimeout(closeMenu, 150)
    })
  })

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu()
  })

  const onScroll = () => setActiveNavSection(80)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

initHeaderNav()
