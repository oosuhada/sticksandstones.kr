import type { LocalizedString } from '../types'

export const sectionTaglines: Record<'about' | 'services' | 'portfolio' | 'clients', Record<'ko' | 'en', string[]>> = {
  about: {
    ko: ['문화적 맥락까지 전달하는', '브랜드 커뮤니케이터', 'Sticks & Stones'],
    en: ['Copywriters', 'shaping culture', 'into brand language.', 'Sticks and Stones'],
  },
  services: {
    ko: ['강한 울림을 주고', '공감 받는 글로벌 메시지'],
    en: ['Globally resonant stories', 'people connect with'],
  },
  portfolio: {
    ko: ['당신이 누구인지는 당신의 작품에서 드러난다', '- 토마스 에디슨', '', 'What you are will show in what you do.', '- Thomas Edison'],
    en: ['What you are will show in what you do.', '', '- Thomas Edison'],
  },
  clients: {
    ko: ['기억 속에', '오래 간직하게 될 문장', 'Words and stories that stick'],
    en: ['Stories that stick'],
  },
}

export const aboutContent = {
  title: { ko: 'Sticks & Stones', en: 'Sticks & Stones' } satisfies LocalizedString,
  subtitle: {
    ko: '인상적인 메시지를 쓰는 건 어렵습니다.<br>영어로는 더더욱',
    en: 'Your brand story works in Korea.<br>We help it work for the world.',
  } satisfies LocalizedString,
  video: {
    url: 'https://www.youtube.com/embed/OCWZ5-vivHk?modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&controls=0&playsinline=1',
    title: { ko: '스틱스앤스톤스 소개', en: 'Sticks & Stones Introduction' } satisfies LocalizedString,
  },
  downloadButton: { ko: '회사소개서 Download', en: 'Download Company Profile' } satisfies LocalizedString,
  sectionHeadings: {
    team: { ko: 'Meet our team', en: 'Meet our team' } satisfies LocalizedString,
    clientsSay: { ko: 'Clients say', en: 'Clients say' } satisfies LocalizedString,
    ourClients: { ko: 'Our clients', en: 'Our clients' } satisfies LocalizedString,
    ourSpace: { ko: 'Our space', en: 'Our space' } satisfies LocalizedString,
  },
  cta: {
    heading: { ko: 'Have a project?', en: 'Have a project?' } satisfies LocalizedString,
    button: { ko: "Let's talk", en: "Let's talk" } satisfies LocalizedString,
  },
}

