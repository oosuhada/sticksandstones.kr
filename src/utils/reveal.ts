import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type RevealPreset = {
  x?: number
  y?: number
  scale?: number
  rotate?: number
}

const revealPresets: Record<string, RevealPreset> = {
  'fade-up': { y: 34 },
  'fade-down': { y: -28 },
  'fade-left': { x: 42 },
  'fade-right': { x: -42 },
  'zoom-in': { y: 18, scale: 0.94 },
}

export function revealAttr(animation = 'fade-up', delay = 0) {
  return `data-reveal="${animation}"${delay ? ` data-reveal-delay="${delay}"` : ''}`
}

function killPageScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => {
    if (String(trigger.vars.id ?? '').startsWith('stks-')) {
      trigger.kill()
    }
  })
  gsap.killTweensOf(
    '[data-reveal], .hero-proof-grid, .hero-proof-grid *, .hero-actions, .hero-actions *, .context-grid, .context-grid *',
  )
}

function isInsideGroupedReveal(element: HTMLElement) {
  return Boolean(element.closest('.hero-proof-grid, .hero-actions, .context-grid'))
}

function revealElements() {
  const elements = gsap
    .utils
    .toArray<HTMLElement>('[data-reveal]')
    .filter((element) => !isInsideGroupedReveal(element))

  elements.forEach((element, index) => {
    const preset = revealPresets[element.dataset.reveal ?? 'fade-up'] ?? revealPresets['fade-up']
    const delay = Number(element.dataset.revealDelay ?? 0) / 1000

    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        x: preset.x ?? 0,
        y: preset.y ?? 0,
        scale: preset.scale ?? 1,
        rotate: preset.rotate ?? 0,
        willChange: 'transform, opacity',
      },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 0.92,
        delay,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility,willChange',
        scrollTrigger: {
          id: `stks-reveal-${index}`,
          trigger: element,
          start: 'top 86%',
          once: true,
        },
      },
    )
  })
}

function revealCardGroups() {
  const groupConfigs = [
    {
      selector: '.hero-proof-grid',
      contentSelector: 'dt, dd',
      y: 10,
      stagger: 0.08,
      start: 'top 88%',
    },
    {
      selector: '.hero-actions',
      contentSelector: 'a > span, a > small',
      y: 10,
      stagger: 0.1,
      start: 'top 90%',
    },
    {
      selector: '.context-grid',
      contentSelector: 'article > span, article > h3, article > p',
      y: 12,
      stagger: 0.08,
      start: 'top 82%',
    },
  ]

  groupConfigs.forEach((config, groupIndex) => {
    gsap.utils.toArray<HTMLElement>(config.selector).forEach((group, index) => {
      const contents = gsap.utils.toArray<HTMLElement>(config.contentSelector, group)

      gsap.set(group, {
        autoAlpha: 0,
        clipPath: 'inset(0 0 100% 0)',
        transformOrigin: '50% 0%',
        y: 18,
        scale: 0.992,
        willChange: 'clip-path, opacity, transform',
      })
      gsap.set(contents, {
        autoAlpha: 0,
        y: config.y,
        willChange: 'transform, opacity',
      })

      const timeline = gsap.timeline({
        scrollTrigger: {
          id: `stks-card-group-${groupIndex}-${index}`,
          trigger: group,
          start: config.start,
          once: true,
        },
      })

      timeline
        .to(group, {
          autoAlpha: 1,
          clipPath: 'inset(0 0 0% 0)',
          y: 0,
          scale: 1,
          duration: 0.72,
          ease: 'power3.out',
          clearProps: 'clipPath,transformOrigin,transform,willChange,visibility',
        })
        .to(
          contents,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.58,
            stagger: config.stagger,
            ease: 'power3.out',
            clearProps: 'transform,opacity,visibility,willChange',
          },
          0.04,
        )
    })
  })
}

function addSectionDepth() {
  const caseHeroArt = document.querySelector<HTMLElement>('.case-hero-art')
  const caseHero = document.querySelector<HTMLElement>('.case-hero')
  if (caseHeroArt && caseHero) {
    gsap.to(caseHeroArt, {
      yPercent: 7,
      ease: 'none',
      scrollTrigger: {
        id: 'stks-case-hero-art-depth',
        trigger: caseHero,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
      },
    })
  }

  const migrationVisual = document.querySelector<HTMLElement>('.migration-visual')
  const migrationPanels = gsap.utils.toArray<HTMLElement>('.migration-visual .code-panel')
  if (migrationVisual && migrationPanels.length) {
    migrationPanels.forEach((panel, index) => {
      gsap.to(panel, {
        y: index % 2 ? 10 : -10,
        ease: 'none',
        scrollTrigger: {
          id: `stks-landing-migration-depth-${index}`,
          trigger: migrationVisual,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.7,
        },
      })
    })
  }

  gsap.utils.toArray<HTMLElement>('.feature-panel').forEach((panel, index) => {
    gsap.fromTo(
      panel,
      { backgroundPosition: '50% 55%' },
      {
        backgroundPosition: '50% 45%',
        ease: 'none',
        scrollTrigger: {
          id: `stks-feature-depth-${index}`,
          trigger: panel,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8,
        },
      },
    )
  })
}

export function initScrollReveal() {
  killPageScrollTriggers()

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    gsap.set('[data-reveal]', { clearProps: 'all', autoAlpha: 1 })
    return
  }

  revealElements()
  revealCardGroups()
  addSectionDepth()

  window.setTimeout(() => ScrollTrigger.refresh(), 120)
}
