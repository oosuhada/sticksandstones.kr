const route = window.location.pathname
const params = new URLSearchParams(window.location.search)
const isCaseStudy = ['/case-study', '/comparison', '/before-after'].some((path) =>
  route.startsWith(path),
)
const isLiveCompare = route.startsWith('/live-compare')
const isLegacyLive = route.startsWith('/legacy-live')
const isCurrentSiteEmbed = params.has('stks-current')
const isPortfolioLanding = (route === '/' || route === '') && !isCurrentSiteEmbed
const overlayRoute = route.replace(/\/$/, '')

function openInitialOverlayRoute() {
  let handled = false
  const open = () => {
    if (handled) return
    if (overlayRoute === '/en/our-video' || overlayRoute === '/our-video') {
      if (!window.__stksOpenLogoVideo) return
      handled = true
      window.__stksOpenLogoVideo()
      return
    }

    if (overlayRoute === '/en/contact' || overlayRoute === '/contact') {
      if (!window.__stksSetBottomDrawer) return
      handled = true
      window.__stksSetBottomDrawer('contact', true)
      return
    }

    if (overlayRoute === '/en/faq' || overlayRoute === '/faq') {
      if (!window.__stksSetBottomDrawer) return
      handled = true
      window.__stksSetBottomDrawer('faq', true)
    }
  }

  requestAnimationFrame(open)
  ;[180, 520].forEach((delay) => window.setTimeout(open, delay))
}

if (isCaseStudy) {
  import('./caseStudy')
} else if (isLiveCompare) {
  import('./liveCompare')
} else if (isLegacyLive) {
  import('./legacyLive')
} else if (isPortfolioLanding) {
  import('./portfolioLanding')
} else {
  import('./style.css')
  import('./enhancements.css')
  import('./runtime/original').then(({ appStore, router }) => {
    import('./sync/currentFrame').then(({ setupCurrentFrameSync }) => {
      setupCurrentFrameSync(appStore, router)
      openInitialOverlayRoute()
    })
  })
}
