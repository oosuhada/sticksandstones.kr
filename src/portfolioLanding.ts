import './portfolioLanding.css'
import './utils/languageToggle.css'
import { bindLanguageToggle, getPortfolioLanguage, renderLanguageToggle } from './utils/language'
import { initScrollReveal, revealAttr } from './utils/reveal'
import { setPageMeta } from './utils/seo'

const app = document.querySelector<HTMLDivElement>('#app')

type LandingCopy = {
  meta: {
    title: string
    description: string
  }
  hero: {
    eyebrow: string
    title: string[]
    lead: string[]
    proof: {
      term: string
      description: string
    }[]
    actions: {
      caseStudy: string
      caseStudySub: string
      liveCompare: string
      liveCompareSub: string[]
    }
  }
  migration: {
    beforeTitle: string
    afterTitle: string
    principles: string[]
  }
  brief: {
    label: string
    title: string
    stat: string[]
    body: string
  }[]
  routeProof: {
    eyebrow: string
    title: string[]
    routes: {
      code: string
      label: string
    }[]
  }
}

const copy: Record<'ko' | 'en', LandingCopy> = {
  ko: {
    meta: {
      title: 'STKS Migration Portfolio — Sticks & Stones Seoul',
      description:
        '10년 넘은 WordPress Creative 테마를 Vite + TypeScript 정적 웹앱으로 재구축한 마이그레이션 포트폴리오. 브랜드 모션은 유지하고 AEO까지 고려한 URL 구조로 다시 설계했습니다.',
    },
    hero: {
      eyebrow: 'WordPress dependency → searchable TypeScript app',
      title: ['브랜드 경험은 보존하고,', '기술적 토대는 재건축했습니다.'],
      lead: [
        '10년 넘은 WordPress Creative 테마.',
        '업체를 거칠 때마다 덧댄 PHP,',
        '수천 줄의 CSS와 JS.',
        '클라이언트가 원한 건',
        '"에어컨 있는 한옥"이었습니다.',
        '브랜드의 뼈대는 살리고,',
        '내부 인프라는 현대적으로 교체하는 것.',
        '네 방향 진입과 로고 모션은 그대로,',
        'PHP와 DB 의존은 걷어내고',
        'Vite + TypeScript 정적 앱으로 재구성했습니다.',
      ],
      proof: [
        { term: 'Legacy Constraint', description: '단일 화면 WordPress, URL 없음' },
        { term: 'Rebuild Scope', description: 'PHP 테마 → Vite + TypeScript' },
        { term: 'Primary Outcome', description: '프로젝트별 독립 URL + AEO 대응 구조' },
      ],
      actions: {
        caseStudy: 'Case Study',
        caseStudySub: '문제 해결 흐름 보기',
        liveCompare: 'Live Compare',
        liveCompareSub: ['WordPress 원본과', '현재 사이트를 나란히'],
      },
    },
    migration: {
      beforeTitle: 'Creative WordPress Theme',
      afterTitle: 'Vite + TypeScript Rebuild',
      principles: ['Static serving', 'Route-aware', 'Motion preserved'],
    },
    brief: [
      {
        label: 'Project Goal',
        title: '화면 전환 감각은 그대로, 파일 구조는 처음부터 다시.',
        stat: ['기존 단일 화면 경험', '→ 라우팅 가능한 7개 핵심 경로'],
        body: '네 방향 진입, 로고 모션, 모달 감각은 그대로입니다. 유지보수 비용을 올리던 런타임 의존성만 걷어냈습니다.',
      },
      {
        label: 'Client Need',
        title: '검색에 노출되지 않던 포트폴리오를, 주소로 공유할 수 있게.',
        stat: ['WordPress 단일 진입', '→ <code>/en/portfolio/:id</code> 개별 색인 구조'],
        body: 'CD와 PM이 프로젝트 하나를 링크로 공유하고, 검색 엔진과 AI가 각 작업을 따로 이해할 수 있도록 라우트를 분리했습니다.',
      },
      {
        label: 'Migration Outcome',
        title: '파일을 다시 잃지 않도록. Git으로 관리되는 포트폴리오.',
        stat: ['PHP 위젯 0개 · DB 런타임 의존 0개', 'Git 버전 관리'],
        body: '현재 사이트, WordPress 아카이브, 이 케이스 스터디가 하나의 저장소 안에 있습니다. 다음 유지보수자가 와도 파일의 출처를 설명할 수 있습니다.',
      },
    ],
    routeProof: {
      eyebrow: 'URL이 없던 사이트에, 주소를 붙였습니다.',
      title: ['앱처럼 끊기지 않는 화면,', '웹처럼 공유 가능한 주소.'],
      routes: [
        { code: 'sticksandstones.kr', label: 'Legacy WordPress home' },
        { code: 'sticksandstones.kr/en/about', label: 'About page route' },
        {
          code: 'sticksandstones.kr/en/portfolio/lg-2023-new-years-message',
          label: 'Indexable project route',
        },
      ],
    },
  },
  en: {
    meta: {
      title: 'STKS Migration Portfolio — Sticks & Stones Seoul',
      description:
        'A migration portfolio rebuilding a decade-old WordPress Creative theme into a Vite + TypeScript static app, preserving the brand motion while designing AEO-ready routes.',
    },
    hero: {
      eyebrow: 'WordPress dependency → searchable TypeScript app',
      title: ['Preserving the brand experience.', 'Rebuilding the technical foundation.'],
      lead: [
        'A decade-old WordPress Creative theme,',
        'patched by multiple vendors over the years,',
        'buried under thousands of lines of CSS and JavaScript.',
        "The client's ask was deceptively simple:",
        'keep what the brand looks and feels like,',
        'rebuild everything underneath it.',
        'The four-way entry and logo motion stayed.',
        'The PHP dependency and DB runtime did not.',
        'Rebuilt as a Vite + TypeScript static app.',
      ],
      proof: [
        { term: 'Legacy Constraint', description: 'No per-page URLs · PHP theme lock-in' },
        { term: 'Rebuild Scope', description: 'PHP theme → Vite + TypeScript' },
        { term: 'Primary Outcome', description: 'Addressable portfolio + AEO-ready structure' },
      ],
      actions: {
        caseStudy: 'Case Study',
        caseStudySub: 'See how each problem was solved',
        liveCompare: 'Live Compare',
        liveCompareSub: ['Legacy WordPress', 'side by side with today'],
      },
    },
    migration: {
      beforeTitle: 'Creative WordPress Theme',
      afterTitle: 'Vite + TypeScript Rebuild',
      principles: ['Static serving', 'Route-aware', 'Motion preserved'],
    },
    brief: [
      {
        label: 'Project Goal',
        title: 'Preserve the feel. Start the structure over.',
        stat: ['Single-screen legacy experience', '→ 7 routeable core paths'],
        body: 'The four-way entry, logo motion, and modal feel were non-negotiable. Everything that made it expensive to maintain was removed.',
      },
      {
        label: 'Client Need',
        title: 'From invisible to addressable: one URL per project.',
        stat: ['One WordPress entry point', '→ <code>/en/portfolio/:id</code> indexable pages'],
        body: 'CDs and PMs can now share a single project link. Search engines and AI systems index each piece of work independently.',
      },
      {
        label: 'Migration Outcome',
        title: 'A portfolio that can be handed off and will not get lost.',
        stat: ['0 PHP widgets · 0 DB runtime dependency', 'Git version control'],
        body: 'The current site, the WordPress archive, and this case study all live in one repository. The next maintainer will know exactly where every file came from.',
      },
    ],
    routeProof: {
      eyebrow: 'Every scene now has an address.',
      title: ['Seamless like an app.', 'Addressable like the web.'],
      routes: [
        { code: 'sticksandstones.kr', label: 'Legacy WordPress home' },
        { code: 'sticksandstones.kr/en/about', label: 'About page route' },
        {
          code: 'sticksandstones.kr/en/portfolio/lg-2023-new-years-message',
          label: 'Indexable project route',
        },
      ],
    },
  },
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function phraseLine(parts: string[]) {
  return parts.map((part) => `<span class="phrase">${escapeHtml(part)}</span>`).join(' ')
}

function render() {
  if (!app) return

  const language = getPortfolioLanguage()
  const t = copy[language]

  document.documentElement.lang = language
  setPageMeta({
    title: t.meta.title,
    description: t.meta.description,
    path: '/',
  })
  document.body.className = 'portfolio-landing-body'
  app.className = 'portfolio-landing-shell'
  app.innerHTML = `
    <header class="landing-header" aria-label="Portfolio navigation">
      <a class="landing-brand" href="/" aria-label="Portfolio home">STKS Migration</a>
      <nav class="landing-nav" aria-label="Project pages">
        <a href="/case-study">${t.hero.actions.caseStudy}</a>
        <a href="/live-compare">${t.hero.actions.liveCompare}</a>
      </nav>
    </header>
    <main class="landing-hero">
      <section class="hero-copy" aria-labelledby="project-title" ${revealAttr('fade-up')}>
        <p class="eyebrow">${t.hero.eyebrow}</p>
        <h1 id="project-title" class="phrase-copy">${phraseLine(t.hero.title)}</h1>
        <p class="hero-lead phrase-copy">
          ${phraseLine(t.hero.lead)}
        </p>
        <dl class="hero-proof-grid" aria-label="Migration proof points">
          ${t.hero.proof
            .map(
              (item, index) => `
                <div ${revealAttr('fade-up', 120 + index * 70)}>
                  <dt>${item.term}</dt>
                  <dd>${item.description}</dd>
                </div>
              `,
            )
            .join('')}
        </dl>
        <div class="hero-actions" aria-label="Project views" ${revealAttr('fade-up', 220)}>
          <a class="primary-action" href="/case-study">
            <span>${t.hero.actions.caseStudy}</span>
            <small><span>${t.hero.actions.caseStudySub}</span></small>
          </a>
          <a class="secondary-action" href="/live-compare">
            <span>${t.hero.actions.liveCompare}</span>
            <small>${t.hero.actions.liveCompareSub.map((line) => `<span>${line}</span>`).join('')}</small>
          </a>
        </div>
      </section>

      <section class="migration-visual" aria-label="WordPress to TypeScript migration preview" ${revealAttr('fade-left', 160)}>
        <div class="code-panel code-panel-before">
          <span>Before</span>
          <strong>${t.migration.beforeTitle}</strong>
          <pre><code>/wp-content/themes/creative/
  header.php
  page-home.php
  single-portfolio.php
  functions.php</code></pre>
          <pre><code>&lt;?php get_header(); ?&gt;
&lt;?php dynamic_sidebar('home'); ?&gt;</code></pre>
        </div>
        <div class="migration-arrow" aria-hidden="true">↓</div>
        <div class="code-panel code-panel-after">
          <span>After</span>
          <strong>${t.migration.afterTitle}</strong>
          <pre><code>/src
  main.ts
  runtime/original.ts
  data/portfolio.ts
  sync/currentFrame.ts</code></pre>
          <pre><code>buildPath('portfolio', item.id)
// /en/portfolio/:id

syncCurrentFrame(frame)</code></pre>
          <div class="principle-list" aria-label="Migration principles">
            ${t.migration.principles.map((principle) => `<span>${principle}</span>`).join('')}
          </div>
        </div>
      </section>
    </main>

    <section class="brief-band" aria-label="Project brief">
      ${t.brief
        .map(
          (item, index) => `
            <article ${revealAttr('fade-up', index * 80)}>
              <span>${item.label}</span>
              <h2>${item.title}</h2>
              <p class="brief-stat">${item.stat.map((line) => `<span>${line}</span>`).join('')}</p>
              <p>${item.body}</p>
            </article>
          `,
        )
        .join('')}
    </section>

    <section class="route-proof" aria-label="Routing proof">
      <div ${revealAttr('fade-up')}>
        <p class="eyebrow">${t.routeProof.eyebrow}</p>
        <h2 class="phrase-copy">${phraseLine(t.routeProof.title)}</h2>
      </div>
      <ol ${revealAttr('fade-up', 120)}>
        ${t.routeProof.routes.map((route) => `<li><code>${route.code}</code><span>${route.label}</span></li>`).join('')}
      </ol>
    </section>
    ${renderLanguageToggle(language)}
  `

  bindLanguageToggle(language, render)
  initScrollReveal()
}

render()
