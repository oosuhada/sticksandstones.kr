// @ts-nocheck
// Restored from the deployed STKS bundle: index-BBm3pHfk.js.
// The readable data modules and facade exports around this file are generated for maintenance,
// while this runtime preserves the original production behavior and CSS contract.

(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = t(i);
    fetch(i.href, o);
  }
})();
class U {
  constructor() {
    ((this.state = {
      currentSection: null,
      selectedSection: null,
      language: "ko",
      appState: "idle",
      portfolioSlug: void 0,
    }),
      (this.listeners = new Set()));
  }
  getState() {
    return { ...this.state };
  }
  setState(e) {
    ((this.state = { ...this.state, ...e }), this.notify());
  }
  subscribe(e) {
    return (this.listeners.add(e), () => this.listeners.delete(e));
  }
  notify() {
    this.listeners.forEach((e) => e(this.getState()));
  }
}
const f = new U(),
  k = [
    {
      id: "lg-2023-new-years-message",
      title: {
        ko: "LG 2023 New Years Message",
        en: "LG 2023 New Years Message",
      },
      client: "HsAd",
      mediaType: "video, script",
      mission: {
        ko: "모든 사원들에게 감사의 표현을 전하고, 다음 해를 맞이하여 동기부여의 메세지를 담은 LG CEO의 메세지 제작.",
        en: "Write a message from the CEO of LG, showing gratitude to all company employees and setting the tone for the next year of work.",
      },
      solution: {
        ko: "메시지를 따뜻한 톤으로 유지하고 이해하기 쉽도록 단어 선택에 세심한 주의를 기울여 경영진의 목소리를 구현.",
        en: "We emulated the voice of an executive, and paid close attention to word choices to make sure the message remained warm-toned and easy to relate to.",
      },
    },
    {
      id: "ces-2022-hyundai-keynote",
      title: {
        ko: "CES 2022 Hyundai Keynote Speech",
        en: "CES 2022 Hyundai Keynote Speech",
      },
      client: "Innocean",
      mediaType: "script",
      mission: {
        ko: "현대 CEO 정의선이 CES 2022에서 관중에게 발표할 연설문 제작. 매력적이고 이해하기 쉬운 방식으로 현대의 첨단 로봇 기술을 소개하는 스크립트 작업.",
        en: "Write a speech to be delivered by Hyundai CEO Chung Eui-sun, and speakers from Hyundai, to a live audience at CES 2022. The speech had to introduce Hyundai's advanced robotics technology for mobility in a way that was captivating and easy to understand.",
      },
      solution: {
        ko: "기술을 쉽게 이해할 수 있도록 적절한 속도로 소화하기 쉬운 용어들을 활용하고, 발표의 전 과정이 매력적일 수 있도록 대화의 형식으로 스크립트 제작.",
        en: "We made sure to explain the technology in easily digestible terms at an appropriate pace, and gave the speakers lots of chances to interact with each other, to make sure the speech was captivating from start to finish.",
      },
      videoUrl: "https://www.youtube.com/watch?v=y9tnJ1CIvT8&t=613s",
    },
    {
      id: "990-pro-online-features",
      title: {
        ko: "990 PRO & 990 PRO with Heatsink Online Features",
        en: "990 PRO & 990 PRO with Heatsink Online Features",
      },
      client: "Design Fever",
      mediaType: "online",
      mission: {
        ko: "990 PRO 라인업의 온라인 피쳐 페이지에 들어갈 PC 및 콘솔 게이머들에게 강력히 어필하는 카피 제작.",
        en: "Create copy for the 990 PRO lineup's online feature pages, that would appeal powerfully to PC and console gamers.",
      },
      solution: {
        ko: "게이밍 언어를 카피에 통합하여 각 피쳐의 게이밍 베네핏을 강조하여 카피 개발.",
        en: "We integrated gaming language into our copy and emphasized the gaming benefit of each feature.",
      },
    },
    {
      id: "team-naver-dan-23",
      title: {
        ko: "TEAM NAVER Conference DAN 23",
        en: "TEAM NAVER Conference DAN 23",
      },
      client: "Naver Corp.",
      mediaType: "script",
      mission: {
        ko: "TEAM NAVER의 AI 발전을 소개하고 미래의 노력에 대한 흥미를 일으키는 DAN23 컨퍼런스 영상 및 웹사이트를 영문화.",
        en: "Transcreate a promotional video that showcases NAVER's AI advancements and creates excitement for future endeavors.",
      },
      solution: {
        ko: "TEAM NAVER의 AI 및 기술 분야에서의 노력을 강조하는 단어를 신중하게 선택. 특히 회사의 최신 주력 제품인 HyperCLOVA X에 중점을 두고 사실적인 정보를 대표하는 단어와 더불어 미래에 대한 흥미를 높이기 위한 조합 구성.",
        en: "We carefully selected words that would promote NAVER's efforts in the AI and technology space, focusing on HyperCLOVA X, the company's newest flagship product. We created a blend of words that represented factual information while building up excitement for the future.",
      },
    },
    {
      id: "lg-antimicrobial-glass",
      title: {
        ko: "LG Antimicrobial Glass Powder Naming",
        en: "LG Antimicrobial Glass Powder Naming",
      },
      client: "LG Electronics",
      mediaType: "branding",
      mission: {
        ko: "항균 기능성 첨가제의 위생, 보호라는 제품 속성을 직접적으로 전달하면서, 쉽고 직관적인 3음절 이내의 이름을 제작하라. 상표등록을 위해 새로운 단어를 만들어라.",
        en: "Create a new, trademarkable name under three syllables that clearly conveys the antimicrobial additive's hygiene and protection attributes.",
      },
      solution: {
        ko: "항균 기능성 첨가제의 베네핏을 활용하여 단어를 조합하고, 첨가제가 사용된 모든 제품의 마케팅에도 사용될 수 있도록 포괄적인 이름을 제작. 기술의 느낌을 전달하면서도 소비자에게 친근하게 다가갈 수 있도록 제작함",
        en: "Combine words reflecting the additive's benefits to create a versatile name usable across products. The name balances a sense of technology with consumer friendliness.",
      },
    },
    {
      id: "lifes-good-award-2023",
      title: {
        ko: "2023 Life's Good Award Speech",
        en: "2023 Life's Good Award Speech",
      },
      client: "LG Electronics",
      mediaType: "script",
      mission: {
        ko: "서울에서 개최한 2023년 Life's Good Award 시상식에서 글로벌한 관중 앞에서 LG전자 CEO가 발표할 연설문을 작성.",
        en: "Write a speech for LG Electronics' CEO to deliver in front of a live international audience at the 2023 Life's Good Award ceremony in Seoul.",
      },
      solution: {
        ko: "전문적인 언어와 영어 구어체의 섬세한 밸런스로 연설을 구성하여 연설이 최대한 자연스럽고 부드럽게 들리도록 제작.",
        en: "We crafted the speech with a delicate balance of professional language and English colloquialisms, to ensure the speech sounded as natural and fluid as possible.",
      },
    },
    {
      id: "samsung-sdc-ces-2025",
      title: { ko: "SDC CES 2025 Zone Title", en: "SDC CES 2025 Zone Title" },
      client: "Samsung Display",
      mediaType: "ooh",
      mission: {
        ko: "CES 2025에서 공개된 삼성디스플레이의 첨단 기술을 관람객의 이목을 끌 수 있는 언어로 구현하고자, 각 존의 주제에 맞는 후킹 있는 영어 타이틀 개발 과제가 주어짐. 더불어 전시 전반에 활용되는 다양한 영어 카피에 대한 자연스러운 톤앤매너 정비 및 고도화 필요.",
        en: "Development of compelling, native-sounding English zone titles that capture the essence of Samsung Display's latest innovations for CES 2025. Additional task: elevate the overall quality of supporting English copy to ensure tonal consistency and global clarity across the exhibition.",
      },
      solution: {
        ko: "각 존의 기술적 콘셉트를 짧고 명료하면서도 브랜드 메시지와 어울리는 언어로 풀어낸 타이틀 기획. 직관성과 감각적 표현을 결합해 관람객의 관심을 끌 수 있는 후킹 구조 제안. 전시 전반의 영문 카피에 대해서는 원어민 시각을 반영한 자연스러운 언어 워시 및 스타일 고도화 진행.",
        en: "Created concise, high-impact titles that reflect each zone's tech concept while aligning with Samsung Display's brand message. Proposed hooks that blend clarity with expressive language to draw visitor attention. Applied a native-language wash to the full exhibition copy, elevating tone, flow, and stylistic precision throughout.",
      },
    },
    {
      id: "lg-ces-2025",
      title: {
        ko: "LG CES 2025 Convention Copy",
        en: "LG CES 2025 Convention Copy",
      },
      client: "LG GMG",
      mediaType: "ooh",
      mission: {
        ko: "CES 2025에서 공개된 LG의 미래 비전을 전 세계 고객이 쉽게 이해하고 감정적으로 공감할 수 있도록, '공감지능(Affectionate Intelligence)'이라는 복합 개념을 따뜻하고 명료한 언어로 풀어내는 글로벌 카피 개발 과제. 브랜드의 기술 혁신성과 인간 중심 메시지를 동시에 전달할 수 있는 카피 구조화 필요.",
        en: "Development of globally resonant copy to communicate LG's CES 2025 vision—anchored in the concept of Affectionate Intelligence—in language that is both emotionally engaging and easy to understand. Required a tonal balance of technological innovation and human warmth, with clear narrative structuring.",
      },
      solution: {
        ko: "공식 서문의 의미 중심 재창작, 인터랙티브 디스플레이 스크립트의 리얼리티 중심 톤앤매너 워시, 각 존 타이틀의 구조 재정비 및 언어 정제. 전시 전반에 걸친 카피 워크를 통해 고객 여정에 따라 정보 전달과 감정 몰입을 모두 고려한 브랜드 메시지 완성.",
        en: "Recreation of the official preface with narrative clarity, tone and manner wash of the interactive display script to reflect everyday realism, and structural refinement of zone titles. A holistic language overhaul across the exhibition ensured an experience that combined clear guidance with emotional immersion.",
      },
      videoUrl: "https://youtu.be/a5zI_Neviys",
    },
    {
      id: "amorepacific-80th-anniversary",
      title: {
        ko: "Amorepacific 80th Anniversary Brand Film",
        en: "Amorepacific 80th Anniversary Brand Film",
      },
      client: "AMOREPACIFIC",
      mediaType: "video, branding",
      mission: {
        ko: "아모레퍼시픽의 80년 헤리티지를 기반으로, 브랜드의 비전과 정체성을 함께 전달할 수 있는 내러티브 카피 개발. 좌우 분할 구조의 필름 구성을 감안해, 과거와 미래의 메시지가 하나의 흐름으로 읽힐 수 있도록 언어적 연결성과 리듬을 갖춘 문장 설계 필요.",
        en: "Craft an English narrative that bridges Amorepacific's heritage and future vision for its 80th anniversary film. The film's split-screen format required a writing structure that could move fluidly between past and future, while expressing confidence, artistry, and forward-thinking ambition.",
      },
      solution: {
        ko: "'New Beauty로 영감을 전해온 여정'이라는 브랜드 메시지를 현대적이고 예술적인 어조로 재해석. 시대마다 달라진 아름다움의 언어를 통일된 어휘 구조로 풀어내고, 헤리티지와 비전을 자연스럽게 호환시킬 수 있도록 문장 흐름과 어조를 정교하게 조율.",
        en: `Reframed the core message of "inspiring New Beauty across every era" with a contemporary, artistic tone. Unified the language of past and future beauty into a single voice, ensuring the copy could flow seamlessly across the film's split-screen narrative while elevating the brand's global presence.`,
      },
      videoUrl: "https://www.youtube.com/watch?v=GF_67s2LUwk",
    },
    {
      id: "amorepacific-vision-statement",
      title: {
        ko: "Amorepacific Vision Statement",
        en: "Amorepacific Vision Statement",
      },
      client: "AMOREPACIFIC",
      mediaType: "branding",
      mission: {
        ko: '글로벌 뷰티 시장에서의 방향성과 정체성을 간결하게 전달할 수 있는 아모레퍼시픽의 비전 스테이트먼트 영문 버전 작성. 아모레퍼시픽의 헤리티지를 기반으로 미래를 바라보는 "New Beauty"가 전사적 커뮤니케이션에 사용될 수 있도록 메시지의 밀도와 보편성을 확보하는 것이 과제.',
        en: `Develop the English version of Amorepacific's corporate vision statement to clearly convey the company's direction and identity in the global beauty landscape. The statement needed to encapsulate "New Beauty"—a future-focused message rooted in heritage—while remaining dense and adaptable enough for use across all corporate communications.`,
      },
      solution: {
        ko: "브랜드 철학과 문화적 맥락을 반영해 핵심 가치어를 재정의.",
        en: "Rearticulated key values to reflect the brand's philosophy and cultural context.",
      },
    },
    {
      id: "lg-brand-guidelines",
      title: {
        ko: "LG Brand Communication Guidelines",
        en: "LG Brand Communication Guidelines",
      },
      client: "LG Electronics",
      mediaType: "branding",
      mission: {
        ko: "LG의 톤을 한국어에서 영어로 번역하고 정제하여, 브랜드의 핵심 가치를 명확하고 간결하게 전달하며 감정적 공감을 국제적으로 전달.",
        en: "Translate and refine LG's tone of voice from Korean to English, capturing the brand's core values and emotional resonance with clarity and brevity for an international audience.",
      },
      solution: {
        ko: "LG의 목소리의 본질을 정확히 반영하는 영어 가이드라인을 만들기 위해 긴밀히 협력하여, 브랜드의 가치가 전 세계 효과적으로 전달되도록 제작.",
        en: "We collaborated closely to distill the essence of LG's voice, creating English guidelines that mirrored the original tone and emotional impact, ensuring the brand's values were effectively communicated globally.",
      },
    },
    {
      id: "seventeen-album",
      title: {
        ko: "SEVENTEEN 12th Mini Album Title",
        en: "SEVENTEEN 12th Mini Album Title",
      },
      client: "PLEDIS Entertainment",
      mediaType: "branding",
      mission: {
        ko: "세븐틴 12집의 영문 앨범명 개발. 다양한 미적, 주제적 개념에 맞는 짧고 임팩트 있는 제목 개발.",
        en: "Writing an English title to be used as an album name. Required creating a title to fit a variety of aesthetic and thematic concepts that is both catchy and impactful.",
      },
      solution: {
        ko: "클라이언트가 원하는 테마와 비주얼에 맞추어 양방향에서 매력적인 애너그램을 제작하여 폭넓은 젊은 층에게 어필.",
        en: "We produced an anagram which fit the client's desired themes and visuals in both directions that appeals to a broad, young audience.",
      },
    },
    {
      id: "genesis-gv80-black",
      title: {
        ko: "Genesis GV80/GV80 Coupe Black Launch SNS Copy",
        en: "Genesis GV80/GV80 Coupe Black Launch SNS Copy",
      },
      client: "Serviceplan",
      mediaType: "sns",
      mission: {
        ko: "GV80 블랙 및 GV80 블랙 쿠페의 존재감과 고급스러움을 강조할 수 있는 소셜미디어 콘텐츠를 제작. 각 채널 특성에 맞춰 간결하면서도 시적인 톤으로 차량의 정체성을 표현.",
        en: "Create social content that highlights the presence and luxury of the GV80 Black and GV80 Black Coupe. Use a poetic yet concise tone tailored to each platform.",
      },
      solution: {
        ko: "빛과 그림자의 모티프를 활용해 블랙 컬러의 우아함을 표현하고, 플랫폼별 어조와 길이를 조정해 브랜드 일관성을 유지하면서도 몰입감을 높임.",
        en: "Used the motif of light and shadow to express the elegance of the black color. Adapted tone and length according to each platform to maintain brand consistency while maximizing engagement.",
      },
    },
    {
      id: "lg-uplus-ixi-o",
      title: { ko: "LG Uplus – ixi-O TVC", en: "LG Uplus – ixi-O TVC" },
      client: "LG Uplus",
      mediaType: "video",
      mission: {
        ko: "AI 기반 통화 요약, 딥페이크 감지, 스팸 필터링 등 '익시오'의 주요 기능을 소비자 관점에서 쉽게 전달할 수 있는 TVC용 영문 카피 개발. 기능 중심 설명이 아닌, 공감 가능한 언어와 리듬으로 브랜드 톤을 살리는 작업이 요구됨.",
        en: "Craft English copy for the ixi-O TVC series that introduces AI-powered features in a way that feels relatable and natural to everyday users. The goal was to go beyond technical descriptions and create copy with character, rhythm, and consumer appeal.",
      },
      solution: {
        ko: "복잡한 기능을 일상 언어로 풀어내는 '말맛' 중심의 카피 전략을 적용. 기능 하나하나를 상황 중심의 문장으로 스토리텔링해 사용자의 공감대를 유도하고, 브랜드 특유의 친근하고 유쾌한 어조를 글로벌 타겟에 맞춰 재해석함.",
        en: "Applied a tone-first strategy that turned complex features into accessible, story-like lines with rhythm and wit. Framed each function in real-life context to spark recognition and trust, while shaping ixi-O's voice into one that feels playful, helpful, and distinctly human.",
      },
      videoUrl: "https://youtu.be/Bj-WHOkG_r8",
    },
    {
      id: "innisfree-brand-slogan",
      title: {
        ko: "이니스프리 – 글로벌 슬로건",
        en: "innisfree – Global Brand Slogan",
      },
      client: "innisfree",
      mediaType: "branding",
      mission: {
        ko: "제주도의 purity를 중심으로 한 이미지와 제주에서 더 나아가 지구를 sustainable하게 지켜주는 브랜드라는 이미지를 살리면서 모든 제품, 모든 광고, 모든 매체에 사용 가능한 슬로건을 제작.",
        en: "Create a slogan that emphasizes the purity of Jeju and conveys the image of a brand that not only preserves Jeju but also protects the Earth in a sustainable way, applicable to all products, advertisements, and media.",
      },
      solution: {
        ko: "제주에 관련된 브랜드 이미지의 장점을 살리면서 최근 증가 중인 eco-conscious 소비자들에게 매력적으로 보일 수 있도록 하여 슬로건을 제작.",
        en: "We crafted a slogan that highlights the strengths of the brand image related to Jeju, making it appealing to the growing number of eco-conscious consumers.",
      },
    },
    {
      id: "hankook-tire-warranty",
      title: {
        ko: "한국타이어 – 워랜티 프로그램 네이밍",
        en: "Hankook Tire – Warranty Program Naming",
      },
      client: "Hankook Tire",
      mediaType: "branding",
      mission: {
        ko: "북미 시장에서 운용 중인 다양한 보증 프로그램을 하나의 브랜드로 통합해, 소비자가 명확히 인지하고 신뢰할 수 있는 언어 자산 구축. '신뢰–보호–안전'의 핵심 가치를 직관적이면서 차별화된 이름으로 구현하는 과제.",
        en: "Establish a unified brand name for Hankook's North American warranty programs to enhance consumer awareness and trust. The name needed to express core values—trust, protection, safety—while clearly standing apart from competitors.",
      },
      solution: {
        ko: "'Surefire Plan'의 익숙한 어감을 활용해 신뢰, 보호, 직관성을 동시에 담은 명칭. 워드플레이를 통해 감각적인 인상을 주면서도 타이어 카테고리를 명확히 드러내 소비자 인지와 브랜드 연결력 제고.",
        en: 'Inspired by "Surefire Plan," the name "SureTire Plan" delivers trust, clarity, and category recognition in one. The wordplay adds memorability while reinforcing brand linkage and consumer understanding.',
      },
    },
    {
      id: "lg-styler-of",
      title: { ko: "LG 스타일러 온라인 피처", en: "LG Styler Online Feature" },
      client: "LG H&A",
      mediaType: "online",
      mission: {
        ko: "강력한 스팀 기술을 바탕으로 위생 관리와 섬세한 케어가 가능한 신제품 'LG Styler'의 9가지 핵심 USP를 중심으로 메시지 매트릭스를 작성. 웹사이트, 소셜미디어, 행사 등 다양한 채널에 맞는 헤드라인과 소비자용 바디 카피, 현장 직원들이 활용할 수 있는 트레이닝용 설명 문구를 포함해야 함.",
        en: "Develop a message matrix highlighting 9 key USPs of the new LG Styler, powered by advanced steam technology for hygiene and fabric care. Include headlines for digital, event, and social use, as well as body copy for the website and product explanation copy for on-site sales and training teams.",
      },
      solution: {
        ko: "스팀 기반의 위생, 탈취, 케어 기능을 직관적으로 이해할 수 있도록 USP별로 톤 앤 매너를 세분화하여 구성. 채널 특성과 목적에 따라 헤드라인, 웹 바디 카피, 트레이닝용 설명 문구를 각각 설계해 소비자는 물론 현장 직원들도 제품의 핵심 가치를 쉽게 전달하고 활용할 수 있도록 함.",
        en: "Organized each USP with a clear tone and structure to communicate the Styler's steam-powered benefits effectively. Tailored the messaging to suit each channel—punchy headlines to grab attention, web copy to engage consumers, and practical product explanations to support frontline staff in showcasing the key features.",
      },
    },
    {
      id: "samsung-display-synchroma",
      title: {
        ko: "Samsung Display – OLED & QD-OLED Color Experience Naming",
        en: "Samsung Display – OLED & QD-OLED Color Experience Naming",
      },
      client: "Samsung Display",
      mediaType: "branding",
      mission: {
        ko: "OLED와 QD-OLED 기반의 색 일관성 기술을 소비자 경험 중심으로 전달할 수 있는 명칭 개발. 스마트폰부터 TV까지 기기 간 색 연결성을 직관적으로 담아내면서도, 글로벌 전시에서도 감각적으로 통용될 수 있는 네이밍 필요.",
        en: "Create a concise English name that intuitively captures the experience of consistent, true-to-life color across OLED and QD-OLED devices. The name needed to reflect a seamless visual journey—from phone to TV—while resonating in global exhibition contexts.",
      },
      solution: {
        ko: "'동기화(Sync)'와 '색감(Chroma)'을 결합해 기술 개념을 감각적으로 풀어낸 'Synchroma' 제안. 쉽고 직관적인 언어 구조를 통해 전시 현장의 메시지 전달력을 높였고, 기기 간 연결성과 몰입형 색 경험을 단어 하나에 표현.",
        en: 'Proposed "Synchroma," a fusion of "sync" and "chroma," to distill the concept into a crisp, sensory-friendly name. The result clearly signals visual harmony across devices while enhancing message clarity in exhibition and brand touchpoints.',
      },
      videoUrl: "https://youtu.be/Gqvy7JwcjSQ",
    },
    {
      id: "olive-young-25th-anniversary",
      title: {
        ko: "OLIVE YOUNG 25th Anniversary TVC",
        en: "OLIVE YOUNG 25th Anniversary TVC",
      },
      client: "TBWA",
      mediaType: "video",
      mission: {
        ko: "올리브영 25주년을 기념하는 TVC의 영문 카피를 통해 브랜드와 고객이 함께 쌓아온 시간의 감정적 가치를 축하하는 과제. 일상의 설렘과 영감을 긍정적인 에너지로 풀어내는 따뜻하고 컨템포러리한 어조가 요구됨.",
        en: "Craft celebratory English copy for Olive Young's 25th anniversary TVC, honoring the shared journey between the brand and its customers. The writing needed to capture everyday joy and inspiration with a warm, contemporary tone.",
      },
      solution: {
        ko: "모든 '우리의 날들'을 축하하는 메시지를 중심으로, 브랜드와 고객의 관계를 동등한 파트너십으로 묘사하는 어휘를 구성. 단어 하나하나에 밝은 정서와 감각적인 리듬을 더해, 감정적 공감과 글로벌 보편성을 동시에 전달할 수 있도록 정제함.",
        en: 'Built the message around a shared celebration of "our days," framing the brand-customer relationship as a mutual partnership. Infused each line with emotional brightness and rhythmic ease to ensure both heartfelt resonance and universal appeal.',
      },
      videoUrl: "https://youtu.be/EXqX7NLBSok",
    },
    {
      id: "samsung-smartthings-lifestyle",
      title: {
        ko: "Samsung SmartThings Lifestyle Video",
        en: "Samsung SmartThings Lifestyle Video",
      },
      client: "ToBeContinue",
      mediaType: "video",
      mission: {
        ko: "자연스러운 스토리텔링을 통해 매력적인 단편 영화로 SmartThings의 기능을 소개.",
        en: "Show off SmartThings features in an engaging short film through natural storytelling.",
      },
      solution: {
        ko: "광고가 아닌 일상적인 대화처럼 들리도록 자연스러운 문구와 발화 패턴을 활용하여 두 캐릭터의 고유한 목소리를 구현.",
        en: "We created unique voices for the two characters by drawing on natural phrases and patterns of speech, to make a script sounds like a natural English conversation, rather than an advert.",
      },
      videoUrl: "https://youtu.be/opQ_1cYZdss",
    },
    {
      id: "hyundai-pleos-vision",
      title: {
        ko: "Hyundai PLEOS Vision Film",
        en: "Hyundai PLEOS Vision Film",
      },
      client: "MDR Creative",
      mediaType: "video",
      mission: {
        ko: "자동차를 위한 운영체제, PLEOS의 비전을 공상과학 세계관을 통해 풀어내는 과제. OS라는 기술 중심 콘셉트를 관객이 쉽게 이해할 수 있도록 캐주얼하면서도 몰입감 있는 내레이션 스크립트로 구현 필요. 브랜드의 미래지향성과 서사적 상상력을 모두 담아낼 언어 설계 필요.",
        en: "Transform a futuristic yet unfamiliar concept—an operating system for cars—into a vision that feels cinematic, imaginative, and accessible. Required crafting a narration script that balances sci-fi tone with down-to-earth clarity, expressing Hyundai's forward-looking narrative through immersive language.",
      },
      solution: {
        ko: "공상과학 콘셉트 기반 스토리보드에 맞추어, 자동차 OS의 역할을 '세상의 움직임을 읽고 흐름을 만들어내는 존재'로 설명. 기술 용어를 배제하고 스토리텔링 중심으로 흐름을 설계해, 정보 전달보다는 감각적 설득에 초점을 맞춘 나레이션 스크립트 완성.",
        en: "Based on a sci-fi-inspired narrative world, paint the OS as a metaphorical force that senses motion and orchestrates flow. Avoided technical jargon in favor of sensory-driven storytelling, delivering a script designed to captivate rather than explain—rooted in vision, not instruction.",
      },
      videoUrl: "https://youtu.be/E_DxpnmVDUc?si=uJqxEY_83QShgPBy&t=199",
    },
    {
      id: "samyang-tangle-renewal",
      title: {
        ko: "Samyang – Tangle Renewal Campaign Ad Video",
        en: "Samyang – Tangle Renewal Campaign Ad Video",
      },
      client: "TBWA",
      mediaType: "video",
      mission: {
        ko: "미국 런칭을 앞둔 '탱글' 리뉴얼 캠페인. 긴 면을 즐기는 USP와 향상된 맛을 미국 소비자에게 직관적으로 전달하며 브랜드의 식품 확장 전략을 미국 시장에 맞는 감각적 언어로 표현 필요.",
        en: "For Tangle's U.S. debut, the mission was to clearly deliver its USP—the joy of long noodles—alongside the upgraded taste. The challenge was to express the brand's food expansion strategy in a way that felt sensory and relevant to American consumers.",
      },
      solution: {
        ko: "후킹되는 음악과 리듬감 있는 카피를 통해 탱글의 긴 면과 풍미 강조. 영어 카피는 미국 시장에 맞춰 최적화하여 브랜드 차별성 부각.",
        en: "We created rhythm-driven copy synced to catchy music, highlighting Tangle's long noodles and rich taste. The English copy was optimized for the U.S. market to sharpen the brand's unique positioning.",
      },
      videoUrl: "https://youtu.be/W6eOk2pLwC8",
    },
    {
      id: "odyssey-neo-g9",
      title: {
        ko: "Odyssey Neo G9 Video Copy",
        en: "Odyssey Neo G9 Video Copy",
      },
      client: "SEC VD",
      mediaType: "video",
      mission: {
        ko: "Odyssey x T1 콜라보레이션 모니터 G9. Gaming Performance를 상향시켜 플레이어를 승리로 이끄는 G9의 카피를 제작.",
        en: "Develop copy showing the game-winning performance only capable with the G9 monitor, focusing on the epic collaboration between Odyssey x T1.",
      },
      solution: {
        ko: "플레이어의 승리를 지키는 Guardian Angel로 등장한 Living Legendary Pro Gamer 페이커의 영예에 걸맞는 짧고 세련된 카피 구현.",
        en: "We delivered a powerful copy that blasts right to the hearts of dedicated gamers worldwide. Assured victory was delivered by acclaimed pro-gamer, Faker.",
      },
      videoUrl: "https://youtu.be/N5ousUFgwiU",
    },
    {
      id: "samsung-ea-rebranding",
      title: {
        ko: "Samsung E&A Rebranding Video",
        en: "Samsung E&A Rebranding Video",
      },
      client: "Alleysquare",
      mediaType: "video, branding",
      mission: {
        ko: "삼성엔지니어링의 새로운 사명 'Samsung E&A'의 정체성을 알리고, 45개국 1,600여 개 프로젝트의 수행 경험을 기반으로 한 차별화된 플랜트 혁신 역량을 강조하는 브랜드 영상을 현지 감성과 글로벌 시청자에게 맞게 트랜스크리에이션. 한편, 레오나르도 다빈치의 상상력과 창의성을 모티브로 한 두 번째 영상 역시 삼성 E&A의 비전과 연결될 수 있도록 감성적으로 풀어낼 것.",
        en: "Transcreate two brand films announcing Samsung Engineering's new name, Samsung E&A. The first highlights the company's differentiated innovation based on its execution of over 1,600 projects across 45 countries. The second draws inspiration from the genius of Leonardo da Vinci, tying his imagination and ingenuity to Samsung E&A's forward-looking vision.",
      },
      solution: {
        ko: "기술 중심 메시지를 글로벌 시청자에게 자연스럽게 전달할 수 있도록 구조와 어조를 재정비하고, 'Engineering & Ahead'라는 브랜드 철학을 기반으로 지속가능한 미래를 향한 도전을 명확하고 직관적인 언어로 풀어냄. 다빈치 영상은 역사적 상상력과 현대 기술을 연결하는 창의적 접근을 통해 브랜드의 개척자적 정체성을 강조함.",
        en: `Refined the script to deliver complex technology narratives in clear, accessible language aligned with global audiences. Anchored in the "Engineering & Ahead" philosophy, the first film presents Samsung E&A's future-focused vision. The Da Vinci film uses a creative narrative approach, connecting historical imagination with modern engineering to underscore the brand's pioneering spirit.`,
      },
      videoUrl: "https://youtu.be/qflBCIj2boE",
    },
    {
      id: "lg-tone-of-voice",
      title: {
        ko: "LG Tone of Voice Guidelines",
        en: "LG Tone of Voice Guidelines",
      },
      client: "LG Electronics",
      mediaType: "branding",
      mission: {
        ko: "LG의 톤을 한국어에서 영어로 번역하고 정제하여, 브랜드의 핵심 가치를 명확하고 간결하게 전달하며 감정적 공감을 국제적으로 전달.",
        en: "Translate and refine LG's tone of voice from Korean to English, capturing the brand's core values and emotional resonance with clarity and brevity for an international audience.",
      },
      solution: {
        ko: "LG의 목소리의 본질을 정확히 반영하는 영어 가이드라인을 만들기 위해 긴밀히 협력하여, 브랜드의 가치가 전 세계 효과적으로 전달되도록 제작.",
        en: "We collaborated closely to distill the essence of LG's voice, creating English guidelines that mirrored the original tone and emotional impact, ensuring the brand's values were effectively communicated globally.",
      },
    },
    {
      id: "naver-website-renewal",
      title: {
        ko: "Naver Corp. Website Renewal",
        en: "Naver Corp. Website Renewal",
      },
      client: "Naver",
      mediaType: "online",
      mission: {
        ko: "한국어 중심으로 구성된 네이버 웹사이트 전면 개편에 맞춰, 글로벌 사용자에게도 직관적으로 전달되는 영어 UX 카피를 구축. 수십 개의 주요 페이지와 수백 개의 UI 요소에 걸쳐 타이틀, 버튼, 설명 문구 등 모든 텍스트를 재정비.",
        en: "Support Naver's full website renewal by developing English UX copy that reads naturally to global users. The project involved rewriting titles, buttons, and body copy across dozens of key pages and hundreds of interface elements.",
      },
      solution: {
        ko: "직역이 아닌 맥락 기반 접근을 통해 한국어 콘텐츠의 의도와 기능을 분석하고, 글로벌 UX 기준에 맞춰 언어를 구조화함. 정보 우선순위, 화면 흐름, 사용자 기대에 따라 톤과 길이를 조정했으며, 제품과 일관된 브랜드 보이스를 유지하면서도 각 상황에 맞는 메시지를 설계함.",
        en: "Took a context-first approach rather than translating directly. We interpreted the intent and function of the Korean source to structure clear, purposeful English. Adjusted tone and length based on content hierarchy, page flow, and user expectations, while maintaining a consistent brand voice tailored to each interaction.",
      },
    },
    {
      id: "lineage-w-slogan",
      title: { ko: "Lineage W Slogan", en: "Lineage W Slogan" },
      client: "Innocean",
      mediaType: "branding",
      mission: {
        ko: "원작을 계승한 리니지가 글로벌 원빌드로 출시되어 글로벌 슬로건 제작.",
        en: "Create a global slogan for the launch of Lineage, which stays true to the original and is released as a global one-build.",
      },
      solution: {
        ko: "리니지만의 무드를 살리고, 리니지의 스케일과 특징을 살린 센스 있는 슬로건 개발.",
        en: "We developed a clever slogan that captures the unique atmosphere of Lineage, highlighting its scale and distinctive features.",
      },
    },
    {
      id: "lg-enblock-website",
      title: { ko: "LG enblock Website Copy", en: "LG enblock Website Copy" },
      client: "LG Energy Solution",
      mediaType: "online",
      mission: {
        ko: "LG엔솔은 브랜드 스토리, 가치 메시지, 세 가지의 브랜드 약속을 영문카피피 제작 요청. 또한 홈 에너지 솔루션 업계에서 경쟁력을 유지하기 위해 새로운 가정용 배터리에 대한 제품 카피도 함께 요청.",
        en: "LG Ensol asked us to create an English brand story, value message, and three brand promises. They also wanted product copy for their new home battery, to stay competitive in the home energy solutions industry.",
      },
      solution: {
        ko: "철저한 조사를 통하여 LG엔솔이 의도하는 메시지를 완벽히 이해. 본 메시지를 핵심으로 카피를 개발하여 브랜드와 제품 카피에 일관된 흐름을 만들어냄.",
        en: "We researched thoroughly until we had a deep understanding of LG Ensol's intended messaging. We developed copy with this messaging at its core, to create a cohesive flow across the brand and product-level copy.",
      },
    },
    {
      id: "lg-brand-book",
      title: { ko: "LG Brand Book", en: "LG Brand Book" },
      client: "LG Electronics",
      mediaType: "branding",
      mission: {
        ko: "LG의 첫 번째 브랜드 북을 영문화 하여, LG만의 낙관과 즐거움의 메시지를 전달함과 동시에 LG의 핵심 가치와 중요한 성과를 강조.",
        en: "Create the English version of LG's first-ever brand book encapsulating the company's message of optimism and joy, while highlighting LG's core values and significant milestones.",
      },
      solution: {
        ko: "LG의 낙관주의와 혁신적인 본질을 유지하면서도 회사의 중요한 순간들을 강조하고 글로벌 청중에게 접근 가능하도록 영어 카피 개발",
        en: "Developed English copy that ensured the narrative remained true to LG's essence of optimism and innovation while highlighting the company's defining moments and making it accessible to a global audience.",
      },
    },
    {
      id: "ahc-brand-manifesto",
      title: { ko: "AHC Brand Manifesto", en: "AHC Brand Manifesto" },
      client: "AHC",
      mediaType: "branding",
      mission: {
        ko: "앤 해서웨이가 말하는 AHC 크림을 사용하게 된 이야기 등 AHC 브랜드 가치를 설명하는 영상.",
        en: "A video explaining the brand values of AHC, including Anne Hathaway's story of how she came to use AHC cream.",
      },
      solution: {
        ko: "앤 해서웨이가 제공한 내용을 토대로 AHC 브랜드에 녹여 대본을 작성.",
        en: "We wrote a script that weaves Anne Hathaway's provided insights into the essence of the AHC brand.",
      },
      videoUrl: "https://youtu.be/id0TXk8nVLE",
    },
    {
      id: "aero-furniture-message-matrix",
      title: {
        ko: "Aero Furniture Message Matrix",
        en: "Aero Furniture Message Matrix",
      },
      client: "LG H&A",
      mediaType: "online",
      mission: {
        ko: "내부용 및 소비자용으로 활용 예정인 제품 헤드 메시지, 키 메시지, 베네핏 설명, RTB 등 LG Aero Furniture 에 대한 종합적인 메시지 매트릭스를 제작.",
        en: "Create a comprehensive message matrix for LG's Aero Furniture, including the product head message, key messages, benefit descriptions and RTB's, for internal and consumer-facing channels.",
      },
      solution: {
        ko: "메시지 매트릭스의 각 요소를 세심하게 제작하여 각 피쳐가 뚜렷한 베네핏을 갖도록 하는 동시에, 매트릭스 전체에 일관된 흐름을 만들어 기억에 남는 인상적인 제품 이미지를 구현.",
        en: "We carefully created each element of the matrix to ensure each feature had a distinct benefit, while crafting a cohesive flow throughout the matrix, to create a memorable, impactful product image.",
      },
    },
    {
      id: "automotive-memory-features",
      title: {
        ko: "Automotive Memory Online Features",
        en: "Automotive Memory Online Features",
      },
      client: "Design Fever",
      mediaType: "online",
      mission: {
        ko: "삼성 오토모티브 메모리의 배경과 제품을 설명하는 문구를 흥미롭고 이해하기 쉬우면서도 B2B 고객에게 적합한 어조로 작성.",
        en: "Create copy to explain Samsung's automotive memory background and products, in a tone that's engaging and easy to understand, but also appropriate for B2B clients.",
      },
      solution: {
        ko: "여러 자료에서 자율주행 산업을 조사하여 정보를 정리하고 이를 클라이언트의 메시지와 일치하도록 카피 작성. 카피는 정확하고 간결하면서도 읽는 사람의 관심을 끌 수 있는 흥미로운 액션 단어로 가득 채운 카피 개발.",
        en: "We researched the autonomous driving industry across multiple sources to consolidate our knowledge and align it with the client's messaging. We made sure our copy was accurate and concise, yet packed with exciting action words to keep readers interested.",
      },
    },
    {
      id: "hankook-weatherflex",
      title: {
        ko: "Hankook Tire Weatherflex Launch Copy",
        en: "Hankook Tire Weatherflex Launch Copy",
      },
      client: "Hankook Tire",
      mediaType: "online",
      mission: {
        ko: "어떠한 날씨에도 교체 없이 쓸 수 있는 올웨더 타이어 'Weatherflex' 소개. 예측 불가능한 기후에 강하고, 실용적인 선택임을 강조할 것.",
        en: "Introduce Weatherflex as an all-weather tire that works year-round without seasonal changes. Emphasize its strength in unpredictable conditions and everyday convenience.",
      },
      solution: {
        ko: "모든 기후에 강한 성능과 교체 없는 편리함을 담아 짧고 명확한 메시지로 전달. 브랜드의 실용적 이미지를 강화.",
        en: "Delivered a short, clear message highlighting all-weather performance and hassle-free use. Reinforced the brand's practical and dependable image.",
      },
    },
    {
      id: "samsung-display-bus-wrap",
      title: {
        ko: "Samsung Display New York Tour Bus Wrap Copy",
        en: "Samsung Display New York Tour Bus Wrap Copy",
      },
      client: "Samsung Display",
      mediaType: "ooh",
      mission: {
        ko: "뉴욕시를 달리는 투어 버스 전체에 래핑될 OLED 인지도 제고용 태그라인을 제작. 문구는 2~3단어 이내로 제한되며, 기능 언급 없이 OLED에 주목할 수 있도록 위트 있게 구성.",
        en: "Create a short, witty tagline for the side of a tour bus in NYC to raise awareness of OLED. The line should draw attention to OLED in a playful way.",
      },
      solution: {
        ko: "OLED라는 단어를 중심으로 다양한 언어유희 기반의 카피를 제안하여 호기심과 브랜드 인지도를 동시에 높이고자 함. 최종 선택된 'Jawsome'은 'Awesome'과 유사한 발음을 활용해 익숙하면서도 유쾌한 인상을 주며, 뉴욕 거리에서 OLED에 대한 관심을 유도하는 역할.",
        en: 'Proposed a range of witty, pun-based options designed to spark curiosity and boost recall. The chosen line, "Jawsome," merges fun and familiarity—playing on the sound of "awesome" while keeping OLED front and center, making it an eye-catching presence on the streets of New York.',
      },
    },
    {
      id: "samsung-oled-era",
      title: {
        ko: "Samsung Display OLED Era Website Copy",
        en: "Samsung Display OLED Era Website Copy",
      },
      client: "Pivot",
      mediaType: "online",
      mission: {
        ko: "삼성 OLED의 범위를 보여주는 웹사이트 런칭을 위해 그 우수성을 누구나 쉽게 이해할 수 있도록 카피 제작.",
        en: "Create cutting-edge copy to highlight the excellence of Samsung's diverse portfolio of superior OLED products to unaware consumers.",
      },
      solution: {
        ko: "스틱스 기준에 맞춰 기존 영문 카피 재작업. 단 한번의 수정 요청없이 광고주 심사 통과하여 기존 카피 98%가 스틱스 카피로 대체되어 라이브됨.",
        en: "We rescued the tired and uninspired copy with clear, concise, and refreshing new content. All without a single revision request.",
      },
    },
    {
      id: "lg-newsletter-bite",
      title: {
        ko: "LG Electronics Newsletter B.I.T.E.",
        en: "LG Electronics Newsletter B.I.T.E.",
      },
      client: "LG",
      mediaType: "online",
      mission: {
        ko: "LG 월간 내부 마케팅 뉴스레터의 한국어 원문을 자연스러운 영어로 번역하고, 글로벌 임직원이 쉽게 읽을 수 있도록 산업 트렌드와 자사 소식을 명확하고 전문적인 톤으로 고도화.",
        en: "Translate LG's monthly internal marketing newsletter into natural English, ensuring both industry trends and company updates are conveyed clearly and professionally for a global internal audience.",
      },
      solution: {
        ko: "직역을 넘어서 글로벌 독자가 쉽게 이해할 수 있도록 콘텐츠를 재구성하고, 전문 용어는 정확성을 유지하면서도 쉽게 다가갈 수 있도록 조정. LG의 브랜드 톤에 맞춰 전체 문체를 자연스럽게 작성.",
        en: "Went beyond direct translation to reframe content with clarity and purpose for a global readership. Adjusted terminology for accessibility while preserving accuracy and refined the tone to align with LG's brand voice.",
      },
    },
    {
      id: "fc-online-mourinho",
      title: {
        ko: "FC Online Ad Video Copywashing",
        en: "FC Online Ad Video Copywashing",
      },
      client: "ThePositive",
      mediaType: "video",
      mission: {
        ko: "조세 무리뉴 감독이 등장하는 EA 스포츠와 넥슨의 FC 온라인 광고 비디오의 스토리보드와 대본을 transcreate. 영어 버전이 자연스럽고 매력적으로 들리면서 주제에 대한 명확한 디렉션을 제시.",
        en: "Transcreate the storyboard and script for a video featuring coach José Mourinho for the new FC Online game by EA Sports and Nexon. Ensure the English version sounds natural and engaging while providing clear directions for the subject.",
      },
      solution: {
        ko: "한국어 스토리보드와 대본을 재해석하여 무리뉴 감독의 전설적인 위상의 정수를 담은 역동적이고 매력적인 영문 스크립트를 만들어 냈습니다. 명확하고 정확한 디렉션을 제공하여 영상이 FC 온라인의 감동과 명성을 전달할 수 있도록 했습니다. 그 결과 전 세계 시청자에게 진정성 있고 매력적으로 느껴지는 대본이 완성되었습니다.",
        en: "We reimagined the Korean storyboard and script, infusing it with dynamic and captivating English that captured the essence of Mourinho's legendary status. We provided clear and precise directions, ensuring the video conveyed the excitement and prestige of FC Online. The final result was a script that felt authentic and engaging to an international audience.",
      },
      videoUrl: "https://youtu.be/JDVSvw9Q-d8",
    },
    {
      id: "aestura-atobarrier",
      title: {
        ko: "Aestura AtoBarrier365 Hydro Soothing Cream Video",
        en: "Aestura AtoBarrier365 Hydro Soothing Cream Video",
      },
      client: "aL",
      mediaType: "video",
      mission: {
        ko: "제품 영상의 영어 카피 작성. 한국어를 기반으로 제작 완료된 영상 내에서 그 형식과 타이밍을 유지하고 원래의 톤과 언어를 그대로 살리는 것이 필요.",
        en: "Writing English copy for a product video. Required maintaining the formatting and staying true to the original tone/language since the video was already produced in Korean.",
      },
      solution: {
        ko: "한국 본연의 느낌과 형식을 유지하면서도 영어 카피를 자연스럽게 녹여내어 목표 청중에게 영상의 의도와 일관성을 유지.",
        en: "We successfully maintained the Korean essence and format, seamlessly blending the English copy to keep the video's intent and coherence for the target viewers.",
      },
      videoUrl: "https://youtu.be/JOYxgqaka2I",
    },
    {
      id: "melon-music-sns",
      title: {
        ko: "Melon Music SNS & Video Copy",
        en: "Melon Music SNS & Video Copy",
      },
      client: "Melon Music",
      mediaType: "sns",
      mission: {
        ko: "아티스트의 업적을 강조하는 카피를 트랜스크리에이션하고 글로벌 팬을 위해 현지화.",
        en: "Transcreate copy highlighting the artists' achievements and localize for global fans.",
      },
      solution: {
        ko: "아티스트의 팬들에게 어필할 수 있는 정확한 카피를 만들고, 한국어 구어체와 아티스트별 설명에 자연스러운 영어 표현을 찾기 위해 아티스트에 대한 심층적인 리서치를 진행.",
        en: "We conducted in-depth artist research to create accurate copy that appeals to the artists' fans, and to find natural English equivalents for the Korean colloquialisms and artist-specific descriptions.",
      },
    },
    {
      id: "huvitz-lens-edger",
      title: {
        ko: "Huvitz – Lens Edger Slogan",
        en: "Huvitz – Lens Edger Slogan",
      },
      client: "Huvitz",
      mediaType: "branding",
      mission: {
        ko: "다양한 렌즈도 흔들림 없이 정밀하게 가공할 수 있다는 제품의 강점을 광고 언어로 직관적이고 매력 있게 전달할 것. 기술에 대한 신뢰감과 프리미엄의 톤을 모두 갖춘 카피 필요.",
        en: "Craft clear, compelling messaging that highlights the product's ability to edge any lens securely and precisely. Balance technical credibility with premium appeal for advertising use.",
      },
      solution: {
        ko: "'단단한 고정, 흔들림 없는 가공'이라는 키 메시지를 중심으로 슬로건 재정의. 비주얼과 연계해 강한 접지 이미지를 강화하고, 미국 시장에 자연스러운 어휘와 리듬으로 카피 고도화.",
        en: "Redefined the core slogan around secure grip and precise cutting. Reinforced the anti-slippage concept with crampon visuals, and refined the language for native fluency and ad impact in the U.S. market.",
      },
    },
    {
      id: "musinsa-global-launch",
      title: {
        ko: "MUSINSA Ad Video Copywashing",
        en: "MUSINSA Ad Video Copywashing",
      },
      client: "Innocean",
      mediaType: "video",
      mission: {
        ko: "서울에서 나오는 세련된 실시간 패션을 가지고 있다는 것을 강조하여 글로벌 런칭을 위한 프레쉬하고 신나는 슬로건 제작.",
        en: "MUSINSA wanted a fresh, exciting slogan for their global launch, to emphasize they carry fashion from Seoul, updated in real-time.",
      },
      solution: {
        ko: "무신사가 전 세계 K-fashion 팬들에게 어필할 수 있는 가장 임팩트  있는 단어를 찾기 위해 패션 잡지, 블로그, SNS를 조사하여 카피 개발.",
        en: "We researched fashion magazines, blogs, and social media to find the most impactful words that would help MUSINSA appeal to K-fashion fans across the globe.",
      },
    },
    {
      id: "hyundai-uam-tvc",
      title: { ko: "Hyundai UAM TVC copy", en: "Hyundai UAM TVC copy" },
      client: "OHSKA Studio",
      mediaType: "video",
      mission: {
        ko: "일상의 변화에 대한 상상들을 현실화할 수 있는 현대의 기술력을 과장으로 들리지 않고, 현실감 있도록 전달하는 카피 개발.",
        en: "Develop copy that conveys the technological capabilities of today that can turn imaginative changes in daily life into reality, without sounding exaggerated but rather realistic.",
      },
      solution: {
        ko: "현대의 능력을 보여줄 수 있는 '사실'들을 언급하고, 오버하지 않으면서 비전의 실현을 약속하는 카피 개발.",
        en: 'We developed copy that mentions "facts" showcasing modern capabilities, promising the realization of visions without overstating or exaggerating.',
      },
      videoUrl: "https://youtu.be/booaC2RnRGA",
    },
    {
      id: "kakao-pay-intro",
      title: {
        ko: "Kakao pay Company Introduction Video Copy",
        en: "Kakao pay Company Introduction Video Copy",
      },
      client: "TBWA",
      mediaType: "video",
      mission: {
        ko: "카카오페이의 홍보영상을 투자자용, 고객용으로 각각 다른 스타일의 카피 제작.",
        en: "Create distinct styles of copy for Kakao Pay's promotional video tailored for both investors and customers.",
      },
      solution: {
        ko: "여러 장면에서 내포하고 있는 강조점과 의미를 살리는 말맛 있는 카피 개발.",
        en: "We developed engaging and impactful copy that captures the emphasis and meaning embedded in various scenes.",
      },
    },
    {
      id: "doosan-wheel-loader",
      title: {
        ko: "Doosan Wheel Loader Slogan & Sub Copy",
        en: "Doosan Wheel Loader Slogan & Sub Copy",
      },
      client: "Doosan",
      mediaType: "branding",
      mission: {
        ko: "두산 인프라코어의 새로운 휠로더 제품 라인을 위해 세련된 글로벌 슬로건 제작.",
        en: "Create a sophisticated global slogan for Doosan Infracore's new wheel loader product line.",
      },
      solution: {
        ko: "신흥시장에 대거 출시되는 신기종들을 전체적으로 아우르면서 모든 종류의 플랫폼, 매체에 사용될 수 있는 슬로건 개발.",
        en: "We developed a slogan that encompasses the new models being launched extensively in emerging markets and can be used across all types of platforms and media.",
      },
    },
    {
      id: "sk-hynix-global-slogan",
      title: { ko: "SK hynix Global Slogan", en: "SK hynix Global Slogan" },
      client: "SK hynix",
      mediaType: "branding",
      mission: {
        ko: "당시 일반인들에게 인지도가 높지 않았던 SK 하이닉스. 이 프로젝트를 시초로 전 세계에 명성을 떨칠 운명임을 깨닫는다.",
        en: "Redefine the ever-growing brand SK hynix into a globally-renowned powerhouse. Create a slogan to last for years, if not decades.",
      },
      solution: {
        ko: "수없이 변화하는 모습을 반도체에 비유하여 볼드하고 임팩트 있게 선보이는 글로벌 슬로건과 영상 카피 제작",
        en: `By connecting semiconductors with the human spirit, we transformed semiconductors into a product that's bold, brilliant, full of impact. We associated SK hynix with the indomitable human passion, creativity, and inspiration that "comes from within."`,
      },
      videoUrl: "https://youtu.be/fvSvNb71Kn0",
    },
    {
      id: "laneige-sleeping-mask",
      title: {
        ko: "Laneige Water Sleeping Mask TVC",
        en: "Laneige Water Sleeping Mask TVC",
      },
      client: "BBDO",
      mediaType: "video",
      mission: {
        ko: "뷰티 업계에 특화된 용어를 사용하면서 클라이언트의 국문 카피를 영문화하여 국문 원본의 의미에 충실하고 카피가 TVC의 톤과 잘 어울리도록 카피 제작.",
        en: "Transcreate the client's Korean copy into English, staying true to the original Korean meaning while using beauty industry-specific terms and making sure the copy matches the tone of the TVC well.",
      },
      solution: {
        ko: "자연스러운 영어 카피를 만들기 위해 유사한 뷰티 제품을 조사하여 TVC의 톤과 타겟층에 맞는 흔히 사용되는 단어를 찾아 카피에 활용.",
        en: "We researched similar beauty products to find commonly used words matching the tone and target audience of the TVC, to create compelling, natural English copy that fully aligned with the TVC messaging.",
      },
      videoUrl: "https://youtu.be/UwRuT75LNPI",
    },
    {
      id: "kia-ev6-world-premiere",
      title: {
        ko: "Kia EV6 World Premiere Scriptwriting",
        en: "Kia EV6 World Premiere Scriptwriting",
      },
      client: "Planit Production",
      mediaType: "script",
      mission: {
        ko: "New Kia 브랜드 선언 이후 공개하는 EV6를 전 세계에 라이브 스트리밍으로 최초 공개.",
        en: "Announce the all-new EV6 to global audiences through live stream following the brand reveal of the New Kia rebranding.",
      },
      solution: {
        ko: "New Kia 공개 당시의 소비자 반응과 연계하여 EV6가 어떤 상징성을 가졌는지 인트로부터 짧고 볼드하게 선언.",
        en: "We deeply entwined the New Kia brand announcement with the eagerly awaited EV6 release to viewers worldwide wishing to experience the next evolution of electric cars.",
      },
      videoUrl: "https://youtu.be/c_aOOAa-Q2k",
    },
    {
      id: "medit-brand-manual",
      title: {
        ko: "MEDIT Brand Manual & Corporate Guideline",
        en: "MEDIT Brand Manual & Corporate Guideline",
      },
      client: "Sam Partners",
      mediaType: "branding",
      mission: {
        ko: "국내 뿐만 아니라 국제적으로도 성장하고 있는 메디트에서 일관성과 통일성 있는 전 세계 모든 분지점에 일괄적으로 사용될 영문 브랜드 매뉴얼 가이드 제작.",
        en: "Create an English brand manual guide for Medit, which is consistently and uniformly applied across all branches, both domestically and internationally, as the company continues to grow globally.",
      },
      solution: {
        ko: "의료 분야인 만큼 디테일의 수준이 기업의 전문성, 기술력, 디테일에 관한 세심함 등을 전부 대표하기 때문에, 기업의 신뢰감있는 이미지를 형성하기 위해 그만큼 완벽한 수준의 작업이 필요. 클라이언트와 협업을 통해 기술적 내용을 완전하게 파악하고, 내부적으로도 완벽한 정확도를 위해 자체 리서치를 통해 꼼꼼함을 최우선으로 작업.",
        en: "Given that the medical field's level of detail represents the company's expertise, technological capabilities, and meticulousness, it was essential to achieve perfection to build a trustworthy image. We collaborated closely with the client to fully understand the technical content, while prioritizing thoroughness through internal research to ensure complete accuracy.",
      },
    },
    {
      id: "kia-uefa-europa",
      title: {
        ko: "Kia UEFA Europa League TVC",
        en: "Kia UEFA Europa League TVC",
      },
      client: "Planit Production",
      mediaType: "video",
      mission: {
        ko: "기아자동차와 유로파리그의 공식 파트너십을 단순한 제휴 관계가 아닌, 팬들과의 가족 관계로 홍보.",
        en: "Promote Kia Motors' official partnership with the UEFA Europa League not just as a simple collaboration, but as a familial bond with the fans.",
      },
      solution: {
        ko: "기아가 팬들의 가슴이 뛰는 순간들에 모두 함께할 수 있는 가족, 클럽 패밀리임을 감성적으로 어필.",
        en: "We emotionally highlighted that Kia is a part of the club family, sharing in every heartbeat and thrilling moment of the fans.",
      },
      videoUrl: "https://youtu.be/TJf6if_CNZo",
    },
    {
      id: "hyundai-duty-free",
      title: {
        ko: "Hyundai Department Store Duty Free Key Copy",
        en: "Hyundai Department Store Duty Free Key Copy",
      },
      client: "Innocean",
      mediaType: "branding",
      mission: {
        ko: "'내 여행 최고의 목적지' - 새로 런칭하는 현대백화점면세점의 글로벌 키카피 제작.",
        en: `"Your journey's ultimate destination" – Craft the global key copy for the launch of Hyundai Department Store Duty Free.`,
      },
      solution: {
        ko: "현대백화점면세점의 독보적인 매력포인트를 트렌디하고 모던하게 표현하여 주고객층을 겨냥.",
        en: "We targeted the core customer base through a trendy and modern expression of Hyundai Department Store Duty Free's unique appeal.",
      },
    },
    {
      id: "lg-signature-website",
      title: {
        ko: "LG Signature Website Copy",
        en: "LG Signature Website Copy",
      },
      client: "LG CNS",
      mediaType: "online",
      mission: {
        ko: "LG전자의 프리미엄 라인 Signature. 고품격 가치를 사람들에게 전달하는 것.",
        en: "LG Electronics' premium line, Signature. Deliver its high-end value to people through the copy.",
      },
      solution: {
        ko: "품위를 유지하면서도 사람들에게 다가가는 접근 방식으로 웹사이트 전체 카피 개발.",
        en: "We developed the entire website copy with an approach that maintains sophistication while staying approachable and relatable to people.",
      },
    },
    {
      id: "samsung-microsd",
      title: {
        ko: "Samsung microSD card Copy",
        en: "Samsung microSD card Copy",
      },
      client: "Sam Seoul",
      mediaType: "branding",
      mission: {
        ko: "고민할 필요 없이, 이거 하나로 다 할 수 있는 만능 SD 카드.",
        en: "A versatile SD card that does it all, no second thoughts needed.",
      },
      solution: {
        ko: '"이거 하나로 다 된다"라는 느낌을 전달하기 위해, 카피 자체도 심플하면서도 자신감이 묻어나는 어투로 진행.',
        en: 'We crafted the copy to be simple yet exude confidence in order to convey the feeling of "this one card does it all,"',
      },
    },
    {
      id: "faceshop-cushion",
      title: {
        ko: "The Face Shop Anti-darkening Cushion Copy",
        en: "The Face Shop Anti-darkening Cushion Copy",
      },
      client: "deNa",
      mediaType: "ooh",
      mission: {
        ko: '"무너지지 않는 자신감"이라는 국문 카피의 의미를 살려 영문 카피를 개발.',
        en: 'Develop English copy that captures the essence of the Korean phrase "Confidence that never falters."',
      },
      solution: {
        ko: "'무너지지 않는' 이라는 화장과 자신감의 말맛을 영어로 그대로 가져옴.",
        en: "We translated the essence of 'never falter' into English, embodying both the resilience of makeup and the confidence it conveys.",
      },
    },
    {
      id: "hyundai-shackleton",
      title: {
        ko: "Hyundai Shackleton's Return Video Copy",
        en: "Hyundai Shackleton's Return Video Copy",
      },
      client: "Planit",
      mediaType: "video",
      mission: {
        ko: "현대 자동차의 비전은 자동차로 어디든지, 언제든지 떠날 수 있다는 것. 그리고 쉐클턴즈 리턴 영상을 통해 그들의 위대한 비전에 대한 해답을 제시.",
        en: "Hyundai's vision is that you can go anywhere, anytime, with their cars. Through the Shackleton's Return video, they showcased an answer to this grand vision.",
      },
      solution: {
        ko: "세세한 감정선을 놓치지 않기 위해, 말투나, 어조 등을 고스란히 언어에 담아내면서 내레이션, 인터뷰 스크립트 카피 진행.",
        en: "To capture even the subtlest emotional nuances, we meticulously preserved the tone and inflection while crafting narration and interview script copy.",
      },
      videoUrl: "https://youtu.be/qNsSsM9aUhc",
    },
    {
      id: "hanwha-corporate",
      title: {
        ko: "Hanwha Group Corporate Communications",
        en: "Hanwha Group Corporate Communications",
      },
      client: "Hanwha",
      mediaType: "video, branding",
      mission: {
        ko: "드라이하고 휴머니즘이 결여된 홍보영상에서 탈피해 마치 한 저널리스트의 여행기 같은 다큐멘터리 형식의 홍보 영상 내레이션과 자막.",
        en: "Move away from dry, impersonal promotional videos to a documentary-style format that feels like a journalist's travelogue, complete with narration and subtitles.",
      },
      solution: {
        ko: "BBC나 내셔널 지오그래픽 다큐 같은 느낌과 감정을 담은 내레이션으로 한화의 색다른 홍보 영상에 말맛나는 색을 입힘.",
        en: "We infused Hanwha's unique promotional video with a rich narrative style reminiscent of BBC or National Geographic documentaries, adding a touch of engaging storytelling and emotion.",
      },
      videoUrl: "https://youtu.be/h8kcS7QE96c",
    },
    {
      id: "doosan-corporate",
      title: {
        ko: "Doosan Group Corporate Communications",
        en: "Doosan Group Corporate Communications",
      },
      client: "Oricom",
      mediaType: "video, branding",
      mission: {
        ko: "지구와 사람의 미래를 지켜줄 기술과 정성으로 자연친화적 기업에 도전하는 아름다운 기업 두산 그룹. 글로벌하게 이미지를 쇄신할 중요한 홍보 영상.",
        en: "Doosan Group, a company striving to be an eco-friendly leader through technology and dedication that safeguard the future of the planet and its people. A crucial promotional video aimed at refreshing its global image.",
      },
      solution: {
        ko: "보다 감성적이고, 시청자와 교감, 공감하려는 두산의 메시지를 영문 카피로 승화.",
        en: "We elevated Doosan's message into English copy that is more emotional, aiming to connect and resonate with viewers.",
      },
      videoUrl: "https://youtu.be/EmWIqioo1K0",
    },
    {
      id: "zic-global-slogan",
      title: { ko: "ZIC Global Slogan", en: "ZIC Global Slogan" },
      client: "SK Planet",
      mediaType: "branding",
      mission: {
        ko: "SK ZIC를 재브랜딩할 슬로건의 제작. 글로벌 시장 점유율을 높이고, 이미 저명한 외국 기업들이 가진 슬로건처럼 멋있고, 향후 10년을 가야하는 슬로건. 광고주(SK ZIC), 대행사(SK Planet)는 물론, 모든 해외 부서까지 만족시켜야 함.",
        en: "Create a slogan for the rebranding of SK ZIC. Increase global market share and craft a slogan as impactful as those of renowned international companies—one that would endure for the next decade. Must satisfy not only the client (SK ZIC) and the agency (SK Planet), but also all overseas divisions.",
      },
      solution: {
        ko: "4개월의 시간 동안 이 중요한 리브랜딩에 몰두하여,현재 전세계 모든 ZIC 엔진 오일에서 볼 수 있는 슬로건을 제작.",
        en: "Over four months, we dedicated ourselves to this crucial rebranding project, creating the slogan that is now featured on all ZIC engine oils worldwide.",
      },
    },
  ],
  I = [
    {
      name: { ko: "Richard Kim", en: "Richard Kim" },
      initial: "R",
      role: { ko: "Creative Director", en: "Creative Director" },
      image: "/assets/images/profileRichard.jpg",
      education: {
        ko: [
          { school: "UC Berkeley, USA", degree: "정치학 학사" },
          { school: "USC Cinema, USA", degree: "영화연출 석사" },
        ],
        en: [
          { school: "UC Berkeley, USA", degree: "BS in Political Science" },
          { school: "USC Cinema, USA", degree: "MA in Film Production" },
        ],
      },
      experience: {
        ko: [
          "에미상, 씨네 이글상 수상",
          "영어전문 광고 성우 – 15년",
          "Coca-Cola, AT&T – 마케팅 및 영업",
          "C레벨 기업 임원, 외교관 연설문 작성",
          "모국어: 미국 영어 / 국적: USA",
        ],
        en: [
          "Emmy Award, CINE Golden Eagle Award Winner",
          "English Voice Actor – 15 years",
          "Coca-Cola, AT&T – Marketing and Sales",
          "Script Writer for C-level Executives, Diplomats",
          "Native in US English / Nationality: USA",
        ],
      },
    },
    {
      name: { ko: "Brixton Sandhals", en: "Brixton Sandhals" },
      initial: "B",
      role: { ko: "Copy Strategist", en: "Copy Strategist" },
      image: "/assets/images/profileBrixton.jpg",
      education: {
        ko: [
          { school: "The King's University, Canada", degree: "영문학 학사" },
        ],
        en: [
          {
            school: "The King's University, Canada",
            degree: "BA in English Literature",
          },
        ],
      },
      experience: {
        ko: [
          "모국어: 북미 영어 / 국적: 캐나다",
          "New York Times – 프로젝트 에디터",
          "Are.na Essay Yearly – 기고자",
          "데모패션, 진저마이트 – 카피라이터",
        ],
        en: [
          "Native in North American English / Nationality: Canada",
          "New York Times - Project Editor",
          "Are.na Essays Yearly - Contributor",
          "DEMO Fashion and Gingermite – Copywriter",
        ],
      },
    },
    {
      name: { ko: "Sein Park", en: "Sein Park" },
      initial: "S",
      role: { ko: "Account Manager", en: "Account Manager" },
      image: "/assets/images/profileSein.jpg",
      education: {
        ko: [
          { school: "한국외국어대학교", degree: "SW & AI 학사" },
          { school: "한국외국어대학교", degree: "스페인어 학사" },
        ],
        en: [
          {
            school: "Hankuk University of Foreign Studies, Korea",
            degree: "BA in SW & AI",
          },
          {
            school: "Hankuk University of Foreign Studies, Korea",
            degree: "BA in Spanish",
          },
        ],
      },
      experience: {
        ko: [
          "중남미연구소 연구보조원",
          '영어 교지 "The Argus" 작가 / 기자',
          "이중언어 – 한국어, 영어. 스페인어 구사",
        ],
        en: [
          "Latin American Studies Institute – Assistant",
          'Writer and reporter, campus English journal "The Argus"',
          "Additional Languages: English, Spanish",
        ],
      },
    },
    {
      name: { ko: "Natalie Lee", en: "Natalie Lee" },
      initial: "N",
      role: { ko: "Account Executive", en: "Account Executive" },
      image: "/assets/images/profileNatalie.jpg",
      education: {
        ko: [{ school: "이화여자대학교", degree: "심리학 학사" }],
        en: [
          {
            school: "Ewha Womans University, Korea",
            degree: "BA in Psychology",
          },
        ],
      },
      experience: {
        ko: [
          "에버랜드 동물원 연구조사원/번역가",
          "DYB최선어학원 대표강사",
          "마케팅 전문 프리랜서 번역가",
          "이중언어 – 한국어, 영어. 일본어 구사",
        ],
        en: [
          "Everland - Research Assistant / Translator",
          "DYB Choisun Language Institute – Head Instructor",
          "Freelancing Translator with Specialty in Marketing",
          "Bilingual fluency in English and Korean / Additional: Japanese",
        ],
      },
    },
    {
      name: { ko: "Hyolim Ahn", en: "Hyolim Ahn" },
      initial: "H",
      role: { ko: "Translation Specialist", en: "Translation Specialist" },
      image: "/assets/images/profileHyolim.png",
      education: {
        ko: [{ school: "이화여자대학교", degree: "영어영문학 학사" }],
        en: [
          {
            school: "Ewha Womans University, Korea",
            degree: "BA in English Language and Literature",
          },
        ],
      },
      experience: {
        ko: [
          "이중언어 – 한국어, 영어",
          "영한, 한영 번역가 - 15년",
          "롯데호텔매거진 – 번역가",
          "아리랑 TV & Radio - 작가",
          "동아일보 - 영문 Editor",
          "Korean Herald - 기자",
        ],
        en: [
          "Bilingual fluency in English and Korean",
          "Korean-English, English-Korean Translator - 15 years",
          "Lotte Hotel Magazine – Translator",
          "Arirang TV & Radio – Writer",
          "The Dong-A Ilbo – English Editor",
          "The Korea Herald – Reporter",
        ],
      },
    },
    {
      name: { ko: "아로", en: "Otto" },
      initial: "O",
      role: { ko: "Chief Happiness Officer", en: "Chief Happiness Officer" },
      image: "/assets/images/profileOtto.jpg",
      education: {
        ko: [
          {
            school: "GoldenQuest Comfort Retrievers®",
            degree: "Off-site trained",
          },
          { school: "Kentucky, USA", degree: "Mini Golden Retriever" },
        ],
        en: [
          {
            school: "GoldenQuest Comfort Retrievers®",
            degree: "Off-site trained",
          },
          { school: "Kentucky, USA", degree: "Mini Golden Retriever" },
        ],
      },
      experience: {
        ko: ["3개국어 이해: 영/한/개", "MBTI: ENFP"],
        en: ["Trilingual fluency in English, Korean, and Dog", "MBTI: ENFP"],
      },
    },
  ],
  M = [
    {
      quote: {
        ko: "해외의 감도와 한국적 맥락을 모두 이해하는, 보기 드문 감각의 팀입니다.",
        en: "A rare team that understands both global sensibility and Korean context.",
      },
      author: {
        ko: "Sam Seoul 이해승 이사님",
        en: "Sam Seoul Lee Hae-seung, Director",
      },
    },
    {
      quote: {
        ko: "브랜드를 이해하는 실력과 매력적으로 표현하는 센스를 겸비한 팀",
        en: "A team that combines brand expertise with a talent for compelling expression.",
      },
      author: {
        ko: "TBWA 오혜주 수석국장",
        en: "TBWA Oh Hye-joo, Senior Director",
      },
    },
    {
      quote: {
        ko: "각 나라마다의 독특한 문화코드를 심어 클라이언트의 사업을 성공으로 이끕니다.",
        en: "They embed unique cultural codes of each country to lead clients to success.",
      },
      author: {
        ko: "Innocean 김정환 NEXT 그룹장",
        en: "Innocean Kim Jeong-hwan, NEXT Group Head",
      },
    },
    {
      quote: {
        ko: "단어의 작은 뉘앙스 차이조차 놓치지 않는 섬세함. 일하는 내내 좋은 파트너를 만났다는 즐거움을 느끼게 해주었습니다.",
        en: "Their attention to even the smallest nuances in words made me feel throughout that we had found the right partner.",
      },
      author: {
        ko: "SK Planet 윤태구 국장",
        en: "SK Planet Yun Tae-gu, Director",
      },
    },
    {
      quote: {
        ko: "클라이언트의 고민을 다각도로 점검해주셔서 내부 설득에 큰 도움이 되었어요.",
        en: "Their multi-angle analysis of our challenges was a huge help in getting internal buy-in.",
      },
      author: { ko: "TBWA 홍민지 부장", en: "TBWA Hong Min-ji, Manager" },
    },
    {
      quote: {
        ko: "스틱스앤스톤스와 함께하는 작업은 늘 즐겁다!",
        en: "Working with Sticks & Stones is always a joy!",
      },
      author: {
        ko: "Dexter Krema 송은혜 차장",
        en: "Dexter Krema Song Eun-hye, Assistant Manager",
      },
    },
    {
      quote: {
        ko: "세심한 제안과 열정적 지원으로, 프로젝트 내내 든든한 파트너십을 느낄 수 있었습니다.",
        en: "Their thoughtful proposals and passionate support made us feel a solid partnership throughout.",
      },
      author: {
        ko: "Innocean 이유진 매니저",
        en: "Innocean Lee Yu-jin, Manager",
      },
    },
    {
      quote: {
        ko: "프로젝트 기간 내내 문제를 함께 고민하고 해결하려는 열정과 파트너십에 감명 받았습니다.",
        en: "I was impressed by their passion and partnership in tackling problems together throughout the project.",
      },
      author: {
        ko: "SK Planet 박지연 플래너",
        en: "SK Planet Park Ji-yeon, Planner",
      },
    },
  ],
  P = [
    {
      id: "onlinevideo",
      label: { ko: "온라인 비디오", en: "Online Video" },
      image: {
        ko: "/assets/images/onlinevideo.png",
        en: "/assets/images/onlinevideo.png",
      },
    },
    {
      id: "brandstory",
      label: { ko: "브랜드 스토리", en: "Brand Story" },
      image: {
        ko: "/assets/images/brandstory.png",
        en: "/assets/images/brandstory.png",
      },
    },
    {
      id: "naming",
      label: { ko: "네이밍", en: "Naming" },
      image: {
        ko: "/assets/images/naming.png",
        en: "/assets/images/naming.png",
      },
    },
    {
      id: "slogan",
      label: { ko: "슬로건", en: "Slogan" },
      image: {
        ko: "/assets/images/slogan.png",
        en: "/assets/images/slogan.png",
      },
    },
    {
      id: "ceoscript",
      label: { ko: "CEO 스크립트", en: "CEO Script" },
      image: {
        ko: "/assets/images/ceoscript.png",
        en: "/assets/images/ceoscript.png",
      },
    },
    {
      id: "website",
      label: { ko: "웹사이트", en: "Website" },
      image: {
        ko: "/assets/images/website.png",
        en: "/assets/images/website.png",
      },
    },
  ],
  S = "https://stks.kr",
  L = `${S}/#organization`;
function z(s) {
  let e = document.getElementById("page-jsonld");
  (e ||
    ((e = document.createElement("script")),
    (e.id = "page-jsonld"),
    (e.type = "application/ld+json"),
    document.head.appendChild(e)),
    (e.textContent = JSON.stringify(s)));
}
function H(s) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${S}/#website`,
    url: S,
    name: "Sticks & Stones Seoul",
    description:
      s === "ko"
        ? "글로벌 브랜딩과 마케팅에 특화된 영어 전문 카피라이팅 회사, 스틱스앤스톤스 서울."
        : "A specialized English copywriting and brand storytelling agency for global branding and marketing, based in Seoul.",
    inLanguage: ["ko", "en"],
    publisher: { "@id": L },
  };
}
function Y(s) {
  const e = I.filter((t) => t.role[s] !== "Chief Happiness Officer");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${S}/${s === "en" ? "en/" : ""}about#webpage`,
        url: `${S}/${s === "en" ? "en/" : ""}about`,
        name:
          s === "ko" ? "스틱스앤스톤스 소개" : "About Sticks & Stones Seoul",
        description:
          s === "ko"
            ? "인상적인 메시지를 쓰는 건 어렵습니다. 영어로는 더더욱. 스틱스앤스톤스는 글로벌 브랜딩 전문 영어 카피라이팅 에이전시입니다."
            : "Landing your brand story globally takes a little more. Meet the team behind Sticks & Stones Seoul.",
        publisher: { "@id": L },
      },
      ...e.map((t) => ({
        "@type": "Person",
        name: t.name[s],
        jobTitle: t.role[s],
        image: `${S}${t.image}`,
        worksFor: { "@id": L },
      })),
    ],
  };
}
function Q(s) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: s === "ko" ? "스틱스앤스톤스 서비스" : "Sticks & Stones Services",
    url: `${S}/${s === "en" ? "en/" : ""}services`,
    itemListElement: P.map((e, t) => ({
      "@type": "ListItem",
      position: t + 1,
      item: { "@type": "Service", name: e.label[s], provider: { "@id": L } },
    })),
  };
}
function J(s) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: s === "ko" ? "포트폴리오" : "Portfolio",
    url: `${S}/${s === "en" ? "en/" : ""}portfolio`,
    publisher: { "@id": L },
    hasPart: k.map((e) => ({
      "@type": "CreativeWork",
      name: e.title[s],
      url: `${S}/${s === "en" ? "en/" : ""}portfolio/${e.id}`,
      creator: { "@id": L },
      abstract: e.solution[s],
    })),
  };
}
function X(s, e) {
  const t = k.find((n) => n.id === e);
  return t
    ? {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: t.title[s],
        url: `${S}/${s === "en" ? "en/" : ""}portfolio/${t.id}`,
        creator: { "@id": L },
        description: t.mission[s],
        abstract: t.solution[s],
        ...(t.videoUrl
          ? {
              video: {
                "@type": "VideoObject",
                url: t.videoUrl,
                name: t.title[s],
              },
            }
          : {}),
      }
    : H(s);
}
function Z(s) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: s === "ko" ? "클라이언트 후기" : "Client Testimonials",
    url: `${S}/${s === "en" ? "en/" : ""}clients`,
    itemListElement: M.map((e, t) => ({
      "@type": "ListItem",
      position: t + 1,
      item: {
        "@type": "Review",
        reviewBody: e.quote[s],
        author: { "@type": "Person", name: e.author[s] },
        itemReviewed: { "@id": L },
      },
    })),
  };
}
function ee(s, e, t) {
  let n;
  (s
    ? s === "about"
      ? (n = Y(e))
      : s === "services"
        ? (n = Q(e))
        : s === "portfolio" && t
          ? (n = X(e, t))
          : s === "portfolio"
            ? (n = J(e))
            : s === "clients"
              ? (n = Z(e))
              : (n = H(e))
    : (n = H(e)),
    z(n));
}
class te {
  constructor() {
    ((this.hasDetectedLanguage = !1), (this.isInitialLoad = !0));
  }
  init() {
    ("scrollRestoration" in history && (history.scrollRestoration = "manual"),
      this.handleInitialLanguageDetection(),
      window.addEventListener("popstate", () => this.handleRoute()),
      this.handleRoute());
  }
  handleInitialLanguageDetection() {
    const e = window.location.pathname;
    (e === "/" || e === "") &&
      !navigator.language.toLowerCase().startsWith("ko") &&
      !this.hasDetectedLanguage &&
      ((this.hasDetectedLanguage = !0), this.navigate("/en/", !0));
  }
  parseRoute(e) {
    const t = e.split("/").filter(Boolean),
      n = t[0] === "en",
      i = n ? "en" : "ko",
      o = n ? 1 : 0,
      a = t[o],
      c = ["about", "services", "portfolio", "clients"].includes(a) ? a : null,
      l = c === "portfolio" && t[o + 1] ? t[o + 1] : void 0;
    return { section: c, language: i, portfolioSlug: l };
  }
  buildPath(e, t, n) {
    const i = t === "en" ? "/en" : "";
    return e
      ? e === "portfolio" && n
        ? `${i}/${e}/${n}`
        : `${i}/${e}`
      : `${i}/`;
  }
  navigate(e, t = !1) {
    const n = this.parseRoute(e);
    (t ? history.replaceState(n, "", e) : history.pushState(n, "", e),
      this.handleRoute());
  }
  handleRoute() {
    const e = this.parseRoute(window.location.pathname),
      t = f.getState();
    document.documentElement.setAttribute("lang", e.language);
    const n =
        t.currentSection === e.section &&
        t.language !== e.language &&
        !this.isInitialLoad,
      i =
        t.currentSection === "portfolio" &&
        e.section === "portfolio" &&
        t.language === e.language &&
        t.portfolioSlug !== e.portfolioSlug &&
        !this.isInitialLoad;
    let o;
    (e.section
      ? this.isInitialLoad || n || i
        ? (o = "expanded")
        : (o = "expanding")
      : (o = "idle"),
      f.setState({
        currentSection: e.section,
        language: e.language,
        appState: o,
        portfolioSlug: e.portfolioSlug,
      }),
      ee(e.section, e.language, e.portfolioSlug),
      this.isInitialLoad && (this.isInitialLoad = !1));
  }
  switchLanguage(e) {
    const { currentSection: t, portfolioSlug: n } = f.getState(),
      i = this.buildPath(t, e, n);
    this.navigate(i);
  }
}
const p = new te(),
  ne = {
    ko: ["문화적 맥락까지 전달하는", "브랜드 커뮤니케이터", "Sticks & Stones"],
    en: [
      "Copywriters",
      "shaping culture",
      "into brand language.",
      "Sticks and Stones",
    ],
  },
  ie = {
    ko: ["강한 울림을 주고", "공감 받는 글로벌 메시지"],
    en: ["Globally resonant stories", "people connect with"],
  },
  oe = {
    ko: [
      "당신이 누구인지는 당신의 작품에서 드러난다",
      "- 토마스 에디슨",
      "",
      "What you are will show in what you do.",
      "- Thomas Edison",
    ],
    en: ["What you are will show in what you do.", "", "- Thomas Edison"],
  },
  se = {
    ko: ["기억 속에", "오래 간직하게 될 문장", "Words and stories that stick"],
    en: ["Stories that stick"],
  },
  ae = { about: ne, services: ie, portfolio: oe, clients: se };
class re {
  detectBrowserLanguage() {
    return navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en";
  }
  getContent(e, t) {
    return e[t];
  }
  formatDate(e, t) {
    const n = new Date(e);
    return new Intl.DateTimeFormat(t === "ko" ? "ko-KR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(n);
  }
}
const d = new re();
function h(s, e, t) {
  const n = document.createElement(s);
  return (e && (n.className = e), n);
}
function _(s, e) {
  s.innerHTML = e;
}
function stksPostFrameMessage(e, t = {}) {
  if (window.parent === window) return;
  window.parent.postMessage(
    {
      source: "stks-frame",
      frame: "current",
      type: e,
      ...t,
    },
    window.location.origin,
  );
}
class le {
  constructor() {
    ((this.modalElement = h("div", "video-modal")),
      (this.isMuted = !1),
      (this.isOpen = !1),
      this.init());
  }
  init() {
    ((this.modalElement.innerHTML = `
      <div class="video-modal-overlay"></div>
      <div class="video-modal-content">
        <iframe
          src=""
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    `),
      this.modalElement
        .querySelector(".video-modal-overlay")
        .addEventListener("click", () => this.close()),
      document.addEventListener("keydown", (t) => {
        t.key === "Escape" && this.isOpen && this.close();
      }));
  }
  open(e, options = {}) {
    const t = this.modalElement.querySelector("iframe"),
      n = this.extractVideoId(e),
      i = this.extractTimestamp(e),
      o = i ? `&start=${i}` : "",
      a = this.isMuted ? "&mute=1" : "";
    (options.silent || stksPostFrameMessage("video-open"),
      (t.src = `https://www.youtube.com/embed/${n}?autoplay=1${a}${o}`),
      this.modalElement.classList.add("active"),
      (this.isOpen = !0),
      (document.body.style.overflow = "hidden"));
  }
  close(options = {}) {
    const e = this.modalElement.querySelector("iframe");
    ((e.src = ""),
      this.modalElement.classList.remove("active"),
      (this.isOpen = !1),
      (document.body.style.overflow = ""),
      options.silent || stksPostFrameMessage("video-close"));
  }
  setMuted(e) {
    this.isMuted = !!e;
    const t = this.modalElement.querySelector("iframe");
    if (!t || !t.src) return;
    const n = new URL(t.src);
    this.isMuted ? n.searchParams.set("mute", "1") : n.searchParams.delete("mute");
    t.src = n.toString();
  }
  extractVideoId(e) {
    const t = e.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s?]+)/);
    return t ? t[1] : "";
  }
  extractTimestamp(e) {
    const t = e.match(/[?&]t=(\d+)/);
    return t ? t[1] : null;
  }
  mount(e) {
    e.appendChild(this.modalElement);
    const t = window;
    ((t.__stksVideoModals = t.__stksVideoModals || []),
      t.__stksVideoModals.includes(this) || t.__stksVideoModals.push(this));
  }
}
class ce {
  constructor() {
    ((this.currentAudio = null),
      (this.externalMuted = !1),
      (this.isMuted = localStorage.getItem("audioMuted") === "true"),
      (this.audioFiles = {
        about: "/assets/audio/About.mp3",
        services: "/assets/audio/Services.mp3",
        portfolio: "/assets/audio/Porforlio.mp3",
        clients: "/assets/audio/ClientsSay.mp3",
      }));
  }
  play(e) {
    if ((stksPostFrameMessage("audio-intent", { section: e }), this.stop(), this.isMuted || this.externalMuted)) return;
    const t = this.audioFiles[e];
    t &&
      ((this.currentAudio = new Audio(t)),
      (this.currentAudio.volume = 0.7),
      this.currentAudio.play().catch((n) => {
        console.log("Audio playback failed:", n);
      }));
  }
  stop() {
    this.currentAudio &&
      (this.currentAudio.pause(),
      (this.currentAudio.currentTime = 0),
      (this.currentAudio = null));
  }
  toggleMute() {
    return (
      (this.isMuted = !this.isMuted),
      localStorage.setItem("audioMuted", this.isMuted),
      this.isMuted && this.stop(),
      this.isMuted
    );
  }
  getMuteState() {
    return this.isMuted;
  }
  setExternalMuted(e) {
    ((this.externalMuted = !!e), this.externalMuted && this.stop());
  }
}
const q = new ce();
function stksSetFrameMuted(e) {
  const t = !!e;
  q.setExternalMuted(t);
  const n = window;
  (n.__stksVideoModals || []).forEach((i) => {
    i && typeof i.setMuted == "function" && i.setMuted(t);
  });
  document.querySelectorAll("audio, video").forEach((i) => {
    ((i.muted = t), t && i.pause());
  });
  document.querySelectorAll('iframe[src*="youtube.com/embed"]').forEach((i) => {
    if (!i.src) return;
    const o = new URL(i.src);
    t ? o.searchParams.set("mute", "1") : o.searchParams.delete("mute");
    i.src = o.toString();
  });
}
window.__stksSetFrameMuted = stksSetFrameMuted;
class de {
  constructor(e) {
    ((this.container = document.getElementById(e)),
      (this.isAnimating = !1),
      (this.quadrants = new Map()),
      (this.blueSubText = h("span")),
      (this.whiteSubText = h("span")),
      (this.videoModal = new le()),
      (this.resizeTimeout = null),
      this.init());
  }
  init() {
    const e = ["about", "services", "portfolio", "clients"],
      t = {
        about: "about",
        services: "services",
        portfolio: "portfolio",
        clients: "clients",
      };
    (this.preloadImages(t),
      e.forEach((r) => {
        const c = h("div", `quadrant ${r}`);
        c.dataset.section = r;
        const l = h("img", "static-img"),
          g = t[r];
        ((l.src = `/assets/images/${g}.png`), (l.alt = r));
        const u = h("img", "hover-img");
        ((u.src = `/assets/images/${g}.gif`),
          (u.alt = r),
          c.appendChild(l),
          c.appendChild(u),
          c.addEventListener("click", () => {
            !this.isAnimating &&
              !c.classList.contains("selected") &&
              this.handleQuadrantClick(r);
          }),
          this.quadrants.set(r, c),
          this.container.appendChild(c));
      }));
    const n = h("div", "sub-quadrant blue-sub");
    (n.appendChild(this.blueSubText), this.container.appendChild(n));
    const i = h("div", "sub-quadrant white-sub");
    (i.appendChild(this.whiteSubText), this.container.appendChild(i));
    const o = h("div", "center-circle"),
      a = h("img", "logo-gif");
    ((a.src = "/assets/images/logo.gif"),
      (a.alt = "STKS Logo"),
      o.appendChild(a),
      (this.centerCircle = o),
      o.addEventListener("click", () => {
        const { currentSection: r } = f.getState();
        if (!r)
          this.videoModal.open("https://www.youtube.com/watch?v=OCWZ5-vivHk");
        else {
          const { language: c } = f.getState(),
            l = c === "en" ? "/en/" : "/";
          p.navigate(l);
        }
      }),
      this.container.appendChild(o),
      this.videoModal.mount(document.body),
      (window.__stksOpenLogoVideo = (r) => {
        this.videoModal.open("https://www.youtube.com/watch?v=OCWZ5-vivHk", {
          silent: !!r,
        });
      }),
      (window.__stksCloseLogoVideo = (r) => {
        this.videoModal.close({ silent: !!r });
      }),
      window.addEventListener("resize", () => {
        (this.container.classList.add("no-transition"),
          this.resizeTimeout && clearTimeout(this.resizeTimeout),
          (this.resizeTimeout = window.setTimeout(() => {
            this.container.classList.remove("no-transition");
          }, 150)));
      }),
      f.subscribe((r) => this.render(r)));
  }
  preloadImages(e) {
    ["about", "services", "portfolio", "clients"].forEach((i) => {
      const o = new Image();
      o.src = `/assets/images/${e[i]}.gif`;
    });
    const n = new Image();
    n.src = "/assets/images/logo.gif";
  }
  handleQuadrantClick(e) {
    const { language: t } = f.getState(),
      n = p.buildPath(e, t);
    p.navigate(n);
  }
  render(e) {
    const { currentSection: t, language: n, appState: i } = e;
    if (
      ((this.container.className = "container"),
      (document.body.className = ""),
      i === "expanded" && this.container.classList.add("no-transition"),
      (i === "expanding" || i === "expanded") && t)
    ) {
      (this.container.classList.add("stateExpanding"),
        this.container.classList.add(`${t}Selected`),
        document.body.classList.add("stateExpanding"),
        document.body.classList.add(`${t}Selected`),
        i === "expanding" && q.play(t));
      const a = {
        about: { top: "100%", left: "100%" },
        services: { top: "100%", left: "0%" },
        portfolio: { top: "0%", left: "100%" },
        clients: { top: "0%", left: "0%" },
      };
      (a[t] &&
        ((this.centerCircle.style.top = a[t].top),
        (this.centerCircle.style.left = a[t].left)),
        i === "expanded" &&
          requestAnimationFrame(() => {
            this.container.classList.remove("no-transition");
          }),
        i === "expanding" &&
          requestAnimationFrame(() => {
            setTimeout(() => {
              (window.scrollTo(0, 1),
                window.scrollTo(0, 0),
                document.body._scrollListenerAdded ||
                  (document.body.addEventListener("scroll", () => {}, {
                    passive: !0,
                  }),
                  document.body.addEventListener("wheel", () => {}, {
                    passive: !0,
                  }),
                  document.body.addEventListener("touchmove", () => {}, {
                    passive: !0,
                  }),
                  window.addEventListener("scroll", () => {}, { passive: !0 }),
                  window.addEventListener("wheel", () => {}, { passive: !0 }),
                  window.addEventListener("touchmove", () => {}, {
                    passive: !0,
                  }),
                  (document.body._scrollListenerAdded = !0)),
                (document.body.style.willChange = "scroll-position"),
                document.body.offsetHeight);
            }, 50);
          }));
    } else
      (window.scrollTo(0, 0),
        q.stop(),
        (this.centerCircle.style.top = "50%"),
        (this.centerCircle.style.left = "50%"));
    if (
      (["about", "services", "portfolio", "clients"].forEach((a) => {
        const r = this.quadrants.get(a);
        r &&
          (a === t
            ? r.classList.add("selected")
            : r.classList.remove("selected"));
      }),
      t)
    ) {
      const r = d.getContent(ae[t], n).join("<br>");
      (_(this.blueSubText, r), _(this.whiteSubText, r));
    }
  }
}
const he = { ko: "Sticks & Stones", en: "Sticks & Stones" },
  ue = {
    ko: "인상적인 메시지를 쓰는 건 어렵습니다.<br>영어로는 더더욱",
    en: "Your brand story works in Korea.<br>We help it work for the world.",
  },
  pe = {
    url: "https://www.youtube.com/embed/OCWZ5-vivHk?modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&controls=0&playsinline=1",
    title: { ko: "스틱스앤스톤스 소개", en: "Sticks & Stones Introduction" },
  },
  ge = { ko: "회사소개서 Download", en: "Download Company Profile" },
  me = {
    team: { ko: "Meet our team", en: "Meet our team" },
    clientsSay: { ko: "Clients say", en: "Clients say" },
    ourClients: { ko: "Our clients", en: "Our clients" },
    ourSpace: { ko: "Our space", en: "Our space" },
  },
  fe = {
    heading: { ko: "Have a project?", en: "Have a project?" },
    button: { ko: "Let's talk", en: "Let's talk" },
  },
  C = {
    title: he,
    subtitle: ue,
    video: pe,
    downloadButton: ge,
    sectionHeadings: me,
    cta: fe,
  },
  $ = {
    "lg-2023-new-years-message": {
      thumbnail:
        "/assets/portfolio/thumbnails/01_lg-2023-new-years-message.jpg",
      slider: ["/assets/portfolio/slider/01_lg-2023-new-years-message.jpg"],
    },
    "ces-2022-hyundai-keynote": {
      thumbnail: "/assets/portfolio/thumbnails/02_ces-2022-hyundai-keynote.jpg",
      slider: [],
    },
    "990-pro-online-features": {
      thumbnail: "/assets/portfolio/thumbnails/03_990-pro-online-features.jpg",
      slider: [
        "/assets/portfolio/slider/03_990-pro-online-features_01.png",
        "/assets/portfolio/slider/03_990-pro-online-features_02.png",
        "/assets/portfolio/slider/03_990-pro-online-features_03.png",
        "/assets/portfolio/slider/03_990-pro-online-features_04.png",
      ],
    },
    "team-naver-dan-23": {
      thumbnail: "/assets/portfolio/thumbnails/04_team-naver-dan-23.jpg",
      slider: [
        "/assets/portfolio/slider/04_team-naver-dan-23_01.jpg",
        "/assets/portfolio/slider/04_team-naver-dan-23_02.jpg",
      ],
    },
    "lg-antimicrobial-glass": {
      thumbnail: "/assets/portfolio/thumbnails/05_lg-antimicrobial-glass.jpg",
      slider: [
        "/assets/portfolio/slider/05_lg-antimicrobial-glass_01.jpeg",
        "/assets/portfolio/slider/05_lg-antimicrobial-glass_02.jpeg",
      ],
    },
    "lifes-good-award-2023": {
      thumbnail: "/assets/portfolio/thumbnails/06_lifes-good-award-2023.jpg",
      slider: ["/assets/portfolio/slider/06_lifes-good-award-2023.jpg"],
    },
    "samsung-sdc-ces-2025": {
      thumbnail: "/assets/portfolio/thumbnails/07_samsung-sdc-ces-2025.jpg",
      slider: [
        "/assets/portfolio/slider/07_samsung-sdc-ces-2025_01.png",
        "/assets/portfolio/slider/07_samsung-sdc-ces-2025_02.png",
        "/assets/portfolio/slider/07_samsung-sdc-ces-2025_03.png",
        "/assets/portfolio/slider/07_samsung-sdc-ces-2025_04.png",
      ],
    },
    "lg-ces-2025": {
      thumbnail: "/assets/portfolio/thumbnails/08_lg-ces-2025.jpg",
      slider: [],
    },
    "amorepacific-80th-anniversary": {
      thumbnail:
        "/assets/portfolio/thumbnails/09_amorepacific-80th-anniversary.jpg",
      slider: [],
    },
    "amorepacific-vision-statement": {
      thumbnail:
        "/assets/portfolio/thumbnails/10_amorepacific-vision-statement.jpg",
      slider: [
        "/assets/portfolio/slider/10_amorepacific-vision-statement_01.jpg",
        "/assets/portfolio/slider/10_amorepacific-vision-statement_02.jpg",
      ],
    },
    "lg-brand-guidelines": {
      thumbnail: "/assets/portfolio/thumbnails/11_lg-brand-guidelines.jpg",
      slider: [
        "/assets/portfolio/slider/11_lg-brand-guidelines_01.png",
        "/assets/portfolio/slider/11_lg-brand-guidelines_02.png",
        "/assets/portfolio/slider/11_lg-brand-guidelines_03.png",
      ],
    },
    "seventeen-album": {
      thumbnail: "/assets/portfolio/thumbnails/12_seventeen-album.jpg",
      slider: [
        "/assets/portfolio/slider/12_seventeen-album_01.jpg",
        "/assets/portfolio/slider/12_seventeen-album_02.jpg",
      ],
    },
    "genesis-gv80-black": {
      thumbnail: "/assets/portfolio/thumbnails/13_genesis-gv80-black.jpg",
      slider: [
        "/assets/portfolio/slider/13_genesis-gv80-black_01.jpg",
        "/assets/portfolio/slider/13_genesis-gv80-black_02.jpg",
      ],
    },
    "lg-uplus-ixi-o": {
      thumbnail: "/assets/portfolio/thumbnails/14_lg-uplus-ixi-o.jpg",
      slider: [],
    },
    "innisfree-brand-slogan": {
      thumbnail: "/assets/portfolio/thumbnails/15_innisfree-brand-slogan.jpg",
      slider: [
        "/assets/portfolio/slider/14_innisfree-brand-slogan_01.jpg",
        "/assets/portfolio/slider/14_innisfree-brand-slogan_02.jpg",
        "/assets/portfolio/slider/14_innisfree-brand-slogan_03.jpg",
      ],
    },
    "hankook-tire-warranty": {
      thumbnail: "/assets/portfolio/thumbnails/16_hankook-tire-warranty.jpg",
      slider: ["/assets/portfolio/slider/15_hankook-tire-warranty.jpg"],
    },
    "lg-styler-of": {
      thumbnail: "/assets/portfolio/thumbnails/17_lg-styler-of.jpg",
      slider: [
        "/assets/portfolio/slider/16_lg-styler-of_01.jpg",
        "/assets/portfolio/slider/16_lg-styler-of_02.jpg",
      ],
    },
    "samsung-display-synchroma": {
      thumbnail:
        "/assets/portfolio/thumbnails/18_samsung-display-synchroma.jpg",
      slider: [],
    },
    "olive-young-25th-anniversary": {
      thumbnail:
        "/assets/portfolio/thumbnails/19_olive-young-25th-anniversary.jpg",
      slider: [],
    },
    "samsung-smartthings-lifestyle": {
      thumbnail:
        "/assets/portfolio/thumbnails/20_samsung-smartthings-lifestyle.jpg",
      slider: [],
    },
    "hyundai-pleos-vision": {
      thumbnail: "/assets/portfolio/thumbnails/21_hyundai-pleos-vision.jpg",
      slider: [],
    },
    "samyang-tangle-renewal": {
      thumbnail: "/assets/portfolio/thumbnails/22_samyang-tangle-renewal.jpg",
      slider: [],
    },
    "odyssey-neo-g9": {
      thumbnail: "/assets/portfolio/thumbnails/23_odyssey-neo-g9.jpg",
      slider: [],
    },
    "samsung-ea-rebranding": {
      thumbnail: "/assets/portfolio/thumbnails/24_samsung-ea-rebranding.jpg",
      slider: [],
    },
    "lg-tone-of-voice": {
      thumbnail: "/assets/portfolio/thumbnails/25_lg-tone-of-voice.jpg",
      slider: [
        "/assets/portfolio/slider/25_lg-tone-of-voice_01.png",
        "/assets/portfolio/slider/25_lg-tone-of-voice_02.png",
        "/assets/portfolio/slider/25_lg-tone-of-voice_03.png",
      ],
    },
    "naver-website-renewal": {
      thumbnail: "/assets/portfolio/thumbnails/26_naver-website-renewal.jpg",
      slider: [
        "/assets/portfolio/slider/26_naver-website-renewal_01.png",
        "/assets/portfolio/slider/26_naver-website-renewal_02.png",
        "/assets/portfolio/slider/26_naver-website-renewal_03.png",
      ],
    },
    "lineage-w-slogan": {
      thumbnail: "/assets/portfolio/thumbnails/27_lineage-w-slogan.jpg",
      slider: ["/assets/portfolio/slider/27_lineage-w-slogan.png"],
    },
    "lg-enblock-website": {
      thumbnail: "/assets/portfolio/thumbnails/28_lg-enblock-website.jpg",
      slider: [
        "/assets/portfolio/slider/28_lg-enblock-website_01.jpg",
        "/assets/portfolio/slider/28_lg-enblock-website_02.jpg",
        "/assets/portfolio/slider/28_lg-enblock-website_03.jpg",
      ],
    },
    "lg-brand-book": {
      thumbnail: "/assets/portfolio/thumbnails/29_lg-brand-book.jpg",
      slider: [
        "/assets/portfolio/slider/29_lg-brand-book_01.jpg",
        "/assets/portfolio/slider/29_lg-brand-book_02.jpg",
        "/assets/portfolio/slider/29_lg-brand-book_03.jpg",
      ],
    },
    "ahc-brand-manifesto": {
      thumbnail: "/assets/portfolio/thumbnails/30_ahc-brand-manifesto.jpg",
      slider: [],
    },
    "aero-furniture-message-matrix": {
      thumbnail:
        "/assets/portfolio/thumbnails/31_aero-furniture-message-matrix.jpg",
      slider: [
        "/assets/portfolio/slider/31_aero-furniture-message-matrix_01.jpg",
        "/assets/portfolio/slider/31_aero-furniture-message-matrix_02.jpg",
        "/assets/portfolio/slider/31_aero-furniture-message-matrix_03.jpg",
      ],
    },
    "automotive-memory-features": {
      thumbnail:
        "/assets/portfolio/thumbnails/32_automotive-memory-features.jpg",
      slider: ["/assets/portfolio/slider/32_automotive-memory-features.jpg"],
    },
    "hankook-weatherflex": {
      thumbnail: "/assets/portfolio/thumbnails/33_hankook-weatherflex.jpg",
      slider: [
        "/assets/portfolio/slider/33_hankook-weatherflex_01.png",
        "/assets/portfolio/slider/33_hankook-weatherflex_02.png",
        "/assets/portfolio/slider/33_hankook-weatherflex_03.png",
      ],
    },
    "samsung-display-bus-wrap": {
      thumbnail: "/assets/portfolio/thumbnails/34_samsung-display-bus-wrap.jpg",
      slider: [
        "/assets/portfolio/slider/34_samsung-display-bus-wrap_01.jpg",
        "/assets/portfolio/slider/34_samsung-display-bus-wrap_02.jpg",
      ],
    },
    "samsung-oled-era": {
      thumbnail: "/assets/portfolio/thumbnails/35_samsung-oled-era.jpg",
      slider: [
        "/assets/portfolio/slider/35_samsung-oled-era_01.png",
        "/assets/portfolio/slider/35_samsung-oled-era_02.jpg",
        "/assets/portfolio/slider/35_samsung-oled-era_03.png",
        "/assets/portfolio/slider/35_samsung-oled-era_04.jpg",
        "/assets/portfolio/slider/35_samsung-oled-era_05.jpg",
      ],
    },
    "lg-newsletter-bite": {
      thumbnail: "/assets/portfolio/thumbnails/36_lg-newsletter-bite.jpg",
      slider: ["/assets/portfolio/slider/36_lg-newsletter-bite.png"],
    },
    "fc-online-mourinho": {
      thumbnail: "/assets/portfolio/thumbnails/37_fc-online-mourinho.jpg",
      slider: [],
    },
    "aestura-atobarrier": {
      thumbnail: "/assets/portfolio/thumbnails/38_aestura-atobarrier.jpg",
      slider: [],
    },
    "melon-music-sns": {
      thumbnail: "/assets/portfolio/thumbnails/39_melon-music-sns.jpg",
      slider: ["/assets/portfolio/slider/39_melon-music-sns.png"],
    },
    "huvitz-lens-edger": {
      thumbnail: "/assets/portfolio/thumbnails/40_huvitz-lens-edger.jpg",
      slider: [
        "/assets/portfolio/slider/40_huvitz-lens-edger_01.jpg",
        "/assets/portfolio/slider/40_huvitz-lens-edger_02.jpg",
      ],
    },
    "musinsa-global-launch": {
      thumbnail: "/assets/portfolio/thumbnails/41_musinsa-global-launch.jpg",
      slider: ["/assets/portfolio/slider/41_musinsa-global-launch.png"],
    },
    "hyundai-uam-tvc": {
      thumbnail: "/assets/portfolio/thumbnails/42_hyundai-uam-tvc.jpg",
      slider: [],
    },
    "kakao-pay-intro": {
      thumbnail: "/assets/portfolio/thumbnails/43_kakao-pay-intro.jpg",
      slider: ["/assets/portfolio/slider/43_kakao-pay-intro.jpg"],
    },
    "doosan-wheel-loader": {
      thumbnail: "/assets/portfolio/thumbnails/44_doosan-wheel-loader.jpg",
      slider: [
        "/assets/portfolio/slider/44_doosan-wheel-loader_01.png",
        "/assets/portfolio/slider/44_doosan-wheel-loader_02.png",
        "/assets/portfolio/slider/44_doosan-wheel-loader_03.png",
      ],
    },
    "sk-hynix-global-slogan": {
      thumbnail: "/assets/portfolio/thumbnails/45_sk-hynix-global-slogan.jpg",
      slider: [],
    },
    "laneige-sleeping-mask": {
      thumbnail: "/assets/portfolio/thumbnails/46_laneige-sleeping-mask.jpg",
      slider: [],
    },
    "kia-ev6-world-premiere": {
      thumbnail: "/assets/portfolio/thumbnails/47_kia-ev6-world-premiere.jpg",
      slider: [],
    },
    "medit-brand-manual": {
      thumbnail: "/assets/portfolio/thumbnails/48_medit-brand-manual.jpg",
      slider: ["/assets/portfolio/slider/48_medit-brand-manual.jpg"],
    },
    "kia-uefa-europa": {
      thumbnail: "/assets/portfolio/thumbnails/49_kia-uefa-europa.jpg",
      slider: [],
    },
    "hyundai-duty-free": {
      thumbnail: "/assets/portfolio/thumbnails/50_hyundai-duty-free.jpg",
      slider: [
        "/assets/portfolio/slider/50_hyundai-duty-free_01.png",
        "/assets/portfolio/slider/50_hyundai-duty-free_02.png",
      ],
    },
    "lg-signature-website": {
      thumbnail: "/assets/portfolio/thumbnails/51_lg-signature-website.jpg",
      slider: ["/assets/portfolio/slider/51_lg-signature-website.jpg"],
    },
    "samsung-microsd": {
      thumbnail: "/assets/portfolio/thumbnails/52_samsung-microsd.jpg",
      slider: ["/assets/portfolio/slider/52_samsung-microsd.jpg"],
    },
    "faceshop-cushion": {
      thumbnail: "/assets/portfolio/thumbnails/53_faceshop-cushion.jpg",
      slider: ["/assets/portfolio/slider/53_faceshop-cushion.jpg"],
    },
    "hyundai-shackleton": {
      thumbnail: "/assets/portfolio/thumbnails/54_hyundai-shackleton.jpg",
      slider: [],
    },
    "hanwha-corporate": {
      thumbnail: "/assets/portfolio/thumbnails/55_hanwha-corporate.jpg",
      slider: [],
    },
    "doosan-corporate": {
      thumbnail: "/assets/portfolio/thumbnails/56_doosan-corporate.jpg",
      slider: [],
    },
    "zic-global-slogan": {
      thumbnail: "/assets/portfolio/thumbnails/57_zic-global-slogan.jpg",
      slider: ["/assets/portfolio/slider/57_zic-global-slogan.jpg"],
    },
    "zflip-olympic-edition": {
      thumbnail: "/assets/portfolio/thumbnails/58_zflip-olympic-edition.png",
      slider: ["/assets/portfolio/slider/58_zflip-olympic-edition_01.jpg"],
    },
  },
  ye =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23f0f0f0" width="800" height="600"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
function ve(s) {
  const e = $[s];
  return (e == null ? void 0 : e.thumbnail) || ye;
}
function be(s) {
  const e = $[s];
  return (e == null ? void 0 : e.slider) || [];
}
const we = {
  video: "영상",
  online: "온라인",
  branding: "브랜딩",
  sns: "SNS",
  ooh: "OOH",
  script: "스크립트",
};
class ke {
  constructor(e) {
    ((this.container = h("div", "portfolio-container")),
      (this.filterContainer = h("div", "portfolio-filters")),
      (this.gridElement = h("div", "portfolio-grid")),
      (this.modal = e),
      (this.currentCategory = "all"),
      (this.currentLanguage = "ko"),
      window.addEventListener("resize", () => this.handleFilterLayout()));
  }
  render(e) {
    ((this.currentLanguage = e), this.renderFilters(), this.renderGrid());
  }
  renderFilters() {
    const e = ["all", "영상", "온라인", "브랜딩", "SNS", "OOH", "스크립트"],
      t = {
        all: "ALL",
        영상: "영상",
        온라인: "온라인",
        브랜딩: "브랜딩",
        SNS: "SNS",
        OOH: "OOH",
        스크립트: "스크립트",
      },
      n = {
        all: "ALL",
        영상: "Video",
        온라인: "Online",
        브랜딩: "Branding",
        SNS: "SNS",
        OOH: "OOH",
        스크립트: "Script",
      },
      i = this.currentLanguage === "ko" ? t : n;
    ((this.filterContainer.innerHTML = ""),
      e.forEach((o) => {
        const a = h("button", "portfolio-filter-btn");
        (o === this.currentCategory && a.classList.add("active"),
          (a.textContent = i[o]),
          a.addEventListener("click", () => this.filterByCategory(o)),
          this.filterContainer.appendChild(a));
      }),
      requestAnimationFrame(() => this.handleFilterLayout()));
  }
  handleFilterLayout() {
    const e = Array.from(
      this.filterContainer.querySelectorAll(".portfolio-filter-btn"),
    );
    if (e.length === 0) return;
    const t = e[0],
      n = e.slice(1),
      i = this.filterContainer.offsetWidth;
    e.forEach((r) => {
      ((r.style.flex = "0 0 auto"), (r.style.width = ""));
    });
    let o = 0;
    if (
      (e.forEach((r) => {
        o += r.offsetWidth + 8;
      }),
      o <= i)
    )
      return;
    if (e.slice(0, 3).reduce((r, c) => r + c.offsetWidth + 8, 0) > i) {
      t.style.flex = "1 0 100%";
      const r = `calc(${100 / 3}% - ${(8 * 2) / 3}px)`;
      n.forEach((c) => {
        ((c.style.flex = `0 0 ${r}`), (c.style.width = r));
      });
    }
  }
  filterByCategory(e) {
    ((this.currentCategory = e), this.renderFilters(), this.renderGrid());
  }
  renderGrid() {
    const e =
      this.currentCategory === "all"
        ? k
        : k.filter((t) =>
            t.mediaType
              .toLowerCase()
              .split(",")
              .map((o) => o.trim())
              .map((o) => we[o])
              .filter(Boolean)
              .includes(this.currentCategory),
          );
    ((this.gridElement.style.opacity = "0"),
      setTimeout(() => {
        ((this.gridElement.innerHTML = ""),
          e.forEach((t) => {
            const n = k.indexOf(t),
              i = h("div", "portfolio-item");
            (i.classList.add("portfolio-item-enter"),
              (i.dataset.index = n.toString()));
            const o = ve(t.id),
              a = h("img");
            ((a.src = o),
              (a.alt = d.getContent(t.title, this.currentLanguage)),
              i.appendChild(a),
              i.addEventListener("click", () => {
                this.modal.open(n, this.currentLanguage);
              }),
              this.gridElement.appendChild(i));
          }),
          requestAnimationFrame(() => {
            ((this.gridElement.style.opacity = "1"),
              this.gridElement
                .querySelectorAll(".portfolio-item-enter")
                .forEach((n, i) => {
                  setTimeout(() => {
                    n.classList.remove("portfolio-item-enter");
                  }, i * 30);
                }));
          }));
      }, 200));
  }
  getElement() {
    return (
      (this.container.innerHTML = ""),
      this.container.appendChild(this.filterContainer),
      this.container.appendChild(this.gridElement),
      this.container
    );
  }
}
function Se(s) {
  const e = s.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s?]+)/);
  return e ? e[1] : "";
}
function Ce(s) {
  const e = s.match(/[?&]t=(\d+)/);
  return e ? e[1] : null;
}
function Le(s, e = "maxres") {
  return `https://i.ytimg.com/vi/${s}/${{ maxres: "maxresdefault", sd: "sddefault", hq: "hqdefault", mq: "mqdefault", default: "default" }[e]}.jpg`;
}
function Te(s, e) {
  const t = [
    { quality: "maxresdefault", minWidth: 640 },
    { quality: "sddefault", minWidth: 400 },
    { quality: "hqdefault", minWidth: 400 },
    { quality: "mqdefault", minWidth: 200 },
    { quality: "default", minWidth: 0 },
  ];
  let n = 0;
  function i() {
    if (n >= t.length) return;
    const { quality: o, minWidth: a } = t[n++],
      r = `https://i.ytimg.com/vi/${s}/${o}.jpg`,
      c = new Image();
    ((c.onload = function () {
      const l = c.naturalWidth,
        g = c.naturalHeight;
      if (
        (console.log("[resolveYoutubeThumbnail]", {
          videoId: s,
          quality: o,
          url: r,
          w: l,
          h: g,
          minWidth: a,
        }),
        l < a && n < t.length)
      ) {
        (console.log(
          "[resolveYoutubeThumbnail] size too small, trying next quality",
        ),
          i());
        return;
      }
      typeof e == "function" && e(r, o, l, g);
    }),
      (c.onerror = function () {
        (console.log(
          "[resolveYoutubeThumbnail] load error for",
          o,
          "trying next",
        ),
          i());
      }),
      (c.src = r));
  }
  i();
}
function Ee(s, e, t = "Video", n = null) {
  const i = n ? `&start=${n}` : "";
  s.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${e}?autoplay=1${i}"
      title="${t}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  `;
}
const xe = {
  title: { ko: "키보드 단축키", en: "Keyboard Shortcuts" },
  sections: {
    portfolio: {
      title: { ko: "포트폴리오", en: "Portfolio" },
      shortcuts: {
        navigateProjects: { ko: "프로젝트 이동", en: "Navigate Projects" },
        navigateImages: { ko: "이미지 이동", en: "Navigate Images" },
      },
    },
    language: {
      title: { ko: "언어", en: "Language" },
      shortcuts: {
        english: { ko: "영어", en: "English" },
        korean: { ko: "한국어", en: "Korean" },
        toggle: { ko: "언어 전환", en: "Toggle Language" },
      },
    },
    audio: {
      title: { ko: "오디오", en: "Audio" },
      shortcuts: { mute: { ko: "음소거 / 해제", en: "Mute / Unmute" } },
    },
    navigation: {
      title: { ko: "사이트 탐색", en: "Site Navigation" },
      shortcuts: {
        about: { ko: "소개", en: "About" },
        services: { ko: "서비스", en: "Services" },
        clientsSay: { ko: "고객 후기", en: "Clients Say" },
        portfolio: { ko: "포트폴리오", en: "Portfolio" },
        back: { ko: "뒤로 (닫기)", en: "Back (Close)" },
      },
    },
  },
};
class qe {
  constructor() {
    ((this.element = h("div", "hotkey-modal")),
      (this.isOpen = !1),
      (this.language = "ko"),
      this.render(),
      this.setupEventListeners(),
      f.subscribe((e) => {
        e.language !== this.language &&
          ((this.language = e.language), this.render());
      }));
  }
  render() {
    const e = this.language,
      t = xe,
      n = t.sections;
    this.element.innerHTML = `
      <div class="hotkey-modal-overlay"></div>
      <div class="hotkey-modal-content">
        <button class="hotkey-modal-close">✕</button>
        <h2 class="hotkey-modal-title">${d.getContent(t.title, e)}</h2>

        <div class="hotkey-sections hotkey-sections-vertical">
          <div class="hotkey-column-left">
            <div class="hotkey-section">
              <h3>${d.getContent(n.portfolio.title, e)}</h3>
              <div class="hotkey-list">
                <div class="hotkey-item">
                  <kbd>←</kbd> <kbd>→</kbd>
                  <span>${d.getContent(n.portfolio.shortcuts.navigateProjects, e)}</span>
                </div>
                <div class="hotkey-item">
                  <kbd>Shift</kbd> + <kbd>←</kbd> <kbd>→</kbd>
                  <span>${d.getContent(n.portfolio.shortcuts.navigateImages, e)}</span>
                </div>
              </div>
            </div>

            <div class="hotkey-section">
              <h3>${d.getContent(n.language.title, e)}</h3>
              <div class="hotkey-list">
                <div class="hotkey-item hotkey-item-inline">
                  <div class="hotkey-inline-group">
                    <kbd>E</kbd>
                    <span>${d.getContent(n.language.shortcuts.english, e)}</span>
                  </div>
                  <div class="hotkey-inline-group">
                    <kbd>K</kbd>
                    <span>${d.getContent(n.language.shortcuts.korean, e)}</span>
                  </div>
                </div>
                <div class="hotkey-item">
                  <kbd>L</kbd>
                  <span>${d.getContent(n.language.shortcuts.toggle, e)}</span>
                </div>
              </div>
            </div>

            <div class="hotkey-section">
              <h3>${d.getContent(n.audio.title, e)}</h3>
              <div class="hotkey-list">
                <div class="hotkey-item">
                  <kbd>M</kbd>
                  <span>${d.getContent(n.audio.shortcuts.mute, e)}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="hotkey-column-right">
            <div class="hotkey-section">
              <h3>${d.getContent(n.navigation.title, e)}</h3>
              <div class="hotkey-list">
                <div class="hotkey-item">
                  <kbd>A</kbd>
                  <span>${d.getContent(n.navigation.shortcuts.about, e)}</span>
                </div>
                <div class="hotkey-item">
                  <kbd>S</kbd>
                  <span>${d.getContent(n.navigation.shortcuts.services, e)}</span>
                </div>
                <div class="hotkey-item">
                  <kbd>C</kbd>
                  <span>${d.getContent(n.navigation.shortcuts.clientsSay, e)}</span>
                </div>
                <div class="hotkey-item">
                  <kbd>P</kbd>
                  <span>${d.getContent(n.navigation.shortcuts.portfolio, e)}</span>
                </div>
                <div class="hotkey-item">
                  <kbd>B</kbd>
                  <span>${d.getContent(n.navigation.shortcuts.back, e)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  setupEventListeners() {
    (this.element.addEventListener("click", (e) => {
      (e.target.closest(".hotkey-modal-close") ||
        e.target.classList.contains("hotkey-modal-overlay")) &&
        this.close();
    }),
      (this.handleKeyDown = (e) => {
        if (!this.isOpen) return;
        const t = e.key.toLowerCase();
        (t === "escape" || t === "b") &&
          (e.preventDefault(), e.stopPropagation(), this.close());
      }),
      document.addEventListener("keydown", this.handleKeyDown, !0));
  }
  open() {
    ((this.isOpen = !0),
      this.element.classList.add("active"),
      (document.body.style.overflow = "hidden"));
  }
  close() {
    ((this.isOpen = !1),
      this.element.classList.remove("active"),
      (document.body.style.overflow = ""));
  }
  mount(e) {
    e.appendChild(this.element);
  }
  destroy() {
    this.handleKeyDown &&
      document.removeEventListener("keydown", this.handleKeyDown, !0);
  }
}
class Ae {
  constructor() {
    ((this.element = h("div", "portfolio-modal")),
      (this.currentIndex = -1),
      (this.language = "ko"),
      (this.hotkeyModal = new qe()),
      (this.savedScrollY = 0),
      this.render(),
      f.subscribe((e) => {
        e.portfolioSlug && e.currentSection === "portfolio"
          ? this.openBySlug(e.portfolioSlug, e.language)
          : !e.portfolioSlug &&
            this.element.classList.contains("active") &&
            (this.element.classList.remove("active"), this.unlockScroll());
      }));
  }
  render() {
    ((this.element.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-nav">
            <button class="modal-nav-btn prev-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="modal-nav-btn next-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="modal-language-toggle">
            <svg class="modal-globe-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span class="modal-lang-options">
              <span class="modal-lang-option modal-lang-en">EN</span>
              <span class="modal-lang-separator">|</span>
              <span class="modal-lang-option modal-lang-kr">KR</span>
            </span>
          </div>
          <div class="modal-header-actions">
            <button class="modal-hotkey-btn" title="Keyboard shortcuts">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/>
              </svg>
            </button>
            <button class="modal-close">✕</button>
          </div>
        </div>
        <div class="modal-body"></div>
      </div>
    `),
      this.element
        .querySelector(".modal-close")
        .addEventListener("click", () => this.close()),
      this.element
        .querySelector(".prev-btn")
        .addEventListener("click", () => this.navigate(-1)),
      this.element
        .querySelector(".next-btn")
        .addEventListener("click", () => this.navigate(1)));
    const i = this.element.querySelector(".modal-hotkey-btn");
    i &&
      i.addEventListener("click", () => {
        this.hotkeyModal.open();
      });
    const o = this.element.querySelector(".modal-language-toggle");
    (o &&
      o.addEventListener("click", () => {
        const a = this.language === "ko" ? "en" : "ko";
        this.switchLanguage(a);
      }),
      this.element.addEventListener("click", (a) => {
        a.target === this.element && this.close();
      }),
      (this.handleKeyDown = (a) => {
        if (!this.element.classList.contains("active")) return;
        const r = a.key.toLowerCase();
        a.key === "ArrowLeft" && !a.shiftKey
          ? (a.preventDefault(), this.navigate(-1))
          : a.key === "ArrowRight" && !a.shiftKey
            ? (a.preventDefault(), this.navigate(1))
            : a.key === "ArrowLeft" && a.shiftKey
              ? (a.preventDefault(), this.navigateCarousel(-1))
              : a.key === "ArrowRight" && a.shiftKey
                ? (a.preventDefault(), this.navigateCarousel(1))
                : (a.key === "Escape" || r === "b") &&
                  (a.preventDefault(), this.close());
      }),
      document.addEventListener("keydown", this.handleKeyDown));
  }
  lockScroll() {
    ((this.savedScrollY = window.scrollY || window.pageYOffset),
      document.documentElement.classList.add("modal-open"));
    const e =
      document.getElementById("app") || document.querySelector(".container");
    e && (e.setAttribute("inert", ""), e.setAttribute("aria-hidden", "true"));
  }
  unlockScroll() {
    (document.documentElement.classList.remove("modal-open"),
      window.scrollTo(0, this.savedScrollY || 0),
      (this.savedScrollY = 0));
    const e =
      document.getElementById("app") || document.querySelector(".container");
    e && (e.removeAttribute("inert"), e.removeAttribute("aria-hidden"));
  }
  setupMobileScrollCapture() {
    const e = this.element.querySelector(".modal-body");
    if (!e || e._scrollCaptureSetup) return;
    e._scrollCaptureSetup = !0;
    let t = 0,
      n = 0,
      i = !1;
    (e.addEventListener(
      "touchstart",
      (o) => {
        ((t = o.touches[0].clientY), (n = e.scrollTop), (i = !0));
      },
      { passive: !0 },
    ),
      e.addEventListener(
        "touchmove",
        (o) => {
          if (!i) return;
          const a = o.touches[0],
            r = t - a.clientY;
          e.scrollTop = n + r;
        },
        { passive: !0 },
      ),
      e.addEventListener(
        "touchend",
        () => {
          i = !1;
        },
        { passive: !0 },
      ));
  }
  navigate(e) {
    const t = this.currentIndex + e;
    if (t >= 0 && t < k.length) {
      const n = k[t],
        i = p.buildPath("portfolio", this.language, n.id);
      p.navigate(i);
    }
  }
  navigateCarousel(e) {
    const t = this.element.querySelector(".modal-carousel-container");
    if (!t) return;
    const n = t.querySelector(".modal-carousel-prev"),
      i = t.querySelector(".modal-carousel-next");
    e === -1 && n ? n.click() : e === 1 && i && i.click();
  }
  updateNavigationButtons() {
    const e = this.element.querySelector(".prev-btn"),
      t = this.element.querySelector(".next-btn");
    ((e.disabled = this.currentIndex <= 0),
      (t.disabled = this.currentIndex >= k.length - 1));
  }
  updateLanguageToggle() {
    const e = this.element.querySelector(".modal-lang-en"),
      t = this.element.querySelector(".modal-lang-kr");
    e &&
      t &&
      (this.language === "en"
        ? (e.classList.add("active"), t.classList.remove("active"))
        : (t.classList.add("active"), e.classList.remove("active")));
  }
  switchLanguage(e) {
    ((this.language = e), p.switchLanguage(e));
  }
  openBySlug(e, t) {
    const n = k.findIndex((i) => i.id === e);
    if (n !== -1) {
      ((this.currentIndex = n), (this.language = t));
      const i = k[n],
        o = this.element.querySelector(".modal-body"),
        a = this.element.querySelector(".modal-content");
      if (this.element.classList.contains("active"))
        this.animateContentChange(o, a, i, t);
      else {
        this.lockScroll();
        const c = this.renderModalContent(i, t);
        ((o.innerHTML = c),
          this.element.classList.add("active"),
          this.attachCarouselListeners(),
          this.setupMobileScrollCapture());
      }
      (this.updateNavigationButtons(), this.updateLanguageToggle());
    }
  }
  animateContentChange(e, t, n, i) {
    const o = e.querySelector(".youtube-facade iframe");
    (o && (o.src = ""), e && (e.scrollTop = 0));
    const a = t.offsetHeight;
    ((e.style.opacity = "0"),
      setTimeout(() => {
        const r = this.renderModalContent(n, i);
        ((e.innerHTML = r), this.attachCarouselListeners());
        const c = t.offsetHeight;
        ((t.style.height = `${a}px`),
          t.offsetHeight,
          requestAnimationFrame(() => {
            ((t.style.height = `${c}px`),
              setTimeout(() => {
                e.style.opacity = "1";
              }, 200),
              setTimeout(() => {
                t.style.height = "";
              }, 400));
          }));
      }, 150));
  }
  open(e, t) {
    const n = k[e],
      i = p.buildPath("portfolio", t, n.id);
    p.navigate(i);
  }
  close() {
    const e = this.element.querySelector(".youtube-facade iframe");
    (e && (e.src = ""),
      this.element.classList.remove("active"),
      this.unlockScroll());
    const { language: t } = f.getState(),
      n = p.buildPath("portfolio", t);
    p.navigate(n);
  }
  destroy() {
    this.handleKeyDown &&
      document.removeEventListener("keydown", this.handleKeyDown);
  }
  getMediaTypeLabels(e, t) {
    const n = {
      all: { ko: "ALL", en: "ALL" },
      video: { ko: "영상", en: "Video" },
      online: { ko: "온라인", en: "Online" },
      branding: { ko: "브랜딩", en: "Branding" },
      sns: { ko: "SNS", en: "SNS" },
      ooh: { ko: "OOH", en: "OOH" },
      script: { ko: "스크립트", en: "Script" },
    };
    return e
      .split(",")
      .map((o) => o.trim())
      .map((o) => {
        var a;
        return ((a = n[o.toLowerCase()]) == null ? void 0 : a[t]) || o;
      })
      .join(", ");
  }
  renderModalContent(e, t) {
    const n = d.getContent(e.title, t),
      i = d.getContent(e.mission, t),
      o = d.getContent(e.solution, t),
      a = this.getMediaTypeLabels(e.mediaType, t),
      r = "Mission",
      c = "Solution",
      l = "Client",
      g = "Media Type";
    let u = "";
    if (e.videoUrl) {
      const m = Se(e.videoUrl),
        v = Ce(e.videoUrl),
        y = Le(m);
      u = `
        <div class="modal-video-container youtube-facade" data-video-id="${m}" data-video-timestamp="${v || ""}" data-video-title="${n}">
          <img src="${y}" alt="${n}" loading="eager" decoding="async" />
          <button class="youtube-play-btn" aria-label="Play video">
            <svg width="68" height="48" viewBox="0 0 68 48">
              <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
              <path d="M 45,24 27,14 27,34" fill="#fff"></path>
            </svg>
          </button>
        </div>
      `;
    } else {
      const m = be(e.id);
      m.length === 1
        ? (u = `
          <div class="modal-image-container">
            <img src="${m[0]}" alt="${n}" />
          </div>
        `)
        : (u = `
          <div class="modal-carousel-container">
            <div class="modal-carousel">
              ${m
                .map(
                  (v, y) => `
                <div class="modal-carousel-item ${y === 0 ? "active" : ""}">
                  <img src="${v}" alt="${n} ${y + 1}" />
                </div>
              `,
                )
                .join("")}
            </div>
            ${
              m.length > 1
                ? `
              <button class="modal-carousel-prev" aria-label="Previous image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="modal-carousel-next" aria-label="Next image">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="modal-carousel-indicators">
                ${m
                  .map(
                    (v, y) => `
                  <button class="modal-carousel-indicator ${y === 0 ? "active" : ""}" data-index="${y}"></button>
                `,
                  )
                  .join("")}
              </div>
            `
                : ""
            }
          </div>
        `);
    }
    return `
      ${u}
      <h2 class="modal-title">${n}</h2>
      <div class="modal-info">
        <div class="modal-info-item">
          <h3>${r}</h3>
          <p>${i}</p>
        </div>
        <div class="modal-info-item">
          <h3>${c}</h3>
          <p>${o}</p>
        </div>
      </div>
      <div class="modal-meta">
        <div class="modal-meta-item">
          <span class="modal-meta-label">${l}:</span>
          <span>${e.client}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">${g}:</span>
          <span>${a}</span>
        </div>
      </div>
    `;
  }
  attachCarouselListeners() {
    const e = this.element.querySelectorAll(".youtube-facade");
    (console.log(
      "[ModalPortfolio] attachCarouselListeners called, facades:",
      e.length,
    ),
      e.forEach((l, g) => {
        const u = l.dataset.videoId,
          m = l.querySelector("img");
        (console.log(`[ModalPortfolio] facade ${g}`, {
          videoId: u,
          hasImg: !!m,
        }),
          u &&
            m &&
            (console.log("[ModalPortfolio] resolving thumbnail for", u),
            Te(u, (y, b, T, D) => {
              (console.log("[ModalPortfolio] resolved thumbnail", {
                videoId: u,
                url: y,
                quality: b,
                w: T,
                h: D,
              }),
                (m.src = y),
                (l.dataset.thumbnailQuality = b));
            })));
        const v = l.querySelector(".youtube-play-btn");
        v &&
          v.addEventListener("click", () => {
            const y = l.dataset.videoTimestamp || null,
              b = l.dataset.videoTitle;
            Ee(l, u, b, y);
          });
      }));
    const t = this.element.querySelector(".modal-carousel-container");
    if (!t) return;
    const n = t.querySelectorAll(".modal-carousel-item"),
      i = t.querySelectorAll(".modal-carousel-indicator"),
      o = t.querySelector(".modal-carousel-prev"),
      a = t.querySelector(".modal-carousel-next");
    if (n.length <= 1) return;
    let r = 0;
    const c = (l, g = null) => {
      if (l === r) return;
      let u;
      if (g) u = g;
      else {
        const b = r === n.length - 1 && l === 0,
          T = r === 0 && l === n.length - 1;
        b ? (u = "next") : T ? (u = "prev") : (u = l > r ? "next" : "prev");
      }
      const m = n[r],
        v = n[l],
        y = window.matchMedia("(max-width: 768px)").matches;
      (n.forEach((b) => {
        b.classList.remove(
          "exit-next",
          "exit-prev",
          "enter-next",
          "enter-prev",
          "is-animating",
        );
      }),
        m &&
          (y ? m.classList.add("is-animating") : m.classList.remove("active"),
          requestAnimationFrame(() => {
            m.classList.add(`exit-${u}`);
          })),
        v &&
          (v.classList.add("active"),
          y && v.classList.add("is-animating"),
          requestAnimationFrame(() => {
            v.classList.add(`enter-${u}`);
          })),
        setTimeout(() => {
          (n.forEach((b) => {
            b.classList.remove(
              "exit-next",
              "exit-prev",
              "enter-next",
              "enter-prev",
              "is-animating",
            );
          }),
            m && m !== v && m.classList.remove("active"));
        }, 450),
        i.forEach((b, T) => {
          b.classList.toggle("active", T === l);
        }),
        (r = l));
    };
    (o == null ||
      o.addEventListener("click", () => {
        const l = (r - 1 + n.length) % n.length;
        c(l, "prev");
      }),
      a == null ||
        a.addEventListener("click", () => {
          const l = (r + 1) % n.length;
          c(l, "next");
        }),
      i.forEach((l, g) => {
        l.addEventListener("click", () => {
          c(g);
        });
      }));
  }
  mount(e) {
    (document.body.appendChild(this.element),
      this.hotkeyModal.mount(document.body));
  }
}
class Me {
  constructor() {
    ((this.container = h("div", "services-container")),
      (this.gridElement = h("div", "services-grid")));
  }
  render(e = "ko") {
    ((this.gridElement.innerHTML = ""),
      P.forEach((t) => {
        const n = h("div", "service-item"),
          i = h("img");
        ((i.src = t.image[e] || t.image.ko),
          (i.alt = t.label[e] || t.id),
          n.appendChild(i),
          this.gridElement.appendChild(n));
      }));
  }
  getElement() {
    return (
      (this.container.innerHTML = ""),
      this.container.appendChild(this.gridElement),
      this.container
    );
  }
}
const j = [
  {
    quote: {
      ko: "해외의 감도와 한국적 맥락을 모두 이해하는, 보기 드문 감각의 팀입니다.",
      en: "A rare team that understands both global sensibility and Korean context.",
    },
    author: "Sam Seoul",
    role: { ko: "이해승 이사님", en: "Lee Hae-seung, Director" },
    isTestimonial: !0,
  },
  {
    quote: {
      ko: "브랜드를 이해하는 실력과 매력적으로 표현하는 센스를 겸비한 팀",
      en: "A team that combines brand expertise with a talent for compelling expression.",
    },
    author: "TBWA",
    role: { ko: "오혜주 수석국장", en: "Oh Hye-joo, Senior Director" },
    isTestimonial: !0,
  },
  {
    quote: {
      ko: "각 나라마다의 독특한 문화코드를 심어 클라이언트의 사업을 성공으로 이끕니다.",
      en: "They embed unique cultural codes of each country to lead clients to success.",
    },
    author: "Innocean",
    role: { ko: "김정환 NEXT 그룹장", en: "Kim Jeong-hwan, NEXT Group Head" },
    isTestimonial: !0,
  },
  {
    quote: {
      ko: "단어의 작은 뉘앙스 차이조차 놓치지 않는 섬세함. 일하는 내내 좋은 파트너를 만났다는 즐거움을 느끼게 해주었습니다.",
      en: "Their attention to even the smallest nuances in words made me feel throughout that we had found the right partner.",
    },
    author: "SK Planet",
    role: { ko: "윤태구 국장", en: "Yun Tae-gu, Director" },
    isTestimonial: !0,
  },
  {
    quote: {
      ko: "클라이언트의 고민을 다각도로 점검해주셔서 내부 설득에 큰 도움이 되었어요.",
      en: "Their multi-angle analysis of our challenges was a huge help in getting internal buy-in.",
    },
    author: "TBWA",
    role: { ko: "홍민지 부장", en: "Hong Min-ji, Manager" },
    isTestimonial: !0,
  },
  {
    quote: {
      ko: "스틱스앤스톤스와 함께하는 작업은 늘 즐겁다!",
      en: "Working with Sticks & Stones is always a joy!",
    },
    author: "Dexter Krema",
    role: { ko: "송은혜 차장", en: "Song Eun-hye, Assistant Manager" },
    isTestimonial: !0,
  },
  {
    quote: {
      ko: "세심한 제안과 열정적 지원으로, 프로젝트 내내 든든한 파트너십을 느낄 수 있었습니다.",
      en: "Their thoughtful proposals and passionate support made us feel a solid partnership throughout.",
    },
    author: "Innocean",
    role: { ko: "이유진 매니저", en: "Lee Yu-jin, Manager" },
    isTestimonial: !0,
  },
  {
    quote: {
      ko: "프로젝트 기간 내내 문제를 함께 고민하고 해결하려는 열정과 파트너십에 감명 받았습니다.",
      en: "I was impressed by their passion and partnership in tackling problems together throughout the project.",
    },
    author: "SK Planet",
    role: { ko: "박지연 플래너", en: "Park Ji-yeon, Planner" },
    isTestimonial: !0,
  },
  {
    quote: {
      ko: "Detail까지 챙겨주시는 세심함과 Customized Solution을 제시해 주시는 완벽함.",
      en: "Meticulous attention to detail and perfectly customized solutions.",
    },
    author: "SK Chemical",
    role: { ko: "강양리 대리", en: "Kang Yang-ri, Assistant Manager" },
  },
];
class He {
  constructor() {
    ((this.element = h("div", "quote-carousel-container")),
      (this.track = h("div", "carousel-track")),
      (this.currentIndex = 0),
      (this.slideInterval = 3500),
      (this.autoScroll = null),
      (this.language = "ko"),
      (this.isTransitioning = !1),
      (this.slideCount = j.length),
      (this.setsCount = 3),
      (this.slideWidth = 0),
      (this.prevBtn = h("button", "quote-carousel-prev")),
      (this.prevBtn.type = "button"),
      (this.prevBtn.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `),
      this.prevBtn.setAttribute("aria-label", "Previous quote"),
      (this.nextBtn = h("button", "quote-carousel-next")),
      (this.nextBtn.type = "button"),
      (this.nextBtn.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `),
      this.nextBtn.setAttribute("aria-label", "Next quote"),
      this.element.appendChild(this.track),
      this.element.appendChild(this.prevBtn),
      this.element.appendChild(this.nextBtn),
      this.setupEventListeners(),
      f.subscribe((e) => {
        e.language !== this.language &&
          ((this.language = e.language), this.render());
      }));
  }
  setupEventListeners() {
    (this.element.addEventListener("mouseenter", () => {
      this.stopAutoScroll();
    }),
      this.element.addEventListener("mouseleave", () => {
        this.startAutoScroll();
      }));
    const e = (n) => {
        (n.pointerType && n.isPrimary === !1) ||
          (n.preventDefault(),
          n.stopPropagation(),
          this.moveToSlide(this.currentIndex - 1));
      },
      t = (n) => {
        (n.pointerType && n.isPrimary === !1) ||
          (n.preventDefault(),
          n.stopPropagation(),
          this.moveToSlide(this.currentIndex + 1));
      };
    (window.PointerEvent
      ? (this.prevBtn.addEventListener("pointerup", e, { passive: !1 }),
        this.nextBtn.addEventListener("pointerup", t, { passive: !1 }),
        this.prevBtn.addEventListener("click", (n) => n.preventDefault()),
        this.nextBtn.addEventListener("click", (n) => n.preventDefault()))
      : (this.prevBtn.addEventListener("click", e),
        this.nextBtn.addEventListener("click", t)),
      this.prevBtn.addEventListener("mouseenter", () => {
        this.prevBtn.classList.add("hovered");
      }),
      this.prevBtn.addEventListener("mouseleave", () => {
        this.prevBtn.classList.remove("hovered");
      }),
      this.nextBtn.addEventListener("mouseenter", () => {
        this.nextBtn.classList.add("hovered");
      }),
      this.nextBtn.addEventListener("mouseleave", () => {
        this.nextBtn.classList.remove("hovered");
      }));
  }
  updateSlideWidth() {
    const e = this.element.getBoundingClientRect();
    this.slideWidth = e.width;
  }
  setSlideWidths() {
    const t = this.element.getBoundingClientRect().width;
    (this.track.querySelectorAll(".quote-slide").forEach((i) => {
      ((i.style.width = `${t}px`),
        (i.style.minWidth = `${t}px`),
        (i.style.maxWidth = `${t}px`));
    }),
      (this.slideWidth = t));
  }
  applyTransform() {
    const e = window.devicePixelRatio || 1,
      t = this.currentIndex * this.slideWidth,
      n = Math.round(t * e) / e;
    this.track.style.transform = `translate3d(-${n}px, 0, 0)`;
  }
  render() {
    this.track.innerHTML = "";
    for (let e = 0; e < this.setsCount; e++)
      j.forEach((t) => {
        const n = this.createSlide(t);
        this.track.appendChild(n);
      });
    (this.setSlideWidths(),
      (this.currentIndex = this.slideCount),
      (this.track.style.transition = "none"),
      this.applyTransform(),
      requestAnimationFrame(() => {
        this.track.style.transition = "";
      }));
  }
  createSlide(e) {
    const t = h("div", "quote-slide"),
      n = d.getContent(e.quote, this.language),
      i = d.getContent(e.role, this.language),
      o = h("div", "quote-box-dark");
    o.innerHTML = `
      <svg class="quote-icon" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307 0-5.98 6.834-10.693 8.468-10.693zm-10.833 0c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.739 4.129-4.308 4.129-3.241 0-4.83-2.547-4.83-5.307 0-5.98 6.833-10.693 8.468-10.693z" fill-rule="nonzero"/></svg>
      <p class="quote-text">${n}</p>
    `;
    const a = h("div", "author-box-light");
    return (
      (a.innerHTML = `
      <h4 class="author-name">${e.author}</h4>
      <p class="author-role">${i}</p>
    `),
      t.appendChild(o),
      t.appendChild(a),
      t
    );
  }
  moveToSlide(e) {
    if (this.isTransitioning) return;
    if (
      (this.updateSlideWidth(),
      this.slideCount * this.setsCount,
      e >= this.slideCount * 2)
    ) {
      const n = e % this.slideCount;
      ((this.track.style.transition = "none"),
        (this.currentIndex = this.slideCount + n),
        this.applyTransform(),
        this.track.offsetHeight,
        (this.track.style.transition = ""),
        (e = this.currentIndex + 1));
    } else if (e < 0) {
      const n = ((e % this.slideCount) + this.slideCount) % this.slideCount;
      ((this.track.style.transition = "none"),
        (this.currentIndex = this.slideCount + n),
        this.applyTransform(),
        this.track.offsetHeight,
        (this.track.style.transition = ""),
        (e = this.currentIndex - 1));
    }
    ((this.isTransitioning = !0),
      (this.currentIndex = e),
      this.applyTransform());
    const t = () => {
      ((this.isTransitioning = !1), clearTimeout(this._transitionFallback));
    };
    (clearTimeout(this._transitionFallback),
      (this._transitionFallback = setTimeout(t, 700)),
      this.track.addEventListener("transitionend", t, { once: !0 }),
      this.track.addEventListener("transitioncancel", t, { once: !0 }),
      this.track.addEventListener("webkitTransitionEnd", t, { once: !0 }));
  }
  autoAdvance() {
    this.moveToSlide(this.currentIndex + 1);
  }
  startAutoScroll() {
    (this.stopAutoScroll(),
      (this.autoScroll = setInterval(
        () => this.autoAdvance(),
        this.slideInterval,
      )));
  }
  stopAutoScroll() {
    this.autoScroll &&
      (clearInterval(this.autoScroll), (this.autoScroll = null));
  }
  mount(e) {
    (e.appendChild(this.element),
      this.render(),
      this.startAutoScroll(),
      (this.resizeObserver = new ResizeObserver(() => {
        (this.setSlideWidths(),
          (this.track.style.transition = "none"),
          this.applyTransform(),
          requestAnimationFrame(() => {
            this.track.style.transition = "";
          }));
      })),
      this.resizeObserver.observe(this.element));
  }
  unmount() {
    (this.stopAutoScroll(),
      this.resizeObserver &&
        (this.resizeObserver.disconnect(), (this.resizeObserver = null)),
      this.element.parentNode &&
        this.element.parentNode.removeChild(this.element));
  }
}
class _e {
  constructor() {
    ((this.element = h("div", "team-grid")),
      (this.language = "ko"),
      f.subscribe((e) => {
        e.language !== this.language &&
          ((this.language = e.language), this.render());
      }));
  }
  isMobile() {
    return window.innerWidth <= 768;
  }
  getViewportHeight() {
    return window.visualViewport
      ? window.visualViewport.height
      : window.innerHeight;
  }
  scrollCardIntoView(e) {
    const t = e.querySelector(".profile-reveal");
    t &&
      setTimeout(() => {
        const n = t.getBoundingClientRect(),
          i = window.visualViewport
            ? window.visualViewport.height
            : window.innerHeight;
        n.bottom > i - 50 &&
          t.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 450);
  }
  bindMobileCardToggle() {
    const e = this.element;
    if (!e || e.dataset.mobileToggleBound === "1") return;
    e.dataset.mobileToggleBound = "1";
    const t = () => {
        e.querySelectorAll(".team-member.mobile-active").forEach((o) => {
          o.classList.remove("mobile-active");
        });
      },
      n = (o) => {
        (o.classList.add("mobile-active"), this.scrollCardIntoView(o));
      },
      i = (o) => {
        if (
          !this.isMobile() ||
          (o.pointerType === "mouse" && o.button !== 0) ||
          o.target.closest("a, button, input, textarea, select, label")
        )
          return;
        const r = o.target.closest(".team-member");
        if (!r || !e.contains(r)) return;
        o.stopPropagation();
        const c = r.classList.contains("mobile-active");
        (t(), c || n(r));
      };
    (e.addEventListener("pointerup", i, { capture: !0 }),
      document.addEventListener(
        "pointerup",
        (o) => {
          this.isMobile() && (e.contains(o.target) || t());
        },
        { capture: !0 },
      ),
      e.addEventListener(
        "mouseenter",
        (o) => {
          if (this.isMobile()) return;
          const a = o.target.closest(".team-member");
          a && this.scrollCardIntoView(a);
        },
        { capture: !0 },
      ));
  }
  render() {
    ((this.element.innerHTML = ""),
      I.forEach((e) => {
        const t = this.createProfileCard(e);
        this.element.appendChild(t);
      }),
      this.bindMobileCardToggle());
  }
  createProfileCard(e) {
    const t = h("div", "team-member"),
      n =
        typeof e.name == "string"
          ? e.name
          : d.getContent(e.name, this.language),
      i = d.getContent(e.role, this.language),
      o = d.getContent(e.education, this.language),
      a = d.getContent(e.experience, this.language),
      r = o
        .map((l) => `<strong>${l.school}</strong><br>${l.degree}`)
        .join("<br>"),
      c = a.map((l) => `<li>${l}</li>`).join("");
    return (
      (t.innerHTML = `
      <div class="diamond-wrapper">
        <div class="initial-overlay">${e.initial}</div>
        <div class="diamond-shape">
          <img src="${e.image}" alt="${n}" class="diamond-image">
        </div>
      </div>
      <div class="member-info">
        <h3 class="name">${n}</h3>
        <p class="role">${i}</p>
        <div class="profile-reveal">
          <div class="edu-section">
            ${r}
          </div>
          <ul class="exp-list">
            ${c}
          </ul>
        </div>
      </div>
    `),
      t.addEventListener("mouseenter", () => {
        this.isMobile() || this.scrollCardIntoView(t);
      }),
      t
    );
  }
  mount(e) {
    (e.appendChild(this.element), this.render());
  }
  unmount() {
    this.element.parentNode &&
      this.element.parentNode.removeChild(this.element);
  }
}
class je {
  constructor() {
    ((this.element = h("div", "client-marquee-container")),
      (this.clients = [
        "amorepacific.png",
        "cheil.png",
        "hsad.png",
        "hyundai.png",
        "innocean.png",
        "kia.png",
        "lg.png",
        "pledis.png",
        "samsung.png",
        "skhynix.png",
        "tbwa.png",
      ]));
  }
  render() {
    const e = `
      <div class="marquee-track">
        ${this.renderLogos()}
        ${this.renderLogos()}
      </div>
    `;
    ((this.element.innerHTML = e), this.attachHoverListeners());
  }
  attachHoverListeners() {
    this.element.querySelectorAll(".marquee-item").forEach((t) => {
      (t.addEventListener("mouseenter", () => {
        t.classList.add("hovered");
      }),
        t.addEventListener("mouseleave", () => {
          t.classList.remove("hovered");
        }));
    });
  }
  renderLogos() {
    return this.clients
      .map(
        (e) => `
        <div class="marquee-item">
          <img src="/assets/images/clients/${e}" alt="${e.replace(".png", "")}" />
        </div>
      `,
      )
      .join("");
  }
  mount(e) {
    (e.appendChild(this.element), this.render());
  }
}
class Be {
  constructor() {
    ((this.element = h("div", "space-gallery-container")),
      (this.spaceImages = [
        "bag.jpg",
        "cards.jpg",
        "discussion.jpg",
        "doorlogo.jpg",
        "lighting.jpg",
        "notepad.jpg",
      ]));
  }
  render() {
    const e = `
      <div class="space-grid">
        ${this.renderImages()}
      </div>
      <div class="space-marquee">
        <div class="space-marquee-track">
          ${this.renderMarqueeImages()}
          ${this.renderMarqueeImages()}
        </div>
      </div>
    `;
    this.element.innerHTML = e;
  }
  renderImages() {
    return this.spaceImages
      .map(
        (e) => `
        <div class="space-item">
          <img src="/assets/images/space/${e}" alt="Office space" />
        </div>
      `,
      )
      .join("");
  }
  renderMarqueeImages() {
    return this.spaceImages
      .map(
        (e) => `
        <div class="space-marquee-item">
          <img src="/assets/images/space/${e}" alt="Office space" />
        </div>
      `,
      )
      .join("");
  }
  mount(e) {
    (e.appendChild(this.element), this.render());
  }
}
class Oe {
  constructor() {
    ((this.element = h("div", "testimonials-section")), (this.language = "ko"));
  }
  getLaurelSVG() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
      <path fill="currentColor" d="M94,13.3c-14.7,1.8-24,8.9-26.7,20c-0.4,1.7-0.7,5.2-0.7,7.9V46l-3.8,5c-4.6,6.2-8.3,12.3-11.8,19.7c-1.5,3.1-2.8,5.8-2.9,5.9c-0.3,0.4-3.5-3.6-5-6.4c-1.3-2.5-1.5-3.3-1.6-6.4c0-3.4,0-3.6,1.3-4.3c1.2-0.7,1.4-0.7,2.6,0.2c1.1,0.8,1.4,1.5,1.6,3.6c0.3,2.5,1.5,5.7,2.2,5.7c0.2,0,0.6-1,1-2.2c0.3-1.2,1.4-4.1,2.4-6.6c3-7,3.5-9.4,3.2-14.1c-0.2-4.3-1.7-9.1-3.2-10.8c-1.7-1.7-3.8-1.2-7.5,1.9C38.6,42.6,33.4,49.1,31,55c-4.1,9.8-0.7,20.3,9,28.1c1.9,1.5,3.8,3,4,3.3c0.5,0.4,0.4,1.4-0.5,5c-2.6,10.4-3.8,22.8-3.2,32.9c0.2,3.3,0.3,6,0.2,6.1c0,0.1-1.4-0.1-3-0.6c-7.6-2-14.7-7.7-13.4-10.9c1-2.5,3.5-2.4,6.2,0.5c1.9,2,6,4.4,7.4,4.4c0.3,0,0.2-1.2-0.3-3.5c-0.5-1.9-1.4-5.6-2-8.3c-0.6-2.7-1.9-6.3-2.7-8c-1.9-4-6.1-8.5-10-10.9c-5.2-3-6.9-2.3-8.7,4c-5.8,20.1,0,34.8,15.6,39.8c2.1,0.7,5.8,1.3,8.1,1.5l4.2,0.3l1.1,4.5c1.8,7.6,5,16.1,8.5,23.1l3.4,6.8l-2.5,0.2c-5.8,0.6-12.4-1.1-16.6-4.3c-2.7-2-3.3-3.8-1.9-5.4c1.2-1.3,2.6-1.1,5.4,0.8c2.7,1.8,6.9,3.2,8.9,3c1.2-0.1,1.1-0.2-2.2-4.7c-6.5-8.5-11.6-12.7-18-14.9c-2.7-1-4.1-1.1-9.8-1.1c-6.5,0-6.6,0-7.6,1.2c-0.8,1-0.9,1.6-0.6,4.2c1.4,12.8,8.2,23.3,18.5,28.3c5,2.4,8.4,3.2,15.3,3.5c5,0.2,7,0,10.7-0.7c2.5-0.5,4.9-1.1,5.3-1.2c0.5-0.2,1.6,0.8,3.8,3.6c6,7.8,18.7,19.8,24.9,23.6c1,0.6,1.8,1.3,1.8,1.6c0,0.7-5.4,3-9.2,4c-6.8,1.7-18.1,1.6-19.9-0.2c-1-1-1.1-2.6-0.4-3.8c0.4-0.6,1.9-0.7,8.2-0.8c4.8,0,8.7-0.2,10.1-0.7c2.4-0.6,3.9-1.4,2.6-1.4c-0.4,0-3.8-1.7-7.7-3.9c-9.9-5.4-13.6-6.7-20.1-7c-6-0.2-10,0.5-15.5,3c-5.3,2.5-5.8,3.7-3.3,8.3c5,9.5,15,17.3,24.7,19.3c4.7,1,12.7,0.7,17.6-0.8c4.8-1.3,12.3-5,16.8-8.3c2-1.5,4.1-2.7,4.6-2.7c0.5,0,2.8,0.9,5.1,2c2.3,1,5.1,2.3,6.3,2.8c1.2,0.5,3.2,1.3,4.5,1.9l2.4,1l-5.9,2.9c-6.5,3.1-12.8,7-15.2,9.7c-2,2.1-2.1,4.3-0.3,5.9c1.9,1.6,3.1,1.4,6.7-1.5c1.8-1.4,5.2-3.7,7.6-5c4.7-2.6,16.4-7.6,17.8-7.6c1.4,0,13.1,5,17.8,7.6c2.4,1.3,5.8,3.6,7.6,5c3.6,2.9,4.9,3.1,6.7,1.5c1.9-1.6,1.8-3.8-0.3-5.9c-2.5-2.6-9.3-6.9-15.4-9.7c-3-1.4-5.5-2.7-5.5-2.9c0-0.1,1.3-0.8,3-1.4c1.6-0.6,5.7-2.4,9.1-3.9l6.2-2.8l1.4,1c6.6,4.9,13.7,8.7,19.8,10.4c5.5,1.6,13,1.8,18.2,0.5c10.5-2.5,19.4-9.8,24.6-19.9c1.8-3.6,1.3-5-2.6-6.9c-5.6-2.8-8.6-3.5-15.5-3.5c-6,0-6.7,0.1-10.4,1.5c-2.1,0.9-7.1,3.2-11,5.3c-3.9,2.1-7.3,3.9-7.7,3.9c-1.2,0,0.2,0.8,2.6,1.4c1.5,0.4,5.3,0.7,10.1,0.7c6.3,0,7.8,0.2,8.2,0.8c0.7,1.1,0.5,2.8-0.4,3.8c-1.8,1.8-13.1,2-19.9,0.2c-3.7-0.9-9.2-3.2-9.2-3.9c0-0.2,1.2-1.2,2.7-2.3c7.3-5,18-15.2,24-23c2.2-2.9,3.2-3.9,3.8-3.6c0.4,0.1,2.8,0.7,5.3,1.2c3.7,0.8,5.7,0.9,10.7,0.7c6.9-0.3,10.3-1,15.1-3.4c10-5,16.6-14.4,18.5-26.7c1-6.8,0-7.7-9-7.3c-4.5,0.1-6.7,0.5-9,1.3c-6.2,2.2-11.3,6.4-17.7,14.8c-3.4,4.4-3.5,4.5-2.2,4.7c2,0.2,6.1-1.2,8.9-3c2.8-1.9,4.2-2.1,5.4-0.8c1.4,1.6,0.8,3.4-1.9,5.4c-4.2,3.2-10.9,4.9-16.6,4.3l-2.5-0.2l3.4-6.8c3.5-7,6.7-15.5,8.5-23.1l1.1-4.5l3.8-0.3c16.7-1.2,26.3-11.1,26.4-26.9c0-6.4-2.4-17.4-4.3-19.3c-0.5-0.5-1.5-0.9-2.2-0.9c-2,0-7,3.2-10.1,6.5c-3.5,3.7-5.4,7.6-6.9,14c-0.7,2.8-1.6,6.6-2.1,8.4c-0.6,2.3-0.7,3.5-0.3,3.5c1.4,0,5.5-2.5,7.4-4.4c2.8-2.9,4.8-3,6.1-0.4c1.6,3-5.7,8.9-13.3,10.9c-1.6,0.4-3,0.7-3,0.6c-0.1-0.1,0-2.6,0.2-5.6c0.7-11.1-0.9-25.8-4.1-36.9c-0.2-0.8,0.4-1.6,3.5-4c7.8-6.2,11.5-12.7,11.5-20.1c0-4.3-0.6-6.7-2.7-10.9c-2.8-5.5-7-10.4-13.3-15.6c-5.3-4.4-7.5-3.7-9.6,3.1c-1.8,5.7-1.5,10.5,1,16.8c1,2.5,2.4,6.2,3,8.2c0.7,2,1.5,3.7,1.7,3.7c0.7,0,2.2-4,2.2-6c0-3.1,2.3-4.7,4.6-3.2c1.1,0.8,1.2,1,1,4.2c-0.2,2.7-0.6,4-1.8,6.3c-1.7,3.1-4.9,6.9-5.2,6c-0.1-0.3-1.6-3.5-3.4-7.1c-3.3-6.7-8.3-14.8-12.4-19.9l-2.2-2.9l-0.2-6.4c-0.2-5.4-0.4-7-1.5-9.7c-2.4-6.2-6.1-10.1-12.5-13.2c-6-2.9-13.5-4.3-22.7-4.3c-5,0-6.8,0.6-7.6,2.4c-0.7,1.6-0.5,2.8,1.5,9c3.7,11.6,9,19.2,16.3,23.7c4.8,2.8,8.1,3.7,15.2,3.8l6.2,0.1l3.2,4.5c1.8,2.5,4.5,6.4,5.9,8.9c2.4,4,6.9,12.9,6.9,13.7c0,1-4.3-3.3-9-8.7c-7.7-9-11.9-11.9-19.8-13.3c-4.1-0.7-11-0.6-12.7,0.3c-1.1,0.6-2,3-1.6,4.2c0.1,0.4,1.5,2.1,3,3.7c1.5,1.6,4.5,5.4,6.7,8.6c9,12.9,14.7,16.1,28.1,16.1c3.5,0,7-0.1,7.7-0.3c1.2-0.3,1.3-0.2,1.8,1.4c2.2,8.1,4,21.8,3.7,29.4l-0.1,4.3l-1.6-5c-3.9-12.4-6.2-17.3-10.1-21.3c-4.6-4.7-12.7-6.8-14.9-3.9c-0.9,1.2-1,1.5-0.4,4.5c0.3,1.8,0.7,7.6,1,12.8c0.2,5.2,0.7,10.4,1,11.4c2,6.8,7.6,11.1,18.4,13.9l4.8,1.2l-0.6,2.5c-1.8,7.7-4.3,14.5-8.1,22.2l-2.9,6l-0.3-10c-0.2-8.9-0.4-10.3-1.3-12.8c-2-5.1-6-9-12.3-12.2c-3.5-1.7-4.8-1.9-6.2-0.5c-1.2,1.1-1.4,1.8-1.7,6.9c-0.1,2.1-0.8,6.6-1.5,10c-0.7,3.6-1.2,7.9-1.2,10.2c0,3.6,0.1,4.3,1.6,7.1c2,3.8,5.4,6.8,11.3,9.6c2.2,1.1,4.2,2,4.3,2.1c0.4,0.3-4,5.7-8.7,10.5c-5,5.2-14.2,13-14.4,12.2c-0.1-0.2,0.6-2.1,1.5-4c2-4.3,3.4-8.8,3.9-12.1c0.7-5.3-1.7-12.1-6.5-18.5c-3-3.9-4.3-4.8-6.5-4c-1.2,0.4-1.8,1.2-3.1,4c-0.9,1.9-3.3,5.9-5.5,8.9c-2.1,3-4.5,6.8-5.4,8.5c-1.4,2.8-1.5,3.5-1.5,7.4c0,4,0.1,4.6,1.8,7.9c1,1.9,3,5.1,4.4,7c1.4,1.9,2.6,3.5,2.6,3.7c0,0.6-20.4,8.9-21.9,8.9c-1.5,0-22-8.3-22-8.9c0-0.1,1.2-1.8,2.6-3.7c3.9-5,6-9.7,6.3-13.7c0.3-5-0.7-7.6-6.5-16.2c-2.8-4-5.6-8.7-6.3-10.3c-1-2.2-1.7-3-2.8-3.5c-2.1-0.9-3.7,0-6.7,4c-5.1,6.8-7.2,13.3-6.3,19.6c0.5,3.3,2.3,8.6,4.4,12.6c0.5,1,0.9,2.1,0.8,2.4c-0.3,0.8-9.4-6.8-14.5-12.1c-4.7-4.9-9.1-10.2-8.7-10.5c0.1-0.1,2-1,4.3-2.1c5.9-2.9,9.3-5.8,11.3-9.6c1.5-2.8,1.6-3.5,1.6-7.1c0-2.4-0.6-7-1.5-11.5c-0.8-4.1-1.4-8.9-1.4-10.4c0-1.6-0.3-3.5-0.7-4.2c-1.2-2.4-2.9-2.5-7-0.5c-6.6,3.3-10.9,7.9-12.8,13.7c-0.9,2.8-1,4.2-1,12.2l0,9l-1.6-2.9c-3.3-5.8-7.8-17.4-9.5-24.9l-0.7-3l1.2-0.3c10.2-2.2,16.5-5.4,19.6-10c2.5-3.5,2.9-5.7,3.3-16.1c0.2-5.2,0.7-11,1-12.8c0.5-3,0.5-3.3-0.3-4.5c-1.9-2.5-7.5-1.7-12.5,1.8c-4.8,3.3-8.4,10-11.9,21.7c-0.8,2.9-1.7,5.6-2,6c-0.7,1.1,0-14.6,0.8-20.5c0.7-4.5,2.8-13.6,3.2-14.1c0-0.1,2.1,0,4.4,0.3c7.3,0.8,14.6-0.3,19.9-3c3.9-2,7.7-5.9,12.6-12.9c2.2-3,5.2-6.9,6.7-8.6c1.5-1.7,2.9-3.4,3.1-3.8c0.4-1.1-0.5-3.6-1.6-4.2c-1.7-0.9-8.5-1-12.7-0.3c-7.9,1.4-12.1,4.2-19.9,13.4c-4.9,5.6-8.8,9.5-8.8,8.5c0-0.9,4.8-10.2,7.3-14.4c1.5-2.5,4.1-6.3,5.8-8.6l3.1-4.2l3.9,0.2c14.2,0.9,25.7-7.2,31.7-22.3c1.6-4,3.9-11.5,3.9-12.8c0-0.5-0.5-1.5-1.1-2.2c-1.1-1.3-1.2-1.3-7-1.4C100,12.9,95.8,13.1,94,13.3z"/>
    </svg>`;
  }
  createCard(e, t) {
    const n = h("div", "testimonial-card"),
      i = h("div", "testimonial-laurel");
    i.innerHTML = this.getLaurelSVG();
    const o = d.getContent(e.quote, t),
      a = d.getContent(e.author, t),
      r = h("div", "testimonial-content"),
      c = h("p", "testimonial-quote");
    c.textContent = o;
    const l = h("p", "testimonial-author");
    return (
      (l.textContent = a),
      r.appendChild(c),
      r.appendChild(l),
      n.appendChild(i),
      n.appendChild(r),
      n
    );
  }
  shuffleAndPick(e, t) {
    return [...e].sort(() => Math.random() - 0.5).slice(0, t);
  }
  render(e) {
    this.language = e;
    const t = h("div", "testimonials-grid");
    (e === "ko"
      ? this.shuffleAndPick(M, 4).forEach((i) => {
          const o = this.createCard(i, "ko");
          t.appendChild(o);
          const a = this.createCard(i, "en");
          (a.classList.add("testimonial-translation"), t.appendChild(a));
        })
      : M.forEach((n) => {
          t.appendChild(this.createCard(n, e));
        }),
      (this.element.innerHTML = ""),
      this.element.appendChild(t));
  }
  mount(e) {
    e.appendChild(this.element);
  }
  unmount() {
    this.element.parentNode &&
      this.element.parentNode.removeChild(this.element);
  }
}
class Ie {
  constructor() {
    ((this.element = h("div", "content-box")),
      (this.innerElement = h("div", "content-inner")),
      this.element.appendChild(this.innerElement),
      (this.portfolioModal = new Ae()),
      (this.portfolioGrid = new ke(this.portfolioModal)),
      (this.servicesGrid = new Me()),
      (this.quoteCarousel = new He()),
      (this.teamProfiles = new _e()),
      (this.clientMarquee = new je()),
      (this.spaceGallery = new Be()),
      (this.testimonialsGrid = new Oe()));
  }
  render(e) {
    if (!e.currentSection) {
      ((this.innerElement.innerHTML = ""), (this._lastRendered = null));
      return;
    }
    const t = e.currentSection,
      n = e.language,
      i = `${t}:${n}`;
    this._lastRendered !== i &&
      ((this._lastRendered = i),
      t === "portfolio"
        ? this.renderPortfolio(n)
        : t === "services"
          ? this.renderServices(n)
          : t === "about"
            ? this.renderAbout(n)
            : t === "clients" && this.renderClients(n));
  }
  renderAbout(e) {
    const t = d.getContent(C.title, e),
      n = d.getContent(C.subtitle, e),
      i = d.getContent(C.downloadButton, e),
      o = d.getContent(C.video.title, e),
      a = C.sectionHeadings;
    this.innerElement.innerHTML = `
      <div class="about-content">
        <h2 class="about-title">${t}</h2>
        <p class="about-subtitle">${n}</p>

        <div class="about-video">
          <iframe
            width="100%"
            height="100%"
            src="${C.video.url}"
            title="${o}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>

        <a href="/assets/files/SticksandStones_CompanyBrochure.pdf" download class="company-download-btn">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="download-arrow" d="M10 3V13" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <path class="download-arrow" d="M6 10L10 14L14 10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="download-tray" d="M3 17H17" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
          <span>${i}</span>
        </a>
      </div>
    `;
    const r = h("div", "team-section-title");
    ((r.innerHTML = `<h2>${d.getContent(a.team, e)}</h2>`),
      this.innerElement.appendChild(r),
      this.teamProfiles.mount(this.innerElement));
    const c = h("div", "team-section-title");
    ((c.innerHTML = `<h2>${d.getContent(a.clientsSay, e)}</h2>`),
      this.innerElement.appendChild(c),
      this.quoteCarousel.mount(this.innerElement));
    const l = h("div", "team-section-title");
    ((l.innerHTML = `<h2>${d.getContent(a.ourClients, e)}</h2>`),
      this.innerElement.appendChild(l),
      this.clientMarquee.mount(this.innerElement));
    const g = h("div", "team-section-title");
    ((g.innerHTML = `<h2>${d.getContent(a.ourSpace, e)}</h2>`),
      this.innerElement.appendChild(g),
      this.spaceGallery.mount(this.innerElement));
    const u = h("div");
    ((u.innerHTML = this.renderCallToAction(e)),
      this.innerElement.appendChild(u),
      this.attachCTAListeners());
  }
  renderServices(e) {
    ((this.innerElement.innerHTML = ""),
      this.servicesGrid.render(e),
      this.innerElement.appendChild(this.servicesGrid.getElement()));
    const t = h("div");
    ((t.innerHTML = this.renderCallToAction(e)),
      this.innerElement.appendChild(t),
      this.attachCTAListeners());
  }
  renderPortfolio(e) {
    ((this.innerElement.innerHTML = ""),
      this.portfolioGrid.render(e),
      this.innerElement.appendChild(this.portfolioGrid.getElement()));
    const t = h("div");
    ((t.innerHTML = this.renderCallToAction(e)),
      this.innerElement.appendChild(t),
      this.attachCTAListeners());
  }
  renderClients(e) {
    ((this.innerElement.innerHTML = ""),
      this.quoteCarousel.mount(this.innerElement),
      this.testimonialsGrid.render(e),
      this.testimonialsGrid.mount(this.innerElement));
    const t = h("div");
    ((t.innerHTML = this.renderCallToAction(e)),
      this.innerElement.appendChild(t),
      this.attachCTAListeners());
  }
  renderCallToAction(e) {
    const t = d.getContent(C.cta.heading, e),
      n = d.getContent(C.cta.button, e);
    return `
      <div class="cta-section">
        <h2 class="cta-heading">${t}</h2>
        <button type="button" class="cta-button">${n}</button>
      </div>
    `;
  }
  attachCTAListeners() {
    this.element.querySelectorAll(".cta-button").forEach((t) => {
      t.addEventListener("click", (n) => {
        (n.preventDefault(),
          n.stopPropagation(),
          window.dispatchEvent(new CustomEvent("openContactTab")));
      });
    });
  }
  mount(e) {
    (e.appendChild(this.element), this.portfolioModal.mount(document.body));
  }
}
class Pe {
  constructor() {
    ((this.element = h("div", "language-toggle")),
      (this.scrollContainer = null),
      (this.element.innerHTML = `
      <svg class="globe-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="2"/>
      </svg>
      <span class="lang-options">
        <span class="lang-option lang-en">EN</span>
        <span class="lang-separator">|</span>
        <span class="lang-option lang-kr">KR</span>
      </span>
    `),
      this.element.addEventListener("click", () => {
        const t = f.getState().language === "ko" ? "en" : "ko";
        this.handleLanguageChange(t);
      }),
      f.subscribe((e) => this.render(e)),
      this.setupScrollListener());
  }
  setupScrollListener() {
    window.addEventListener(
      "scroll",
      () => {
        this.updateScrollState();
      },
      !0,
    );
  }
  updateScrollState() {
    const e = document.querySelector(".container.stateExpanding"),
      t = window.innerHeight / 2 - 35;
    (e ? e.scrollTop : window.scrollY) > t
      ? this.element.classList.add("scrolled")
      : this.element.classList.remove("scrolled");
  }
  handleLanguageChange(e) {
    p.switchLanguage(e);
  }
  render(e) {
    const t = this.element.querySelector(".lang-en"),
      n = this.element.querySelector(".lang-kr");
    (e.language === "en"
      ? (t.classList.add("active"), n.classList.remove("active"))
      : (n.classList.add("active"), t.classList.remove("active")),
      this.updateScrollState(),
      e.currentSection
        ? setTimeout(() => {
            const i = document.querySelector(".container.stateExpanding");
            i &&
              i !== this.scrollContainer &&
              ((this.scrollContainer = i),
              i.addEventListener("scroll", () => {
                this.updateScrollState();
              }));
          }, 50)
        : (this.scrollContainer = null));
  }
  mount(e) {
    e.appendChild(this.element);
  }
}
class $e {
  constructor() {
    ((this.element = h("div", "audio-toggle")),
      (this.isMuted = q.getMuteState()),
      this.init());
  }
  init() {
    const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    (e.classList.add("audio-icon"),
      e.setAttribute("width", "18"),
      e.setAttribute("height", "18"),
      e.setAttribute("viewBox", "0 0 24 24"),
      e.setAttribute("fill", "none"),
      e.setAttribute("stroke", "currentColor"),
      e.setAttribute("stroke-width", "2"),
      e.setAttribute("stroke-linecap", "round"),
      e.setAttribute("stroke-linejoin", "round"),
      (this.speakerIcon = e),
      this.updateIcon(),
      this.element.appendChild(e),
      this.element.addEventListener("click", () => {
        this.toggle();
      }));
  }
  updateIcon() {
    ((this.speakerIcon.innerHTML = ""),
      this.isMuted
        ? (this.speakerIcon.innerHTML = `
        <path d="M11 5L6 9H2v6h4l5 4V5z"/>
        <line x1="23" y1="9" x2="17" y2="15"/>
        <line x1="17" y1="9" x2="23" y2="15"/>
      `)
        : (this.speakerIcon.innerHTML = `
        <path d="M11 5L6 9H2v6h4l5 4V5z"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
      `));
  }
  toggle() {
    this.setMuted(!this.isMuted);
  }
  setMuted(e) {
    ((this.isMuted = e), q.toggleMute(), this.updateIcon());
  }
  mount(e) {
    e.appendChild(this.element);
  }
  unmount() {
    this.element.parentNode &&
      this.element.parentNode.removeChild(this.element);
  }
}
class De {
  constructor() {
    ((this.element = h("button", "close-button")),
      (this.element.innerHTML = "✕"),
      this.element.addEventListener("click", (e) => {
        (e.stopPropagation(), this.handleClose());
      }));
  }
  handleClose() {
    const { language: e } = f.getState(),
      t = e === "en" ? "/en/" : "/";
    p.navigate(t);
  }
  mount(e) {
    e.appendChild(this.element);
  }
}
const We = [
    {
      category: "services",
      question: { ko: "카피는 누가 작업하나요?", en: "Who writes the copy?" },
      answer: {
        ko: "스틱스앤스톤스의 카피라이터는 모두 영어권 국적의 원어민으로, 카피라이팅 경력이 깊은 전문가들입니다. 정확한 영어를 넘어 잘 쓴 카피를 제공합니다.",
        en: "All Sticks & Stones copywriters are native English speakers from English-speaking countries, with deep professional experience in copywriting. We deliver not just correct English, but well-crafted copy that works.",
      },
    },
    {
      category: "services",
      question: {
        ko: "한국어로 소통해도 되나요?",
        en: "Can we communicate in Korean?",
      },
      answer: {
        ko: "네, 가능합니다. 원어민 카피라이터와 완벽히 소통 가능한 2개국어 AE가 한국어로 고객사와 협업하며 프로젝트를 관리합니다.",
        en: "Yes. Fully bilingual AEs who can communicate seamlessly with native copywriters collaborate with clients in Korean and manage projects end to end.",
      },
    },
    {
      category: "services",
      question: {
        ko: "단순 번역 서비스도 가능한가요? Or 영어 카피라이팅과 번역은 무엇이 다른가요?",
        en: "Do you offer simple translation services? Or what is the difference between English copywriting and translation?",
      },
      answer: {
        ko: "번역은 원문의 의미를 다른 언어로 정확히 전달하는 데 중점을 둡니다. 반면 영어 카피라이팅은 브랜드의 목표와 톤앤매너, 메시지를 새롭게 빚어내어 소비자의 행동을 유도하는 성과 중심의 글쓰기입니다. 특히 캠페인, 슬로건, 영상 스크립트, 스피치처럼 창의성과 설득력이 중요한 작업은 단순 번역으로는 한계가 있으며, 반드시 전문 크리에이티브 라이터가 필요합니다. 스틱스앤스톤스는 단순 번역이 아닌 transcreation을 통해 시장과 고객에 맞는 카피를 제공합니다.",
        en: "Translation focuses on accurately transferring meaning from one language to another. English copywriting, on the other hand, reshapes a brand's goals, tone, and message to drive audience action through performance-oriented writing. For work that demands creativity and persuasion, such as campaigns, slogans, video scripts, and speeches, translation alone has clear limits. These require professional creative writers. Sticks & Stones delivers market- and audience-ready copy through transcreation, not simple translation.",
      },
    },
    {
      category: "services",
      question: {
        ko: "영어 외 언어로도 카피라이팅이 가능한가요?",
        en: "Do you offer copywriting in languages other than English?",
      },
      answer: {
        ko: "스틱스앤스톤스는 영어 전문 카피라이팅 기업으로, 오직 영어로만 서비스를 제공합니다. 국문 카피가 필요하신 경우엔 별도 문의 부탁드립니다.",
        en: "Sticks & Stones is an English-specialist copywriting company and provides services exclusively in English. For Korean-language copy, please contact us separately.",
      },
    },
    {
      category: "services",
      question: {
        ko: "B2B나 전문 기술 분야 카피라이팅도 가능한가요?",
        en: "Do you handle B2B or highly technical copywriting?",
      },
      answer: {
        ko: "네. 반도체, 모빌리티, 가전, 게임, 금융, 뷰티 등 산업별 전문 용어와 규격, 시장 특성을 반영해 전문 B2B 카피라이팅을 제공합니다.",
        en: "Yes. We provide professional B2B copywriting across industries including semiconductors, mobility, home appliances, gaming, finance, and beauty, reflecting industry-specific terminology, standards, and market context.",
      },
    },
    {
      category: "services",
      question: {
        ko: "스틱스앤스톤스가 가장 잘하는 일은 무엇인가요?",
        en: "What does Sticks & Stones do best?",
      },
      answer: {
        ko: "스틱스앤스톤스는 한국 대기업과 글로벌 브랜드를 위한 영어 카피라이팅에 특화되어 있습니다. 브랜드 네이밍과 슬로건, 브랜드 매니페스토와 스토리, 임원 키노트와 스피치, TVC·영상 광고 스크립트, 톤앤매너(TOV) 가이드, OOH·프린트 광고, SNS 콘텐츠까지 전 영역을 아우릅니다.",
        en: "Sticks & Stones specializes in English copywriting and brand storytelling for Korean conglomerates and global brands. Our work spans brand naming and slogans, brand manifestos and stories, executive keynotes and speeches, TVC and video ad scripts, tone of voice guides, OOH and print advertising, and social media content across all touchpoints.",
      },
    },
    {
      category: "pricing",
      question: {
        ko: "카피라이팅 비용은 얼마인가요?",
        en: "How much does copywriting cost?",
      },
      answer: {
        ko: "카피라이팅 비용은 프로젝트 분량, 용처, 채널, 노출 범위, 목적, 매체 등에 따라 달라집니다. 프로젝트 내용을 알려주시면 보통 영업일 기준 24시간 이내 견적을 안내드립니다.",
        en: "Copywriting fees vary depending on project scope, usage, channels, exposure range, objectives, and media. Once you share the project details, we usually provide a quote within 24 business hours.",
      },
    },
    {
      category: "pricing",
      question: {
        ko: "카피라이팅 견적은 어떻게 받을 수 있나요?",
        en: "How can we get a copywriting quote?",
      },
      answer: {
        ko: "이메일이나 전화로 프로젝트 내용을 문의해 주시면 담당자가 연락을 드립니다. 논의를 바탕으로 견적서를 작성해 보통 영업일 기준 24시간 이내 전달해 드립니다.",
        en: "You can inquire by email or phone with your project details. An AE will follow up, and based on the discussion, we prepare and deliver a quotation, typically within 24 business hours.",
      },
    },
    {
      category: "pricing",
      question: {
        ko: "카피 시안은 몇 가지 받아볼 수 있나요?",
        en: "How many copy options will we receive?",
      },
      answer: {
        ko: "시안 개수는 카피 성격에 따라 달라집니다. 네이밍과 슬로건은 단계별 8개 이상, 헤드카피는 3개 내외, 장문 카피는 1~2개를 제공합니다. 추가 버전이 필요할 경우 별도 문의해 주세요.",
        en: "The number of options depends on the nature of the copy. For naming and slogans, we provide eight or more options per stage. For headline copy, around three options. For long-form copy, one to two versions. If additional versions are needed, please contact us separately.",
      },
    },
    {
      category: "pricing",
      question: {
        ko: "프로젝트 시작 전에 어떤 자료를 준비해야 하나요?",
        en: "What materials should we prepare before starting a project?",
      },
      answer: {
        ko: "필요 자료에 대한 기본 가이드는 프로젝트 성격에 따라 안내드립니다. 브리프, 브랜드 전략 문서, 기존 마케팅 자료가 있으면 더욱 원활합니다.",
        en: "Basic guidelines for required materials are shared depending on the project type. Briefs, brand strategy documents, and existing marketing materials help ensure a smoother process.",
      },
    },
    {
      category: "pricing",
      question: {
        ko: "이미 저희가 영어로 작업한 것이 있는데, 좀 더 싸게 해주실 수 있나요?",
        en: "We already have English copy. Can the price be lower?",
      },
      answer: {
        ko: "기존 영어 자료가 있어도 전문 카피라이팅 기준에서 브랜드의 톤앤매너와 설득력을 담기 위해 새롭게 작업해야 하는 경우가 많습니다. 스틱스앤스톤스는 모든 원어민 카피라이터가 처음부터 검토·재작성하여 완성도를 높입니다. 다만, 제공해주신 자료의 품질이 일정 기준 이상으로 제작되어 당사에서 실제 작업에 활용가능한 경우에 한하여 소폭 할인 가능합니다.",
        en: "Even when existing English materials are provided, they often require reworking to meet professional copywriting standards in terms of brand tone and persuasive power. At Sticks & Stones, all native copywriters review and rewrite from scratch to ensure quality. However, if the provided materials meet a certain quality threshold and can be directly utilized in our workflow, a partial discount may be applied.",
      },
    },
    {
      category: "process",
      question: {
        ko: "카피라이팅 작업 프로세스는 어떻게 진행되나요?",
        en: "What is the copywriting process?",
      },
      answer: {
        ko: "작업 문의를 토대로 견적서 발급 → RFP 진행 및 견적·일정·작업 컨펌 및 계약 → 킥오프 미팅 → 리서치 및 카피라이팅 후 1차 제안 → 1차 제안을 토대로 리뷰 후 피드백 반영하여 1차 수정 제안 → 1차 수정을 토대로 리뷰 후 피드백 반영하여 2차 수정 제안 → 2차 수정을 토대로 리뷰 후 피드백 반영하여 최종 결과물 전달 (※ 2차 수정 이후부터는 수정에 라운드 당 수정료 부과)",
        en: "Inquiry received and quotation issued → RFP discussion, confirmation of quote, timeline, scope, and contract → Kickoff meeting → Research and copywriting, followed by the first proposal → Review of the first proposal and feedback reflected in the first revision → Review of the first revision and feedback reflected in the second revision → Review of the second revision and delivery of final outputs (Please note that revision fees apply per round starting from the third revision.)",
      },
    },
    {
      category: "process",
      question: {
        ko: "일반적인 카피라이팅 작업 기간(리드타임)은 어느 정도인가요?",
        en: "What is the typical lead time for copywriting projects?",
      },
      answer: {
        ko: "프로젝트의 종류에 따라 상이하지만, 일반적으로 광고 슬로건(태그라인)은 5~10 영업일, 브랜드 네이밍/슬로건건은 3~4주, 영상/스피치 원고는 1~2주 정도 소요됩니다. (범위와 난이도에 따라 변동)",
        en: "Timelines vary by project type, but as a general guideline: advertising slogans or taglines take around 5 to 10 business days, brand naming or slogan projects take about 3 to 4 weeks, and video or speech scripts typically take 1 to 2 weeks. Timelines may change depending on scope and complexity.",
      },
    },
    {
      category: "process",
      question: {
        ko: "계약 후 실제 업무 착수(온보딩)까지는 얼마나 걸리나요?",
        en: "How long does it take to start actual work after the contract is signed?",
      },
      answer: {
        ko: "프로젝트에 필요한 자료가 잘 정리되어 있다는 전제하에, 보통 1~3 영업일 내에 필요한 모든 세팅을 마치고 업무를 시작할 수 있습니다.",
        en: "Provided that all required materials are well prepared, we can usually complete onboarding and begin work within 1 to 3 business days.",
      },
    },
    {
      category: "process",
      question: {
        ko: "급하게 진행해야 하는 일정도 가능한가요?",
        en: "Can you accommodate urgent timelines?",
      },
      answer: {
        ko: "네, 가능합니다. 다만 급행료(Rush Fee)가 적용될 수 있으며, 요율은 일정과 작업 성격에 따라 다릅니다. 예를 들어 세일즈 카피를 2일 내 수령 시, 세일즈 카피 가격의 20%가 급행료로 부과됩니다.",
        en: "Yes. Rush projects are possible, though a rush fee may apply depending on the schedule and nature of the work. For example, if sales copy is required within two days, a rush fee of 20 percent of the sales copy cost will be added.",
      },
    },
    {
      category: "process",
      question: {
        ko: "급행 작업은 최대 몇 시간 안에 가능한가요?",
        en: "What is the fastest turnaround time for rush projects?",
      },
      answer: {
        ko: "작업 성격과 분량에 따라 다르지만, 짧은 카피의 경우 당일·익일 전달도 가능합니다. 단, 급행료(Rush Fee)가 적용되며 요율은 일정 별로 달라집니다.",
        en: "This depends on the scope and type of work, but for short-form copy, same-day or next-day delivery may be possible. Rush fees apply, and rates vary by timeline.",
      },
    },
    {
      category: "process",
      question: {
        ko: "작업 기간은 얼마나 걸리나요?",
        en: "How long does a project usually take overall?",
      },
      answer: {
        ko: "작업 기간은 프로젝트 성격에 따라 다르지만 일반 키카피는 2주 이내, 슬로건 및 네이밍은 4주 이내 1차 시안을 전달합니다. 톤앤매너 가이드 개발 등 특수 작업은 별도 협의가 필요합니다. 급행 일정은 Rush Fee가 적용될 수 있습니다.",
        en: "Project duration depends on the scope, but for general key copy, first drafts are typically delivered within two weeks. For slogans and naming, first proposals are delivered within four weeks. Specialized work such as tone of voice guide development requires separate discussion. Rush timelines may incur a rush fee.",
      },
    },
    {
      category: "process",
      question: {
        ko: "수정은 몇 번까지 가능한가요?",
        en: "How many rounds of revisions are included?",
      },
      answer: {
        ko: '견적엔 기본적으로 2회의 수정 라운드가 서비스로 제공됩니다. 이는 문구나 표현을 다듬는 경미한 수정을 기준으로 하며, 프로젝트의 방향성 자체를 바꾸는 큰 수정은 "심화 수정"으로 간주되어 별도 협의가 필요합니다.',
        en: "By default, two rounds of revisions are included in the quote. These cover minor refinements to wording or expressions. Major changes that alter the project's overall direction are considered advanced revisions and require separate discussion.",
      },
    },
    {
      category: "legal",
      question: {
        ko: "카피라이팅 결과물의 저작권은 누구에게 있나요?",
        en: "Who owns the copyright to the copywriting deliverables?",
      },
      answer: {
        ko: "최종 확정된 결과물의 저작권은 클라이언트에게 귀속됩니다. 단, 제안 단계에서 제공된 시안은 스틱스앤스톤스의 창작물로 남으며, 최종 확정된 결과물 역시 계약된 범위 외 사용은 제한됩니다.",
        en: "The copyright of the final, approved deliverables is transferred to the client. However, concepts and options shared during the proposal stage remain the intellectual property of Sticks & Stones. Even for finalized deliverables, use beyond the contractually agreed scope is restricted.",
      },
    },
    {
      category: "legal",
      question: {
        ko: "카피라이팅 결과물을 다른 채널에 재활용해도 되나요?",
        en: "Can the copywriting deliverables be reused across other channels?",
      },
      answer: {
        ko: "네, 가능합니다. 다만 초기 합의된 목적과 범위를 넘어선 새로운 채널 활용이 필요할 경우, 별도 협의가 필요할 수 있습니다. 예를 들어, 세일즈 카피로 의뢰하신 작업물을 슬로건으로 사용 희망하실 경우 별도 협의가 필요합니다.",
        en: "Yes. Reuse is allowed. However, if the work is applied to new channels beyond the originally agreed purpose and scope, additional discussion may be required. For example, using sales copy as a slogan would require separate agreement.",
      },
    },
    {
      category: "legal",
      question: {
        ko: "네이밍 프로젝트에서 상표권 검토는 어떻게 하나요?",
        en: "How is trademark review handled in naming projects?",
      },
      answer: {
        ko: "네이밍 견적에는 상표권 이슈 여부를 확인하는 간단한 1차 스크리닝과 결과 보고가 포함됩니다. 다만 이는 약식 리서치이므로 정식 법률 조사는 전문 기관의 심사를 권장드립니다.",
        en: "Naming project fees include a basic first-round trademark screening and a summary of the findings. This is a preliminary check only. For formal legal clearance, we recommend a full review by a professional legal or trademark agency.",
      },
    },
    {
      category: "other",
      question: {
        ko: "장기 계약이나 리테이너 계약이 가능한가요?",
        en: "Are long-term or retainer contracts available?",
      },
      answer: {
        ko: "카피 성격에 따라 단가가 상이하기 때문에, 리테이너 계약은 진행하지 않고 있습니다. 장기 계약의 경우 선불제(사전 합의된 금액을 선금으로 지불 후 기간 내 소진) 또는 후불제(투입 인력을 표준 요율로 매월 정산) 두 가지 방식으로 연간 계약이 가능합니다.",
        en: "Because pricing varies depending on the nature of the copy, we do not offer retainer contracts. For long-term engagements, annual contracts are available in two formats: a prepaid model, where an agreed amount is paid upfront and used within the contract period, or a postpaid model, where actual manpower is billed monthly at standard rates.",
      },
    },
    {
      category: "other",
      question: {
        ko: "우리 업계 레퍼런스(유사 프로젝트 이력)를 확인할 수 있나요?",
        en: "Can we review references from our industry or similar projects?",
      },
      answer: {
        ko: "네. 반도체, 디스플레이, 모빌리티, 가전, 게임, 금융, 뷰티 등 다양한 업계 레퍼런스를 보유하고 있습니다. 문의 시 유관 프로젝트 포트폴리오를 공유드립니다.",
        en: "Yes. We have experience across a wide range of industries including semiconductors, displays, mobility, home appliances, gaming, finance, and beauty. Upon inquiry, we can share a portfolio of relevant projects.",
      },
    },
    {
      category: "other",
      question: {
        ko: "스틱스앤스톤스를 선택해야 하는 이유는 무엇인가요?",
        en: "Why should we choose Sticks & Stones?",
      },
      answer: {
        ko: "스틱스앤스톤스는 단순 번역이 아닌 글로벌 수준의 영어 카피라이팅을 전문으로 합니다. 모든 카피라이터가 원어민 글로벌 카피 전문가이며, 한국 대기업과 글로벌 브랜드의 네이밍·슬로건·브랜드 스토리 등 다수 프로젝트를 수행해 온 경험이 있습니다.",
        en: "Sticks & Stones specializes in global-standard English copywriting, not simple translation. All copywriters are native English-speaking global professionals, with extensive experience delivering naming, slogan, and brand story projects for Korean conglomerates and global brands.",
      },
    },
  ],
  Ge = {
    services: { ko: "서비스 & 팀 소개", en: "Services & Team" },
    pricing: { ko: "의뢰 & 비용 안내", en: "Request & Pricing" },
    process: { ko: "일정 & 프로세스", en: "Schedule & Process" },
    legal: { ko: "저작권 & 상표권", en: "Copyright & Trademark" },
    other: { ko: "기타", en: "Other" },
  },
  Ne = { faqData: We, faqCategoryLabels: Ge },
  Ke = { ko: "연락처", en: "Contact" },
  Ve = { label: { ko: "전화:", en: "Phone:" }, number: "02-793-7857" },
  Fe = { label: { ko: "이메일:", en: "Email:" }, address: "talk@stks.kr" },
  Re = {
    label: { ko: "사무실:", en: "Office:" },
    address: {
      ko: "서울 용산구<br>녹사평대로26길 42<br>스틱스앤스톤스 빌딩",
      en: "42, Noksapyeong-daero 26-gil, <br>Yongsan-gu, Seoul, <br>Republic of Korea",
    },
    addressPlain: {
      ko: "서울 용산구 녹사평대로26길 42 스틱스앤스톤스 빌딩",
      en: "42, Noksapyeong-daero 26-gil, Yongsan-gu, Seoul, Republic of Korea",
    },
  },
  Ue = {
    ko: "Words that stick, stories that sell. <br> 글로벌 브랜딩과 마케팅에 특화된 영어 전문 카피라이팅 회사, 스틱스앤스톤스 서울.",
    en: "Words that stick, stories that sell. <br> A specialized English copywriting and storytelling agency for global branding and marketing, Sticks & Stones Seoul.",
  },
  ze = {
    ko: "(주)스틱스앤스톤스 119-88-00409<br>대표자: Richard King Kim",
    en: "Sticks and Stones 119-88-00409<br>CEO: Richard King Kim",
  },
  Ye = { query: "서울특별시+용산구+녹사평대로26길+42" },
  w = {
    heading: Ke,
    phone: Ve,
    email: Fe,
    office: Re,
    tagline: Ue,
    companyInfo: ze,
    map: Ye,
  },
  E = {
    tabs: {
      faq: { ko: "FAQ", en: "FAQ" },
      contact: { ko: "Contact", en: "Contact" },
    },
    tooltips: {
      copied: { ko: "복사 완료!", en: "Copied!" },
      copyEmail: { ko: "이메일 복사", en: "Copy email" },
      copyAddress: { ko: "주소 복사", en: "Copy address" },
    },
  },
  { faqData: Qe, faqCategoryLabels: Je } = Ne;
class Xe {
  constructor() {
    ((this.container = h("div", "bottom-tabs")),
      (this.activeTab = null),
      (this.language = "ko"),
      this.init(),
      (window.__stksSetBottomDrawer = (e, t = !0) => {
        const n = e === "faq" ? "faq" : "contact";
        if (!t) {
          this.activeTab && this.closeTab();
          return;
        }
        this.activeTab !== n && this.openTab(n);
      }),
      (window.__stksGetBottomDrawer = () => ({
        open: !!this.activeTab,
        tab: this.activeTab,
      })),
      f.subscribe((e) => this.handleStateChange(e)));
  }
  init() {
    this.container.innerHTML = `
      <div class="bottom-tab-panel faq-panel">
        <div class="bottom-tabs-buttons">
          <button class="bottom-tab-btn faq-btn" data-tab="faq">
            <span class="tab-label">FAQ</span>
            <span class="tab-arrow">▲</span>
          </button>
        </div>
        <div class="bottom-tabs-content">
          <div class="bottom-tab-inner faq-inner"></div>
        </div>
      </div>

      <div class="bottom-tab-panel contact-panel">
        <div class="bottom-tabs-buttons">
          <button class="bottom-tab-btn contact-btn" data-tab="contact">
            <span class="tab-label">Contact</span>
            <span class="tab-arrow">▲</span>
          </button>
        </div>
        <div class="bottom-tabs-content">
          <div class="bottom-tab-inner contact-inner"></div>
        </div>
      </div>
    `;
    const e = this.container.querySelector(".contact-btn"),
      t = this.container.querySelector(".faq-btn");
    (e.addEventListener("click", () => this.openTab("contact")),
      t.addEventListener("click", () => this.openTab("faq")),
      window.addEventListener("openContactTab", () => {
        this.openTab("contact");
      }));
  }
  lockScroll() {
    ((this.savedScrollY = window.scrollY || window.pageYOffset),
      (document.body.style.position = "fixed"),
      (document.body.style.top = `-${this.savedScrollY}px`),
      (document.body.style.left = "0"),
      (document.body.style.right = "0"),
      (document.body.style.width = "100%"));
  }
  unlockScroll() {
    const e = this.savedScrollY || 0;
    ((document.body.style.position = ""),
      (document.body.style.top = ""),
      (document.body.style.left = ""),
      (document.body.style.right = ""),
      (document.body.style.width = ""),
      window.scrollTo(0, e),
      (this.savedScrollY = 0));
  }
  openTab(e) {
    if (this.activeTab === e) {
      this.closeTab();
      return;
    }
    ((this.activeTab = e),
      this.container.classList.add("active"),
      this.container.classList.remove("contact-active", "faq-active"),
      e &&
        (this.lockScroll(),
        this.container.classList.add(`${e}-active`),
        document.body.classList.add(`${e}-active`),
        this.renderContent(e),
        this.updateArrows(),
        setTimeout(() => {
          const t = this.container.querySelector(
            `.${e}-panel .bottom-tabs-content`,
          );
          t &&
            (t.scrollTop === 0 && (t.scrollTop = 1),
            this.touchStartHandler ||
              ((this.touchStartHandler = (n) => {
                const i = t.scrollTop,
                  o = t.scrollHeight,
                  a = i + t.offsetHeight;
                i === 0 ? (t.scrollTop = 1) : a >= o && (t.scrollTop = i - 1);
              }),
              t.addEventListener("touchstart", this.touchStartHandler, {
                passive: !0,
              })));
        }, 150)));
  }
  closeTab() {
    ((this.activeTab = null),
      this.container.classList.remove("active", "contact-active", "faq-active"),
      document.body.classList.remove("faq-active", "contact-active"),
      this.updateArrows(),
      this.unlockScroll(),
      this.touchStartHandler &&
        (this.container
          .querySelectorAll(".bottom-tabs-content")
          .forEach((t) => {
            t.removeEventListener("touchstart", this.touchStartHandler);
          }),
        (this.touchStartHandler = null)),
      setTimeout(() => {
        (this.updateFaqPanelHeight(), this.updateContactPanelHeight());
      }, 50));
  }
  updateArrows() {
    const e = this.container.querySelector(".contact-btn"),
      t = this.container.querySelector(".faq-btn"),
      n = e == null ? void 0 : e.querySelector(".tab-arrow"),
      i = t == null ? void 0 : t.querySelector(".tab-arrow");
    (n && (n.textContent = this.activeTab === "contact" ? "▼" : "▲"),
      i && (i.textContent = this.activeTab === "faq" ? "▼" : "▲"));
  }
  handleStateChange(e) {
    ((this.language = e.language),
      this.updateTabLabels(),
      this.activeTab && this.renderContent(this.activeTab));
  }
  updateTabLabels() {
    const e = this.container.querySelector(".faq-btn .tab-label"),
      t = this.container.querySelector(".contact-btn .tab-label");
    (e && (e.textContent = d.getContent(E.tabs.faq, this.language)),
      t && (t.textContent = d.getContent(E.tabs.contact, this.language)));
  }
  renderContent(e) {
    if (e === "contact") {
      const t = this.container.querySelector(".contact-inner");
      ((t.innerHTML = this.renderContactContent()),
        this.mountContactMap(),
        setTimeout(() => {
          this.updateContactPanelHeight();
        }, 0));
    } else if (e === "faq") {
      const t = this.container.querySelector(".faq-inner");
      ((t.innerHTML = this.renderFaqContent()),
        setTimeout(() => {
          (this.container.querySelectorAll(".faq-item").forEach((i) => {
            i.dataset.category !== "services" && (i.style.display = "none");
          }),
            this.updateFaqPanelHeight());
        }, 0));
    }
  }
  updateFaqPanelHeight() {
    if (window.innerWidth <= 768) return;
    const e = this.container.querySelector(".faq-panel"),
      t = this.container.querySelector(".faq-measure-container");
    !e ||
      !t ||
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const i = 42 + t.scrollHeight + 70;
          e.style.setProperty("--faq-panel-height", `${i}px`);
        });
      });
  }
  updateContactPanelHeight() {
    if (window.innerWidth <= 768) return;
    const e = this.container.querySelector(".contact-panel"),
      t = this.container.querySelector(".contact-measure-container");
    !e ||
      !t ||
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const i = 42 + t.scrollHeight + 70;
          e.style.setProperty("--contact-panel-height", `${i}px`);
        });
      });
  }
  setupResizeObserver() {
    if (window.innerWidth <= 768) return;
    ((this.lastFaqHeight = 0),
      (this.lastContactHeight = 0),
      (this.resizeObserver = new ResizeObserver((n) => {
        window.requestAnimationFrame(() => {
          for (const i of n) {
            const o = i.target,
              r = 42 + o.scrollHeight + 70;
            if (o.classList.contains("faq-measure-container")) {
              if (Math.abs(this.lastFaqHeight - r) > 1) {
                this.lastFaqHeight = r;
                const c = this.container.querySelector(".faq-panel");
                c && c.style.setProperty("--faq-panel-height", `${r}px`);
              }
            } else if (
              o.classList.contains("contact-measure-container") &&
              Math.abs(this.lastContactHeight - r) > 1
            ) {
              this.lastContactHeight = r;
              const c = this.container.querySelector(".contact-panel");
              c && c.style.setProperty("--contact-panel-height", `${r}px`);
            }
          }
        });
      })));
    const e = this.container.querySelector(".faq-measure-container"),
      t = this.container.querySelector(".contact-measure-container");
    (e && this.resizeObserver.observe(e),
      t && this.resizeObserver.observe(t),
      window.addEventListener("resize", () => {
        window.innerWidth <= 768 && this.resizeObserver
          ? (this.resizeObserver.disconnect(), (this.resizeObserver = null))
          : window.innerWidth > 768 &&
            !this.resizeObserver &&
            this.setupResizeObserver();
      }));
  }
  mountContactMap() {
    const e = this.container.querySelector(".contact-map[data-map-address]");
    if (!e) return;
    const t = import.meta.env.VITE_KAKAO_MAP_KEY,
      n = e.dataset.mapAddress || "";
    if (!t || !n) return;
    const i = () => {
      const o = window.kakao;
      if (!(o && o.maps && o.maps.load)) return;
      o.maps.load(() => {
        const a = new o.maps.services.Geocoder();
        a.addressSearch(n, (r, c) => {
          if (c !== o.maps.services.Status.OK || !r || !r[0]) return;
          const l = new o.maps.LatLng(Number(r[0].y), Number(r[0].x));
          let g = e.querySelector(".kakao-map-canvas");
          (g ||
            ((g = document.createElement("div")),
            (g.className = "kakao-map-canvas"),
            e.prepend(g)),
            e.classList.add("is-kakao-ready"));
          const u = new o.maps.Map(g, { center: l, level: 3 });
          (new o.maps.Marker({ map: u, position: l }),
            window.setTimeout(() => u.relayout(), 0));
        });
      });
    };
    if (window.kakao && window.kakao.maps && window.kakao.maps.load) {
      i();
      return;
    }
    const o = "stks-kakao-map-sdk";
    let a = document.getElementById(o);
    (a ||
      ((a = document.createElement("script")),
      (a.id = o),
      (a.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(t)}&autoload=false&libraries=services`),
      (a.async = !0),
      document.head.appendChild(a)),
      a.addEventListener("load", i, { once: !0 }));
  }
  renderContactContent() {
    const e = this.language,
      t = d.getContent(w.heading, e),
      n = d.getContent(w.phone.label, e),
      i = d.getContent(w.email.label, e),
      o = d.getContent(w.office.label, e),
      a = d.getContent(w.office.address, e),
      r = d.getContent(w.office.addressPlain, e),
      c = d.getContent(w.tagline, e),
      l = d.getContent(w.companyInfo, e),
      g = d.getContent(E.tooltips.copyEmail, e),
      u = d.getContent(E.tooltips.copyAddress, e);
    return `
      <div class="contact-measure-container">
        <div class="contact-content">
          <div class="contact-info">
            <h2>${t}</h2>

            <div class="contact-section">
              <h3>${n}</h3>
              <p>${w.phone.number}</p>
            </div>

            <div class="contact-section">
              <h3>${i}</h3>
              <div class="copyable-container">
                <p>${w.email.address}</p>
                <button class="copy-btn" data-copy="${w.email.address}" aria-label="${g}">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span class="copy-tooltip"></span>
                </button>
              </div>
            </div>

            <div class="contact-section">
              <h3>${o}</h3>
              <div class="copyable-container">
                <p>${a}</p>
                <button class="copy-btn" data-copy="${r}" aria-label="${u}">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span class="copy-tooltip"></span>
                </button>
              </div>
            </div>

            <div class="contact-section">
              <p class="contact-tagline">${c}</p>
            </div>

            <div class="contact-section">
              <p>${l}</p>
            </div>
          </div>

          <div class="contact-map" data-map-address="${r}">
            <iframe
              class="contact-map-fallback"
              src="https://www.google.com/maps?q=${w.map.query}&output=embed"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <a
              class="contact-map-link"
              href="https://map.kakao.com/link/search/${encodeURIComponent(r)}"
              target="_blank"
              rel="noreferrer">
              Open map
            </a>
          </div>
        </div>
      </div>
    `;
  }
  renderFaqContent() {
    const e = ["services", "pricing", "process", "legal", "other"],
      t = Qe.map((n) => ({
        category: n.category,
        question: d.getContent(n.question, this.language),
        answer: d.getContent(n.answer, this.language),
      }));
    return `
      <div class="faq-measure-container">
        <div class="faq-content">
          <div class="faq-categories">
            ${e
              .map(
                (n, i) => `
              <button class="faq-category-btn ${i === 0 ? "active" : ""}" data-category="${n}">
                ${d.getContent(Je[n], this.language)}
              </button>
            `,
              )
              .join("")}
          </div>

          <div class="faq-list">
            ${t
              .map(
                (n, i) => `
              <div class="faq-item ${i === 0 ? "open" : ""}" data-category="${n.category}">
                <button class="faq-question">
                  <span class="faq-q-icon">Q</span>
                  <span class="faq-q-text">${n.question}</span>
                  <span class="faq-toggle">${i === 0 ? "▲" : "▼"}</span>
                </button>
                <div class="faq-answer">
                  <p>${n.answer}</p>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }
  mount(e) {
    (e.appendChild(this.container),
      this.setupResizeObserver(),
      this.container.addEventListener("click", (t) => {
        const n = t.target.closest(".copyable-container");
        if (n) {
          const i = n.querySelector(".copy-btn");
          if (i) {
            const o = i.dataset.copy,
              a = i.querySelector(".copy-tooltip");
            navigator.clipboard
              .writeText(o)
              .then(() => {
                ((a.textContent = d.getContent(
                  E.tooltips.copied,
                  this.language,
                )),
                  a.classList.add("show"),
                  setTimeout(() => {
                    a.classList.remove("show");
                  }, 2e3));
              })
              .catch((r) => {
                console.error("Failed to copy:", r);
              });
          }
        }
      }),
      this.container.addEventListener("click", (t) => {
        const n = t.target,
          i = n.closest(".faq-question"),
          o = n.closest(".faq-category-btn");
        if (i) {
          const a = i.closest(".faq-item"),
            r = i.querySelector(".faq-toggle"),
            c = a.classList.contains("open"),
            l = this.container.querySelector(".faq-panel"),
            g = l == null ? void 0 : l.querySelector(".bottom-tabs-content"),
            u = this.container.querySelector(".faq-measure-container");
          if (g && u) {
            const m = c;
            (m ? a.classList.remove("open") : a.classList.add("open"),
              requestAnimationFrame(() => {
                const y = 42 + u.scrollHeight + 70,
                  b = window.innerHeight * 0.85;
                (m ? a.classList.add("open") : a.classList.remove("open"),
                  y > b ||
                    (g.classList.add("is-animating"),
                    setTimeout(() => {
                      g.classList.remove("is-animating");
                    }, 2e3)),
                  c
                    ? (a.classList.remove("open"), (r.textContent = "▼"))
                    : (a.classList.add("open"), (r.textContent = "▲")),
                  setTimeout(() => {
                    this.updateFaqPanelHeight();
                  }, 300));
              }));
          } else
            (c
              ? (a.classList.remove("open"), (r.textContent = "▼"))
              : (a.classList.add("open"), (r.textContent = "▲")),
              setTimeout(() => {
                this.updateFaqPanelHeight();
              }, 300));
        }
        if (o) {
          const a = o.dataset.category;
          (this.container
            .querySelectorAll(".faq-category-btn")
            .forEach((l) => l.classList.remove("active")),
            o.classList.add("active"),
            this.container.querySelectorAll(".faq-item").forEach((l) => {
              l.dataset.category === a
                ? (l.style.display = "block")
                : (l.style.display = "none");
            }),
            this.updateFaqPanelHeight());
        }
      }));
  }
}
class Ze {
  constructor() {
    ((this.button = this.createButton()),
      (this.currentSection = null),
      this.setupEventListeners(),
      this.setupStateListener());
  }
  createButton() {
    const e = h("button", "scroll-to-top-btn");
    return (
      (e.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `),
      e.setAttribute("aria-label", "Scroll to top"),
      (e.style.opacity = "0"),
      (e.style.visibility = "hidden"),
      e
    );
  }
  setupEventListeners() {
    (this.button.addEventListener("click", () => {
      (window.scrollTo({ top: 0, behavior: "smooth" }),
        document.body.scrollTo({ top: 0, behavior: "smooth" }));
    }),
      (this.boundHandleScroll = () => this.handleScroll()),
      window.addEventListener("scroll", this.boundHandleScroll, {
        passive: !0,
      }),
      document.addEventListener("scroll", this.boundHandleScroll, {
        passive: !0,
      }),
      document.body &&
        document.body.addEventListener("scroll", this.boundHandleScroll, {
          passive: !0,
        }));
  }
  setupStateListener() {
    const e = f.getState();
    ((this.currentSection = e.currentSection),
      (this.isModalOpen = !!e.portfolioSlug),
      console.log("[ScrollToTop] Initial state:", {
        currentSection: this.currentSection,
        portfolioSlug: e.portfolioSlug,
        isModalOpen: this.isModalOpen,
      }),
      f.subscribe((t) => {
        ((this.currentSection = t.currentSection),
          (this.isModalOpen = !!t.portfolioSlug),
          console.log("[ScrollToTop] State changed:", {
            currentSection: this.currentSection,
            portfolioSlug: t.portfolioSlug,
            isModalOpen: this.isModalOpen,
          }),
          this.handleScroll());
      }));
  }
  handleScroll() {
    const e = this.currentSection === "portfolio",
      t = this.isModalOpen;
    if (!e || t) {
      ((this.button.style.opacity = "0"),
        (this.button.style.visibility = "hidden"));
      return;
    }
    const n =
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop,
      o = window.innerWidth <= 768 ? 300 : 400;
    n > o
      ? ((this.button.style.opacity = "1"),
        (this.button.style.visibility = "visible"))
      : ((this.button.style.opacity = "0"),
        (this.button.style.visibility = "hidden"));
  }
  mount(e) {
    (e.appendChild(this.button),
      requestAnimationFrame(() => {
        this.handleScroll();
      }));
  }
}
class et {
  constructor() {
    ((this.handleKeyDown = this.handleKeyDown.bind(this)), this.init());
  }
  init() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (
      e.target.tagName === "INPUT" ||
      e.target.tagName === "TEXTAREA" ||
      e.target.isContentEditable ||
      document.querySelector(".hotkey-modal.active")
    )
      return;
    const n = e.key.toLowerCase(),
      i = f.getState();
    if (n === "e") (e.preventDefault(), p.switchLanguage("en"));
    else if (n === "k") (e.preventDefault(), p.switchLanguage("ko"));
    else if (n === "l") {
      e.preventDefault();
      const o = i.language === "ko" ? "en" : "ko";
      p.switchLanguage(o);
    } else if (n === "a") {
      e.preventDefault();
      const o = p.buildPath("about", i.language);
      p.navigate(o);
    } else if (n === "s") {
      e.preventDefault();
      const o = p.buildPath("services", i.language);
      p.navigate(o);
    } else if (n === "c") {
      e.preventDefault();
      const o = p.buildPath("clients", i.language);
      p.navigate(o);
    } else if (n === "p") {
      e.preventDefault();
      const o = p.buildPath("portfolio", i.language);
      p.navigate(o);
    } else if (n === "m") (e.preventDefault(), this.toggleMute());
    else if (n === "b" && !document.querySelector(".portfolio-modal.active")) {
      e.preventDefault();
      const a = p.buildPath("main", i.language);
      p.navigate(a);
    }
  }
  toggleMute() {
    const e = document.querySelector(".audio-toggle");
    e && e.click();
  }
  destroy() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
}
new et();
class tt {
  constructor() {
    ((this.quadrantGrid = new de("app")),
      (this.contentArea = new Ie()),
      (this.languageToggle = new Pe()),
      (this.audioToggle = new $e()),
      (this.closeButton = new De()),
      (this.bottomTabs = new Xe()),
      (this.scrollToTop = new Ze()),
      this.mount(),
      this.init());
  }
  mount() {
    const e = document.getElementById("app");
    (this.contentArea.mount(e),
      this.closeButton.mount(e),
      this.languageToggle.mount(document.body),
      this.audioToggle.mount(document.body),
      this.bottomTabs.mount(document.body),
      this.scrollToTop.mount(document.body));
  }
  init() {
    (f.subscribe((e) => {
      this.contentArea.render(e);
    }),
      p.init());
  }
}
new tt();
function x() {
  if (window.innerWidth > 768) return;
  const s = window.visualViewport,
    e = s ? s.height : window.innerHeight,
    t = Math.round(e * 0.4);
  document.documentElement.style.setProperty("--quad40", t + "px");
}
x();
window.addEventListener("resize", x);
window.addEventListener("orientationchange", x);
window.visualViewport &&
  (window.visualViewport.addEventListener("resize", x),
  window.visualViewport.addEventListener("scroll", x));

export {
  U as AppStore,
  f as appStore,
  te as Router,
  p as router,
  de as QuadrantGrid,
  Ie as ContentBox,
  Ae as PortfolioModal,
  ke as PortfolioGrid,
  le as VideoModal,
  qe as HotkeyModal,
  _e as TeamProfiles,
  He as QuoteCarousel,
  je as ClientMarquee,
  Be as SpaceGallery,
  Oe as TestimonialsGrid,
  Me as ServicesGrid,
  Pe as LanguageToggle,
  $e as AudioToggle,
  De as CloseButton,
  Xe as BottomTabs,
  Ze as ScrollToTop,
  ce as AudioManager,
  q as audioManager,
  k as portfolioData,
  I as teamData,
  M as testimonialsData,
  j as quoteCarouselData,
  P as servicesData,
  $ as portfolioAssets,
  We as faqData,
  w as contactContent,
  C as aboutContent,
}
