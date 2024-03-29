# 영화 검색 및 추가 사이트 만들기
<br>
📌 URL<br>
[데모페이지](https://ssunakimm.github.io/port/vue/movie/)<br>
[만든과정](https://www.notion.so/ssunakimm/Vue-js-3d41da04a772476ab2f1cf125a207da6)
<br><br>

📌 개발 목표<br>
영화검색 및 좋아하는 영화를 추가할 수 있는 웹사이트입니다.
메인페이지에는 랜덤으로 export된 데이터 중 1개가 들어가며,
버튼클릭시 라우터를 통해 페이지 이동이 가능합니다.
리스트페이지에서 영화제목으로 검색 및 정렬이 가능하며,
하단 영화 추가 버튼을 이용하여 내가 원하는 데이터를 추가할 수 있습니다. 
<br><br>

📌 주요 기능<br>
* [x] 데이터 Export O
* [x] 영화추가 기능(Create) O
* [x] 리스트페이지 새로고침 (Read) O
* [x] 리스트페이지 검색 (Search) O
* [x] 리스트페이지 필터 (Filter) O
* [x] 상세 페이지에서 삭제 (Delete)
<br><br>

📌 느낀점<br>
가상 영화데이터를 생성해 Vuex로 만든 사이트입니다.
Main, List, Detail, Add 4개의 페이지로 이루어져있으며 영화데이터는
Vuex로 저장후 사용했습니다. 두번째 제작이라 라우터에는 조금 익숙해졌으며
Vuex는 처음 사용해봐서 구글에서 찾아가며 제작했습니다.
데이터 삭제와 추가가 있어 for문을 사용할 때 주의점등을 알게되었으며,
map과 filter등을 다양하게 사용해볼 수 있는 계기가 되었습니다.
<br><br>

📌 사용 기술<br>
Publishing : Html, Css, Media Query<br> 
Frontend : ES6, Vue.js 
<br><br>

📌 개발일정<br>

### 0906 뼈대만들기
1. 초기구상 
2. 메인페이지 퍼블리싱
3. Router, Vuex 설정

### 0907 내용채우기
1. store에 데이터 저장
2. 메인페이지 스크립트 제작(랜덤이미지 불러오기)
3. 리스트페이지 퍼블리싱

### 0908 내용채우기
1. 리스트페이지 store에 저장된 데이터 불러오기

### 0909 내용채우기
1. 리스트 클릭시 디테일 페이지로 이동(라우터)
2. 디테일페이지 더보기 클릭 시 스크립트 제작
3. 해당 데이터 개수만큼 배우 정보 불러오기

### 0910 내용채우기
1. 리스트페이지 필터 적용
2. 리스트페이지 수정

### 0912 내용채우기
1. 데이터 추가
2. 데이터 이미지 추가
3. 데이터 추가 시 null값 체크

### 0914 내용채우기
1. id값 기준으로 List, Detail 페이지 수정
2. 리스트페이지 정렬 적용

### 0915 내용채우기
1. 영화 추가 후 정렬안되는 문제 수정
2. 리스트페이지 정렬 적용

