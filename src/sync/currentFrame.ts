import type { AppStoreState } from '../types'
import type { SyncDrawerTab, SyncMessage, SyncSection } from './types'
import { isSyncSection } from './types'

type RuntimeStore = {
  getState(): AppStoreState
  subscribe(listener: (state: AppStoreState) => void): () => void
}

type RuntimeRouter = {
  buildPath(section: AppStoreState['currentSection'], language: AppStoreState['language'], slug?: string): string
  navigate(path: string, replace?: boolean): void
}

const displayHost = 'sticksandstones.kr'

function normalizeSection(section: AppStoreState['currentSection']): SyncSection {
  return section ?? 'home'
}

function normalizeDisplayPath(path: string): string {
  if (!path || path === '/') return ''
  return path.endsWith('/') ? path.slice(0, -1) : path
}

function getLanguagePath(language: AppStoreState['language']): string {
  return language === 'en' ? '/en' : ''
}

function getOverlayPath(type: 'contact' | 'faq' | 'our-video', language: AppStoreState['language']): string {
  return `${getLanguagePath(language)}/${type}`
}

function clampProgress(progress: number): number {
  if (!Number.isFinite(progress)) return 0
  return Math.min(1, Math.max(0, progress))
}

function getScrollProgress(): number {
  const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
  const max = Math.max(0, scrollHeight - window.innerHeight)
  if (max <= 0) return 0

  const top = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
  return clampProgress(top / max)
}

function applyScrollProgress(progress: number): void {
  const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
  const max = Math.max(0, scrollHeight - window.innerHeight)
  const top = Math.round(max * clampProgress(progress))
  window.scrollTo(0, top)
  document.documentElement.scrollTop = top
  document.body.scrollTop = top
}

function getCurrentDrawerTab(): SyncDrawerTab | null {
  const state = window.__stksGetBottomDrawer?.()
  if (state?.open && state.tab) return state.tab
  if (document.body.classList.contains('contact-active')) return 'contact'
  if (document.body.classList.contains('faq-active')) return 'faq'
  return null
}

export function setupCurrentFrameSync(appStore: RuntimeStore, router: RuntimeRouter): void {
  if (window.__stksCurrentFrameSyncReady) return
  window.__stksCurrentFrameSyncReady = true

  let isApplyingRemoteNavigation = false
  let isApplyingRemoteDrawer = false
  let isApplyingRemoteScroll = false
  let scrollNotifyFrame = 0
  let remoteScrollReleaseTimer = 0
  let lastSection = normalizeSection(appStore.getState().currentSection)
  let lastRoute = ''

  const postFrameMessage = (message: { type: string; [key: string]: unknown }) => {
    if (window.parent === window) return

    window.parent.postMessage(
      {
        source: 'stks-frame',
        frame: 'current',
        ...message,
      } as SyncMessage,
      window.location.origin,
    )
  }

  const notifyParent = (section: SyncSection) => {
    postFrameMessage({
      type: 'section-change',
      section,
    })
  }

  const notifyRoute = (path = window.location.pathname) => {
    const route = normalizeDisplayPath(path)
    if (route === lastRoute) return
    lastRoute = route
    const projectMatch = route.match(/(?:^|\/)portfolio\/([^/?#]+)/)
    if (projectMatch?.[1]) {
      postFrameMessage({
        type: 'project-route-change',
        currentSlug: decodeURIComponent(projectMatch[1]),
        url: `${displayHost}${route}`,
      })
    }
    postFrameMessage({
      type: 'route-change',
      url: `${displayHost}${route}`,
    })
  }

  const scheduleScrollNotify = () => {
    if (isApplyingRemoteScroll) return
    if (scrollNotifyFrame) return

    scrollNotifyFrame = window.requestAnimationFrame(() => {
      scrollNotifyFrame = 0
      if (isApplyingRemoteScroll) return

      const section = normalizeSection(appStore.getState().currentSection)
      if (section === 'home') return

      postFrameMessage({
        type: 'scroll-change',
        section,
        progress: getScrollProgress(),
      })
    })
  }

  const applyRemoteScroll = (section: SyncSection, progress: number) => {
    const state = appStore.getState()
    const current = normalizeSection(state.currentSection)
    const needsNavigation = current !== section

    isApplyingRemoteScroll = true
    if (needsNavigation) {
      isApplyingRemoteNavigation = true
      router.navigate(router.buildPath(section === 'home' ? null : section, state.language), true)
    }

    applyScrollProgress(progress)
    if (needsNavigation) {
      window.requestAnimationFrame(() => applyScrollProgress(progress))
      ;[120, 420].forEach((delay) => {
        window.setTimeout(() => applyScrollProgress(progress), delay)
      })
    }

    window.clearTimeout(remoteScrollReleaseTimer)
    remoteScrollReleaseTimer = window.setTimeout(
      () => {
        isApplyingRemoteScroll = false
      },
      needsNavigation ? 520 : 80,
    )
  }

  const readRemoteDrawer = () => {
    return window.__stksGetBottomDrawer?.() ?? {
      open: !!getCurrentDrawerTab(),
      tab: getCurrentDrawerTab(),
    }
  }

  const applyRemoteDrawer = (open: boolean, tab: SyncDrawerTab) => {
    isApplyingRemoteDrawer = true

    if (window.__stksSetBottomDrawer) {
      window.__stksSetBottomDrawer(tab, open)
    } else {
      const activeTab = getCurrentDrawerTab()
      if (open) {
        if (activeTab !== tab) {
          document.querySelector<HTMLButtonElement>(`.bottom-tab-btn[data-tab="${tab}"]`)?.click()
        }
      } else if (activeTab) {
        document.querySelector<HTMLButtonElement>(`.bottom-tab-btn[data-tab="${activeTab}"]`)?.click()
      }
    }

    window.setTimeout(() => {
      isApplyingRemoteDrawer = false
    }, 140)
  }

  appStore.subscribe((state) => {
    const section = normalizeSection(state.currentSection)
    notifyRoute()
    if (section === lastSection) return
    lastSection = section

    if (!isApplyingRemoteNavigation) notifyParent(section)
    isApplyingRemoteNavigation = false
  })

  window.addEventListener('message', (event: MessageEvent<SyncMessage>) => {
    if (event.origin !== window.location.origin) return
    const message = event.data
    if (message?.source !== 'stks-comparison') return

    if (message.type === 'audio-control') {
      if (message.frame !== 'current') return
      window.__stksSetFrameMuted?.(message.muted)
      return
    }

    if (message.type === 'video-control') {
      if (message.action === 'open') window.__stksOpenLogoVideo?.(true)
      if (message.action === 'close') window.__stksCloseLogoVideo?.(true)
      return
    }

    if (message.type === 'drawer-control') {
      applyRemoteDrawer(message.open, message.tab)
      return
    }

    if (message.type === 'scroll-control') {
      if (!isSyncSection(message.section)) return
      applyRemoteScroll(message.section, message.progress)
      return
    }

    if (message.type !== 'navigate-section') return
    if (!isSyncSection(message.section)) return

    const state = appStore.getState()
    const targetSection = message.section === 'home' ? null : message.section
    const isClosingProjectDetail = message.section === 'portfolio' && !!state.portfolioSlug
    if (normalizeSection(state.currentSection) === message.section && !isClosingProjectDetail) return

    isApplyingRemoteNavigation = true
    router.navigate(router.buildPath(targetSection, state.language), true)
  })

  window.addEventListener('scroll', scheduleScrollNotify, { passive: true })
  document.addEventListener('scroll', scheduleScrollNotify, true)

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const button = target.closest<HTMLButtonElement>('.bottom-tab-btn')
      const videoTrigger = target.closest('.center-circle')
      if (videoTrigger) {
        window.setTimeout(() => {
          notifyRoute(getOverlayPath('our-video', appStore.getState().language))
        }, 90)
      }
      if (!button) return

      const clickedTab = button.dataset.tab === 'faq' ? 'faq' : 'contact'
      window.setTimeout(() => {
        if (isApplyingRemoteDrawer) return
        const drawer = readRemoteDrawer()
        notifyRoute(
          drawer.open
            ? getOverlayPath(drawer.tab ?? clickedTab, appStore.getState().language)
            : window.location.pathname,
        )
        postFrameMessage({
          type: 'drawer-change',
          open: drawer.open,
          tab: drawer.tab ?? clickedTab,
        })
      }, 90)
    },
    true,
  )

  requestAnimationFrame(() => {
    notifyParent(lastSection)
    notifyRoute()
  })
}

declare global {
  interface Window {
    __stksCurrentFrameSyncReady?: boolean
    __stksSetFrameMuted?: (muted: boolean) => void
    __stksOpenLogoVideo?: (silent?: boolean) => void
    __stksCloseLogoVideo?: (silent?: boolean) => void
    __stksSetBottomDrawer?: (tab: SyncDrawerTab, open: boolean) => void
    __stksGetBottomDrawer?: () => { open: boolean; tab: SyncDrawerTab | null }
  }
}
