const SCROLL_THRESHOLD = 24

function initLandingHeaderScroll() {
  const header = document.getElementById('site-header')
  if (!header) return

  const update = () => {
    if (header.hasAttribute('data-menu-open')) {
      header.setAttribute('data-scrolled', '')
      header.removeAttribute('data-at-hero')
      return
    }

    const atHero = window.scrollY <= SCROLL_THRESHOLD
    header.toggleAttribute('data-scrolled', !atHero)
    if (atHero) header.setAttribute('data-at-hero', '')
    else header.removeAttribute('data-at-hero')
  }

  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('landing-header:sync', update)
}

initLandingHeaderScroll()
