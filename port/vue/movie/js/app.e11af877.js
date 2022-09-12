(function(){"use strict";var t={741:function(t,e,n){var a=n(9242),i=n(3396);const r={id:"app"},m={class:"wrapper"},s={style:{}},o=(0,i.Uk)("Main"),u=(0,i.Uk)(" | "),g=(0,i.Uk)("detail"),p=(0,i.Uk)(" | "),c=(0,i.Uk)("list");function l(t,e,n,a,l,d){const h=(0,i.up)("router-link"),v=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",m,[(0,i._)("nav",s,[(0,i.Wm)(h,{to:"/"},{default:(0,i.w5)((()=>[o])),_:1}),u,(0,i.Wm)(h,{to:"/detail"},{default:(0,i.w5)((()=>[g])),_:1}),p,(0,i.Wm)(h,{to:"/list"},{default:(0,i.w5)((()=>[c])),_:1})]),(0,i.Wm)(v)])])}var d={name:"App",data(){return{}}},h=n(89);const v=(0,h.Z)(d,[["render",l]]);var b=v,w=n(2483),_=n(7139);const k={class:"info"},f={class:"movie"},y={class:"name"},N={class:"grade"},$={class:"intro"},j=(0,i.Uk)("리스트보기");function D(t,e,n,a,r,m){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("section",{class:"main",style:(0,_.j5)({backgroundImage:`url(${r.mainBg})`})},[(0,i._)("div",k,[(0,i._)("dl",f,[(0,i._)("dt",y,(0,_.zw)(t.$store.state.items[r.num].movieName),1),(0,i._)("dd",N,(0,_.zw)(t.$store.state.items[r.num].grade),1),(0,i._)("dd",$,(0,_.zw)(t.$store.state.items[r.num].intro),1)]),(0,i.Wm)(s,{to:"/list",class:"btn"},{default:(0,i.w5)((()=>[j])),_:1})])],4)}var P={name:"main-vue",data(){return{num:0,mainBg:"",winWidth:0}},mounted(){},created(){this.num=Math.floor(11*Math.random()),window.addEventListener("resize",this.handleResize),this.handleResize()},unmounted(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize(){this.winWidth=window.innerWidth,this.winWidth<1024?this.mainBg=this.$store.state.items[this.num].mPoster:this.mainBg=this.$store.state.items[this.num].wPoster}}};const z=(0,h.Z)(P,[["render",D]]);var R=z;const C={class:"detail"},T={class:"movie"},O={class:"name"},U={class:"grade"},G={class:"all"},q=(0,i.Uk)(" 정   보 : "),x={class:"startDate"},W={class:"synop"},A=(0,i._)("div",{class:"actor"},[(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("img",{src:""}),(0,i.Uk)("이름")]),(0,i._)("li",null,[(0,i._)("img",{src:""}),(0,i.Uk)("이름")]),(0,i._)("li",null,[(0,i._)("img",{src:""}),(0,i.Uk)("이름")])])],-1);function M(t,e,n,a,r,m){return(0,i.wg)(),(0,i.iD)("div",C,[(0,i._)("div",{class:"bg",style:(0,_.j5)({backgroundImage:`url(${t.$store.state.items[t.$route.query.num].wPoster})`})},null,4),(0,i._)("dl",T,[(0,i._)("dt",O,(0,_.zw)(t.$store.state.items[t.$route.query.num].movieName),1),(0,i._)("dd",U,[(0,i.Uk)((0,_.zw)(t.$store.state.items[t.$route.query.num].grade)+" ",1),(0,i._)("b",null,(0,_.zw)(t.$store.state.items[t.$route.query.num].advanceRate),1)]),(0,i._)("dd",G,[q,(0,i._)("span",null,(0,_.zw)(t.$store.state.items[t.$route.query.num].watchGradeNm),1),(0,i._)("span",null,(0,_.zw)(t.$store.state.items[t.$route.query.num].runningTime),1),(0,i._)("span",null,(0,_.zw)(t.$store.state.items[t.$route.query.num].genre),1)]),(0,i._)("dd",x,"개봉일 : "+(0,_.zw)(t.$store.state.items[t.$route.query.num].startDate),1),(0,i._)("dd",W,[(0,i.Uk)((0,_.zw)(r.textArray[0])+" "+(0,_.zw)(r.textArray[1])+" ",1),(0,i._)("button",{type:"button",class:"more",onClick:e[0]||(e[0]=(...t)=>m.more&&m.more(...t))},"더보기")])]),A])}var B={name:"datail-vue",data(){return{synop:this.$store.state.items[this.$route.query.num].synop,textArray:[]}},props:{num:Number},mounted(){let t=this.synop,e=t.slice(0,70);this.textArray.push(e)},methods:{more(){let t=this.synop,e=t.slice(71,t.length);this.textArray.push(e),document.getElementsByClassName("more").style.display="none"}}};const Z=(0,h.Z)(B,[["render",M]]);var E=Z;const F={class:"list"},L=(0,i._)("h3",null,"Movie List",-1),S=(0,i._)("div",{class:"search"},[(0,i._)("input",{type:"text",placeholder:"Search"}),(0,i._)("div",{class:"icon"})],-1);function I(t,e,n,a,r,m){const s=(0,i.up)("item");return(0,i.wg)(),(0,i.iD)("div",F,[L,S,(0,i._)("article",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.$store.state.items,((t,e)=>((0,i.wg)(),(0,i.j4)(s,{key:e,num:e},null,8,["num"])))),128))])])}const H={class:"item"},K=["src"],Y={class:"movie"},J={class:"name"},Q={class:"grade"},V={class:"advanceRate"},X={class:"startDate"};function tt(t,e,n,a,r,m){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.j4)(s,{to:{name:"detail",query:{num:n.num}}},{default:(0,i.w5)((()=>[(0,i._)("div",H,[(0,i._)("img",{src:`${t.$store.state.items[n.num].mPoster}`,alt:""},null,8,K),(0,i._)("dl",Y,[(0,i._)("dt",J,(0,_.zw)(t.$store.state.items[n.num].movieName),1),(0,i._)("dd",Q,(0,_.zw)(t.$store.state.items[n.num].grade),1),(0,i._)("dd",V,"예매율 : "+(0,_.zw)(t.$store.state.items[n.num].advanceRate),1),(0,i._)("dd",X,"개봉일 : "+(0,_.zw)(t.$store.state.items[n.num].startDate),1)])])])),_:1},8,["to"])}var et={name:"item-vue",props:{num:Number}};const nt=(0,h.Z)(et,[["render",tt]]);var at=nt,it={name:"list-vue",data(){return{num:0}},components:{item:at}};const rt=(0,h.Z)(it,[["render",I]]);var mt=rt;const st=[{path:"/",name:"main",component:R},{path:"/detail",name:"detail",component:E,props:!0},{path:"/list",name:"list",component:mt}],ot=(0,w.p7)({history:(0,w.PO)("/port/vue/movie/"),routes:st});var ut=ot,gt=n(65),pt=[{movieName:"알라딘",startDate:"2019년 5월 23일",openingDate:"2019년 5월 23일",advanceRate:"개봉전",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_aladdin.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_aladdin.jpg?raw=true",intro:"1992년에 개봉한 디즈니 애니메이션 알라딘을 원작으로 하는 실사 영화",synop:"머나먼 사막 속 신비의 아그라바 왕국의 시대.\r               좀도둑 ‘알라딘’은 마법사 ‘자파’의 의뢰로 마법 램프를 찾아 나섰다가\r               주인에게 세 가지 소원을 들어주는 지니를 만나게 되고,\r               자스민 공주의 마음을 얻으려다 생각도 못했던 모험에 휘말리게 되는데…",rank:1,director:"가이 리치",actor:[{name:"미나 마수드",img:"이미지링크"},{name:"나오미 스콧",img:"이미지링크"},{name:"윌 스미스",img:"이미지링크"}],genre:"판타지, 뮤지컬, 로맨틱 코미디, 모험",watchGradeNm:"전체 관람가",runningTime:"128분",repNationCd:"미국"},{movieName:"탑건-매버릭",startDate:"2022년 6월 22일",openingDate:"2022년 4월 28일",advanceRate:"5.0",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_topgun.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_topgun.jpg?raw=true",intro:"한순간의 실수도 용납되지 않는 하늘 위, \r\n 가장 압도적인 비행이 시작된다!",synop:"최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. \r\n 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. \r\n 매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자\r\n 매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데… ",rank:1,director:"조지프 코신스키",actor:[{name:"톰 크루즈",img:"이미지링크"},{name:"마일스 텔러",img:"이미지링크"},{name:"제니퍼 코넬리",img:"이미지링크"}],genre:"액션",watchGradeNm:"12세 관람가",runningTime:"131분",repNationCd:"미국"},{movieName:"한산 : 용의 출현",startDate:"2022년 7월 27일",openingDate:"2022년 7월 27일",advanceRate:"5.0",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_hansan.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_hansan.jpg?raw=true",intro:"나라의 운명을 바꿀 압도적 승리의 전투가 시작된다!",synop:"1592년 4월, 조선은 임진왜란 발발 후 단 15일만에 왜군에 한양을 빼앗기며 절체절명의 위기에 놓인다. 조선을 단숨에 점령한 왜군은 명나라로 향하는 야망을 꿈꾸며 대규모 병역을 부산포로 집결시킨다. 한편, 이순신 장군은 연이은 전쟁의 패배와 선조마저 의주로 파천하며 수세에 몰린 상황에서도 조선을 구하기 위해 전술을 고민하며 출전을 준비한다. 하지만 앞선 전투에서 손상을 입은 거북선의 출정이 어려워지고, 거북선의 도면마저 왜군의 첩보에 의해 도난 당하게 되는데… 왜군은 연승에 힘입어 그 우세로 한산도 앞바다로 향하고, 이순신 장군은 조선의 운명을 가를 전투를 위해 필사의 전략을 준비한다. 1592년 여름, 음력 7월 8일 한산도 앞바다, 압도적인 승리가 필요한 조선의 운명을 건 지상 최고의 해전이 펼쳐진다.",rank:1,director:"김한민",actor:[{name:"박해일",img:"이미지링크"},{name:"변요한",img:"이미지링크"},{name:"안성기",img:"이미지링크"}],genre:"액션, 드라마",watchGradeNm:"12세 관람가",runningTime:"130분",repNationCd:"대한민국"},{movieName:"라라랜드",startDate:"2016년 12월 7일",openingDate:"2016년 12월 8일",advanceRate:"5.0",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_lalaland.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_lalaland.jpg?raw=true",intro:"황홀한 사랑, 순수한 희망, 격렬한 열정… 이 곳에서 모든 감정이 폭발한다!",synop:"꿈을 꾸는 사람들을 위한 별들의 도시 ‘라라랜드’. 재즈 피아니스트 ‘세바스찬’(라이언 고슬링)과 배우 지망생 ‘미아’(엠마 스톤), 인생에서 가장 빛나는 순간 만난 두 사람은 미완성인 서로의 무대를 만들어가기 시작한다.",rank:1,director:"데이미언 셔젤",actor:[{name:"라이언 고슬링",img:"이미지링크"},{name:"엠마스톤",img:"이미지링크"}],genre:"드라마, 뮤지컬, 로맨스, 멜로",watchGradeNm:"12세 관람가",runningTime:"127분",repNationCd:"미국"},{movieName:"그래비티",startDate:"2013년 10월 4일",openingDate:"2013년 10월 17일",advanceRate:"4.5",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_gravity.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_gravity.jpg?raw=true",intro:"외계인도, 우주전쟁도 없다. 이것이. 누구도 경험하지 못한 진짜 재난이다.",synop:"허블 우주망원경을 수리하기 위해 우주를 탐사하던 라이언 스톤 박사는 폭파된 인공위성의 잔해와 부딪히면서 소리도 산소도 없는 우주 한 가운데에 홀로 남겨지는데…",rank:1,director:"알폰소 쿠아론",actor:[{name:"산드라 블록",img:"이미지링크"},{name:"조지 클루니",img:"이미지링크"},{name:"팔두트 샤르마",img:"이미지링크"}],genre:"스릴러, 재난, 생존, SF",watchGradeNm:"12세 관람가",runningTime:"91분",repNationCd:"미국"},{movieName:"알라딘",startDate:"2019년 5월 23일",openingDate:"2019년 5월 23일",advanceRate:"개봉전",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_aladdin.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_aladdin.jpg?raw=true",intro:"1992년에 개봉한 디즈니 애니메이션 알라딘을 원작으로 하는 실사 영화",synop:"머나먼 사막 속 신비의 아그라바 왕국의 시대.\r               좀도둑 ‘알라딘’은 마법사 ‘자파’의 의뢰로 마법 램프를 찾아 나섰다가\r               주인에게 세 가지 소원을 들어주는 지니를 만나게 되고,\r               자스민 공주의 마음을 얻으려다 생각도 못했던 모험에 휘말리게 되는데…",rank:1,director:"가이 리치",actor:[{name:"미나 마수드",img:"이미지링크"},{name:"나오미 스콧",img:"이미지링크"},{name:"윌 스미스",img:"이미지링크"}],genre:"판타지, 뮤지컬, 로맨틱 코미디, 모험",watchGradeNm:"전체 관람가",runningTime:"128분",repNationCd:"미국"},{movieName:"탑건-매버릭",startDate:"2022년 6월 22일",openingDate:"2022년 4월 28일",advanceRate:"5.0",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_topgun.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_topgun.jpg?raw=true",intro:"한순간의 실수도 용납되지 않는 하늘 위, \r\n 가장 압도적인 비행이 시작된다!",synop:"최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. \r\n 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. \r\n 매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자\r\n 매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데… ",rank:1,director:"조지프 코신스키",actor:[{name:"톰 크루즈",img:"이미지링크"},{name:"마일스 텔러",img:"이미지링크"},{name:"제니퍼 코넬리",img:"이미지링크"}],genre:"액션",watchGradeNm:"12세 관람가",runningTime:"131분",repNationCd:"미국"},{movieName:"한산 : 용의 출현",startDate:"2022년 7월 27일",openingDate:"2022년 7월 27일",advanceRate:"5.0",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_hansan.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_hansan.jpg?raw=true",intro:"나라의 운명을 바꿀 압도적 승리의 전투가 시작된다!",synop:"1592년 4월, 조선은 임진왜란 발발 후 단 15일만에 왜군에 한양을 빼앗기며 절체절명의 위기에 놓인다. 조선을 단숨에 점령한 왜군은 명나라로 향하는 야망을 꿈꾸며 대규모 병역을 부산포로 집결시킨다. 한편, 이순신 장군은 연이은 전쟁의 패배와 선조마저 의주로 파천하며 수세에 몰린 상황에서도 조선을 구하기 위해 전술을 고민하며 출전을 준비한다. 하지만 앞선 전투에서 손상을 입은 거북선의 출정이 어려워지고, 거북선의 도면마저 왜군의 첩보에 의해 도난 당하게 되는데… 왜군은 연승에 힘입어 그 우세로 한산도 앞바다로 향하고, 이순신 장군은 조선의 운명을 가를 전투를 위해 필사의 전략을 준비한다. 1592년 여름, 음력 7월 8일 한산도 앞바다, 압도적인 승리가 필요한 조선의 운명을 건 지상 최고의 해전이 펼쳐진다.",rank:1,director:"김한민",actor:[{name:"박해일",img:"이미지링크"},{name:"변요한",img:"이미지링크"},{name:"안성기",img:"이미지링크"}],genre:"액션, 드라마",watchGradeNm:"12세 관람가",runningTime:"130분",repNationCd:"대한민국"},{movieName:"라라랜드",startDate:"2016년 12월 7일",openingDate:"2016년 12월 8일",advanceRate:"5.0",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_lalaland.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_lalaland.jpg?raw=true",intro:"황홀한 사랑, 순수한 희망, 격렬한 열정… 이 곳에서 모든 감정이 폭발한다!",synop:"꿈을 꾸는 사람들을 위한 별들의 도시 ‘라라랜드’. 재즈 피아니스트 ‘세바스찬’(라이언 고슬링)과 배우 지망생 ‘미아’(엠마 스톤), 인생에서 가장 빛나는 순간 만난 두 사람은 미완성인 서로의 무대를 만들어가기 시작한다.",rank:1,director:"데이미언 셔젤",actor:[{name:"라이언 고슬링",img:"이미지링크"},{name:"엠마스톤",img:"이미지링크"}],genre:"드라마, 뮤지컬, 로맨스, 멜로",watchGradeNm:"12세 관람가",runningTime:"127분",repNationCd:"미국"},{movieName:"그래비티",startDate:"2013년 10월 4일",openingDate:"2013년 10월 17일",advanceRate:"4.5",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_gravity.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_gravity.jpg?raw=true",intro:"외계인도, 우주전쟁도 없다. 이것이. 누구도 경험하지 못한 진짜 재난이다.",synop:"허블 우주망원경을 수리하기 위해 우주를 탐사하던 라이언 스톤 박사는 폭파된 인공위성의 잔해와 부딪히면서 소리도 산소도 없는 우주 한 가운데에 홀로 남겨지는데…",rank:1,director:"알폰소 쿠아론",actor:[{name:"산드라 블록",img:"이미지링크"},{name:"조지 클루니",img:"이미지링크"},{name:"팔두트 샤르마",img:"이미지링크"}],genre:"스릴러, 재난, 생존, SF",watchGradeNm:"12세 관람가",runningTime:"91분",repNationCd:"미국"}],ct=(0,gt.MT)({state:{items:pt,num:0},getters:{},mutations:{},actions:{},modules:{}});(0,a.ri)(b).use(ct).use(ut).mount("#app")}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,r){if(!a){var m=1/0;for(g=0;g<t.length;g++){a=t[g][0],i=t[g][1],r=t[g][2];for(var s=!0,o=0;o<a.length;o++)(!1&r||m>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[o])}))?a.splice(o--,1):(s=!1,r<m&&(m=r));if(s){t.splice(g--,1);var u=i();void 0!==u&&(e=u)}}return e}r=r||0;for(var g=t.length;g>0&&t[g-1][2]>r;g--)t[g]=t[g-1];t[g]=[a,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,r,m=a[0],s=a[1],o=a[2],u=0;if(m.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(o)var g=o(n)}for(e&&e(a);u<m.length;u++)r=m[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(g)},a=self["webpackChunkmovie"]=self["webpackChunkmovie"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(741)}));a=n.O(a)})();
//# sourceMappingURL=app.e11af877.js.map