const NAV_SECTIONS = ['inicio', 'nosotros', 'cursos', 'docentes', 'contacto'] as const

/** Marks nav links for the last section whose top has passed the scroll position. */
export function setActiveNavSection(headerOffset = 80) {
  const scrollPosition = window.scrollY + headerOffset
  let activeId: (typeof NAV_SECTIONS)[number] = NAV_SECTIONS[0]

  for (const id of NAV_SECTIONS) {
    const section = document.getElementById(id)
    if (section && section.offsetTop <= scrollPosition) {
      activeId = id
    }
  }

  document.querySelectorAll<HTMLElement>('[data-nav-section]').forEach((link) => {
    if (link.dataset.navSection === activeId) {
      link.setAttribute('aria-current', 'location')
    } else {
      link.removeAttribute('aria-current')
    }
  })
}
