import type { Language, LocalizedString } from '../types'

export function getContent(content: LocalizedString, language: Language): string {
  return content[language]
}

export function detectBrowserLanguage(): Language {
  return navigator.language.toLowerCase().startsWith('ko') ? 'ko' : 'en'
}
