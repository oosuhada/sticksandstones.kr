import './legacyLive.css'
import type { SyncMessage, SyncSection } from './sync/types'
import { isSyncSection } from './sync/types'

type LegacySection = Exclude<SyncSection, 'home'>

type LegacyItem = {
  id: LegacySection
  title: string
  subtitle: string
  image: string
  body: string
  detail: string
}

const sections: LegacyItem[] = [
  {
    id: 'about',
    title: 'About',
    subtitle: 'The original animated entry point',
    image: '/legacy/creative/images/Boy2.gif',
    body: 'A WordPress theme and widget driven homepage introduced the studio through character animation, sound, and quadrant navigation.',
    detail: 'PHP template, Layers widgets, custom CSS',
  },
  {
    id: 'services',
    title: 'Services',
    subtitle: 'Process and offering blocks',
    image: '/legacy/creative/images/Dolphin_finalizedv2.png',
    body: 'Services were presented through illustration-heavy steps and individual widget areas inside the old custom theme.',
    detail: 'Widget modules, static process graphics',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    subtitle: 'Project archive and gallery',
    image: '/legacy/creative/images/PorfolioHands2.gif',
    body: 'Portfolio content lived in WordPress post types and theme-specific gallery templates, with project browsing tied to the PHP runtime.',
    detail: 'Custom post type, single-portfolio.php',
  },
  {
    id: 'clients',
    title: 'Clients Say',
    subtitle: 'Testimonials and proof',
    image: '/legacy/creative/images/ClientsSay.gif',
    body: 'Client proof appeared as a dedicated quadrant and lower drawer content, supported by theme widgets.',
    detail: 'Testimonials widget, contact drawer',
  },
]

const app = document.querySelector<HTMLDivElement>('#app')
let activeSection: SyncSection = 'home'

function normalizeLegacySection(value: string): SyncSection {
  const normalized = value.replace(/^#/, '').replace(/^\/|\/$/g, '').toLowerCase()
  const aliases: Record<string, SyncSection> = {
    work: 'portfolio',
    'work-section': 'portfolio',
    'clients-say': 'clients',
  }
  const section = aliases[normalized] ?? normalized

  return isSyncSection(section) ? section : 'home'
}

function getInitialSection(): SyncSection {
  return normalizeLegacySection(window.location.hash || window.location.pathname)
}

function notifyParent(section: SyncSection) {
  if (window.parent === window) return

  window.parent.postMessage(
    {
      source: 'stks-frame',
      type: 'section-change',
      frame: 'legacy',
      section,
    } satisfies SyncMessage,
    window.location.origin,
  )
}

function setSection(section: SyncSection, options: { notify?: boolean } = {}) {
  if (!app) return
  activeSection = section
  app.dataset.section = section

  app.querySelectorAll<HTMLButtonElement>('[data-legacy-section]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.legacySection === section)
  })

  const item = sections.find((entry) => entry.id === section)
  const panel = app.querySelector<HTMLElement>('.legacy-detail')
  if (panel) {
    panel.innerHTML =
      section === 'home' || !item
        ? `
          <span class="legacy-kicker">WordPress 2015-2025</span>
          <h1>Sticks & Stones</h1>
          <p>Click a quadrant to open the old site section. The comparison page will move the rebuilt site with it.</p>
        `
        : `
          <span class="legacy-kicker">${item.detail}</span>
          <h1>${item.title}</h1>
          <p>${item.body}</p>
        `
  }

  if (options.notify) notifyParent(section)
}

function render() {
  if (!app) return

  document.documentElement.lang = 'en'
  document.body.className = 'legacy-live-body'
  app.className = 'legacy-live-shell'
  app.innerHTML = `
    <main class="legacy-stage" aria-label="Legacy WordPress interactive preview">
      <div class="legacy-grid">
        ${sections
          .map(
            (section) => `
              <button class="legacy-tile legacy-${section.id}" data-legacy-section="${section.id}">
                <img src="${section.image}" alt="${section.title}" />
                <span>${section.title}</span>
                <small>${section.subtitle}</small>
              </button>
            `,
          )
          .join('')}
      </div>
      <button class="legacy-logo" data-legacy-section="home" aria-label="Back to legacy home">
        <img src="/legacy/creative/images/sticksnstones.png" alt="Sticks and Stones old logo" />
      </button>
      <aside class="legacy-detail"></aside>
    </main>
  `

  app.querySelectorAll<HTMLButtonElement>('[data-legacy-section]').forEach((button) => {
    button.addEventListener('click', () => {
      const section = button.dataset.legacySection
      if (!isSyncSection(section)) return
      setSection(section, { notify: true })
    })
  })

  setSection(getInitialSection())
  requestAnimationFrame(() => notifyParent(activeSection))
}

window.addEventListener('message', (event: MessageEvent<SyncMessage>) => {
  if (event.origin !== window.location.origin) return
  const message = event.data
  if (message?.source !== 'stks-comparison' || message.type !== 'navigate-section') return
  if (!isSyncSection(message.section)) return
  setSection(message.section)
})

window.addEventListener('hashchange', () => setSection(getInitialSection(), { notify: true }))

render()
