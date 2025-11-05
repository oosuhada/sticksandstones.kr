export type PortfolioLanguage = 'ko' | 'en'

const STORAGE_KEY = 'stks-portfolio-language'

export function getPortfolioLanguage(): PortfolioLanguage {
  const requested = new URLSearchParams(window.location.search).get('lang')
  if (requested === 'en' || requested === 'ko') {
    setPortfolioLanguage(requested)
    return requested
  }

  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'en' ? 'en' : 'ko'
}

export function setPortfolioLanguage(language: PortfolioLanguage) {
  window.localStorage.setItem(STORAGE_KEY, language)
}

export function getNextPortfolioLanguage(language: PortfolioLanguage): PortfolioLanguage {
  return language === 'ko' ? 'en' : 'ko'
}

export function renderLanguageToggle(language: PortfolioLanguage) {
  const next = getNextPortfolioLanguage(language)
  const label = language === 'ko' ? 'Switch to English' : '한국어로 전환'
  const displayLanguage = language === 'ko' ? 'KR' : 'EN'

  return `
    <button class="floating-language-toggle" type="button" data-language-toggle aria-label="${label}">
      <span>${displayLanguage}</span>
    </button>
  `
}

export function bindLanguageToggle(currentLanguage: PortfolioLanguage, onChange: () => void) {
  document.querySelectorAll<HTMLButtonElement>('[data-language-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      setPortfolioLanguage(getNextPortfolioLanguage(currentLanguage))
      onChange()
    })
  })
}
