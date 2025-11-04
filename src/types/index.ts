export type Language = 'ko' | 'en'
export type Section = 'about' | 'services' | 'portfolio' | 'clients' | null
export type AppState = 'idle' | 'expanding' | 'expanded'

export interface LocalizedString {
  ko: string
  en: string
}

export interface PortfolioItem {
  id: string
  title: LocalizedString
  client: string
  mediaType: string
  mission: LocalizedString
  solution: LocalizedString
  videoUrl?: string
}

export interface PortfolioAssets {
  thumbnail: string
  slider: string[]
}

export interface TeamMember {
  name: LocalizedString | string
  initial: string
  role: LocalizedString
  image: string
  education: {
    ko: Array<{ school: string; degree: string }>
    en: Array<{ school: string; degree: string }>
  }
  experience: {
    ko: string[]
    en: string[]
  }
}

export interface Testimonial {
  quote: LocalizedString
  author: LocalizedString | string
  role?: LocalizedString
  isTestimonial?: boolean
}

export interface ServiceItem {
  id: string
  label: LocalizedString
  image: {
    ko: string
    en: string
  }
}

export interface FaqItem {
  category: 'services' | 'pricing' | 'process' | 'legal' | 'other'
  question: LocalizedString
  answer: LocalizedString
}

export interface AppStoreState {
  currentSection: Section
  selectedSection: Section
  language: Language
  appState: AppState
  portfolioSlug: string | undefined
}
