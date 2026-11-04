# 30개 추가 및 카드·폼 24종 — 2026-11-04

## 결과와 범위
- 체험형 시안 기존 01–12 보존, 13–42 추가: 총 42개.
- 카드 12종 + 폼 12종: 총 24개. 별도 `/experiences/components.html`에서 분류/체험.
- 기존 100개 갤러리, 실제 서비스 저장소·데이터·링크 유지.
- 입력은 로컬 시연이며 전송·영구 저장하지 않음. 성과 수치/후기/사업자 정보 추가 없음.

## 파일 및 diff 요약
- 신규 `extra.js`, `extra.css`: 30개 구조와 조작 방식.
- 신규 `components.html`, `components.js`, `components.css`: 24개 카드·폼 및 입력 피드백.
- 수정 `experience.html`, `experience.js`: 42개 목록, 13–42 렌더 연결, 실제 iframe 미리보기(lazy loading).
- 수정 `build.mjs`, `tests.mjs`, `README.md`: 출력·진입 링크·검사·선택 방법.
- `docs/index.html`, `docs/experiences/*`: 공개 결과물.
- 모바일 티켓 가로 넘침 발견 후 1열 전환. 표지 아래 숨은 내용은 inert로 키보드 포커스 방지. 출력 상태 aria-live 추가.

## 실제 명령
- `node --test tests.mjs`: 구현 전 “missing scene 13” assertion 실패, 기존 3개 통과. 구현 후 4/4 통과. 정적 생성·링크 계약 검사이며 동작 자동 E2E 아님.
- `node build.mjs`: 성공.
- `node --check extra.js`, `node --check components.js`, `node --check experience.js`: 성공.
- `node benchmark.mjs`: 동일 Node v24.13.0 / win32 로컬 빌드 5회씩. 기준 118–197ms, 최종 130–192ms. 2초 제한 이내. 결과물 242,056 → 313,373 bytes, 1MB 제한 이내. 빌드 대상 증가 비교이며 속도 개선 주장 없음. 브라우저 FPS/네트워크 미측정. 기존 harness workload 문구는 100개를 유지하지만 실제 docs 전체 크기에는 추가 컬렉션을 포함.

## 실제 브라우저 확인
- 42개 목록, 카드·폼 24개 표시.
- 새 30개 모두 390px에서 렌더. 최초 14번만 overflow 발견, 나머지 29개는 없음. 수정 후 별도 재확인.
- 보드: Barotruck 다음 단계 이동 → 읽는 중 3개.
- 뒤집기: aria-expanded true. 신문: RoutePick 첫 기사. 표지 열기: 표지 숨김.
- 핀: 냉가이드 추가. 단계 안내 Reading → devblog. 정렬표 Product → 2행.
- 방사형 메뉴 → 6개. 파일 Product 폴더 → 2개.
- 지면 슬라이더 End → 3fr/1fr. 체크 → 1/6.
- 콘솔 open 3 → RoutePick. 장면 슬라이더 End → Database notes.
- 대화 Reading → devblog. 캔버스 확대 → 110%. 형태 → horizontal.
- 티켓 선택 → 냉가이드. 노선도 → devblog. 다이얼 다음 → 02/06. 확장 패널 → RoutePick.
- 비교 슬라이더 → 80%. 편지 열기 visible.
- 주석 02 표시. 일요일 → 오늘은 비워두기. 책장 → RoutePick. 분기 Reading → devblog.
- 모자이크 Product → 2개. 서랍 Product open. 픽셀 파일 → Barotruck 모달.
- 컴포넌트: 모달 제목, Escape 닫기, 탭 내용 교체, 폼 필터 12개, 입력 확인, 단계 폼, 칩 복수 선택, 스위치, 범위 100%, 체크 1/3, 격자 전환, 검색 '모달', 제목 검증, 메모 4/160 및 초기화 확인.
- 폼 화면 390px 가로 넘침 없음. 키보드 포커스 3px outline 확인.

## 검토와 미검증
- 요구사항: 색상 파생본 대신 서로 다른 구조와 조작 30개, 내부 카드/폼 별도 선택 가능. 기존 12개와 기존 갤러리 보존.
- 유지보수: 공통 데이터와 기존 모달 재사용, 새 코드를 별도 파일로 분리. 추가 라이브러리·유료 API·비밀정보 없음. 사용자 입력은 textContent로 피드백.
- 모든 상태 조합/전체 대비/스크린리더/모든 기기/브라우저 조합은 미검증. 반응형 자동 폭 검사는 시각적 완성도 보증이 아님. 상단 움직임 끄기와 기존 reduced-motion 규칙 적용.
- 별도 운영자 입력/법률 검토 대상 정보는 추가하지 않았음.

추가 확인: 폴더 트리 접기, 말풍선 응답, 카드 진행률 1/3, 떠오르는 라벨 폼과 한 줄 폼 입력 확인도 통과. 최종 배포 첫 시도는 GitHub Pages HTTP 500 서버 오류로 실패하여 실패한 배포 작업만 재실행함.
