import type { LocalizedString } from '../types'

export const contactContent = {
  heading: { ko: '연락처', en: 'Contact' } satisfies LocalizedString,
  phone: { label: { ko: '전화:', en: 'Phone:' } satisfies LocalizedString, number: '02-793-7857' },
  email: { label: { ko: '이메일:', en: 'Email:' } satisfies LocalizedString, address: 'talk@stks.kr' },
  office: {
    label: { ko: '사무실:', en: 'Office:' } satisfies LocalizedString,
    address: {
      ko: '서울 용산구<br>녹사평대로26길 42<br>스틱스앤스톤스 빌딩',
      en: '42, Noksapyeong-daero 26-gil, <br>Yongsan-gu, Seoul, <br>Republic of Korea',
    } satisfies LocalizedString,
    addressPlain: {
      ko: '서울 용산구 녹사평대로26길 42 스틱스앤스톤스 빌딩',
      en: '42, Noksapyeong-daero 26-gil, Yongsan-gu, Seoul, Republic of Korea',
    } satisfies LocalizedString,
  },
  tagline: {
    ko: 'Words that stick, stories that sell. <br> 글로벌 브랜딩과 마케팅에 특화된 영어 전문 카피라이팅 회사, 스틱스앤스톤스 서울.',
    en: 'Words that stick, stories that sell. <br> A specialized English copywriting and storytelling agency for global branding and marketing, Sticks & Stones Seoul.',
  } satisfies LocalizedString,
  companyInfo: {
    ko: '(주)스틱스앤스톤스 119-88-00409<br>대표자: Richard King Kim',
    en: 'Sticks and Stones 119-88-00409<br>CEO: Richard King Kim',
  } satisfies LocalizedString,
  map: { query: '서울특별시+용산구+녹사평대로26길+42' },
}

export const bottomTabContent = {
  tabs: {
    faq: { ko: 'FAQ', en: 'FAQ' } satisfies LocalizedString,
    contact: { ko: 'Contact', en: 'Contact' } satisfies LocalizedString,
  },
  tooltips: {
    copied: { ko: '복사 완료!', en: 'Copied!' } satisfies LocalizedString,
    copyEmail: { ko: '이메일 복사', en: 'Copy email' } satisfies LocalizedString,
    copyAddress: { ko: '주소 복사', en: 'Copy address' } satisfies LocalizedString,
  },
}

