# Design Atlas

**[100개 디자인 갤러리 열기 →](https://lealle.github.io/design-atlas/)**

메인 페이지, 개발 블로그, 프롬프트 라이브러리를 위한 100개 디자인 조합입니다. **20개 레이아웃 × 5개 타이포그래피·팔레트**로 구성됩니다. 색상뿐 아니라 분할, 탐색 위치, 카드·목록·표현 밀도와 제목 크기가 달라집니다.

## 고르는 방법

1. 갤러리에서 페이지 종류와 레이아웃, 글꼴·색상을 선택합니다.
2. `전체 보기`로 실제 반응형 페이지를 엽니다.
3. 마음에 드는 시안을 즐겨찾기에 저장하거나 두 개를 골라 비교합니다.
4. 번호를 전달하거나 `선택 파일 저장`으로 JSON을 내려받습니다.

즐겨찾기는 브라우저에 저장됩니다. 기존 프로젝트에 자동 적용되지는 않습니다. 예시 콘텐츠는 실제 라이브러리의 비공개 문서를 포함하지 않습니다.

## 구조

- `catalog.mjs`: 디자인 번호, 20개 레이아웃, 5개 스타일, 한글 글꼴 조합
- `preview.css`: 반응형 레이아웃과 타이포그래피
- `preview.js`: 메인·블로그·프롬프트 콘텐츠 전환 및 목록 검색
- `gallery.js`, `gallery.css`: 필터, 즐겨찾기, 비교, 내보내기
- `build.mjs`: 100개 독립 페이지를 `docs/designs/`에 생성
- `docs/`: GitHub Pages에 게시되는 정적 결과물

## 빌드와 테스트

Node.js 환경에서 별도 패키지 설치 없이 실행합니다.

```sh
node build.mjs
node --test tests.mjs
node --check gallery.js
node --check preview.js
```

GitHub Pages는 `main` 브랜치의 `/docs`를 사용합니다. 소스를 수정한 뒤 빌드 결과도 함께 커밋하세요.

## 글꼴

Google Fonts에서 Noto Serif KR, IBM Plex Sans KR, Gothic A1, Noto Sans KR, Nanum Gothic Coding, Gowun Batang, Gowun Dodum, Black Han Sans를 불러옵니다. 네트워크가 차단된 환경에서는 시스템 글꼴이 대신 사용됩니다. 외부 이미지나 유료 서비스는 사용하지 않습니다.

GitHub 프로필 README에서는 임의의 CSS와 웹 글꼴을 적용할 수 없으므로, 이 갤러리는 독립 웹페이지용 시안입니다. 선택한 디자인을 README에 옮길 경우 지원되는 문서 요소에 맞춰 별도 적용해야 합니다.
