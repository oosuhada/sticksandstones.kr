(function () {
  'use strict';

  if (window.__stksLegacyBridgeReady) return;
  window.__stksLegacyBridgeReady = true;

  var sectionByPath = {
    about: 'about',
    'about-section': 'about',
    service: 'services',
    services: 'services',
    'service-section': 'services',
    'services-section': 'services',
    work: 'portfolio',
    'work-section': 'portfolio',
    portfolio: 'portfolio',
    portfolios: 'portfolio',
    'portfolio-section': 'portfolio',
    blog: 'clients',
    'blog-section': 'clients',
    'clients-say': 'clients',
    'clients-say-section': 'clients'
  };

  var selectorBySection = {
    about: '#about',
    services: '#service',
    portfolio: '#work',
    clients: '#blog'
  };

  var boxIdBySection = {
    about: 'about',
    services: 'service',
    portfolio: 'work',
    clients: 'blog'
  };

  var sectionByBoxId = {
    about: 'about',
    service: 'services',
    work: 'portfolio',
    blog: 'clients'
  };

  var logoPositionBySection = {
    about: { left: '150%', top: '150%', backClass: 'right-bottom' },
    services: { left: '-50%', top: '150%', backClass: 'left-bottom' },
    portfolio: { left: '150%', top: '-50%', backClass: 'right-top' },
    clients: { left: '-50%', top: '-50%', backClass: 'left-top' }
  };

  var hashBySection = {
    home: '',
    about: 'about',
    services: 'services',
    portfolio: 'portfolio',
    clients: 'clients-say'
  };

  var staticGuideBySection = {
    home: {
      detail: 'PHP template, quadrant navigation, logo video',
      title: 'Legacy Home',
      body: 'The original homepage compressed every major entry point into one WordPress-driven canvas with character navigation, a hidden logo video, and a lower contact handle.'
    },
    about: {
      detail: 'PHP template, Layers widgets, custom CSS',
      title: 'About',
      body: 'A WordPress theme and widget driven homepage introduced the studio through character animation, sound, and quadrant navigation.'
    },
    services: {
      detail: 'Widget modules, static process graphics',
      title: 'Services',
      body: 'The old theme presented services through illustration-heavy process blocks and custom widget areas.'
    },
    portfolio: {
      detail: 'Custom post type, single-portfolio.php',
      title: 'Portfolio',
      body: 'Project browsing was tied to WordPress post types, theme-specific galleries, and the PHP runtime.'
    },
    clients: {
      detail: 'Testimonials widget, contact drawer',
      title: 'Clients Say',
      body: 'Client proof appeared as a dedicated quadrant and lower drawer content inside the old theme.'
    },
    video: {
      detail: 'Logo Easter egg, Magnific Popup iframe',
      title: 'Our Video',
      body: 'The old site hid the brand film behind the center logo. The rebuild keeps the easter egg, then makes the motion cue clearer so visitors understand it can be clicked.'
    },
    contact: {
      detail: 'Shared drawer, contact form, map embed',
      title: 'Contact',
      body: 'Contact lived inside a WordPress drawer attached to the bottom handle, with form fields, address copy, and a map all controlled by theme scripts.'
    },
    faq: {
      detail: 'FAQ route simulated over the legacy drawer',
      title: 'FAQ',
      body: 'The old theme did not have a clean standalone FAQ route. In this comparison the legacy screen stays visually stable while the guide calls out the missing route-level state.'
    },
    project: {
      detail: 'Custom post type, PHP template, media gallery',
      title: 'Portfolio Detail',
      body: 'Each project existed as a WordPress custom post tied to theme templates and uploaded media. The rebuild turns the same work into structured data and a shareable route.'
    }
  };

  var legacyProjectAssets = {
    'lg-2023-new-years-message': { current: 'lg-2023-new-years-message', image: '/assets/portfolio/thumbnails/01_lg-2023-new-years-message.jpg' },
    'ces-2022-hyundai-keynote-speech': { current: 'ces-2022-hyundai-keynote', image: '/assets/portfolio/thumbnails/02_ces-2022-hyundai-keynote.jpg' },
    '990-pro-990-pro-with-heatsink-online-features': { current: '990-pro-online-features', image: '/assets/portfolio/thumbnails/03_990-pro-online-features.jpg' },
    'team-naver-conference-dan-23': { current: 'team-naver-dan-23', image: '/assets/portfolio/thumbnails/04_team-naver-dan-23.jpg' },
    'lg-antimicrobial-glass-powder-naming': { current: 'lg-antimicrobial-glass', image: '/assets/portfolio/thumbnails/05_lg-antimicrobial-glass.jpg' },
    '2023-lifes-good-award-speech': { current: 'lifes-good-award-2023', image: '/assets/portfolio/thumbnails/06_lifes-good-award-2023.jpg' },
    'sdc-ces-2025-zone-title': { current: 'samsung-sdc-ces-2025', image: '/assets/portfolio/thumbnails/07_samsung-sdc-ces-2025.jpg' },
    'lg-ces-2025-convention-copy': { current: 'lg-ces-2025', image: '/assets/portfolio/thumbnails/08_lg-ces-2025.jpg' },
    'amorepacific-80th-anniversary-brand-film': { current: 'amorepacific-80th-anniversary', image: '/assets/portfolio/thumbnails/09_amorepacific-80th-anniversary.jpg' },
    'amorepacific-vision-statement': { current: 'amorepacific-vision-statement', image: '/assets/portfolio/thumbnails/10_amorepacific-vision-statement.jpg' },
    'lg-brand-communication-guidelines': { current: 'lg-brand-guidelines', image: '/assets/portfolio/thumbnails/11_lg-brand-guidelines.jpg' },
    'seventeen-12th-mini-album-title': { current: 'seventeen-album', image: '/assets/portfolio/thumbnails/12_seventeen-album.jpg' },
    'genesis-gv80-gv80-coupe-black-launch-sns-copy': { current: 'genesis-gv80-black', image: '/assets/portfolio/thumbnails/13_genesis-gv80-black.jpg' },
    'lg-uplus-ixi-o': { current: 'lg-uplus-ixi-o', image: '/assets/portfolio/thumbnails/14_lg-uplus-ixi-o.jpg' },
    'innisfree-global-brand-slogan': { current: 'innisfree-brand-slogan', image: '/assets/portfolio/thumbnails/15_innisfree-brand-slogan.jpg' },
    'samsung-display-oled-qd-oled-color-experience-naming': { current: 'samsung-display-synchroma', image: '/assets/portfolio/thumbnails/18_samsung-display-synchroma.jpg' },
    '삼성-micro-sd-card': { current: 'samsung-microsd', image: '/assets/portfolio/thumbnails/52_samsung-microsd.jpg' },
    'lg-styler-online-feature': { current: 'lg-styler-of', image: '/assets/portfolio/thumbnails/17_lg-styler-of.jpg' },
    'lg-brand-book': { current: 'lg-brand-book', image: '/assets/portfolio/thumbnails/29_lg-brand-book.jpg' },
    'olive-young-25th-anniversary-tvc': { current: 'olive-young-25th-anniversary', image: '/assets/portfolio/thumbnails/19_olive-young-25th-anniversary.jpg' },
    'samsung-smartthings-lifestyle-video': { current: 'samsung-smartthings-lifestyle', image: '/assets/portfolio/thumbnails/20_samsung-smartthings-lifestyle.jpg' },
    'hyundai-pleos-vision-film': { current: 'hyundai-pleos-vision', image: '/assets/portfolio/thumbnails/21_hyundai-pleos-vision.jpg' },
    'samyang-tangle-renewal-campaign-ad-video': { current: 'samyang-tangle-renewal', image: '/assets/portfolio/thumbnails/22_samyang-tangle-renewal.jpg' },
    'odyssey-neo-g9-video-copy': { current: 'odyssey-neo-g9', image: '/assets/portfolio/thumbnails/23_odyssey-neo-g9.jpg' },
    'samsung-ea-rebranding-video': { current: 'samsung-ea-rebranding', image: '/assets/portfolio/thumbnails/24_samsung-ea-rebranding.jpg' },
    'lg-tone-of-voice-guidelines': { current: 'lg-tone-of-voice', image: '/assets/portfolio/thumbnails/25_lg-tone-of-voice.jpg' },
    'hankook-tire-warranty-program-naming': { current: 'hankook-tire-warranty', image: '/assets/portfolio/thumbnails/16_hankook-tire-warranty.jpg' },
    'lineage-w-slogan': { current: 'lineage-w-slogan', image: '/assets/portfolio/thumbnails/27_lineage-w-slogan.jpg' },
    'lg-enblock-website-copy': { current: 'lg-enblock-website', image: '/assets/portfolio/thumbnails/28_lg-enblock-website.jpg' },
    'naver-corp-website-renewal': { current: 'naver-website-renewal', image: '/assets/portfolio/thumbnails/26_naver-website-renewal.jpg' },
    'ahc-브랜드-매니패스토': { current: 'ahc-brand-manifesto', image: '/assets/portfolio/thumbnails/30_ahc-brand-manifesto.jpg' },
    'automotive-memory-online-features': { current: 'automotive-memory-features', image: '/assets/portfolio/thumbnails/32_automotive-memory-features.jpg' },
    'aero-furniture-message-matrix': { current: 'aero-furniture-message-matrix', image: '/assets/portfolio/thumbnails/31_aero-furniture-message-matrix.jpg' },
    'samsung-display-oled-era-website-copy': { current: 'samsung-oled-era', image: '/assets/portfolio/thumbnails/35_samsung-oled-era.jpg' },
    'samsung-display-new-york-tour-bus-wrap-copy': { current: 'samsung-display-bus-wrap', image: '/assets/portfolio/thumbnails/34_samsung-display-bus-wrap.jpg' },
    'hankook-tire-weatherflex-launch-copy': { current: 'hankook-weatherflex', image: '/assets/portfolio/thumbnails/33_hankook-weatherflex.jpg' },
    'aestura-atobarrier365-hydro-soothing-cream-video': { current: 'aestura-atobarrier', image: '/assets/portfolio/thumbnails/38_aestura-atobarrier.jpg' },
    'fc-online-ad-video-copywashing': { current: 'fc-online-mourinho', image: '/assets/portfolio/thumbnails/37_fc-online-mourinho.jpg' },
    'lg-electronics-newsletter-b-i-t-e': { current: 'lg-newsletter-bite', image: '/assets/portfolio/thumbnails/36_lg-newsletter-bite.jpg' },
    'melon-music-sns-video-copy': { current: 'melon-music-sns', image: '/assets/portfolio/thumbnails/39_melon-music-sns.jpg' },
    'huvitz-lens-edger-slogan': { current: 'huvitz-lens-edger', image: '/assets/portfolio/thumbnails/40_huvitz-lens-edger.jpg' },
    'musinsa-ad-video-copywashing': { current: 'musinsa-global-launch', image: '/assets/portfolio/thumbnails/41_musinsa-global-launch.jpg' },
    'hyundai-uam-tvc-copy': { current: 'hyundai-uam-tvc', image: '/assets/portfolio/thumbnails/42_hyundai-uam-tvc.jpg' },
    'kakao-pay-company-introduction-video-copy': { current: 'kakao-pay-intro', image: '/assets/portfolio/thumbnails/43_kakao-pay-intro.jpg' },
    'doosan-excavator-and-wheel-loader-slogan-sub-copy-2': { current: 'doosan-wheel-loader', image: '/assets/portfolio/thumbnails/44_doosan-wheel-loader.jpg' },
    'sk-hynix-global-slogan': { current: 'sk-hynix-global-slogan', image: '/assets/portfolio/thumbnails/45_sk-hynix-global-slogan.jpg' },
    'kia-ev6-world-premiere-2': { current: 'kia-ev6-world-premiere', image: '/assets/portfolio/thumbnails/47_kia-ev6-world-premiere.jpg' },
    'medit-brand-manual-corporate-guideline': { current: 'medit-brand-manual', image: '/assets/portfolio/thumbnails/48_medit-brand-manual.jpg' },
    'laneige-water-sleeping-mask-tvc': { current: 'laneige-sleeping-mask', image: '/assets/portfolio/thumbnails/46_laneige-sleeping-mask.jpg' },
    'kia-uefa-europa-league-tvc': { current: 'kia-uefa-europa', image: '/assets/portfolio/thumbnails/49_kia-uefa-europa.jpg' },
    'hyundai-department-store-duty-free': { current: 'hyundai-duty-free', image: '/assets/portfolio/thumbnails/50_hyundai-duty-free.jpg' },
    'lg-signature-웹사이트': { current: 'lg-signature-website', image: '/assets/portfolio/thumbnails/51_lg-signature-website.jpg' },
    'the-face-shop-안티다크닝-쿠션': { current: 'faceshop-cushion', image: '/assets/portfolio/thumbnails/53_faceshop-cushion.jpg' },
    '현대-shackletons-return-영상': { current: 'hyundai-shackleton', image: '/assets/portfolio/thumbnails/54_hyundai-shackleton.jpg' },
    '한화그룹-전사-홍보': { current: 'hanwha-corporate', image: '/assets/portfolio/thumbnails/55_hanwha-corporate.jpg' },
    '1006': { current: 'doosan-corporate', image: '/assets/portfolio/thumbnails/56_doosan-corporate.jpg' },
    'zic': { current: 'zic-global-slogan', image: '/assets/portfolio/thumbnails/57_zic-global-slogan.jpg' }
  };

  var lastSection = null;
  var notifyTimer = 0;
  var frameMuted = window.parent !== window;
  var mediaObserver = null;
  var originalMediaPlay = window.HTMLMediaElement && window.HTMLMediaElement.prototype.play;
  var isApplyingRemoteAction = false;
  var isApplyingRemoteScroll = false;
  var scrollNotifyFrame = 0;
  var remoteScrollReleaseTimer = 0;
  var drawerNotifyTimer = 0;
  var lastDrawerStateKey = '';
  var lastRoute = '';
  var guideStorageKey = 'stks-legacy-guide-state-v10';
  var guideState = readStaticGuideState();

  function parseSection() {
    var activeBox = document.querySelector('.box.active');
    if (activeBox && sectionByBoxId[activeBox.id]) return sectionByBoxId[activeBox.id];

    var bodyClass = document.body ? document.body.className : '';
    if (/\bsection-about\b/.test(bodyClass)) return 'about';
    if (/\bsection-service\b/.test(bodyClass)) return 'services';
    if (/\bsection-work\b/.test(bodyClass)) return 'portfolio';
    if (/\bsection-blog\b/.test(bodyClass)) return 'clients';

    var path = (window.location.pathname || '/').replace(/^\/legacy-wp\/?/, '').replace(/^\/|\/$/g, '').toLowerCase();
    if (path.indexOf('portfolios/') === 0) return 'portfolio';
    if (sectionByPath[path]) return sectionByPath[path];

    var hash = (window.location.hash || '').replace(/^#/, '').toLowerCase();
    if (sectionByPath[hash]) return sectionByPath[hash];

    return 'home';
  }

  function removeSectionClass() {
    if (!document.body) return;
    document.body.className = document.body.className.replace(/(^|\s)section-\S+/g, '').replace(/\s+/g, ' ').trim();
  }

  function setSectionClass(boxId) {
    removeSectionClass();
    if (document.body) document.body.classList.add('section-' + boxId);
  }

  function notifyParent() {
    var section = parseSection();
    updateStaticSnapshotGuide(section);
    if (section === lastSection) return;
    lastSection = section;

    if (window.parent === window) return;
    window.parent.postMessage(
      {
        source: 'stks-frame',
        type: 'section-change',
        frame: 'legacy',
        section: section
      },
      '*'
    );
  }

  function installStaticSnapshotComparisonLayer() {
    if (!window.__stksStaticLegacySnapshot || document.getElementById('stks-static-snapshot-style')) return;

    var style = document.createElement('style');
    style.id = 'stks-static-snapshot-style';
    style.textContent = [
      "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;800;900&display=swap');",
      "@font-face{font-family:'Pretendard';font-weight:600;src:url('/assets/fonts/pretendard/Pretendard-SemiBold.woff2') format('woff2');font-display:swap;}",
      "@font-face{font-family:'Pretendard';font-weight:800 900;src:url('/assets/fonts/pretendard/Pretendard-Bold.woff2') format('woff2');font-display:swap;}",
      '#contact:not(.drawer-open) h2#contact-handle.handle{left:50%!important;margin-left:-70px!important;top:0!important;bottom:auto!important;display:block!important;opacity:1!important;visibility:visible!important;}',
      '#contact:not(.drawer-open) h2#faq-handle.handle{display:none!important;opacity:0!important;visibility:hidden!important;pointer-events:none!important;}',
      'html body #contact.drawer-open h2#contact-handle.handle{left:50%!important;margin-left:-70px!important;top:-40px!important;bottom:auto!important;}',
      'html body #contact.drawer-open h2#faq-handle.handle{left:50%!important;margin-left:-70px!important;top:-40px!important;bottom:auto!important;}',
      '.stks-legacy-guide,.stks-legacy-guide *{box-sizing:border-box;font-family:Poppins,Pretendard,system-ui,-apple-system,sans-serif!important;}',
      '.stks-legacy-guide{position:fixed;left:18px;top:18px;z-index:280;width:min(270px,calc(100vw - 36px));min-height:0;padding:var(--guide-pad-y,13px) 42px var(--guide-pad-y,14px) var(--guide-pad-x,15px);overflow:hidden;border:1px solid rgba(25,51,74,.2);background:#fff;box-shadow:0 18px 44px rgba(0,0,0,.18);backdrop-filter:blur(10px);cursor:move;pointer-events:auto;user-select:none;touch-action:none;font-family:Poppins,Pretendard,system-ui,-apple-system,sans-serif!important;}',
      '.stks-legacy-guide button{font:inherit;}',
      '.stks-legacy-guide-toggle{appearance:none!important;-webkit-appearance:none!important;position:absolute!important;top:var(--guide-toggle-top,8px)!important;right:8px!important;z-index:4!important;width:30px!important;height:30px!important;display:block!important;padding:0!important;border:0!important;outline:0!important;background:transparent!important;box-shadow:none!important;color:#141414!important;cursor:pointer!important;font-size:0!important;line-height:1!important;opacity:1!important;visibility:visible!important;transform:none!important;}',
      '.stks-guide-toggle-icon{position:absolute!important;top:var(--guide-icon-top,50%)!important;left:50%!important;width:19px!important;height:19px!important;display:block!important;overflow:visible!important;transform:translate(-50%,-50%)!important;opacity:1!important;visibility:visible!important;pointer-events:none!important;}',
      '.stks-guide-toggle-icon line{stroke:#141414!important;stroke-width:2.8!important;stroke-linecap:round!important;opacity:1!important;vector-effect:non-scaling-stroke!important;transition:opacity .18s ease,stroke .18s ease!important;}',
      '.stks-guide-toggle-icon .stks-guide-toggle-v{opacity:0!important;}',
      '.stks-legacy-guide.is-minimized .stks-legacy-guide-toggle{top:2px!important;}',
      '.stks-legacy-guide.is-minimized .stks-guide-toggle-icon{top:45%!important;}',
      '.stks-legacy-guide.is-minimized .stks-guide-toggle-icon .stks-guide-toggle-v{opacity:1!important;}',
      '.stks-legacy-guide-toggle:hover .stks-guide-toggle-icon line{stroke:#a11d20!important;}',
      '.stks-legacy-guide-toggle:focus-visible .stks-guide-toggle-icon{filter:drop-shadow(0 0 2px rgba(161,29,32,.24));}',
      '.stks-legacy-guide-resize{position:absolute;right:0;bottom:0;z-index:3;width:38px;height:38px;cursor:nwse-resize;}',
      '.stks-legacy-guide-resize:before{content:"";position:absolute;right:8px;bottom:8px;width:20px;height:20px;background:linear-gradient(135deg,transparent 0 39%,rgba(25,51,74,.68) 40% 47%,transparent 48%),linear-gradient(135deg,transparent 0 58%,rgba(25,51,74,.58) 59% 66%,transparent 67%),linear-gradient(135deg,transparent 0 77%,rgba(25,51,74,.48) 78% 84%,transparent 85%);clip-path:polygon(100% 0,100% 100%,0 100%);opacity:.9;transition:opacity .18s ease,transform .18s ease;}',
      '.stks-legacy-guide-resize:hover:before{opacity:1;transform:translate(-1px,-1px);}',
      '.stks-legacy-guide-kicker{display:block;color:#a11d20!important;font-family:Poppins,Pretendard,system-ui,-apple-system,sans-serif!important;font-size:var(--guide-kicker-size,9px)!important;font-weight:900!important;letter-spacing:.05em!important;line-height:1.1!important;text-transform:uppercase!important;}',
      '.stks-legacy-guide strong{display:block;margin-top:var(--guide-title-gap,5px);color:#19334a!important;font-family:Poppins,Pretendard,system-ui,-apple-system,sans-serif!important;font-size:var(--guide-title-size,22px)!important;font-weight:900!important;letter-spacing:-.02em!important;line-height:.98!important;}',
      '.stks-legacy-guide p{margin:var(--guide-body-gap,8px) 0 0!important;color:#403d38!important;font-family:Poppins,Pretendard,system-ui,-apple-system,sans-serif!important;font-size:var(--guide-body-size,11px)!important;font-weight:600!important;line-height:var(--guide-body-line,1.35)!important;}',
      '.stks-legacy-guide.is-minimized{width:96px!important;height:36px!important;min-height:36px!important;padding:0 34px 0 12px;display:flex;align-items:center;}',
      '.stks-legacy-guide.is-minimized .stks-legacy-guide-body,.stks-legacy-guide.is-minimized .stks-legacy-guide-resize{display:none;}',
      '.stks-legacy-guide.is-minimized:before{content:"Guide";color:#19334a;font-family:Poppins,Arial,sans-serif;font-size:10px;font-weight:900;letter-spacing:.04em;text-transform:uppercase;}',
      '.stks-static-project-detail{position:fixed;inset:72px 44px 72px;z-index:245;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(240px,.9fr);gap:0;overflow:hidden;border:1px solid rgba(25,51,74,.22);background:#fff;box-shadow:0 24px 70px rgba(0,0,0,.28);font-family:Poppins,Arial,sans-serif;}',
      '.stks-static-project-detail img{width:100%;height:100%;object-fit:cover;background:#f8f6f1;}',
      '.stks-static-project-copy{display:flex;flex-direction:column;justify-content:center;padding:clamp(22px,5vw,58px);color:#19334a;}',
      '.stks-static-project-copy h2{margin:0;color:#19334a;font-size:clamp(34px,6vw,72px);font-weight:900;letter-spacing:-.03em;line-height:.94;}',
      '.stks-static-project-copy p{margin:22px 0 0;color:#403d38;font-size:clamp(13px,1.8vw,18px);font-weight:600;line-height:1.55;}',
      '.stks-static-project-close{appearance:none!important;-webkit-appearance:none!important;position:absolute!important;top:16px!important;right:16px!important;z-index:3!important;width:34px!important;height:34px!important;min-width:0!important;min-height:0!important;padding:0!important;border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;color:transparent!important;font-size:0!important;line-height:1!important;cursor:pointer!important;opacity:1!important;}',
      '.stks-static-project-close:before,.stks-static-project-close:after{content:""!important;position:absolute!important;left:50%!important;top:50%!important;width:28px!important;height:2px!important;border-radius:999px!important;background:#19334a!important;transform-origin:center!important;}',
      '.stks-static-project-close:before{transform:translate(-50%,-50%) rotate(45deg)!important;}',
      '.stks-static-project-close:after{transform:translate(-50%,-50%) rotate(-45deg)!important;}',
      '.stks-static-project-close:hover:before,.stks-static-project-close:hover:after{background:#a11d20!important;}',
      '@media (max-width:760px){.stks-static-project-detail{inset:54px 16px 64px;grid-template-columns:1fr;grid-template-rows:minmax(180px,42%) 1fr}.stks-static-project-copy{padding:24px}.stks-static-project-copy h2{font-size:clamp(30px,9vw,46px)}}',
      '@media (max-width:760px){.stks-legacy-guide{left:12px;top:12px;width:min(220px,calc(100vw - 24px));padding:var(--guide-pad-y,10px) 38px var(--guide-pad-y,10px) var(--guide-pad-x,12px)}}',
      '@media (max-height:520px){.stks-legacy-guide{top:12px;transform:scale(.86);transform-origin:top left;}}'
    ].join('\n');
    document.head.appendChild(style);

    var guide = document.createElement('aside');
    guide.className = 'stks-legacy-guide';
    guide.setAttribute('aria-label', 'Legacy WordPress guide');
    document.body.appendChild(guide);
    installStaticGuideInteractions(guide);
    updateStaticSnapshotGuide(parseSection());
  }

  function updateStaticSnapshotGuide(section) {
    if (!window.__stksStaticLegacySnapshot) return;
    var guide = document.querySelector('.stks-legacy-guide');
    if (!guide) return;
    var content = staticGuideBySection[section] || staticGuideBySection.home;
    guide.innerHTML =
      '<button class="stks-legacy-guide-toggle" type="button" data-stks-guide-toggle aria-label="Minimize guide"><svg class="stks-guide-toggle-icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><line x1="4" y1="10" x2="16" y2="10"></line><line class="stks-guide-toggle-v" x1="10" y1="4" x2="10" y2="16"></line></svg></button>' +
      '<div class="stks-legacy-guide-body">' +
      '<span class="stks-legacy-guide-kicker">' +
      content.detail +
      '</span><strong>' +
      content.title +
      '</strong><p>' +
      content.body +
      '</p></div><span class="stks-legacy-guide-resize" data-stks-guide-resize aria-hidden="true"></span>';
    applyStaticGuideState(guide);
  }

  function readStaticGuideState() {
    var fallback = {
      left: 18,
      top: 18,
      width: 270,
      height: 0,
      minimized: false
    };

    try {
      var saved = window.localStorage && window.localStorage.getItem(guideStorageKey);
      if (!saved) return fallback;
      var parsed = JSON.parse(saved);
      return {
        left: Number(parsed.left) || fallback.left,
        top: Number(parsed.top) || fallback.top,
        width: Number(parsed.width) || fallback.width,
        height: Number(parsed.height) || fallback.height,
        minimized: !!parsed.minimized
      };
    } catch (error) {
      return fallback;
    }
  }

  function saveStaticGuideState() {
    try {
      if (window.localStorage) window.localStorage.setItem(guideStorageKey, JSON.stringify(guideState));
    } catch (error) {
      // Storage is optional; dragging should still work.
    }
  }

  function clampNumber(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function applyStaticGuideState(guide) {
    if (!guide) return;

    var minWidth = 176;
    var defaultWidth = 270;
    var maxWidth = Math.max(minWidth, window.innerWidth - 16);
    var desiredWidth = guideState.width || defaultWidth;
    var visibleWidth = guideState.minimized ? 96 : clampNumber(desiredWidth, minWidth, maxWidth);
    var requestedHeight = guideState.minimized ? 36 : Math.max(0, guideState.height || 0);
    var heightForType = requestedHeight || guide.offsetHeight || 116;
    var widthGrowthScale = clampNumber((visibleWidth - defaultWidth) / Math.max(1, maxWidth - defaultWidth), 0, 1);
    var heightGrowthScale = guideState.height ? clampNumber((heightForType - 128) / Math.max(1, window.innerHeight - 144), 0, 1) : 0;
    var growthScale = guideState.minimized ? 0 : clampNumber(Math.max(widthGrowthScale, heightGrowthScale * 0.88), 0, 1);

    guide.style.width = visibleWidth + 'px';
    guide.style.height = '';
    guide.style.setProperty('--guide-kicker-size', 9 + growthScale * 2 + 'px');
    guide.style.setProperty('--guide-title-size', 22 + growthScale * 6 + 'px');
    guide.style.setProperty('--guide-body-size', 11 + growthScale * 2 + 'px');
    guide.style.setProperty('--guide-title-gap', 5 + growthScale * 2 + 'px');
    guide.style.setProperty('--guide-body-gap', 8 + growthScale * 3 + 'px');
    guide.style.setProperty('--guide-body-line', String(1.35 + growthScale * 0.04));
    guide.style.setProperty('--guide-pad-x', 15 + growthScale * 5 + 'px');
    guide.style.setProperty('--guide-pad-y', 13 + growthScale * 6 + 'px');

    var minContentHeight = guideState.minimized ? 36 : Math.ceil(guide.scrollHeight + 2);
    var visibleHeight = guideState.minimized ? 36 : clampNumber(requestedHeight || minContentHeight, minContentHeight, Math.max(minContentHeight, window.innerHeight - 16));
    var maxLeft = Math.max(8, window.innerWidth - visibleWidth - 8);
    var maxTop = Math.max(8, window.innerHeight - visibleHeight - 8);

    guideState.left = clampNumber(guideState.left, 8, maxLeft);
    guideState.top = clampNumber(guideState.top, 8, maxTop);
    if (!guideState.minimized) guideState.width = visibleWidth;
    if (!guideState.minimized && guideState.height) guideState.height = visibleHeight;

    guide.style.left = guideState.left + 'px';
    guide.style.top = guideState.top + 'px';
    guide.style.width = visibleWidth + 'px';
    guide.style.height = !guideState.minimized && guideState.height ? visibleHeight + 'px' : '';
    guide.classList.toggle('is-minimized', guideState.minimized);

    var toggle = guide.querySelector('[data-stks-guide-toggle]');
    if (toggle) {
      if (!toggle.querySelector('.stks-guide-toggle-icon')) {
        toggle.innerHTML =
          '<svg class="stks-guide-toggle-icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><line x1="4" y1="10" x2="16" y2="10"></line><line class="stks-guide-toggle-v" x1="10" y1="4" x2="10" y2="16"></line></svg>';
      }
      toggle.setAttribute('aria-label', guideState.minimized ? 'Restore guide' : 'Minimize guide');
    }
    syncStaticGuideTogglePosition(guide);
  }

  function syncStaticGuideTogglePosition(guide) {
    var toggle = guide && guide.querySelector('[data-stks-guide-toggle]');
    var kicker = guide && guide.querySelector('.stks-legacy-guide-kicker');
    if (!guide || !toggle) return;

    if (guideState.minimized || !kicker) {
      guide.style.setProperty('--guide-toggle-top', '2px');
      guide.style.setProperty('--guide-icon-top', '45%');
      return;
    }

    var guideRect = guide.getBoundingClientRect();
    var kickerRect = kicker.getBoundingClientRect();
    var toggleSize = 30;
    var centerY = kickerRect.top - guideRect.top + kickerRect.height / 2;
    var maxTop = Math.max(4, guide.offsetHeight - toggleSize - 4);
    var toggleTop = clampNumber(centerY - toggleSize / 2, 2, maxTop);

    guide.style.setProperty('--guide-toggle-top', toggleTop + 'px');
    guide.style.setProperty('--guide-icon-top', '50%');
  }

  function installStaticGuideInteractions(guide) {
    if (!guide || guide.__stksGuideInteractionsReady) return;
    guide.__stksGuideInteractionsReady = true;

    var action = null;
    var ignoreNextGuideClick = false;

    function finishAction() {
      if (!action) return;
      ignoreNextGuideClick = !!action.moved;
      action = null;
      saveStaticGuideState();
    }

    function moveGuideAction(event) {
      if (!action || action.pointerId !== event.pointerId) return;

      event.preventDefault();
      event.stopPropagation();

      var deltaX = event.clientX - action.startX;
      var deltaY = event.clientY - action.startY;
      if (Math.abs(deltaX) + Math.abs(deltaY) > 4) action.moved = true;

      if (action.type === 'resize') {
        guideState.width = clampNumber(action.width + deltaX, 176, Math.max(176, window.innerWidth - guideState.left - 8));
        guideState.height = clampNumber(action.height + deltaY, 90, Math.max(90, window.innerHeight - guideState.top - 8));
      } else {
        var currentWidth = guideState.minimized ? 96 : guideState.width || guide.offsetWidth;
        var currentHeight = guideState.minimized ? 36 : guideState.height || guide.offsetHeight;
        guideState.left = clampNumber(action.left + deltaX, 8, Math.max(8, window.innerWidth - currentWidth - 8));
        guideState.top = clampNumber(action.top + deltaY, 8, Math.max(8, window.innerHeight - currentHeight - 8));
      }

      applyStaticGuideState(guide);
    }

    guide.addEventListener('click', function (event) {
      var toggle = event.target && event.target.closest && event.target.closest('[data-stks-guide-toggle]');
      event.stopPropagation();
      if (ignoreNextGuideClick) {
        ignoreNextGuideClick = false;
        event.preventDefault();
        return;
      }
      if (!toggle && !guideState.minimized) return;
      event.preventDefault();
      guideState.minimized = !guideState.minimized;
      applyStaticGuideState(guide);
      saveStaticGuideState();
    });

    guide.addEventListener('pointerdown', function (event) {
      if (event.button && event.button !== 0) return;
      if (event.target && event.target.closest && event.target.closest('[data-stks-guide-toggle]')) return;

      var rect = guide.getBoundingClientRect();
      var isResize =
        !guideState.minimized &&
        ((event.target && event.target.closest && event.target.closest('[data-stks-guide-resize]')) ||
          (event.clientX >= rect.right - 38 && event.clientY >= rect.bottom - 38));
      if (isResize && guideState.minimized) return;

      event.preventDefault();
      event.stopPropagation();
      if (guide.setPointerCapture) guide.setPointerCapture(event.pointerId);

      action = {
        type: isResize ? 'resize' : 'drag',
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        left: guideState.left,
        top: guideState.top,
        width: guideState.width || guide.offsetWidth,
        height: guideState.height || guide.offsetHeight,
        moved: false
      };
    });

    guide.addEventListener('pointermove', moveGuideAction);
    window.addEventListener('pointermove', moveGuideAction);
    guide.addEventListener('pointerup', finishAction);
    guide.addEventListener('pointercancel', finishAction);
    guide.addEventListener('lostpointercapture', finishAction);
    window.addEventListener('pointerup', finishAction);
    window.addEventListener('pointercancel', finishAction);
    window.addEventListener('resize', function () {
      applyStaticGuideState(guide);
      saveStaticGuideState();
    });
  }

  function scheduleNotify() {
    window.clearTimeout(notifyTimer);
    notifyTimer = window.setTimeout(function () {
      notifyRoute();
      notifyParent();
    }, 180);
  }

  function postFrameMessage(type, payload) {
    if (window.parent === window) return;
    window.parent.postMessage(
      Object.assign(
        {
          source: 'stks-frame',
          type: type,
          frame: 'legacy'
        },
        payload || {}
      ),
      '*'
    );
  }

  function normalizeRoutePath() {
    return (window.location.pathname || '/').replace(/^\/legacy-wp\/?/, '/').replace(/\/$/, '');
  }

  function notifyRoute() {
    var path = normalizeRoutePath();
    var route = (!path || path === '/') ? '' : path;
    route += window.location.hash || '';
    if (route === lastRoute) return;
    lastRoute = route;

    var projectMatch = path.match(/\/portfolios\/([^/?#]+)/);
    if (projectMatch && projectMatch[1]) {
      updateStaticSnapshotGuide('project');
      postFrameMessage('project-route-change', {
        legacySlug: decodeURIComponent(projectMatch[1]),
        url: 'sticksandstones.kr' + path
      });
    }

    postFrameMessage('route-change', {
      url: 'sticksandstones.kr' + route
    });
  }

  function normalizeLegacyAssetUrl(value) {
    if (!value || value.indexOf('/legacy-wp/wp-content/uploads/') === -1) return value;

    try {
      return encodeURI(decodeURI(value));
    } catch (error) {
      return encodeURI(value);
    }
  }

  function getLegacySlugFromHref(href) {
    var match = String(href || '').match(/\/portfolios\/([^/?#]+)/);
    return match && match[1] ? decodeURIComponent(match[1]) : '';
  }

  function titleizeProjectSlug(slug) {
    return String(slug || '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, function (letter) {
        return letter.toUpperCase();
      });
  }

  function getProjectTitleFromLink(link, legacySlug) {
    var title = link && link.querySelector && link.querySelector('.thumb-info h3');
    return (title && title.textContent && title.textContent.trim()) || titleizeProjectSlug(legacySlug);
  }

  function repairLegacyImages() {
    document.querySelectorAll('img[src*="/legacy-wp/wp-content/uploads/"]').forEach(function (image) {
      var projectLink = image.closest && image.closest('a[href*="/portfolios/"]');
      var legacySlug = projectLink ? getLegacySlugFromHref(projectLink.getAttribute('href')) : '';
      var projectAsset = legacySlug && legacyProjectAssets[legacySlug];
      if (projectAsset) {
        image.setAttribute('src', projectAsset.image);
      }

      var src = image.getAttribute('src');
      var normalizedSrc = normalizeLegacyAssetUrl(src);
      if (normalizedSrc && normalizedSrc !== src) image.setAttribute('src', normalizedSrc);

      image.removeAttribute('srcset');
      image.removeAttribute('sizes');
      image.setAttribute('loading', 'eager');
      image.style.opacity = image.style.opacity || '1';
      image.style.visibility = image.style.visibility || 'visible';
    });
  }

  function hideStaticProjectDetail() {
    document.querySelectorAll('.stks-static-project-detail').forEach(function (detail) {
      detail.parentNode && detail.parentNode.removeChild(detail);
    });
    updateStaticSnapshotGuide(parseSection());
  }

  function showStaticProjectDetail(legacySlug, title) {
    if (!window.__stksStaticLegacySnapshot || !legacySlug) return;

    var asset = legacyProjectAssets[legacySlug] || {};
    var projectTitle = title || titleizeProjectSlug(asset.current || legacySlug);
    hideStaticProjectDetail();
    updateStaticSnapshotGuide('project');

    var detail = document.createElement('article');
    detail.className = 'stks-static-project-detail';
    detail.setAttribute('aria-label', 'Legacy portfolio detail');
    detail.innerHTML =
      '<button type="button" class="stks-static-project-close" aria-label="Close portfolio detail">×</button>' +
      '<img src="' +
      (asset.image || '/assets/portfolio/thumbnails/01_lg-2023-new-years-message.jpg') +
      '" alt="">' +
      '<div class="stks-static-project-copy"><h2>' +
      projectTitle +
      '</h2><p>The legacy detail view was tied to a PHP single-portfolio template and uploaded media. This comparison keeps the old-site context visible while the current rebuild opens the addressable TypeScript route.</p></div>';

    document.body.appendChild(detail);
    detail.querySelector('.stks-static-project-close').addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      hideStaticProjectDetail();
      postFrameMessage('route-change', { url: 'sticksandstones.kr#portfolio' });
      postFrameMessage('section-change', { section: 'portfolio' });
    });
  }

  function muteYoutubeIframe(iframe) {
    if (!iframe || !iframe.src || iframe.src.indexOf('youtube.com/embed') === -1) return;

    try {
      var url = new URL(iframe.src);
      if (frameMuted) {
        if (url.searchParams.get('mute') === '1') return;
        url.searchParams.set('mute', '1');
      } else {
        if (!url.searchParams.has('mute')) return;
        url.searchParams.delete('mute');
      }
      iframe.src = url.toString();
    } catch (error) {}
  }

  function applyMediaMute() {
    document.querySelectorAll('audio, video').forEach(function (media) {
      media.muted = frameMuted;
      if (frameMuted && typeof media.pause === 'function') {
        try {
          media.pause();
          media.currentTime = 0;
        } catch (error) {}
      }
    });

    document.querySelectorAll('iframe[src*="youtube.com/embed"]').forEach(muteYoutubeIframe);
  }

  function patchMediaPlayback() {
    if (!originalMediaPlay || originalMediaPlay.__stksLegacyPatched) return;

    window.HTMLMediaElement.prototype.play = function () {
      if (frameMuted) {
        this.muted = true;
        try {
          this.pause();
        } catch (error) {}
        return Promise.resolve();
      }

      return originalMediaPlay.apply(this, arguments);
    };
    window.HTMLMediaElement.prototype.play.__stksLegacyPatched = true;
  }

  function observeMedia() {
    if (mediaObserver || !window.MutationObserver) return;
    mediaObserver = new MutationObserver(function () {
      if (frameMuted) applyMediaMute();
    });
    mediaObserver.observe(document.documentElement || document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src']
    });
  }

  function setFrameMuted(muted) {
    frameMuted = !!muted;
    applyMediaMute();
    if (frameMuted) {
      window.setTimeout(applyMediaMute, 140);
      window.setTimeout(applyMediaMute, 520);
    }
  }

  function clampProgress(progress) {
    var value = Number(progress);
    if (!isFinite(value)) return 0;
    return Math.min(1, Math.max(0, value));
  }

  function getScrollElement() {
    return (
      document.querySelector('.box.active') ||
      document.scrollingElement ||
      document.documentElement ||
      document.body
    );
  }

  function getScrollProgress() {
    var element = getScrollElement();
    if (!element) return 0;

    var max = Math.max(0, element.scrollHeight - element.clientHeight);
    if (max <= 0) return 0;
    return clampProgress(element.scrollTop / max);
  }

  function applyScrollProgress(progress) {
    var element = getScrollElement();
    if (!element) return;

    var max = Math.max(0, element.scrollHeight - element.clientHeight);
    element.scrollTop = Math.round(max * clampProgress(progress));
  }

  function scheduleScrollNotify() {
    if (isApplyingRemoteScroll) return;
    if (scrollNotifyFrame) return;

    scrollNotifyFrame = window.requestAnimationFrame(function () {
      scrollNotifyFrame = 0;
      if (isApplyingRemoteScroll) return;

      var section = parseSection();
      if (section === 'home') return;

      postFrameMessage('scroll-change', {
        section: section,
        progress: getScrollProgress()
      });
    });
  }

  function applyRemoteScroll(section, progress) {
    var needsNavigation = parseSection() !== section;
    isApplyingRemoteScroll = true;

    if (needsNavigation) openSection(section);
    applyScrollProgress(progress);
    if (needsNavigation) {
      window.requestAnimationFrame(function () {
        applyScrollProgress(progress);
      });
      [120, 420].forEach(function (delay) {
        window.setTimeout(function () {
          applyScrollProgress(progress);
        }, delay);
      });
    }

    window.clearTimeout(remoteScrollReleaseTimer);
    remoteScrollReleaseTimer = window.setTimeout(function () {
      isApplyingRemoteScroll = false;
    }, needsNavigation ? 560 : 80);
  }

  function openLegacyVideo() {
    isApplyingRemoteAction = true;
    updateStaticSnapshotGuide('video');

    if (!triggerClick(document.querySelector('#logo'))) {
      if (window.jQuery && window.jQuery.magnificPopup) {
        window.jQuery.magnificPopup.open({
          items: {
            src: 'https://www.youtube.com/embed/OCWZ5-vivHk?autoplay=1' + (frameMuted ? '&mute=1' : '')
          },
          type: 'iframe'
        });
      }
    }

    window.setTimeout(applyMediaMute, 120);
    window.setTimeout(applyMediaMute, 600);
    window.setTimeout(function () {
      isApplyingRemoteAction = false;
    }, 760);
  }

  function closeLegacyVideo() {
    isApplyingRemoteAction = true;
    updateStaticSnapshotGuide(parseSection());
    if (window.jQuery && window.jQuery.magnificPopup) {
      window.jQuery.magnificPopup.close();
    } else {
      document.querySelectorAll('.mfp-wrap, .mfp-bg').forEach(function (element) {
        element.parentNode && element.parentNode.removeChild(element);
      });
    }
    window.setTimeout(function () {
      isApplyingRemoteAction = false;
    }, 320);
  }

  function getContactHandle() {
    return (
      document.querySelector('#contact .handle a') ||
      document.querySelector('#contact-handle a') ||
      document.querySelector('#contact .handle') ||
      document.querySelector('#contact-handle')
    );
  }

  function isLegacyDrawerOpen() {
    var contact = document.querySelector('#contact');
    var panel = document.querySelector('#contact .contact-info');
    if (contact && contact.classList.contains('drawer-open')) return true;
    if (getLegacyDrawerTab()) return true;
    if (!panel) return false;
    return !panel.classList.contains('hide') && panel.offsetHeight > 0;
  }

  function getLegacyDrawerTab() {
    if (document.body && document.body.classList.contains('drawer-tab-faq')) return 'faq';
    if (document.body && document.body.classList.contains('drawer-tab-contact')) return 'contact';

    var current = document.querySelector('#contact .handle.is-current, #faq .handle.is-current');
    if (current && current.getAttribute('data-tab') === 'faq') return 'faq';
    if (current && current.getAttribute('data-tab') === 'contact') return 'contact';

    return null;
  }

  function setLegacyDrawerSections(tab) {
    var nextTab = tab === 'faq' ? 'faq' : 'contact';
    var sections = document.querySelectorAll('.drawer-section');
    var selected = document.querySelector('#drawer-' + nextTab);

    if (document.body) {
      document.body.classList.remove('drawer-tab-contact', 'drawer-tab-faq');
      document.body.classList.add('drawer-tab-' + nextTab);
    }

    sections.forEach(function (section) {
      var isSelected = section === selected;
      section.style.display = isSelected ? 'block' : 'none';
      section.setAttribute('aria-hidden', isSelected ? 'false' : 'true');
    });

    document.querySelectorAll('#contact .handle, #faq .handle').forEach(function (handle) {
      handle.classList.remove('is-current');
    });

    var activeHandle =
      document.querySelector(nextTab === 'faq' ? '#faq-handle' : '#contact-handle') ||
      document.querySelector('#contact .handle');
    if (activeHandle) activeHandle.classList.add('is-current');

    var panel = document.querySelector('#contact .contact-info');
    if (panel) panel.scrollTop = nextTab === 'faq' && selected ? Math.max(0, selected.offsetTop - 20) : 0;
  }

  function openLegacyDrawer(tab) {
    var contact = document.querySelector('#contact');
    var panel = document.querySelector('#contact .contact-info');

    if (window.jQuery && panel) window.jQuery(panel).stop(true, true);
    if (contact) contact.classList.add('drawer-open');
    if (panel) {
      panel.classList.remove('hide');
      panel.style.display = 'block';
      panel.style.overflowY = 'auto';
      panel.style.overflowX = 'hidden';
      panel.style.maxHeight = 'calc(95vh - 40px)';
    }

    document.querySelectorAll('#contact .handle, #faq .handle').forEach(function (handle) {
      handle.classList.add('active');
    });
    setLegacyDrawerSections(tab);
    updateStaticSnapshotGuide(tab === 'faq' ? 'faq' : 'contact');
  }

  function closeLegacyDrawer() {
    var contact = document.querySelector('#contact');
    var panel = document.querySelector('#contact .contact-info');

    if (window.jQuery && panel) window.jQuery(panel).stop(true, true);
    if (panel) {
      panel.style.display = 'none';
      panel.classList.add('hide');
    }
    if (contact) contact.classList.remove('drawer-open');
    if (document.body) document.body.classList.remove('drawer-tab-contact', 'drawer-tab-faq');
    document.querySelectorAll('#contact .handle, #faq .handle').forEach(function (handle) {
      handle.classList.remove('active', 'is-current');
    });
    updateStaticSnapshotGuide(parseSection());
  }

  function setLegacyDrawer(open, tab) {
    var nextTab = tab === 'faq' ? 'faq' : 'contact';
    if (nextTab === 'faq') {
      isApplyingRemoteAction = true;
      closeLegacyDrawer();
      updateStaticSnapshotGuide(open ? 'faq' : parseSection());
      lastDrawerStateKey = getLegacyDrawerStateKey();
      window.setTimeout(function () {
        isApplyingRemoteAction = false;
      }, 120);
      return;
    }

    var currentTab = getLegacyDrawerTab();
    if (!!open === isLegacyDrawerOpen() && (!open || currentTab === nextTab)) return;

    isApplyingRemoteAction = true;
    if (open) openLegacyDrawer(nextTab);
    else closeLegacyDrawer();
    lastDrawerStateKey = getLegacyDrawerStateKey();

    window.setTimeout(function () {
      isApplyingRemoteAction = false;
    }, 180);
  }

  function getLegacyDrawerState() {
    return {
      open: isLegacyDrawerOpen(),
      tab: getLegacyDrawerTab() || 'contact'
    };
  }

  function getLegacyDrawerStateKey() {
    var state = getLegacyDrawerState();
    return String(state.open) + ':' + state.tab;
  }

  function scheduleDrawerNotify(delay) {
    if (isApplyingRemoteAction) return;

    window.clearTimeout(drawerNotifyTimer);
    drawerNotifyTimer = window.setTimeout(function () {
      if (isApplyingRemoteAction) return;

      var state = getLegacyDrawerState();
      var key = String(state.open) + ':' + state.tab;
      if (key === lastDrawerStateKey) return;
      lastDrawerStateKey = key;

      postFrameMessage('drawer-change', state);
    }, typeof delay === 'number' ? delay : 80);
  }

  function observeDrawerState() {
    if (!window.MutationObserver) return;

    var observer = new MutationObserver(function () {
      scheduleDrawerNotify(90);
    });
    var options = {
      attributes: true,
      attributeFilter: ['class', 'style']
    };
    [
      document.body,
      document.querySelector('#contact'),
      document.querySelector('#contact .contact-info'),
      document.querySelector('#contact-handle'),
      document.querySelector('#faq-handle')
    ].forEach(function (element) {
      if (element) observer.observe(element, options);
    });
  }

  function isProxied() {
    return window.location.pathname.indexOf('/legacy-wp') === 0;
  }

  function normalizeForProxy(url) {
    if (!isProxied() || url === null || typeof url === 'undefined') return url;

    var text = String(url);
    if (text.charAt(0) === '#') return url;

    var next;
    try {
      next = new URL(text, window.location.href);
    } catch (error) {
      return url;
    }

    if (next.origin !== window.location.origin) return url;
    if (next.pathname.indexOf('/legacy-wp') === 0) return url;

    next.pathname = '/legacy-wp' + (next.pathname === '/' ? '/' : next.pathname);
    return next.pathname + next.search + next.hash;
  }

  function patchHistory(method) {
    var original = window.history[method];
    window.history[method] = function () {
      var nextArguments = Array.prototype.slice.call(arguments);
      if (nextArguments.length > 2) {
        nextArguments[2] = normalizeForProxy(nextArguments[2]);
      }
      var result = original.apply(this, nextArguments);
      scheduleNotify();
      return result;
    };
  }

  function triggerClick(element) {
    if (!element) return false;

    if (window.jQuery) {
      window.jQuery(element).trigger('click');
    } else {
      element.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        })
      );
    }

    scheduleNotify();
    return true;
  }

  function replaceHomeUrl() {
    var path = isProxied() ? '/legacy-wp/' : '/';
    window.history.replaceState({ section: '' }, '', path);
    scheduleNotify();
  }

  function forceHome() {
    var boxes = document.querySelectorAll('.box');
    var logo = document.querySelector('#logo');
    var logoImage = document.querySelector('#logo img');
    var back = document.querySelector('#back');

    removeSectionClass();
    boxes.forEach(function (box) {
      box.classList.remove('inactive', 'active');
      box.style.width = '50%';
      box.style.height = '50%';
      box.style.overflow = 'hidden';
      box.scrollTop = 0;
    });

    if (logo) {
      logo.style.left = '50%';
      logo.style.top = '50%';
    }
    if (logoImage) logoImage.style.display = '';
    if (back) {
      back.classList.remove('right-bottom', 'left-bottom', 'right-top', 'left-top');
      back.style.display = 'none';
    }

    replaceHomeUrl();
  }

  function forceOpenSection(section) {
    var boxId = boxIdBySection[section];
    var selected = boxId ? document.getElementById(boxId) : null;
    var logo = document.querySelector('#logo');
    var logoImage = document.querySelector('#logo img');
    var back = document.querySelector('#back');
    var logoPosition = logoPositionBySection[section];
    if (!selected || !logoPosition) return false;

    document.querySelectorAll('.box').forEach(function (box) {
      if (box === selected) {
        box.classList.add('active');
        box.classList.remove('inactive');
        box.style.width = '100%';
        box.style.height = '100%';
        box.style.overflow = 'auto';
      } else {
        box.classList.remove('active');
        box.classList.add('inactive');
        box.style.width = '0%';
        box.style.height = '0%';
        box.style.overflow = 'hidden';
      }
    });

    setSectionClass(boxId);
    if (logo) {
      logo.style.left = logoPosition.left;
      logo.style.top = logoPosition.top;
    }
    if (logoImage) logoImage.style.display = 'none';
    if (back) {
      back.classList.remove('right-bottom', 'left-bottom', 'right-top', 'left-top');
      back.classList.add(logoPosition.backClass);
      back.style.display = 'block';
    }
    repairLegacyImages();
    scheduleNotify();
    return true;
  }

  function isSectionOpen(section) {
    if (section === 'home') return parseSection() === 'home' && !document.querySelector('.box.active');

    var boxId = boxIdBySection[section];
    var selected = boxId ? document.getElementById(boxId) : null;
    return !!(selected && selected.classList.contains('active'));
  }

  function fallbackLoad(section) {
    var url = new URL(window.location.href);
    url.pathname = isProxied() ? '/legacy-wp/' : '/';
    url.hash = hashBySection[section] || '';
    if (section === 'home') {
      url.searchParams.delete('instant');
    } else {
      url.searchParams.set('instant', '1');
    }
    window.location.href = url.pathname + url.search + url.hash;
  }

  function loadSection(section) {
    fallbackLoad(section);
  }

  function openSection(section) {
    if (section === 'home') {
      hideStaticProjectDetail();
      if (parseSection() === 'home') {
        replaceHomeUrl();
        return;
      }

      if (triggerClick(document.querySelector('#back'))) {
        window.setTimeout(function () {
          if (parseSection() !== 'home') forceHome();
        }, 260);
        return;
      }
      forceHome();
      return;
    }

    if (!selectorBySection[section]) return;
    if (section !== 'portfolio') hideStaticProjectDetail();
    if (parseSection() === section) {
      if (!isSectionOpen(section) && forceOpenSection(section)) return;
      if (!isSectionOpen(section)) {
        fallbackLoad(section);
        return;
      }
      scheduleNotify();
      return;
    }

    if (triggerClick(document.querySelector(selectorBySection[section]))) {
      window.setTimeout(function () {
        if (parseSection() !== section) forceOpenSection(section);
      }, 260);
      return;
    }
    if (forceOpenSection(section)) return;
    fallbackLoad(section);
  }

  patchHistory('pushState');
  patchHistory('replaceState');

  window.addEventListener('popstate', scheduleNotify);
  window.addEventListener('hashchange', scheduleNotify);
  window.addEventListener('scroll', scheduleScrollNotify, { passive: true });
  document.addEventListener('scroll', scheduleScrollNotify, true);
  document.addEventListener(
    'click',
    function (event) {
      var target = event.target;
      if (!target || !target.closest) return;
      var portfolioClose = target.closest('.single-portfolio a.close[href*="work-section"], .single-portfolio a.close[href*="#work"]');
      if (portfolioClose) {
        event.preventDefault();
        event.stopPropagation();
        if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();

        postFrameMessage('route-change', { url: 'sticksandstones.kr#portfolio' });
        postFrameMessage('section-change', { section: 'portfolio' });
        loadSection('portfolio');
        return;
      }

      var staticPortfolioLink = target.closest('a[href*="/legacy-wp/portfolios/"], a[href*="/portfolios/"]');
      if (window.__stksStaticLegacySnapshot && staticPortfolioLink) {
        var href = staticPortfolioLink.getAttribute('href') || '';
        var match = href.match(/\/portfolios\/([^/?#]+)/);
        var legacySlug = match && match[1] ? decodeURIComponent(match[1]) : '';
        if (legacySlug) {
          event.preventDefault();
          event.stopPropagation();
          if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();

          showStaticProjectDetail(legacySlug, getProjectTitleFromLink(staticPortfolioLink, legacySlug));
          postFrameMessage('project-route-change', {
            legacySlug: legacySlug,
            url: 'sticksandstones.kr'
          });
          openSection('portfolio');
          return;
        }
      }

      var drawerHandle = target.closest('#contact .handle, #faq .handle, #contact-handle, #faq-handle, .let-us-talk');
      if (drawerHandle) {
        var nextTab = drawerHandle.getAttribute('data-tab') === 'faq' || drawerHandle.id === 'faq-handle' ? 'faq' : 'contact';
        var shouldClose = isLegacyDrawerOpen() && (getLegacyDrawerTab() || 'contact') === nextTab;

        event.preventDefault();
        event.stopPropagation();
        if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();

        if (window.__stksStaticLegacySnapshot && nextTab === 'faq') {
          closeLegacyDrawer();
          updateStaticSnapshotGuide('faq');
          postFrameMessage('drawer-change', { open: false, tab: 'faq' });
          return;
        }

        if (shouldClose) closeLegacyDrawer();
        else openLegacyDrawer(nextTab);

        var state = getLegacyDrawerState();
        lastDrawerStateKey = String(state.open) + ':' + state.tab;
        postFrameMessage('drawer-change', state);
        return;
      }

      var sectionTarget = target.closest('#about, #service, #work, #blog');
      if (sectionTarget && sectionByBoxId[sectionTarget.id]) {
        postFrameMessage('audio-intent', { section: sectionByBoxId[sectionTarget.id] });
      }
      if (target.closest('#logo')) {
        if (!isApplyingRemoteAction) postFrameMessage('video-open');
        window.setTimeout(applyMediaMute, 120);
        window.setTimeout(applyMediaMute, 600);
      }
      if (target.closest('.mfp-close, .mfp-bg')) {
        window.setTimeout(function () {
          if (!isApplyingRemoteAction) postFrameMessage('video-close');
        }, 90);
      }
      if (target.closest('#about, #service, #work, #blog, #back, #logo, a[href]')) {
        scheduleNotify();
      }
    },
    true
  );

  window.addEventListener('message', function (event) {
    var message = event.data;
    if (!message || message.source !== 'stks-comparison') return;
    if (message.type === 'audio-control') {
      if (message.frame === 'legacy') setFrameMuted(message.muted);
      return;
    }
    if (message.type === 'video-control') {
      message.action === 'open' ? openLegacyVideo() : closeLegacyVideo();
      return;
    }
    if (message.type === 'drawer-control') {
      setLegacyDrawer(message.open, message.tab);
      return;
    }
    if (message.type === 'project-control') {
      openSection('portfolio');
      window.setTimeout(function () {
        showStaticProjectDetail(message.legacySlug);
      }, 180);
      return;
    }
    if (message.type === 'scroll-control') {
      if (!hashBySection.hasOwnProperty(message.section)) return;
      applyRemoteScroll(message.section, message.progress);
      return;
    }
    if (message.type !== 'navigate-section') return;
    if (!hashBySection.hasOwnProperty(message.section)) return;
    openSection(message.section);
  });

  if (window.jQuery) {
    window.jQuery(document).on('mfpClose', function () {
      if (!isApplyingRemoteAction) postFrameMessage('video-close');
    });
  }

  patchMediaPlayback();
  observeMedia();
  observeDrawerState();
  installStaticSnapshotComparisonLayer();
  repairLegacyImages();
  setFrameMuted(frameMuted);

  window.setTimeout(function () {
    var legacyProject = new URLSearchParams(window.location.search).get('legacy-project');
    var hash = (window.location.hash || '').replace(/^#/, '').toLowerCase();
    var section = sectionByPath[hash];
    if (section && section !== 'home' && !isSectionOpen(section)) {
      openSection(section);
    }
    if (legacyProject) {
      openSection('portfolio');
      window.setTimeout(function () {
        showStaticProjectDetail(legacyProject);
      }, 360);
    }
  }, 120);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      repairLegacyImages();
      applyMediaMute();
      scheduleNotify();
    });
  } else {
    repairLegacyImages();
    scheduleNotify();
  }
})();
