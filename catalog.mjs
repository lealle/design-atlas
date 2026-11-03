export const layouts=[
 ['editorial','에디토리얼','큰 세리프 제목과 편집 기사형 목록'],['split','스플릿','좌측 소개와 우측 콘텐츠의 비대칭 분할'],['sidebar','사이드바','고정된 탐색 영역과 넓은 작업 공간'],['poster','포스터','큰 활자와 여백 중심의 선언형 화면'],['newspaper','신문','다단 구성과 굵은 구분선'],['cards','카드 라이브러리','독립된 콘텐츠 카드의 균형 있는 격자'],['ledger','인덱스','번호와 제목을 강조하는 촘촘한 색인'],['timeline','타임라인','세로 흐름으로 읽는 기록'],['magazine','매거진','대표 콘텐츠와 보조 기사의 크기 대비'],['dashboard','워크스페이스','탐색 패널과 결과 영역을 구분한 작업 화면'],['shelf','북쉘프','책등과 표지를 연상시키는 수직 카드'],['notebook','노트북','여백과 줄을 살린 개인 기록장'],['terminal','코드 노트','장식 명령어 없이 모노스페이스로 읽는 문서'],['gallery','쇼케이스','콘텐츠를 크게 펼치는 두 열 전시'],['contrast','컨트라스트','주색 소개 영역과 밝은 읽기 영역'],['rail','레일','왼쪽 큰 제목과 오른쪽 좁은 읽기 흐름'],['feature','피처','큰 대표 항목 하나와 간결한 목록'],['compact','컴팩트','좁은 폭과 높은 정보 밀도'],['outline','아웃라인','명확한 테두리와 표 형태의 구성'],['stage','센터 스테이지','중앙 정렬 소개와 대칭형 콘텐츠']
];
export const styles=[
 {id:'ink',name:'잉크 & 페이퍼',fonts:['Noto Serif KR','IBM Plex Sans KR'],bg:'#f5f1e9',fg:'#252b29',muted:'#626860',accent:'#2d5d4c',surface:'#fffdf8',line:'#c6c7bc',radius:'2px'},
 {id:'cobalt',name:'코발트 스튜디오',fonts:['Gothic A1','Noto Sans KR'],bg:'#f0f3fa',fg:'#152b51',muted:'#53617a',accent:'#2345bd',surface:'#ffffff',line:'#c8d1e5',radius:'12px'},
 {id:'night',name:'미드나이트',fonts:['Nanum Gothic Coding','IBM Plex Sans KR'],bg:'#151b23',fg:'#e6eef5',muted:'#acbac7',accent:'#9cceba',surface:'#202b36',line:'#475664',radius:'4px'},
 {id:'clay',name:'클레이 아틀리에',fonts:['Gowun Batang','Gowun Dodum'],bg:'#f7efe8',fg:'#3b2927',muted:'#79605a',accent:'#99472e',surface:'#fffbf7',line:'#d9bcae',radius:'20px'},
 {id:'graphic',name:'그래픽 프레스',fonts:['Black Han Sans','Noto Sans KR'],bg:'#f5f5ee',fg:'#182926',muted:'#58645c',accent:'#316449',surface:'#e9efdf',line:'#849789',radius:'0px'}
];
export const designs=layouts.flatMap(([layout,name,description],i)=>styles.map((s,j)=>({id:String(i*5+j+1).padStart(3,'0'),layout,layoutName:name,description,style:s.id,styleName:s.name,fonts:s.fonts,name:`${name} · ${s.name}`})));
