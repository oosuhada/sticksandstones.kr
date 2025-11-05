import type { Section } from '../types'

export type SyncSection = Exclude<Section, null> | 'home'
export type SyncFrame = 'legacy' | 'current'
export type SyncDrawerTab = 'contact' | 'faq'

export type SyncMessage =
  | {
      source: 'stks-frame'
      type: 'section-change'
      frame: SyncFrame
      section: SyncSection
    }
  | {
      source: 'stks-frame'
      type: 'audio-intent' | 'video-open' | 'video-close'
      frame: SyncFrame
      section?: SyncSection
    }
  | {
      source: 'stks-frame'
      type: 'drawer-change'
      frame: SyncFrame
      open: boolean
      tab: SyncDrawerTab
    }
  | {
      source: 'stks-frame'
      type: 'scroll-change'
      frame: SyncFrame
      section: SyncSection
      progress: number
    }
  | {
      source: 'stks-frame'
      type: 'route-change'
      frame: SyncFrame
      url: string
    }
  | {
      source: 'stks-frame'
      type: 'project-route-change'
      frame: SyncFrame
      legacySlug?: string
      currentSlug?: string
      url: string
    }
  | {
      source: 'stks-comparison'
      type: 'navigate-section'
      section: SyncSection
    }
  | {
      source: 'stks-comparison'
      type: 'audio-control'
      frame: SyncFrame
      muted: boolean
    }
  | {
      source: 'stks-comparison'
      type: 'video-control'
      action: 'open' | 'close'
    }
  | {
      source: 'stks-comparison'
      type: 'drawer-control'
      open: boolean
      tab: SyncDrawerTab
    }
  | {
      source: 'stks-comparison'
      type: 'scroll-control'
      section: SyncSection
      progress: number
    }
  | {
      source: 'stks-comparison'
      type: 'project-control'
      legacySlug: string
    }

export function isSyncSection(value: unknown): value is SyncSection {
  return value === 'home' || value === 'about' || value === 'services' || value === 'portfolio' || value === 'clients'
}
