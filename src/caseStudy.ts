import './caseStudy.css'
import './utils/languageToggle.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Player } from '@remotion/player'
import type { PlayerRef } from '@remotion/player'
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import { bindLanguageToggle, getPortfolioLanguage, renderLanguageToggle } from './utils/language'
import { initScrollReveal, revealAttr } from './utils/reveal'
import { setPageMeta } from './utils/seo'

type Feature = {
  id: string
  label: string
  title: string
  before: string
  after: string
  beforeRoute: string
  afterRoute: string
  visual: string
  bullets: string[]
  code?: string
}

type ContextItem = {
  label: string
  title: string
  body: string
}

type CaseCopy = {
  meta: {
    title: string
    description: string
  }
  nav: {
    home: string
    compare: string
  }
  hero: {
    eyebrow: string
    title: string[]
    lead: string[]
    meta: string[]
  }
  context: {
    eyebrow: string
    title: string[]
    body: string[]
    items: ContextItem[]
  }
  motion: {
    eyebrow: string
    title: string
    body: string
    metaLabel: string
    metaValue: string
  }
  routeCallout: {
    label: string
    code: string
    body: string
  }
  stats: {
    value: string
    label: string
  }[]
  featureList: {
    eyebrow: string
    title: string
  }
  features: Feature[]
  proof: {
    eyebrow: string
    title: string
    body: string
    primaryAction: string
    secondaryAction: string
  }
}

const segmentFrames = 90

const caseCopy: Record<'ko' | 'en', CaseCopy> = {
  ko: {
    meta: {
      title: 'STKS Migration Case Study — WordPress to Vite',
      description:
        'Sticks & Stones Seoul의 10년 넘은 WordPress Creative 테마를 Vite + TypeScript 구조로 전환한 케이스스터디. App 같은 전환은 유지하고 AEO-ready URL과 구조화 데이터를 설계했습니다.',
    },
    nav: {
      home: 'Project Home',
      compare: 'Live Compare',
    },
    hero: {
      eyebrow: 'Sticks & Stones Seoul · Migration Case Study',
      title: ['"에어컨 있는 한옥",', '레거시 복원을 넘어', '지속 가능한 구조로.'],
      lead: [
        '기존 브랜드의 시각적 언어는 보존하면서,',
        '10년간 쌓인 기술 부채를 걷어내는 것이 목표였습니다.',
        '제가 해결한 핵심은',
        'URL 라우팅, DB 의존 제거,',
        '코드 구조 재설계였습니다.',
        'PHP 기반 테마를',
        'Vite + TypeScript 기반의',
        '고성능 정적 앱으로 전환했습니다.',
      ],
      meta: ['Legacy WordPress recovery', 'Route architecture', 'AEO-ready portfolio data'],
    },
    context: {
      eyebrow: 'Project Context',
      title: ['이 작업의 핵심은', '새로 만드는 것이 아니라,', '기존 뼈대를 잃지 않고', '다시', '설계하는 것이었습니다.'],
      body: [
        '10년 넘게 덧댄 WordPress Creative 테마에서',
        '핵심 경험을 분리했습니다.',
        '오래된 배관을 무작정 고치는 대신,',
        '브랜드의 뼈대는 남기고',
        '운영 구조를 새로 짰습니다.',
      ],
      items: [
        {
          label: 'Problem',
          title: '콘텐츠는 풍부했지만, 웹에서는 보이지 않았습니다.',
          body: '포트폴리오와 서비스 설명은 있었지만 WordPress 테마, 위젯, DB 안에 흩어져 있었습니다. CD와 PM이 프로젝트 하나를 주소로 공유하거나, 검색과 AI가 개별 작업을 이해하기 어려웠습니다.',
        },
        {
          label: 'Constraints',
          title: '브랜드의 원앱 같은 감각은 유지해야 했습니다.',
          body: '네 방향 진입 구조와 중앙 로고 모션은 브랜드의 핵심 경험이었습니다. 이것을 건드리지 않으면서 PHP와 DB 의존만 걷어내야 했습니다.',
        },
        {
          label: 'Solution',
          title: '데이터를 런타임 의존성에서 분리했습니다.',
          body: '콘텐츠를 정적 데이터 모듈로 정리하고, 각 장면이 실제 URL을 갖도록 라우팅을 다시 설계했습니다.',
        },
        {
          label: 'Outcome',
          title: '설명 가능한 구조와 검증 가능한 아카이브.',
          body: '현재 사이트, WordPress 아카이브, 케이스 스터디를 한 저장소에서 관리해 다음 유지보수자가 출처와 변경 이유를 따라갈 수 있게 했습니다.',
        },
      ],
    },
    motion: {
      eyebrow: 'Migration Decision Criteria',
      title: '보존할 경험과 걷어낼 의존성을 먼저 나누고, 그 기준대로 다시 설계했습니다.',
      body: '판단 기준은 명확했습니다. 네 방향 진입, 중앙 로고 영상, Contact/FAQ Drawer처럼 사용자가 기억하는 브랜드 동작은 유지했습니다. 대신 PHP 테마, DB 런타임, 위젯에 묶인 콘텐츠는 TypeScript 데이터와 정적 라우트로 분리했습니다. 마지막으로 CD, PM, 검색 엔진, AI가 프로젝트 하나를 같은 단위로 이해할 수 있도록 개별 URL과 구조화 데이터를 남겼습니다.',
      metaLabel: 'Decision map',
      metaValue: 'preserve / remove / make addressable',
    },
    routeCallout: {
      label: 'AEO-ready Route',
      code: 'sticksandstones.kr/en/portfolio/lg-2023-new-years-message',
      body: '개별 프로젝트가 독립 URL과 구조화 데이터를 가지므로 검색 엔진, AI 답변, CD와 PM의 공유 링크가 모두 같은 작업 단위로 연결됩니다.',
    },
    stats: [
      { value: 'AEO Ready', label: 'JSON-LD 기반 AI·검색 최적화' },
      { value: '0 DB runtime', label: '배포 후 DB 런타임 의존 제거' },
      { value: 'Source Controlled', label: '유실 위험 없는 코드 기반 데이터' },
    ],
    featureList: {
      eyebrow: 'Implementation Proof',
      title: '각 변경점은 기능이 아니라 문제 해결 단위로 정리했습니다.',
    },
    features: [
      {
        id: 'stack',
        label: 'Stack',
        title: '파편화된 PHP 테마를 걷어내고, 소스 중심 아키텍처로',
        before: '10년 넘은 Creative 테마 위에 PHP, CSS, JS가 계속 덧대어져 화면과 데이터의 출처를 추적하기 어려웠습니다.',
        after: '콘텐츠 데이터를 TypeScript 모듈로 정리하고, Vite 빌드로 배포 가능한 정적 프론트엔드 구조를 만들었습니다.',
        beforeRoute: '/wp-content/themes/creative/*.php',
        afterRoute: '/src/main.ts + /src/data/*.ts',
        visual: '/legacy/creative/images/sticksnstones.png',
        bullets: ['Vite build', 'TypeScript data modules', 'source audit notes'],
        code: `/* Before: WordPress theme */
<?php get_header(); ?>
<?php dynamic_sidebar('portfolio'); ?>

// After: source-controlled data and routes
export interface PortfolioItem {
  id: string
  title: LocalizedString
  mission: LocalizedString
}`,
      },
      {
        id: 'routing',
        label: 'Routing',
        title: '심층 연결이 가능한 독립 주소 설계',
        before: '모든 경험이 sticksandstones.kr 하나의 주소 안에 있었습니다. 개별 페이지로 연결하거나 공유할 방법이 없었습니다.',
        after: 'About, Services, Portfolio, Clients, 개별 프로젝트가 각각 실제 URL을 갖도록 바뀌었습니다.',
        beforeRoute: 'sticksandstones.kr',
        afterRoute: 'sticksandstones.kr/en/about',
        visual: '/assets/images/portfolio.gif',
        bullets: ['언어별 /en 라우트', '뒤로가기 가능한 화면 전환', '페이지별 schema.org JSON-LD'],
        code: `router.buildPath('portfolio', 'en', 'lg-2023-new-years-message')
// /en/portfolio/lg-2023-new-years-message`,
      },
      {
        id: 'portfolio-seo',
        label: 'Project SEO',
        title: 'AI가 읽을 수 있는 구조화 데이터와 AEO 대응 전략',
        before: '테마와 DB에 묶인 포트폴리오 항목은 검색 결과나 AI 답변에서 개별 프로젝트 단위로 설명되기 어려웠습니다.',
        after: '각 프로젝트를 구조화 데이터와 슬러그 기반 라우트로 분리해 검색과 AI가 작업 단위로 읽을 수 있게 했습니다.',
        beforeRoute: 'sticksandstones.kr',
        afterRoute: 'sticksandstones.kr/en/portfolio/lg-2023-new-years-message',
        visual: '/assets/portfolio/thumbnails/01_lg-2023-new-years-message.jpg',
        bullets: ['/en/portfolio/lg-2023-new-years-message', 'CreativeWork JSON-LD', '복원된 이미지 슬라이더'],
        code: `"@type": "CreativeWork",
"url": "https://sticksandstones.kr/en/portfolio/lg-2023-new-years-message"`,
      },
      {
        id: 'logo-motion',
        label: 'Motion',
        title: '숨은 로고 이스터에그를 클릭하고 싶게 만든 모션',
        before: '중앙 로고는 클릭 가능한 영상 진입점이었지만, 정적인 상태에서는 사용자가 눌러도 된다는 신호를 알아차리기 어려웠습니다.',
        after: '로고에 리듬감 있는 pulse와 hover affordance를 더해, 숨은 인터랙션을 발견하고 클릭하고 싶게 만드는 장면으로 바꿨습니다.',
        beforeRoute: 'sticksandstones.kr',
        afterRoute: 'sticksandstones.kr/en/our-video',
        visual: '/assets/images/logo.gif',
        bullets: ['click affordance', 'logo easter egg', 'YouTube modal reveal'],
        code: `.center-circle .logo-gif {
  animation: stks-logo-pop-bounce 2.8s infinite;
}`,
      },
      {
        id: 'faq-contact',
        label: 'FAQ Drawer',
        title: '하단 Contact 단일 창에서 FAQ까지 확장',
        before: '기존 Contact 슬라이드 창은 문의 중심의 하단 drawer였습니다.',
        after: '현재 사이트에는 FAQ 버튼을 추가하고, 비교 화면에서는 좌측 Contact drawer와 우측 Contact/FAQ 상태가 같이 움직이도록 제어했습니다.',
        beforeRoute: 'sticksandstones.kr',
        afterRoute: 'sticksandstones.kr/en/contact + sticksandstones.kr/en/faq',
        visual: '/assets/images/clients.gif',
        bullets: ['Contact + FAQ dual tabs', 'drawer state API', 'legacy bridge sync'],
      },
      {
        id: 'services-about',
        label: 'Content',
        title: 'Services와 About의 정보 구조 재편',
        before: 'Services는 이미지/위젯 중심 설명이 흩어져 있었고, About은 레이아웃과 증거 요소가 약했습니다.',
        after: '현재 사이트에 맞는 서비스 분류로 재구성하고, About에는 팀, 공간, 클라이언트 proof를 흐름 안에서 보강했습니다.',
        beforeRoute: 'sticksandstones.kr',
        afterRoute: 'sticksandstones.kr/en/services',
        visual: '/assets/images/services.gif',
        bullets: ['서비스 taxonomy 정리', 'About layout 개선', 'client marquee proof layer'],
      },
    ],
    proof: {
      eyebrow: 'Proof Layer',
      title: '설명으로 끝내지 않고, 전후 상태를 실증적으로 검증합니다.',
      body: '같은 화면 안에서 WordPress 시절과 지금을 나란히 틀어둘 수 있습니다. 라우팅, Drawer, 모션 중 어떤 부분이 바뀌었는지 직접 확인할 수 있습니다.',
      primaryAction: 'Live Compare 직접 보기',
      secondaryAction: 'GitHub 코드 보기',
    },
  },
  en: {
    meta: {
      title: 'STKS Migration Case Study — WordPress to Vite',
      description:
        'A case study on migrating the decade-old Sticks & Stones Seoul WordPress Creative theme to Vite + TypeScript while preserving app-like transitions and designing AEO-ready structured routes.',
    },
    nav: {
      home: 'Project Home',
      compare: 'Live Compare',
    },
    hero: {
      eyebrow: 'Sticks & Stones Seoul · Migration Case Study',
      title: ['The air-conditioned hanok:', 'legacy assets rebuilt', 'for future scalability.'],
      lead: [
        'The objective was to preserve',
        "the brand's visual signature",
        'while removing a decade of technical debt.',
        'I transformed a database-dependent',
        'WordPress theme into a high-performance,',
        'AI-discoverable static application',
        'using Vite and TypeScript.',
      ],
      meta: ['Legacy WordPress recovery', 'Route architecture', 'AEO-ready portfolio data'],
    },
    context: {
      eyebrow: 'Project Context',
      title: ['The point was not', 'to make something new,', 'but to redesign it', 'without losing', 'the existing frame.'],
      body: [
        'I separated the core experience',
        'from a WordPress Creative theme',
        'that had been patched for more than a decade.',
        'Instead of endlessly repairing old plumbing,',
        'I preserved the brand frame',
        'and rebuilt the operating structure.',
      ],
      items: [
        {
          label: 'Problem',
          title: 'Rich content, zero visibility.',
          body: 'Portfolio and service content was scattered across the WordPress theme, widgets, and database. CDs and PMs could not share a single project as a URL, and search or AI systems could not understand each work as a separate entry.',
        },
        {
          label: 'Constraints',
          title: 'Preserving the app-like UX signature.',
          body: 'The four-way entry structure and center logo motion were core parts of the brand experience. The challenge was to preserve them while removing the PHP and database dependency.',
        },
        {
          label: 'Solution',
          title: 'Decoupling data from runtime dependencies.',
          body: 'Content became static data modules, and each scene was redesigned to have a real URL that the browser, search engines, and collaborators can understand.',
        },
        {
          label: 'Outcome',
          title: 'Explainable structure and a verifiable archive.',
          body: 'The current site, WordPress archive, and case study live in one repository, so the next maintainer can trace the source and reason behind each change.',
        },
      ],
    },
    motion: {
      eyebrow: 'Migration Decision Criteria',
      title: 'I first separated what had to stay from what had to be removed.',
      body: 'The criteria were clear: preserve the brand behaviors people already recognized, including the four-way entry, center-logo video, and Contact/FAQ drawers. Remove the parts that made the site fragile: PHP theme dependency, database runtime, and widget-bound content. Then make every meaningful piece of work addressable, so CDs, PMs, search engines, and AI systems can all refer to the same project-level URL and structured data.',
      metaLabel: 'Decision map',
      metaValue: 'preserve / remove / make addressable',
    },
    routeCallout: {
      label: 'AEO-ready Route',
      code: 'sticksandstones.kr/en/portfolio/lg-2023-new-years-message',
      body: 'Each project now has its own URL and structured data, so search engines, AI answers, and shared links from CDs and PMs all point to the same work-level entry.',
    },
    stats: [
      { value: 'AEO Ready', label: 'AI/search optimization with JSON-LD' },
      { value: '0 DB runtime', label: 'No runtime database dependency after deploy' },
      { value: 'Source Controlled', label: 'Code-based data that will not disappear' },
    ],
    featureList: {
      eyebrow: 'Implementation Proof',
      title: 'Each change is organized as a solved problem, not just a feature.',
    },
    features: [
      {
        id: 'stack',
        label: 'Stack',
        title: 'Decoupling from a legacy monolith to source-controlled architecture',
        before: 'A decade-old Creative theme had accumulated PHP, CSS, and JavaScript patches, making it difficult to trace where screens and data came from.',
        after: 'Content data became TypeScript modules, and the site became a static frontend that can be built and deployed through Vite.',
        beforeRoute: '/wp-content/themes/creative/*.php',
        afterRoute: '/src/main.ts + /src/data/*.ts',
        visual: '/legacy/creative/images/sticksnstones.png',
        bullets: ['Vite build', 'TypeScript data modules', 'source audit notes'],
        code: `/* Before: WordPress theme */
<?php get_header(); ?>
<?php dynamic_sidebar('portfolio'); ?>

// After: source-controlled data and routes
export interface PortfolioItem {
  id: string
  title: LocalizedString
  mission: LocalizedString
}`,
      },
      {
        id: 'routing',
        label: 'Routing',
        title: 'Architecting for deep-linkable and discoverable navigation',
        before: 'The whole experience lived inside one sticksandstones.kr address. There was no reliable way to link to or share individual pages.',
        after: 'About, Services, Portfolio, Clients, and individual projects now each have real URLs.',
        beforeRoute: 'sticksandstones.kr',
        afterRoute: 'sticksandstones.kr/en/about',
        visual: '/assets/images/portfolio.gif',
        bullets: ['Language-aware /en routes', 'Back-button-friendly transitions', 'Page-level schema.org JSON-LD'],
        code: `router.buildPath('portfolio', 'en', 'lg-2023-new-years-message')
// /en/portfolio/lg-2023-new-years-message`,
      },
      {
        id: 'portfolio-seo',
        label: 'Project SEO',
        title: 'AI-native indexing and structured data strategy',
        before: 'Portfolio items tied to the theme and database were hard to describe as individual works in search results or AI answers.',
        after: 'Each project is separated into structured data and slug-based routes, so search and AI systems can read the work at project level.',
        beforeRoute: 'sticksandstones.kr',
        afterRoute: 'sticksandstones.kr/en/portfolio/lg-2023-new-years-message',
        visual: '/assets/portfolio/thumbnails/01_lg-2023-new-years-message.jpg',
        bullets: ['/en/portfolio/lg-2023-new-years-message', 'CreativeWork JSON-LD', 'Restored image slider'],
        code: `"@type": "CreativeWork",
"url": "https://sticksandstones.kr/en/portfolio/lg-2023-new-years-message"`,
      },
      {
        id: 'logo-motion',
        label: 'Motion',
        title: 'Make the hidden logo easter egg feel clickable',
        before: 'The center logo was a hidden video entry point, but in a static state users had little reason to know it could be clicked.',
        after: 'A rhythmic pulse and hover affordance make the hidden interaction easier to notice and more tempting to click.',
        beforeRoute: 'sticksandstones.kr',
        afterRoute: 'sticksandstones.kr/en/our-video',
        visual: '/assets/images/logo.gif',
        bullets: ['click affordance', 'logo easter egg', 'YouTube modal reveal'],
        code: `.center-circle .logo-gif {
  animation: stks-logo-pop-bounce 2.8s infinite;
}`,
      },
      {
        id: 'faq-contact',
        label: 'FAQ Drawer',
        title: 'Extend the bottom Contact drawer into FAQ access',
        before: 'The legacy Contact slide panel was focused on inquiries only.',
        after: 'The current site adds an FAQ button, and the comparison view can synchronize the legacy drawer with the current Contact/FAQ state.',
        beforeRoute: 'sticksandstones.kr',
        afterRoute: 'sticksandstones.kr/en/contact + sticksandstones.kr/en/faq',
        visual: '/assets/images/clients.gif',
        bullets: ['Contact + FAQ dual tabs', 'drawer state API', 'legacy bridge sync'],
      },
      {
        id: 'services-about',
        label: 'Content',
        title: 'Restructure Services and About information architecture',
        before: 'Services content was scattered across images and widgets, while About lacked a stronger proof layer.',
        after: 'Services were reorganized for the current site, and About was reinforced with team, space, and client proof inside the flow.',
        beforeRoute: 'sticksandstones.kr',
        afterRoute: 'sticksandstones.kr/en/services',
        visual: '/assets/images/services.gif',
        bullets: ['Service taxonomy cleanup', 'About layout improvement', 'Client proof layer'],
      },
    ],
    proof: {
      eyebrow: 'Proof Layer',
      title: 'The case does not end with explanation. It is validated side by side.',
      body: 'The WordPress version and the current rebuild can be opened in the same view, so routing, drawers, and motion changes are directly comparable.',
      primaryAction: 'Open Live Compare',
      secondaryAction: 'View GitHub code',
    },
  },
}

const app = document.querySelector<HTMLDivElement>('#app')
const h = React.createElement

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

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value))
}

function MigrationComposition({ features }: { features: Feature[] }) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const index = Math.min(Math.floor(frame / segmentFrames), features.length - 1)
  const localFrame = frame - index * segmentFrames
  const feature = features[index]
  const entry = spring({
    fps,
    frame: localFrame,
    config: {
      damping: 18,
      stiffness: 110,
      mass: 0.8,
    },
  })
  const holdOpacity = interpolate(localFrame, [0, 12, 76, segmentFrames - 1], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
  const wipe = interpolate(localFrame, [12, 42], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
  const routeProgress = interpolate(localFrame, [22, 56], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
  const pulse = 1 + Math.sin(frame / 7) * 0.025
  const showCenterVisual = feature.id === 'logo-motion'
  const panelWidth = showCenterVisual ? 450 : 540
  const bgShift = interpolate(index, [0, features.length - 1], [0, 42])

  return h(
    AbsoluteFill,
    {
      style: {
        background: '#f7f4ee',
        color: '#171717',
        fontFamily: 'Poppins, Pretendard, system-ui, -apple-system, sans-serif',
        overflow: 'hidden',
      },
    },
    h('div', {
      style: {
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(${126 + bgShift}deg, #ffffff 0 46%, #17344c 46% 100%)`,
      },
    }),
    h('div', {
      style: {
        position: 'absolute',
        inset: '54px',
        border: '2px solid rgba(23, 23, 23, 0.12)',
        zIndex: 1,
      },
    }),
    h(
      'div',
      {
        'data-remotion-role': 'chapter-header',
        style: {
          position: 'absolute',
          top: 40,
          left: 54,
          right: 54,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 900,
          opacity: holdOpacity,
          zIndex: 4,
        },
      },
      h('span', { style: { color: '#a51f24', fontSize: 28, textTransform: 'uppercase' } }, feature.label),
      h(
        'span',
        {
          style: {
            padding: '8px 12px',
            background: 'rgba(23, 52, 76, 0.9)',
            color: '#fff',
            fontSize: 22,
          },
        },
        `0${index + 1} / 06`,
      ),
    ),
    h(
      'div',
      {
        'data-remotion-role': 'before-panel',
        style: {
          position: 'absolute',
          top: 116,
          left: 70,
          width: panelWidth,
          padding: '24px 26px',
          background: 'rgba(255, 255, 255, 0.94)',
          border: '2px solid rgba(23, 23, 23, 0.12)',
          boxShadow: '0 22px 44px rgba(0, 0, 0, 0.08)',
          opacity: holdOpacity,
          transform: `translateY(${(1 - entry) * 26}px)`,
          zIndex: 3,
        },
      },
      h(
        'div',
        {
          style: {
            display: 'inline-flex',
            padding: '9px 13px',
            marginBottom: 18,
            background: '#a51f24',
            color: '#fff',
            fontSize: 18,
            fontWeight: 900,
            textTransform: 'uppercase',
          },
        },
        'Before',
      ),
      h('p', { style: { margin: 0, fontSize: 29, lineHeight: 1.25, fontWeight: 800 } }, feature.before),
    ),
    h(
      'div',
      {
        'data-remotion-role': 'after-panel',
        style: {
          position: 'absolute',
          top: 116,
          right: 70,
          width: panelWidth,
          padding: '24px 26px',
          background: 'rgba(23, 52, 76, 0.92)',
          border: '2px solid rgba(255, 255, 255, 0.16)',
          boxShadow: '0 22px 44px rgba(0, 0, 0, 0.2)',
          opacity: holdOpacity,
          transform: `translateY(${(1 - entry) * 26}px)`,
          zIndex: 3,
        },
      },
      h(
        'div',
        {
          style: {
            display: 'inline-flex',
            padding: '9px 13px',
            marginBottom: 18,
            background: '#c9e1ef',
            color: '#17344c',
            fontSize: 18,
            fontWeight: 900,
            textTransform: 'uppercase',
          },
        },
        'After',
      ),
      h(
        'p',
        {
          style: {
            margin: 0,
            color: '#fff',
            fontSize: 29,
            lineHeight: 1.25,
            fontWeight: 800,
            textShadow: '0 2px 18px rgba(0, 0, 0, 0.32)',
          },
        },
        feature.after,
      ),
    ),
    h('div', {
      style: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: `${46 + wipe * 54}%`,
        background: 'rgba(201, 225, 239, 0.18)',
        mixBlendMode: 'multiply',
        opacity: 0.46,
        zIndex: 1,
      },
    }),
    h(
      'div',
      {
        'data-remotion-role': 'route-row',
        style: {
          position: 'absolute',
          left: 70,
          right: 70,
          bottom: 88,
          display: 'grid',
          gridTemplateColumns: '1fr 72px 1fr',
          gap: 18,
          alignItems: 'center',
          opacity: holdOpacity,
          zIndex: 4,
        },
      },
      h(
        'div',
        {
          style: {
            padding: '18px 20px',
            background: '#fff',
            border: '2px solid rgba(23, 23, 23, 0.1)',
            fontSize: 24,
            fontWeight: 800,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          },
        },
        feature.beforeRoute,
      ),
      h(
        'div',
        {
          style: {
            height: 72,
            display: 'grid',
            placeItems: 'center',
            background: '#a51f24',
            color: '#fff',
            fontSize: 32,
            fontWeight: 900,
            transform: `scale(${0.82 + clamp01(routeProgress) * 0.18})`,
          },
        },
        '→',
      ),
      h(
        'div',
        {
          style: {
            padding: '18px 20px',
            background: '#fff',
            border: '2px solid rgba(23, 23, 23, 0.1)',
            color: '#17344c',
            fontSize: 24,
            fontWeight: 900,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          },
        },
        feature.afterRoute,
      ),
    ),
    showCenterVisual
      ? h(
          'div',
          {
            'data-remotion-role': 'center-visual',
            style: {
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: 178,
              height: 178,
              display: 'grid',
              placeItems: 'center',
              borderRadius: '50%',
              background: 'transparent',
              border: 0,
              opacity: holdOpacity,
              transform: `translate(-50%, -50%) scale(${pulse})`,
              zIndex: 2,
            },
          },
          h(Img, {
            src: feature.visual,
            style: {
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 16px 24px rgba(0, 0, 0, 0.2))',
            },
          }),
        )
      : null,
    h(
      'div',
      {
        style: {
          position: 'absolute',
          left: 70,
          right: 70,
          bottom: 28,
          height: 10,
          background: 'rgba(23, 23, 23, 0.14)',
          zIndex: 5,
        },
      },
      h('div', {
        style: {
          height: '100%',
          width: `${((frame + 1) / (features.length * segmentFrames)) * 100}%`,
          background: '#a51f24',
        },
      }),
    ),
  )
}

function AutoPlayingMigrationPlayer({ features }: { features: Feature[] }) {
  const playerRef = React.useRef<PlayerRef>(null)

  React.useEffect(() => {
    const player = playerRef.current
    if (!player) return

    const playFromCurrentFrame = () => {
      try {
        player.mute()
        if (player.getCurrentFrame() >= features.length * segmentFrames - 1) {
          player.seekTo(0)
        }
        player.play()
      } catch {
        // Browser autoplay can be conservative; the Player still exposes manual controls.
      }
    }

    const timer = window.setTimeout(playFromCurrentFrame, 80)
    const handleVisibility = () => {
      if (!document.hidden) playFromCurrentFrame()
    }

    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [features])

  return h(Player, {
    ref: playerRef,
    component: MigrationComposition,
    inputProps: { features },
    durationInFrames: features.length * segmentFrames,
    compositionWidth: 1280,
    compositionHeight: 720,
    fps: 30,
    controls: true,
    loop: true,
    autoPlay: true,
    initiallyMuted: true,
    initialVolume: 0,
    clickToPlay: false,
    initiallyShowControls: false,
    acknowledgeRemotionLicense: true,
    style: {
      width: '100%',
      aspectRatio: '16 / 9',
      backgroundColor: '#f7f4ee',
    },
  })
}

function renderFeature(feature: Feature, index: number) {
  return `
    <article class="feature-panel" id="${feature.id}" data-feature-panel="${index}" ${revealAttr(index % 2 ? 'fade-left' : 'fade-right', Math.min(index * 45, 180))}>
      <div class="feature-copy">
        <span>${feature.label}</span>
        <h3>${feature.title}</h3>
        <div class="before-after-copy">
          <p><strong>Before</strong>${feature.before}</p>
          <p><strong>After</strong>${feature.after}</p>
        </div>
      </div>
      <div class="feature-visual">
        ${renderFeatureVisual(feature)}
        <ul>
          ${feature.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
        </ul>
      </div>
      ${
        feature.code
          ? `
            <pre class="code-snippet"><code>${escapeHtml(feature.code)}</code></pre>
          `
          : ''
      }
    </article>
  `
}

function renderFeatureVisual(feature: Feature) {
  switch (feature.id) {
    case 'stack':
      return `
        <div class="feature-diagram diagram-stack" aria-label="PHP theme to TypeScript source structure">
          <div class="diagram-column diagram-before">
            <span>Theme runtime</span>
            <strong>PHP + Widgets + DB</strong>
            <code>header.php</code>
            <code>dynamic_sidebar()</code>
            <code>portfolio post type</code>
          </div>
          <div class="diagram-bridge">→</div>
          <div class="diagram-column diagram-after">
            <span>Source controlled</span>
            <strong>Vite + TypeScript</strong>
            <code>src/data/*.ts</code>
            <code>router.buildPath()</code>
            <code>static build</code>
          </div>
        </div>
      `
    case 'routing':
      return `
        <div class="feature-diagram diagram-routes" aria-label="Route architecture map">
          <div class="route-node route-node-old">sticksandstones.kr</div>
          <div class="route-split">splits into</div>
          <div class="route-grid">
            <code>/en/about</code>
            <code>/en/services</code>
            <code>/en/portfolio</code>
            <code>/en/portfolio/:id</code>
          </div>
        </div>
      `
    case 'portfolio-seo':
      return `
        <div class="feature-diagram diagram-search" aria-label="Search result and structured data preview">
          <div class="search-card">
            <span>Search result entry</span>
            <strong>LG 2023 New Year's Message</strong>
            <p>sticksandstones.kr/en/portfolio/lg-2023-new-years-message</p>
          </div>
          <div class="schema-card">
            <code>"@type": "CreativeWork"</code>
            <code>"url": "/en/portfolio/:id"</code>
            <code>"image": "thumbnail.jpg"</code>
          </div>
        </div>
      `
    case 'logo-motion':
      return `
        <div class="feature-diagram diagram-motion" aria-label="Clickable logo motion affordance">
          <div class="motion-orbit">
            <span class="motion-ring motion-ring-one"></span>
            <span class="motion-ring motion-ring-two"></span>
            <img src="/assets/images/logo.gif" alt="" />
          </div>
          <div class="motion-prompt">
            <span>hidden video entry</span>
            <strong>Click the logo</strong>
          </div>
        </div>
      `
    case 'faq-contact':
      return `
        <div class="feature-diagram diagram-drawer" aria-label="Contact and FAQ drawer states">
          <div class="drawer-frame">
            <div class="drawer-screen">current site</div>
            <div class="drawer-tabs">
              <span>Contact</span>
              <span>FAQ</span>
            </div>
          </div>
          <div class="drawer-sync">legacy drawer ↔ current drawer</div>
        </div>
      `
    case 'services-about':
      return `
        <div class="feature-diagram diagram-content" aria-label="Content architecture map">
          <div class="content-track">
            <span>Services taxonomy</span>
            <strong>Naming · Brand Story · Global Copy</strong>
          </div>
          <div class="content-track">
            <span>About proof layer</span>
            <strong>Team · Space · Clients</strong>
          </div>
          <div class="content-track content-track-accent">
            <span>Reusable data</span>
            <strong>TypeScript modules</strong>
          </div>
        </div>
      `
    default:
      return `<div class="feature-diagram"><strong>${feature.title}</strong></div>`
  }
}

function renderContextItem(item: ContextItem, index: number) {
  return `
    <article ${revealAttr('fade-up', index * 80)}>
      <span>${item.label}</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `
}

function render() {
  if (!app) return

  const language = getPortfolioLanguage()
  const t = caseCopy[language]

  document.documentElement.lang = language
  setPageMeta({
    title: t.meta.title,
    description: t.meta.description,
    path: '/case-study',
  })
  document.body.className = 'case-study-body'
  app.className = 'case-study-shell'
  app.innerHTML = `
    <header class="case-hero">
      <div class="case-hero-art" aria-hidden="true">
        <img class="case-hero-logo" src="/assets/images/logo.gif" alt="">
        <img class="case-hero-character case-hero-character-about" src="/assets/images/about.gif" alt="">
        <img class="case-hero-character case-hero-character-services" src="/assets/images/services.gif" alt="">
        <img class="case-hero-character case-hero-character-portfolio" src="/assets/images/portfolio.gif" alt="">
        <img class="case-hero-character case-hero-character-clients" src="/assets/images/clients.gif" alt="">
      </div>
      <nav class="case-nav" aria-label="Case study navigation" ${revealAttr('fade-down')}>
        <a class="case-nav-link case-nav-link-left" href="/">
          <span aria-hidden="true">←</span>
          <span>${t.nav.home}</span>
        </a>
        <a class="case-nav-link case-nav-link-right" href="/live-compare">
          <span>${t.nav.compare}</span>
          <span aria-hidden="true">→</span>
        </a>
      </nav>
      <div class="hero-copy">
        <p class="eyebrow" ${revealAttr('fade-up', 90)}>${t.hero.eyebrow}</p>
        <h1 class="phrase-copy" ${revealAttr('fade-up', 170)}>${phraseLine(t.hero.title)}</h1>
        <p class="phrase-copy" ${revealAttr('fade-up', 270)}>
          ${phraseLine(t.hero.lead)}
        </p>
        <ul class="case-hero-meta" aria-label="Case study scope">
          ${t.hero.meta.map((item, index) => `<li ${revealAttr('fade-up', 380 + index * 65)}>${item}</li>`).join('')}
        </ul>
      </div>
    </header>

    <main>
      <section class="case-context" aria-labelledby="case-context-title">
        <div class="case-context-copy" ${revealAttr('fade-up')}>
          <p class="eyebrow">${t.context.eyebrow}</p>
          <h2 id="case-context-title" class="phrase-copy">${phraseLine(t.context.title)}</h2>
          <p class="phrase-copy">
            ${phraseLine(t.context.body)}
          </p>
        </div>
        <div class="context-grid">
          ${t.context.items.map(renderContextItem).join('')}
        </div>
      </section>

      <section class="motion-section" aria-label="Dynamic migration comparison">
        <div class="motion-copy" ${revealAttr('fade-right')}>
          <p class="eyebrow">${t.motion.eyebrow}</p>
          <h2>${t.motion.title}</h2>
          <p>
            ${t.motion.body}
          </p>
        </div>
        <div class="motion-stage" aria-label="Remotion player" ${revealAttr('fade-left', 120)}>
          <div id="remotion-player-root"></div>
          <div class="remotion-meta">
            <span>${t.motion.metaLabel}</span>
            <strong>${t.motion.metaValue}</strong>
          </div>
        </div>
      </section>

      <section class="route-callout" aria-label="Routing improvement" ${revealAttr('fade-up')}>
        <div class="route-callout-copy">
          <span>${t.routeCallout.label}</span>
          <code>${t.routeCallout.code}</code>
          <p>${t.routeCallout.body}</p>
        </div>
        <dl class="outcome-stats" aria-label="Migration outcomes">
          ${t.stats
            .map(
              (stat) => `
                <div>
                  <dt>${stat.value}</dt>
                  <dd>${stat.label}</dd>
                </div>
              `,
            )
            .join('')}
        </dl>
      </section>

      <section class="feature-list" aria-labelledby="feature-list-title">
        <div class="feature-list-header" ${revealAttr('fade-up')}>
          <p class="eyebrow">${t.featureList.eyebrow}</p>
          <h2 id="feature-list-title">${t.featureList.title}</h2>
        </div>
        ${t.features.map(renderFeature).join('')}
      </section>

      <section class="proof-section" aria-label="Proof and next steps" ${revealAttr('fade-up')}>
        <div>
          <p class="eyebrow">${t.proof.eyebrow}</p>
          <h2>${t.proof.title}</h2>
          <p>
            ${t.proof.body}
          </p>
        </div>
        <div class="proof-actions">
          <a class="proof-primary" href="/live-compare">${t.proof.primaryAction}</a>
          <a href="https://github.com/oosuhada/sticksandstones" target="_blank" rel="noreferrer">${t.proof.secondaryAction}</a>
        </div>
      </section>
    </main>
    ${renderLanguageToggle(language)}
  `

  bindLanguageToggle(language, render)
  initScrollReveal()
  mountRemotionPlayer(t.features)
}

function mountRemotionPlayer(features: Feature[]) {
  const mount = document.querySelector<HTMLDivElement>('#remotion-player-root')
  if (!mount) return

  createRoot(mount).render(
    h(AutoPlayingMigrationPlayer, { features }),
  )
}

render()
