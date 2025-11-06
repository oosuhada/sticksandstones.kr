import './liveCompare.css'
import type { SyncDrawerTab, SyncMessage, SyncSection } from './sync/types'
import { isSyncSection } from './sync/types'

type FrameKey = 'legacy' | 'current'
type CompareLayout = 'side' | 'stack'

const app = document.querySelector<HTMLDivElement>('#app')
const params = new URLSearchParams(window.location.search)
const legacySiteUrl = getLegacySiteUrl()
const isSyntheticLegacy = new URL(legacySiteUrl, window.location.href).pathname.startsWith('/legacy-live')
const legacyOrigin = new URL(legacySiteUrl, window.location.href).origin
const displayHost = 'sticksandstones.kr'
const logoVideoId = 'OCWZ5-vivHk'
let activeSection: SyncSection = 'home'
let lastFrame: FrameKey | 'controls' = 'controls'
let isComparisonVideoOpen = false
let activeProjectSlug = ''
let isSyncingProjectRoute = false
let isExitHistoryGuardInstalled = false
let compareLayout: CompareLayout = window.matchMedia('(max-width: 640px)').matches ? 'stack' : 'side'
let isCompareLayoutManual = false
let labelLayoutFrame = 0
let frameLabelResizeAction: {
  pointerId: number
  label: HTMLElement
  route: HTMLElement
  resizer: HTMLElement
  startX: number
  startRouteWidth: number
} | null = null
let routeMeasureCanvas: HTMLCanvasElement | null = null

const legacyToCurrentProjectSlug: Record<string, string> = {
  'lg-2023-new-years-message': 'lg-2023-new-years-message',
  'ces-2022-hyundai-keynote-speech': 'ces-2022-hyundai-keynote',
  '990-pro-990-pro-with-heatsink-online-features': '990-pro-online-features',
  'team-naver-conference-dan-23': 'team-naver-dan-23',
  'lg-antimicrobial-glass-powder-naming': 'lg-antimicrobial-glass',
  '2023-lifes-good-award-speech': 'lifes-good-award-2023',
  'sdc-ces-2025-zone-title': 'samsung-sdc-ces-2025',
  'lg-ces-2025-convention-copy': 'lg-ces-2025',
  'amorepacific-80th-anniversary-brand-film': 'amorepacific-80th-anniversary',
  'amorepacific-vision-statement': 'amorepacific-vision-statement',
  'lg-brand-communication-guidelines': 'lg-brand-guidelines',
  'seventeen-12th-mini-album-title': 'seventeen-album',
  'genesis-gv80-gv80-coupe-black-launch-sns-copy': 'genesis-gv80-black',
  'lg-uplus-ixi-o': 'lg-uplus-ixi-o',
  'innisfree-global-brand-slogan': 'innisfree-brand-slogan',
  'samsung-display-oled-qd-oled-color-experience-naming': 'samsung-display-synchroma',
  '삼성-micro-sd-card': 'samsung-microsd',
  'lg-styler-online-feature': 'lg-styler-of',
  'lg-brand-book': 'lg-brand-book',
  'olive-young-25th-anniversary-tvc': 'olive-young-25th-anniversary',
  'samsung-smartthings-lifestyle-video': 'samsung-smartthings-lifestyle',
  'hyundai-pleos-vision-film': 'hyundai-pleos-vision',
  'samyang-tangle-renewal-campaign-ad-video': 'samyang-tangle-renewal',
  'odyssey-neo-g9-video-copy': 'odyssey-neo-g9',
  'samsung-ea-rebranding-video': 'samsung-ea-rebranding',
  'lg-tone-of-voice-guidelines': 'lg-tone-of-voice',
  'hankook-tire-warranty-program-naming': 'hankook-tire-warranty',
  'lineage-w-slogan': 'lineage-w-slogan',
  'lg-enblock-website-copy': 'lg-enblock-website',
  'naver-corp-website-renewal': 'naver-website-renewal',
  'ahc-브랜드-매니패스토': 'ahc-brand-manifesto',
  'automotive-memory-online-features': 'automotive-memory-features',
  'aero-furniture-message-matrix': 'aero-furniture-message-matrix',
  'samsung-display-oled-era-website-copy': 'samsung-oled-era',
  'samsung-display-new-york-tour-bus-wrap-copy': 'samsung-display-bus-wrap',
  'hankook-tire-weatherflex-launch-copy': 'hankook-weatherflex',
  'aestura-atobarrier365-hydro-soothing-cream-video': 'aestura-atobarrier',
  'fc-online-ad-video-copywashing': 'fc-online-mourinho',
  'lg-electronics-newsletter-b-i-t-e': 'lg-newsletter-bite',
  'melon-music-sns-video-copy': 'melon-music-sns',
  'huvitz-lens-edger-slogan': 'huvitz-lens-edger',
  'musinsa-ad-video-copywashing': 'musinsa-global-launch',
  'hyundai-uam-tvc-copy': 'hyundai-uam-tvc',
  'kakao-pay-company-introduction-video-copy': 'kakao-pay-intro',
  'doosan-excavator-and-wheel-loader-slogan-sub-copy-2': 'doosan-wheel-loader',
  'sk-hynix-global-slogan': 'sk-hynix-global-slogan',
  'kia-ev6-world-premiere-2': 'kia-ev6-world-premiere',
  'medit-brand-manual-corporate-guideline': 'medit-brand-manual',
  'laneige-water-sleeping-mask-tvc': 'laneige-sleeping-mask',
  'kia-uefa-europa-league-tvc': 'kia-uefa-europa',
  'hyundai-department-store-duty-free': 'hyundai-duty-free',
  'lg-signature-웹사이트': 'lg-signature-website',
  'the-face-shop-안티다크닝-쿠션': 'faceshop-cushion',
  '현대-shackletons-return-영상': 'hyundai-shackleton',
  '한화그룹-전사-홍보': 'hanwha-corporate',
  '1006': 'doosan-corporate',
  'zic': 'zic-global-slogan',
}

const currentToLegacyProjectSlug = Object.fromEntries(
  Object.entries(legacyToCurrentProjectSlug).map(([legacySlug, currentSlug]) => [currentSlug, legacySlug]),
) as Record<string, string>

function getLegacySiteUrl(): string {
  const explicitLegacyUrl = params.get('legacy') ?? import.meta.env.VITE_LEGACY_SITE_URL
  if (explicitLegacyUrl) return explicitLegacyUrl

  return '/legacy-live/'
}

function getFrame(key: FrameKey): HTMLIFrameElement | null {
  return document.querySelector<HTMLIFrameElement>(`iframe[data-frame="${key}"]`)
}

function getSectionUrl(base: string, section: SyncSection): string {
  const url = new URL(base, window.location.href)
  const hashBySection: Record<SyncSection, string> = {
    home: '',
    about: 'about',
    services: 'services',
    portfolio: 'portfolio',
    clients: 'clients-say',
  }

  url.pathname = url.pathname.replace(/\/?$/, '/')
  url.hash = hashBySection[section]
  if (section !== 'home') {
    url.searchParams.set('instant', '1')
  } else {
    url.searchParams.delete('instant')
  }

  return url.toString()
}

function getLegacyProjectUrl(legacySlug: string): string {
  const isStaticSnapshot = !import.meta.env.DEV && new URL(legacySiteUrl, window.location.href).pathname.startsWith('/legacy-wp')
  if (isSyntheticLegacy || isStaticSnapshot) {
    const url = new URL(getSectionUrl(legacySiteUrl, 'portfolio'), window.location.href)
    url.searchParams.set('legacy-project', legacySlug)
    return url.toString()
  }

  return new URL(`/legacy-wp/portfolios/${encodeURIComponent(legacySlug)}/`, window.location.href).toString()
}

function getCurrentProjectUrl(currentSlug: string): string {
  return new URL(`/en/portfolio/${encodeURIComponent(currentSlug)}?stks-current=1`, window.location.href).toString()
}

function getLegacySlugFromUrl(url: string): string | null {
  const match = url.match(/\/portfolios\/([^/?#]+)/)
  return match?.[1] ? decodeURIComponent(match[1]) : null
}

function getCurrentSlugFromUrl(url: string): string | null {
  const match = url.match(/(?:^|\/)portfolio\/([^/?#]+)/)
  return match?.[1] ? decodeURIComponent(match[1]) : null
}

function getDisplayPath(url: string): string {
  return url
    .replace(/^https?:\/\/(?:www\.)?stks\.kr\/?/, '/')
    .replace(/^https?:\/\/(?:www\.)?sticksandstones\.kr\/?/, '/')
    .replace(/^sticksandstones\.kr\/?/, '/')
}

function getDisplayPathname(url: string): string {
  const path = getDisplayPath(url).split(/[?#]/)[0] ?? ''
  const normalized = path.startsWith('/') ? path : `/${path}`
  return normalized.replace(/\/$/, '') || '/'
}

function isCurrentPortfolioIndexUrl(url: string): boolean {
  return /^\/(?:en\/)?portfolio$/.test(getDisplayPathname(url))
}

function isLegacyPortfolioReturnUrl(url: string): boolean {
  const path = getDisplayPathname(url)
  return path === '/' && /#(?:portfolio|work|work-section)\b/.test(getDisplayPath(url))
}

function normalizeDisplayPath(path: string): string {
  if (!path || path === '/') return ''
  return path.endsWith('/') ? path.slice(0, -1) : path
}

function displayUrl(path = ''): string {
  return `${displayHost}${normalizeDisplayPath(path)}`
}

function currentSectionDisplayUrl(section = activeSection): string {
  const pathBySection: Record<SyncSection, string> = {
    home: '/en',
    about: '/en/about',
    services: '/en/services',
    portfolio: '/en/portfolio',
    clients: '/en/clients',
  }
  return displayUrl(pathBySection[section])
}

function drawerDisplayUrl(tab: SyncDrawerTab): string {
  return displayUrl(`/en/${tab}`)
}

function rewriteDisplayDomain(url: string): string {
  return url
    .replace(/^https?:\/\/(?:www\.)?stks\.kr\/?/, `${displayHost}/`)
    .replace(/^https?:\/\/(?:www\.)?sticksandstones\.kr\/?/, `${displayHost}/`)
    .replace(/\/$/, '')
}

function postToFrame(key: FrameKey, section: SyncSection) {
  const frame = getFrame(key)
  frame?.contentWindow?.postMessage(
    {
      source: 'stks-comparison',
      type: 'navigate-section',
      section,
    } satisfies SyncMessage,
    key === 'legacy' ? legacyOrigin : window.location.origin,
  )
}

function getFrameOrigin(key: FrameKey): string {
  return key === 'legacy' ? legacyOrigin : window.location.origin
}

function postAudioControl(key: FrameKey, muted: boolean) {
  const frame = getFrame(key)
  frame?.contentWindow?.postMessage(
    {
      source: 'stks-comparison',
      type: 'audio-control',
      frame: key,
      muted,
    } satisfies SyncMessage,
    getFrameOrigin(key),
  )
}

function preferCurrentAudio() {
  postAudioControl('legacy', true)
  postAudioControl('current', false)
}

function otherFrame(frame: FrameKey): FrameKey {
  return frame === 'legacy' ? 'current' : 'legacy'
}

function postVideoControl(key: FrameKey, action: 'open' | 'close') {
  const frame = getFrame(key)
  frame?.contentWindow?.postMessage(
    {
      source: 'stks-comparison',
      type: 'video-control',
      action,
    } satisfies SyncMessage,
    getFrameOrigin(key),
  )
}

function postDrawerControl(key: FrameKey, open: boolean, tab: SyncDrawerTab) {
  const frame = getFrame(key)
  frame?.contentWindow?.postMessage(
    {
      source: 'stks-comparison',
      type: 'drawer-control',
      open,
      tab,
    } satisfies SyncMessage,
    getFrameOrigin(key),
  )
}

function postProjectControl(key: FrameKey, legacySlug: string) {
  const frame = getFrame(key)
  frame?.contentWindow?.postMessage(
    {
      source: 'stks-comparison',
      type: 'project-control',
      legacySlug,
    } satisfies SyncMessage,
    getFrameOrigin(key),
  )
}

function postScrollControl(key: FrameKey, section: SyncSection, progress: number) {
  const frame = getFrame(key)
  frame?.contentWindow?.postMessage(
    {
      source: 'stks-comparison',
      type: 'scroll-control',
      section,
      progress,
    } satisfies SyncMessage,
    getFrameOrigin(key),
  )
}

function updateRouteDisplay(frame: FrameKey, url: string) {
  const route = app?.querySelector<HTMLElement>(`[data-route-display="${frame}"]`)
  if (route) {
    const label = route.closest<HTMLElement>('.frame-label')
    label?.classList.remove('is-route-resized')
    label?.removeAttribute('data-route-manual')
    label?.style.removeProperty('--frame-route-width')
    route.dataset.fullRoute = url
    fitFrameRouteText(route)
  }
  scheduleFrameLabelLayoutSync()
}

function getTextWidth(text: string, font: string): number {
  routeMeasureCanvas ??= document.createElement('canvas')
  const context = routeMeasureCanvas.getContext('2d')
  if (!context) return text.length * 8
  context.font = font
  return context.measureText(text).width
}

function getLeftEllipsisText(fullText: string, route: HTMLElement): string {
  const style = window.getComputedStyle(route)
  const paddingX = Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight)
  const availableWidth = Math.max(0, route.clientWidth - paddingX)
  const font = style.font

  if (!availableWidth || getTextWidth(fullText, font) <= availableWidth) return fullText

  const marker = '..'
  const markerWidth = getTextWidth(marker, font)
  if (markerWidth >= availableWidth) return marker

  let low = 0
  let high = fullText.length
  while (low < high) {
    const mid = Math.ceil((low + high) / 2)
    const suffix = fullText.slice(fullText.length - mid)
    if (markerWidth + getTextWidth(suffix, font) <= availableWidth) low = mid
    else high = mid - 1
  }

  return marker + fullText.slice(fullText.length - low)
}

function fitFrameRouteText(route: HTMLElement) {
  const fullRoute = route.dataset.fullRoute ?? route.textContent ?? ''
  if (!route.closest('.frame-label')?.classList.contains('is-route-resized')) {
    route.textContent = fullRoute
    return
  }

  route.textContent = fullRoute
  window.requestAnimationFrame(() => {
    route.textContent = getLeftEllipsisText(fullRoute, route)
  })
}

function fitAllFrameRouteText() {
  app?.querySelectorAll<HTMLElement>('[data-route-display]').forEach(fitFrameRouteText)
}

function getLabelMetrics(label: HTMLElement, route: HTMLElement, resizer?: HTMLElement | null) {
  const style = window.getComputedStyle(label)
  const paddingX = Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight)
  const gap = Number.parseFloat(style.columnGap || style.gap) || 16
  const availableWidth = Math.max(0, label.clientWidth - paddingX)
  const resizerWidth = resizer?.offsetWidth ?? 13
  const routeStyle = window.getComputedStyle(route)
  const routePaddingX = Number.parseFloat(routeStyle.paddingLeft) + Number.parseFloat(routeStyle.paddingRight)

  return { availableWidth, gap, resizerWidth, routePaddingX }
}

function autoSizeFrameRoute(label: HTMLElement) {
  if (label.dataset.routeManual === 'true' || label.classList.contains('is-resizing')) return

  const title = label.querySelector<HTMLElement>('.frame-title')
  const route = label.querySelector<HTMLElement>('code')
  const resizer = label.querySelector<HTMLElement>('[data-label-resizer]')
  if (!title || !route) return

  route.textContent = route.dataset.fullRoute ?? route.textContent ?? ''
  label.classList.remove('is-route-resized')
  label.style.removeProperty('--frame-route-width')

  const { availableWidth, gap, resizerWidth, routePaddingX } = getLabelMetrics(label, route, resizer)
  const routeTextWidth = getTextWidth(route.dataset.fullRoute ?? route.textContent ?? '', window.getComputedStyle(route).font)
  const fullRouteWidth = Math.ceil(routeTextWidth + routePaddingX + 2)
  const titleReserve = Math.min(Math.max(88, title.scrollWidth), Math.max(96, availableWidth * 0.46))
  const maxRouteWidth = Math.max(72, availableWidth - titleReserve - resizerWidth - gap * 2)

  if (fullRouteWidth > maxRouteWidth) {
    label.classList.add('is-route-resized')
    label.style.setProperty('--frame-route-width', `${maxRouteWidth}px`)
    fitFrameRouteText(route)
  }
}

function autoSizeFrameRoutes() {
  app?.querySelectorAll<HTMLElement>('.frame-label').forEach(autoSizeFrameRoute)
}

function scheduleFrameLabelLayoutSync() {
  if (!app || labelLayoutFrame) return
  labelLayoutFrame = window.requestAnimationFrame(() => {
    labelLayoutFrame = 0
    syncFrameLabelLayout()
  })
}

function syncFrameLabelLayout() {
  if (!app) return
  app.removeAttribute('data-frame-label-layout')
  autoSizeFrameRoutes()
  fitAllFrameRouteText()

  const labels = Array.from(app.querySelectorAll<HTMLElement>('.frame-label'))
  const shouldStack = labels.some((label) => {
    const title = label.querySelector<HTMLElement>('.frame-title')
    const route = label.querySelector<HTMLElement>('code')
    if (!title || !route) return false

    const { availableWidth, gap, resizerWidth } = getLabelMetrics(
      label,
      route,
      label.querySelector<HTMLElement>('[data-label-resizer]'),
    )
    const routeReserve = getTextWidth(route.dataset.fullRoute ?? route.textContent ?? '', window.getComputedStyle(route).font)

    return availableWidth < 240 && title.scrollWidth + routeReserve + resizerWidth + gap * 2 > availableWidth
  })

  app.setAttribute('data-frame-label-layout', shouldStack ? 'stack' : 'inline')
}

function installFrameLabelResizers() {
  app?.querySelectorAll<HTMLButtonElement>('[data-label-resizer]').forEach((resizer) => {
    if (resizer.dataset.resizeReady === 'true') return
    resizer.dataset.resizeReady = 'true'

    resizer.addEventListener('pointerdown', (event) => {
      if (event.button && event.button !== 0) return

      const label = resizer.closest<HTMLElement>('.frame-label')
      const route = label?.querySelector<HTMLElement>('code')
      if (!label || !route) return

      event.preventDefault()
      resizer.setPointerCapture?.(event.pointerId)
      label.classList.add('is-route-resized', 'is-resizing')
      label.dataset.routeManual = 'true'
      route.textContent = route.dataset.fullRoute ?? route.textContent ?? ''
      frameLabelResizeAction = {
        pointerId: event.pointerId,
        label,
        route,
        resizer,
        startX: event.clientX,
        startRouteWidth: route.getBoundingClientRect().width,
      }
    })
  })
}

function moveFrameLabelResize(event: PointerEvent) {
  if (!frameLabelResizeAction || frameLabelResizeAction.pointerId !== event.pointerId) return

  event.preventDefault()
  const { label, route, resizer, startX, startRouteWidth } = frameLabelResizeAction
  const { availableWidth, gap, resizerWidth } = getLabelMetrics(label, route, resizer)
  const minRouteWidth = Math.min(94, Math.max(62, availableWidth - resizerWidth - gap * 2 - 72))
  const minTitleWidth = 68
  const maxRouteWidth = Math.max(minRouteWidth, availableWidth - resizerWidth - minTitleWidth - gap * 2)
  const nextWidth = Math.min(Math.max(startRouteWidth - (event.clientX - startX), minRouteWidth), maxRouteWidth)

  label.style.setProperty('--frame-route-width', `${nextWidth}px`)
  fitFrameRouteText(route)
}

function finishFrameLabelResize(event: PointerEvent) {
  if (!frameLabelResizeAction || frameLabelResizeAction.pointerId !== event.pointerId) return

  frameLabelResizeAction.label.classList.remove('is-resizing')
  frameLabelResizeAction = null
  scheduleFrameLabelLayoutSync()
}

function installExitHistoryGuard() {
  if (isExitHistoryGuardInstalled || !window.location.pathname.startsWith('/live-compare')) return
  isExitHistoryGuardInstalled = true

  const currentState =
    history.state && typeof history.state === 'object' && !Array.isArray(history.state) ? history.state : {}
  window.history.replaceState({ ...currentState, stksLiveCompareBase: true }, '', window.location.href)
  window.history.pushState({ stksLiveCompareExit: true }, '', window.location.href)
}

window.addEventListener('popstate', () => {
  if (window.location.pathname.startsWith('/live-compare')) window.location.replace('/')
})

function getVideoSrc(frame: FrameKey): string {
  const query = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
  })
  return `https://www.youtube.com/embed/${logoVideoId}?${query.toString()}`
}

function setComparisonVideo(open: boolean, options: { closeFrames?: boolean } = {}) {
  if (!app) return
  if (isComparisonVideoOpen === open && !options.closeFrames) return
  isComparisonVideoOpen = open
  app.classList.toggle('is-video-open', open)
  updateRouteDisplay('current', open ? displayUrl('/en/our-video') : currentSectionDisplayUrl())

  app.querySelectorAll<HTMLIFrameElement>('iframe[data-video-frame]').forEach((iframe) => {
    const frame = iframe.dataset.videoFrame === 'legacy' ? 'legacy' : 'current'
    iframe.src = open ? getVideoSrc(frame) : ''
  })

  if (open) {
    preferCurrentAudio()
    postVideoControl('legacy', 'open')
    return
  }

  postVideoControl('legacy', 'close')
  if (options.closeFrames) postVideoControl('current', 'close')
}

function updateUi(section: SyncSection, frame: FrameKey | 'controls') {
  activeSection = section
  lastFrame = frame
  app?.setAttribute('data-active-section', section)
  app?.setAttribute('data-last-frame', frame)
}

function setCompareLayout(layout: CompareLayout, options: { manual?: boolean } = {}) {
  compareLayout = layout
  if (options.manual) isCompareLayoutManual = true
  app?.setAttribute('data-compare-layout', layout)

  const toggle = app?.querySelector<HTMLButtonElement>('[data-compare-layout-toggle]')
  const nextOrientation = layout === 'side' ? 'vertical' : 'horizontal'
  if (toggle) {
    toggle.dataset.nextLayout = nextOrientation
    toggle.setAttribute('aria-label', `Switch to ${nextOrientation} comparison`)
    toggle.setAttribute('title', `Switch to ${nextOrientation} comparison`)
  }
}

function syncDefaultCompareLayout() {
  if (isCompareLayoutManual) return
  setCompareLayout(window.matchMedia('(max-width: 640px)').matches ? 'stack' : 'side')
}

function syncSection(section: SyncSection, frame: FrameKey | 'controls') {
  preferCurrentAudio()
  updateUi(section, frame)
  if (section !== 'portfolio') activeProjectSlug = ''
  updateRouteDisplay('legacy', displayUrl())
  updateRouteDisplay('current', currentSectionDisplayUrl(section))
  if (frame !== 'legacy') {
    postToFrame('legacy', section)
  }
  if (frame !== 'current') postToFrame('current', section)
  if (section !== 'home') {
    setTimeout(() => {
      postScrollControl('legacy', section, 0)
      postScrollControl('current', section, 0)
    }, 520)
  }
}

function syncProjectClose(sourceFrame: FrameKey) {
  activeProjectSlug = ''
  isSyncingProjectRoute = false
  preferCurrentAudio()
  updateUi('portfolio', sourceFrame)
  updateRouteDisplay('legacy', displayUrl())
  updateRouteDisplay('current', currentSectionDisplayUrl('portfolio'))

  const openPortfolioLists = () => {
    postToFrame('legacy', 'portfolio')
    postToFrame('current', 'portfolio')
  }
  openPortfolioLists()
  ;[360, 900].forEach((delay) => window.setTimeout(openPortfolioLists, delay))
}

function syncProjectRoute(sourceFrame: FrameKey, currentSlug: string, legacySlug: string) {
  if (!currentSlug || !legacySlug) return
  if (isSyncingProjectRoute && activeProjectSlug === currentSlug) return

  activeProjectSlug = currentSlug
  activeSection = 'portfolio'
  updateUi('portfolio', sourceFrame)
  updateRouteDisplay('legacy', displayUrl())
  updateRouteDisplay('current', currentSectionDisplayUrl('portfolio').replace(/\/portfolio$/, `/portfolio/${currentSlug}`))

  isSyncingProjectRoute = true
  if (sourceFrame !== 'legacy') {
    const legacyFrame = getFrame('legacy')
    if (legacyFrame) legacyFrame.src = getLegacyProjectUrl(legacySlug)
  }
  if (sourceFrame !== 'current') {
    const currentFrame = getFrame('current')
    if (currentFrame) currentFrame.src = getCurrentProjectUrl(currentSlug)
  }

  window.setTimeout(() => {
    isSyncingProjectRoute = false
  }, 900)
}

function render() {
  if (!app) return

  document.documentElement.lang = 'en'
  document.title = 'STKS Live Compare'
  document.body.className = 'live-compare-body'
  app.className = 'live-compare-shell'
  app.innerHTML = `
    <nav class="compare-topbar" aria-label="Live compare navigation">
      <a class="compare-nav-link compare-nav-link-left" href="/">
        <span aria-hidden="true">←</span>
        <span>Project Home</span>
      </a>
      <a class="compare-nav-link compare-nav-link-right" href="/case-study">
        <span>Case Study</span>
        <span aria-hidden="true">→</span>
      </a>
    </nav>
    <main class="frame-grid">
      <section class="frame-panel">
        <div class="frame-label">
          <div class="frame-title">
            <span>Before</span>
            <strong>Creative WordPress archive</strong>
          </div>
          <button class="frame-label-resizer" type="button" data-label-resizer="legacy" aria-label="Resize before URL area" title="Resize URL area"></button>
          <code data-route-display="legacy">${displayUrl()}</code>
        </div>
        <div class="frame-stage">
          <iframe
            data-frame="legacy"
            src="${getSectionUrl(legacySiteUrl, activeSection)}"
            title="Live legacy WordPress site"
          ></iframe>
          <div class="compare-video-overlay" data-video-overlay="legacy" aria-hidden="true">
            <button type="button" class="compare-video-close" data-video-close aria-label="Close video">×</button>
            <aside class="compare-video-guide" aria-label="Legacy video guide">
              <span>Logo Easter Egg</span>
              <strong>Our Video</strong>
              <p>The original PHP site hid the brand film behind the center logo. The rebuild keeps the idea and makes the click target clearer.</p>
            </aside>
            <div class="compare-video-box">
              <iframe
                data-video-frame="legacy"
                title="Legacy logo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section class="frame-panel">
        <div class="frame-label">
          <div class="frame-title">
            <span>After</span>
            <strong>Current Vite rebuild</strong>
          </div>
          <button class="frame-label-resizer" type="button" data-label-resizer="current" aria-label="Resize after URL area" title="Resize URL area"></button>
          <code data-route-display="current">${currentSectionDisplayUrl()}</code>
        </div>
        <div class="frame-stage">
          <iframe
            data-frame="current"
            src="/?stks-current=1"
            title="Current rebuilt STKS site"
          ></iframe>
          <div class="compare-video-overlay" data-video-overlay="current" aria-hidden="true">
            <button type="button" class="compare-video-close" data-video-close aria-label="Close video">×</button>
            <div class="compare-video-box">
              <iframe
                data-video-frame="current"
                title="Current logo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
    <button class="floating-compare-layout-toggle" type="button" data-compare-layout-toggle data-next-layout="vertical" aria-label="Switch to vertical comparison" title="Switch to vertical comparison">
      <span class="compare-layout-mark" aria-hidden="true">
        <span></span>
        <span></span>
      </span>
    </button>
  `
  setCompareLayout(compareLayout)

  app.querySelector<HTMLButtonElement>('[data-compare-layout-toggle]')?.addEventListener('click', () => {
    setCompareLayout(compareLayout === 'side' ? 'stack' : 'side', { manual: true })
  })
  installFrameLabelResizers()

  app.querySelectorAll<HTMLIFrameElement>('iframe[data-frame]').forEach((frame) => {
    frame.addEventListener('load', () => {
      setTimeout(() => {
        const frameKey = frame.dataset.frame as FrameKey
        if (frameKey === 'legacy' && activeProjectSlug && activeSection === 'portfolio') {
          const legacySlug = currentToLegacyProjectSlug[activeProjectSlug]
          if (legacySlug) postProjectControl('legacy', legacySlug)
        } else if (!activeProjectSlug || activeSection !== 'portfolio') {
          postToFrame(frameKey, activeSection)
        }
        preferCurrentAudio()
      }, 120)
    })
  })

  app.querySelectorAll<HTMLButtonElement>('[data-video-close]').forEach((button) => {
    button.addEventListener('click', () => setComparisonVideo(false, { closeFrames: true }))
  })

  updateUi(activeSection, lastFrame)
  scheduleFrameLabelLayoutSync()
  setTimeout(preferCurrentAudio, 240)
  setTimeout(installExitHistoryGuard, 900)
}

window.addEventListener('message', (event: MessageEvent<SyncMessage>) => {
  const legacyFrame = getFrame('legacy')
  const currentFrame = getFrame('current')
  const isKnownFrame =
    event.source === legacyFrame?.contentWindow ||
    event.source === currentFrame?.contentWindow ||
    event.origin === window.location.origin ||
    event.origin === legacyOrigin
  if (!isKnownFrame) return

  const message = event.data
  if (message?.source !== 'stks-frame') return

  if (message.type === 'audio-intent') {
    preferCurrentAudio()
    return
  }

  if (message.type === 'video-open' || message.type === 'video-close') {
    setComparisonVideo(message.type === 'video-open')
    return
  }

  if (message.type === 'drawer-change') {
    updateRouteDisplay('current', message.open ? drawerDisplayUrl(message.tab) : currentSectionDisplayUrl())
    postDrawerControl(otherFrame(message.frame), message.open, message.tab)
    return
  }

  if (message.type === 'scroll-change') {
    if (!isSyncSection(message.section)) return
    if (activeProjectSlug && message.section === 'portfolio') return

    const target = otherFrame(message.frame)
    postScrollControl(target, message.section, message.progress)
    return
  }

  if (message.type === 'route-change') {
    const legacySlug = message.frame === 'legacy' ? getLegacySlugFromUrl(message.url) : null
    const routeDisplay =
      message.frame === 'legacy' && (legacySlug || isLegacyPortfolioReturnUrl(message.url))
        ? displayUrl()
        : rewriteDisplayDomain(message.url)
    updateRouteDisplay(message.frame, routeDisplay)
    if (message.frame === 'legacy') {
      const currentSlug = legacySlug ? legacyToCurrentProjectSlug[legacySlug] : null
      if (legacySlug && currentSlug) syncProjectRoute('legacy', currentSlug, legacySlug)
      else if (activeProjectSlug && isLegacyPortfolioReturnUrl(message.url)) syncProjectClose('legacy')
    } else {
      const currentSlug = getCurrentSlugFromUrl(message.url)
      const legacySlug = currentSlug ? currentToLegacyProjectSlug[currentSlug] : null
      if (currentSlug && legacySlug) syncProjectRoute('current', currentSlug, legacySlug)
      else if (activeProjectSlug && isCurrentPortfolioIndexUrl(message.url)) syncProjectClose('current')
    }
    return
  }

  if (message.type === 'project-route-change') {
    updateRouteDisplay(message.frame, message.frame === 'legacy' ? displayUrl() : rewriteDisplayDomain(message.url))
    const legacySlug =
      message.legacySlug ?? (message.currentSlug ? currentToLegacyProjectSlug[message.currentSlug] : undefined)
    const currentSlug =
      message.currentSlug ?? (message.legacySlug ? legacyToCurrentProjectSlug[message.legacySlug] : undefined)
    if (legacySlug && currentSlug) syncProjectRoute(message.frame, currentSlug, legacySlug)
    return
  }

  if (message.type !== 'section-change') return
  if (!isSyncSection(message.section)) return
  if (activeProjectSlug && message.section === 'portfolio') return
  if (message.section === activeSection && message.frame === lastFrame) return
  syncSection(message.section, message.frame)
})

window.addEventListener('resize', () => {
  syncDefaultCompareLayout()
  scheduleFrameLabelLayoutSync()
})
window.addEventListener('pointermove', moveFrameLabelResize)
window.addEventListener('pointerup', finishFrameLabelResize)
window.addEventListener('pointercancel', finishFrameLabelResize)

render()
