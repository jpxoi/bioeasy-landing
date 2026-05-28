const SCROLL_THRESHOLD = 24

function initLandingHeaderScroll() {
  const header = document.getElementById('site-header')
  if (!header?.classList.contains('header--landing')) return

  const update = () => {
    const atHero = window.scrollY <= SCROLL_THRESHOLD
    header.classList.toggle('is-scrolled', !atHero)
    if (atHero) header.setAttribute('data-at-hero', '')
    else header.removeAttribute('data-at-hero')
  }

  update()
  window.addEventListener('scroll', update, { passive: true })
}

initLandingHeaderScroll()
