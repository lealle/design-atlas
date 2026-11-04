# Design Atlas

## 확장 컬렉션

**[체험형 디자인 42개](https://lealle.github.io/design-atlas/experiences/index.html)** · **[카드·입력 폼 24종](https://lealle.github.io/design-atlas/experiences/components.html)**

13–42번을 추가했습니다. 서랍, 티켓, 작업 보드, 노선도, 폴더 트리, 뒤집기, 편집 신문, 다이얼, 픽셀 데스크톱, 확장 패널, 표지, 분할 비교, 핀 보드, 단계 안내, 정렬 표, 방사형 메뉴, 편지, 파일 탐색기, 가변 지면, 주석, 체크 진행률, 요일 큐레이션, 책장, 로컬 명령, 분기 탐색, 장면 슬라이더, 모자이크, 대화 선택, 캔버스, 형태 연구소입니다.

컴포넌트 전시관은 카드 12종과 폼 12종을 각각 구분합니다. 예: “화면 35 + 카드 03 + 폼 05”로 조합을 선택할 수 있습니다. 체험 상태는 화면 내에서만 유지되며 입력을 전송하거나 저장하지 않습니다. 새 30개는 `extra.js`·`extra.css`, 컴포넌트는 `components.html`·`components.js`·`components.css`에서 관리합니다.

**[초기 12개를 포함한 체험 컬렉션 열기 →](https://lealle.github.io/design-atlas/experiences/index.html)**

작업실, 잡지, 스크롤 필름, 지식 지도, 프롬프트 실험실, 검색, 가로 전시, 과정 기록, 목록/상세, 활자 포스터, 카드 덱, 독서실. 각각 구성과 실제 조작 방식이 다릅니다. 번호 01–12는 아래 기존 001–100 컬렉션과 구분됩니다. [참고 출처와 동작 안내](REFERENCES.md).

새 컬렉션은 `experience.html`, `experience.css`, `experience.js`에서 구현하며 `node build.mjs`가 `docs/experiences/`로 내보냅니다. 외부 라이브러리와 API 호출 없이 동작합니다. 검색·입력은 브라우저 안에서 처리하고 움직임 줄이기를 지원합니다.

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
