import type { Language, Section } from '../types'

type PageMetaOptions = {
  title: string
  description: string
  path: string
  image?: string
}

const siteOrigin = 'https://stks.oosu.dev'
const defaultImage = '/assets/og/stks-migration-og-v2.png'
const defaultImageAlt = 'STKS Migration Portfolio preview'

function absoluteUrl(value: string): string {
  if (/^https?:\/\//.test(value)) return value
  return `${siteOrigin}${value.startsWith('/') ? value : `/${value}`}`
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string): void {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attribute, key)
    document.head.appendChild(meta)
  }

  meta.content = content
}

function upsertCanonical(href: string): void {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }

  link.href = href
}

export function setPageMeta({ title, description, path, image = defaultImage }: PageMetaOptions): void {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  document.title = title
  upsertCanonical(url)
  upsertMeta('name', 'description', description)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:url', url)
  upsertMeta('property', 'og:image', imageUrl)
  upsertMeta('property', 'og:image:secure_url', imageUrl)
  upsertMeta('property', 'og:image:width', '1200')
  upsertMeta('property', 'og:image:height', '630')
  upsertMeta('property', 'og:image:alt', defaultImageAlt)
  upsertMeta('property', 'og:site_name', 'Sticks & Stones Seoul')
  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', title)
  upsertMeta('name', 'twitter:description', description)
  upsertMeta('name', 'twitter:image', imageUrl)
  upsertMeta('name', 'twitter:image:alt', defaultImageAlt)
}

export function injectJsonLd(schema: unknown): void {
  let script = document.getElementById('page-jsonld') as HTMLScriptElement | null

  if (!script) {
    script = document.createElement('script')
    script.id = 'page-jsonld'
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(schema)
}

export function buildWebsiteSchema(language: Language, section: Section, portfolioSlug?: string): unknown {
  const prefix = language === 'en' ? '/en' : ''
  const path = section ? `${prefix}/${section}${portfolioSlug ? `/${portfolioSlug}` : ''}` : `${prefix}/`

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sticks & Stones Seoul',
    url: `https://stks.kr${path}`,
  }
}
