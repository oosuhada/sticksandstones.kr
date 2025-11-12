# sticksandstones.kr

근무하면서 맡았던 Sticks & Stones 웹사이트 리빌드와 before/after 비교 작업을 포트폴리오용으로 정리한 공개 레포지토리입니다. 회사 내부 WordPress 소스와 운영 히스토리는 공개하지 않고, 공개 가능한 정적 자산과 Vite/TypeScript 리빌드 결과만 분리했습니다.

[Live site](https://stks.oosu.dev) · [Case study](https://stks.oosu.dev/case-study) · [Before/after compare](https://stks.oosu.dev/live-compare)

![Sticks & Stones case study hero](.github/assets/sticks-home.png)

## Project Focus

- 오래된 WordPress 기반 사이트의 브랜드 톤, 콘텐츠 구조, 모션 흐름을 보존하면서 Vite + TypeScript 기반 정적 프론트엔드로 재구성했습니다.
- 원본 회사 repo와 WordPress 런타임을 공개하지 않고도 작업 범위와 기술 판단을 설명할 수 있도록 case-study route를 만들었습니다.
- 리빌드 전/후를 한 화면에서 비교하는 `/live-compare` 화면을 별도로 구성했습니다.
- 포트폴리오/클라이언트/팀/서비스 데이터를 소스 코드에서 탐색 가능한 구조로 정리했습니다.
- 배포 링크는 Vercel legacy가 아니라 현재 홈서버 도메인인 `stks.oosu.dev` 기준으로 정리했습니다.

## Screenshots

| Case study | Live comparison |
| --- | --- |
| ![Case study route](.github/assets/sticks-case-study.png) | ![Before and after comparison](.github/assets/sticks-live-compare.png) |

| Legacy preview | Rebuilt portfolio assets |
| --- | --- |
| ![Legacy-style public preview](.github/assets/sticks-legacy-live.png) | ![Portfolio section preview](public/assets/images/portfolio.png) |

| Services | Clients |
| --- | --- |
| ![Services section](public/assets/images/services.png) | ![Clients section](public/assets/images/clients.png) |

| Brand story | Website work |
| --- | --- |
| ![Brand story service asset](public/assets/images/brandstory.png) | ![Website service asset](public/assets/images/website.png) |

## Portfolio Routes

| Route | Purpose |
| --- | --- |
| `/` | 공개 포트폴리오용 migration summary landing |
| `/case-study` | 리빌드 배경, 제약, 결과를 설명하는 case-study 화면 |
| `/live-compare` | legacy preview와 rebuild 결과를 비교하는 before/after 화면 |
| `/legacy-live` | 실제 회사 소스를 노출하지 않는 legacy-style 비교용 preview |

## Architecture

```text
sticksandstones.kr/
├── src/
│   ├── main.ts                 # entry and route bootstrap
│   ├── runtime/original.ts     # restored public-site runtime facade
│   ├── caseStudy.ts            # case-study route
│   ├── liveCompare.ts          # before/after comparison route
│   ├── legacyLive.ts           # public legacy-style preview route
│   ├── components/             # extracted UI modules
│   ├── data/                   # portfolio, team, service, FAQ data
│   └── sync/                   # comparison frame sync helpers
├── public/
│   └── assets/                 # public-safe brand, service, portfolio assets
└── docs/                       # migration and source notes
```

```mermaid
flowchart LR
  legacy["Legacy WordPress experience"] --> audit["Asset/content audit"]
  audit --> rebuild["Vite + TypeScript rebuild"]
  rebuild --> caseStudy["Public case-study route"]
  rebuild --> compare["Before/after comparison"]
  compare --> publicRepo["Portfolio-safe GitHub repo"]
```

## Public Sharing Boundary

이 레포지토리는 공개 포트폴리오 제출용입니다. 원본 `sticksandstones` 회사 자산 repo, WordPress DB, LocalWP runtime, `wp-config.php`, 운영 로그, credential, 내부 작업 히스토리는 포함하지 않습니다.

공개 repo에 남기는 범위:

- 공개 웹사이트에서 확인 가능한 정적 이미지와 설명 자료
- Vite/TypeScript 리빌드 코드
- before/after 비교를 위한 synthetic legacy preview
- migration 과정과 아키텍처를 설명하는 문서

공개 repo에서 제외하는 범위:

- WordPress core/plugin/theme 원본 전체
- 회사 내부 repo history
- DB dump, 운영 로그, credential, salts, secret key
- 비공개 클라이언트 자료나 내부 검토 문서

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:4173/
http://127.0.0.1:4173/case-study
http://127.0.0.1:4173/live-compare
http://127.0.0.1:4173/legacy-live
```

## Validate

```bash
npm run build
```
