const cardNames=['절취선 티켓','접힌 모서리 노트','파일 폴더','좌우 분할 카드','활자 포스터 카드','이중 프레임','영수증 리스트','펼치는 아코디언','탭이 있는 카드','대화 말풍선','번호 인덱스','진행형 카드'];
const formNames=['밑줄 입력','떠오르는 라벨','한 줄 액션','단계별 폼','선택 칩','설정 스위치','범위 조절','체크 리스트','분할 선택','검색 결과','검증 메시지','글자 수 메모'];
const common='<small>LEALLE / SELECTED WORK</small><h3>내용이 주인공이 되는 틀.</h3><p>제목, 설명, 행동의 관계를 바꾸어 봅니다.</p>';
const open=i=>`<button data-open="${i}">상세 열기 ↗</button>`;
const cards=[
`<div class="ticket-card"><div>${common}${open(0)}</div><aside>ADMIT<br>ONE<br><b>01</b></aside></div>`,
`<div class="fold-card">${common}${open(1)}</div>`,
`<div class="folder-card"><span class="folder-tab">PROJECTS</span>${common}${open(2)}</div>`,
`<div class="split-card"><div class="mini-art">↗</div><div>${common}${open(3)}</div></div>`,
`<div class="type-card"><small>05 / TYPE AS STRUCTURE</small><h3>MAKE<br>IT<br>MATTER.</h3>${open(4)}</div>`,
`<div class="frame-card"><div>${common}${open(5)}</div></div>`,
`<div class="receipt-card"><small>READING RECEIPT / DEMO</small><h3>오늘의 읽기 목록</h3><p><span>기록</span><span>01</span></p><p><span>설계</span><span>02</span></p><p><span>검증</span><span>03</span></p>${open(6)}</div>`,
`<div class="accordion-card"><small>08 / OPEN A CHAPTER</small><details><summary>질문에서 시작하기</summary><p>필요한 맥락을 먼저 확인하는 예시입니다.</p></details><details><summary>작게 연결하기</summary><p>하나의 동작을 끝까지 확인합니다.</p></details></div>`,
`<div class="tabs-card"><div role="group" aria-label="카드 내용 선택"><button data-tab="소개" aria-pressed="true">소개</button><button data-tab="구성" aria-pressed="false">구성</button><button data-tab="동작" aria-pressed="false">동작</button></div><h3 id="tab-heading">소개</h3><p id="tab-copy">작업의 맥락을 짧게 소개합니다.</p></div>`,
`<div class="chat-card"><small>10 / CONVERSATION</small><p>무엇부터 살펴볼까요?</p><div class="reply"><button data-reply="구성">구성</button><button data-reply="동작">동작</button></div><p id="reply-copy" hidden></p></div>`,
`<div class="index-card"><span>11</span><div>${common}${open(10)}</div></div>`,
`<div class="progress-card"><small>12 / A LITTLE FURTHER</small><h3>읽을 준비가 됐나요?</h3><progress id="card-progress" max="3" value="0"></progress><output id="card-progress-copy">0 / 3</output><button id="card-advance">다음 단계 →</button></div>`
];
const forms=[
`<form class="underlined sample-form"><label>작업 이름<input name="title" required placeholder="예: 개인 블로그"></label><button>확인 ↗</button><output></output></form>`,
`<form class="floating sample-form"><div><input id="floating-name" name="title" required placeholder=" "><label for="floating-name">작업 이름</label></div><button>확인</button><output></output></form>`,
`<form class="inline-form sample-form"><label for="quick-note">한 줄 메모</label><div><input id="quick-note" name="title" required placeholder="아이디어 한 줄"><button aria-label="메모 확인">→</button></div><output></output></form>`,
`<div class="mini-wizard"><small id="mini-step">STEP 1 / 2</small><label id="wizard-label">작업 이름<input id="wizard-name" placeholder="프로젝트"></label><button id="wizard-next">다음 →</button><output id="wizard-result"></output></div>`,
`<div class="chip-form"><h3>관심 분야</h3><p>여러 개를 골라도 됩니다.</p><div>${['개발','글쓰기','리서치','디자인'].map(t=>`<button data-chip="${t}" aria-pressed="false">${t} ＋</button>`).join('')}</div><output id="chip-result">선택 없음</output></div>`,
`<div class="switch-form"><h3>읽기 환경</h3><label><span>집중 모드<small>장식을 줄여 읽기</small></span><input id="focus-switch" type="checkbox" role="switch"></label><output id="switch-result">기본 모드</output></div>`,
`<div class="range-form"><h3>한 줄의 길이</h3><label>본문 폭 <input id="line-range" type="range" min="35" max="100" value="70"></label><div id="line-preview">좋은 여백은 문장 사이에 숨 쉴 공간을 만듭니다.</div><output id="range-result">70%</output></div>`,
`<div class="check-form"><h3>출발 전 점검</h3>${['목적 정리','내용 확인','미리보기'].map(t=>`<label><input type="checkbox">${t}</label>`).join('')}<output id="check-result">0 / 3 완료</output></div>`,
`<div class="segment-form"><h3>미리보기 방식</h3><div>${['목록','격자','집중'].map((t,i)=>`<button data-segment="${t}" aria-pressed="${i===0}">${t}</button>`).join('')}</div><div id="segment-preview" class="segment-list"><i></i><i></i><i></i><i></i></div></div>`,
`<div class="search-form"><label>컴포넌트 검색<input id="component-search" type="search" placeholder="카드, 폼, 모달"></label><ul id="search-results"><li>카드</li><li>폼</li><li>모달</li></ul></div>`,
`<form class="validate-form"><label>짧은 제목<input id="valid-title" minlength="3" required placeholder="3글자 이상" aria-describedby="validation-result"></label><button>검증하기</button><output id="validation-result">3글자 이상 입력해 주세요.</output></form>`,
`<div class="memo-form"><label>아이디어 메모<textarea id="memo" maxlength="160" rows="4" placeholder="아이디어를 적어보세요."></textarea></label><div><output id="memo-count">0 / 160</output><button id="memo-clear">비우기</button></div></div>`
];
document.querySelector('#specimens').innerHTML=[...cards,...forms].map((html,i)=>`<section class="specimen" data-group="${i<12?'card':'form'}"><header><small>${i<12?'CARD':'FORM'} ${String(i%12+1).padStart(2,'0')}</small><h2>${i<12?cardNames[i]:formNames[i-12]}</h2></header><div class="specimen-stage">${html}</div></section>`).join('');
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-group]').forEach(s=>s.hidden=b.dataset.filter!=='all'&&s.dataset.group!==b.dataset.filter);document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',x===b));});
document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{document.querySelector('#sample-title').textContent=cardNames[+b.dataset.open];document.querySelector('#sample-dialog').showModal();});document.querySelector('#sample-close').onclick=()=>document.querySelector('#sample-dialog').close();
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{document.querySelector('#tab-heading').textContent=b.dataset.tab;document.querySelector('#tab-copy').textContent={소개:'작업의 맥락을 짧게 소개합니다.',구성:'제목, 설명, 행동을 분리해 읽기 쉽게 만듭니다.',동작:'탭을 바꾸면 같은 공간에서 내용이 교체됩니다.'}[b.dataset.tab];document.querySelectorAll('[data-tab]').forEach(x=>x.setAttribute('aria-pressed',x===b));});
document.querySelectorAll('[data-reply]').forEach(b=>b.onclick=()=>{const out=document.querySelector('#reply-copy');out.hidden=false;out.textContent=b.dataset.reply+'부터 살펴볼게요.';});
let progress=0;document.querySelector('#card-advance').onclick=e=>{progress=(progress+1)%4;document.querySelector('#card-progress').value=progress;document.querySelector('#card-progress-copy').textContent=progress+' / 3';e.currentTarget.textContent=progress===3?'처음으로':'다음 단계 →';};
document.querySelectorAll('.sample-form').forEach(f=>f.onsubmit=e=>{e.preventDefault();f.querySelector('output').textContent='확인: '+new FormData(f).get('title');});
let wizardStep=0;document.querySelector('#wizard-next').onclick=e=>{const input=document.querySelector('#wizard-name');if(!wizardStep){if(!input.value.trim()){document.querySelector('#wizard-result').textContent='작업 이름을 입력해 주세요.';return;}document.querySelector('#wizard-result').textContent='선택한 작업: '+input.value;document.querySelector('#mini-step').textContent='STEP 2 / 2 · 확인';input.disabled=true;e.currentTarget.textContent='다시 입력';wizardStep=1;}else{input.disabled=false;document.querySelector('#mini-step').textContent='STEP 1 / 2';document.querySelector('#wizard-result').textContent='';e.currentTarget.textContent='다음 →';wizardStep=0;}};
document.querySelectorAll('[data-chip]').forEach(b=>b.onclick=()=>{b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true');const selected=[...document.querySelectorAll('[data-chip][aria-pressed=true]')].map(x=>x.dataset.chip);document.querySelector('#chip-result').textContent=selected.join(' · ')||'선택 없음';});
document.querySelector('#focus-switch').onchange=e=>{document.querySelector('#switch-result').textContent=e.target.checked?'집중 모드':'기본 모드';e.target.closest('.switch-form').classList.toggle('focused',e.target.checked);};
document.querySelector('#line-range').oninput=e=>{document.querySelector('#line-preview').style.width=e.target.value+'%';document.querySelector('#range-result').textContent=e.target.value+'%';};
document.querySelectorAll('.check-form input').forEach(i=>i.onchange=()=>document.querySelector('#check-result').textContent=document.querySelectorAll('.check-form input:checked').length+' / 3 완료');
document.querySelectorAll('[data-segment]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-segment]').forEach(x=>x.setAttribute('aria-pressed',x===b));document.querySelector('#segment-preview').className={'목록':'segment-list','격자':'segment-grid','집중':'segment-focus'}[b.dataset.segment];});
document.querySelector('#component-search').oninput=e=>{const hits=['카드','폼','모달'].filter(t=>t.includes(e.target.value.trim()));document.querySelector('#search-results').innerHTML=hits.length?hits.map(t=>'<li>'+t+'</li>').join(''):'<li>검색 결과 없음</li>';};
document.querySelector('.validate-form').onsubmit=e=>{e.preventDefault();const v=document.querySelector('#valid-title');document.querySelector('#validation-result').textContent=v.value.trim().length>=3?'사용할 수 있는 제목입니다.':'공백을 제외하고 3글자 이상 입력해 주세요.';};
document.querySelector('#memo').oninput=e=>document.querySelector('#memo-count').textContent=e.target.value.length+' / 160';document.querySelector('#memo-clear').onclick=()=>{document.querySelector('#memo').value='';document.querySelector('#memo-count').textContent='0 / 160';};
