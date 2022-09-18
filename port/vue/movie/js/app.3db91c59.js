(function(){"use strict";var t={6360:function(t,e,i){var n=i(9242),a=i(3396);const r={id:"app"},o={class:"wrapper"},m={style:{}},s=(0,a.Uk)("Main"),u=(0,a.Uk)(" | "),l=(0,a.Uk)("detail"),g=(0,a.Uk)(" | "),p=(0,a.Uk)("list");function c(t,e,i,n,c,h){const b=(0,a.up)("router-link"),d=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",o,[(0,a._)("nav",m,[(0,a.Wm)(b,{to:"/"},{default:(0,a.w5)((()=>[s])),_:1}),u,(0,a.Wm)(b,{to:"/detail"},{default:(0,a.w5)((()=>[l])),_:1}),g,(0,a.Wm)(b,{to:"/list"},{default:(0,a.w5)((()=>[p])),_:1})]),(0,a.Wm)(d)])])}var h={name:"App",data(){return{}}},b=i(89);const d=(0,b.Z)(h,[["render",c]]);var v=d,w=i(2483),k=i(7139);const _={class:"info"},y={class:"movie"},f={class:"name"},$={class:"grade"},N={class:"intro"},D=(0,a.Uk)("리스트보기");function U(t,e,i,n,r,o){const m=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("section",{class:"main",style:(0,k.j5)({backgroundImage:`url(${r.mainBg})`})},[(0,a._)("div",_,[(0,a._)("dl",y,[(0,a._)("dt",f,(0,k.zw)(t.$store.state.items[r.num].movieName),1),(0,a._)("dd",$,(0,k.zw)(t.$store.state.items[r.num].grade),1),(0,a._)("dd",N,(0,k.zw)(t.$store.state.items[r.num].intro),1)]),(0,a.Wm)(m,{to:"/list",class:"btn"},{default:(0,a.w5)((()=>[D])),_:1})])],4)}var j={name:"main-vue",data(){return{num:0,mainBg:"",winWidth:0}},mounted(){},created(){this.num=Math.floor(11*Math.random()),window.addEventListener("resize",this.handleResize),this.handleResize()},unmounted(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize(){this.winWidth=window.innerWidth,this.winWidth<1024?this.mainBg=this.$store.state.items[this.num].mPoster:this.mainBg=this.$store.state.items[this.num].wPoster}}};const C=(0,b.Z)(j,[["render",U]]);var x=C;const P={class:"detail"},z={class:"movie"},R={class:"name"},T={class:"grade"},q={class:"all"},O=(0,a._)("br",null,null,-1),G=(0,a.Uk)(" #"),A={class:"startDate"},V={class:"synop"},M={key:0,class:"link"},W=["href"],L={key:0,class:"actor"},Z=(0,a._)("dt",{class:"name"},"출연자",-1),F=["href"],B=["src"];function I(t,e,i,n,r,o){return(0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("button",{onClick:e[0]||(e[0]=e=>t.$router.go(-1)),class:"back"}," 뒤로가기"),(0,a._)("div",{class:"bg",style:(0,k.j5)({backgroundImage:`url(${t.$store.state.items[t.$route.query.num].wPoster})`})},null,4),(0,a._)("dl",z,[(0,a._)("dt",R,(0,k.zw)(t.$store.state.items[t.$route.query.num].movieName),1),(0,a._)("dd",T,[(0,a.Uk)((0,k.zw)(t.$store.state.items[t.$route.query.num].grade)+" ",1),(0,a._)("b",null,(0,k.zw)(t.$store.state.items[t.$route.query.num].advanceRate),1)]),(0,a._)("dd",q,[(0,a._)("span",null,(0,k.zw)(t.$store.state.items[t.$route.query.num].watchGradeNm),1),(0,a._)("span",null,(0,k.zw)(t.$store.state.items[t.$route.query.num].runningTime),1),(0,a._)("span",null,(0,k.zw)(t.$store.state.items[t.$route.query.num].repNationCd),1),O,G,(0,a._)("span",null,(0,k.zw)(t.$store.state.items[t.$route.query.num].genre),1)]),(0,a._)("dd",A,(0,k.zw)(t.$store.state.items[t.$route.query.num].startDate)+" 개봉",1),(0,a._)("dd",V,[(0,a.Uk)((0,k.zw)(r.textArray[0])+" "+(0,k.zw)(r.textArray[1])+" "+(0,k.zw)(r.textArray[2])+" ",1),r.btnMore?((0,a.wg)(),(0,a.iD)("button",{key:0,type:"button",class:"more",onClick:e[1]||(e[1]=(...t)=>o.more&&o.more(...t))},"더보기")):(0,a.kq)("",!0)]),t.$store.state.items[t.$route.query.num].actor.length>1?((0,a.wg)(),(0,a.iD)("dd",M,[(0,a._)("a",{href:`${t.$store.state.items[t.$route.query.num].youtube}`,target:"_blank"},"유투브 링크로 이동",8,W)])):(0,a.kq)("",!0)]),t.$store.state.items[t.$route.query.num].actor.length>1?((0,a.wg)(),(0,a.iD)("dl",L,[Z,(0,a._)("dd",null,[(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.$store.state.items[t.$route.query.num].actor,((t,e)=>((0,a.wg)(),(0,a.iD)("li",{key:e},[(0,a._)("a",{href:`https://movie.daum.net/person/main?personId=${t.number}`,target:"_blank"},[(0,a._)("img",{src:`${t.img}`,alt:""},null,8,B),(0,a.Uk)((0,k.zw)(t.name),1)],8,F)])))),128))])])])):(0,a.kq)("",!0)])}var S={name:"datail-vue",data(){return{synop:this.$store.state.items[this.$route.query.num].synop,textArray:[],btnMore:!0}},props:{num:Number},mounted(){let t=this.synop,e=t.slice(0,70);this.textArray.push(e),this.textArray.push("...")},methods:{more(){let t=this.synop,e=t.slice(70,t.length);this.textArray.push(e),this.textArray.splice(1,1),this.btnMore=!1}}};const E=(0,b.Z)(S,[["render",I]]);var K=E;const Y={class:"list"},H=(0,a._)("h3",null,"Movie List",-1),J={class:"search"},X=(0,a._)("div",{class:"icon"},null,-1),Q=(0,a.Uk)("영화추가");function tt(t,e,i,r,o,m){const s=(0,a.up)("item"),u=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",Y,[H,(0,a._)("div",J,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>o.search=t),placeholder:"제목을 입력하세요."},null,512),[[n.nr,o.search]]),X]),(0,a._)("article",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(m.filteredList,(t=>((0,a.wg)(),(0,a.j4)(s,{key:t.rank,num:t.id},null,8,["num"])))),128))]),(0,a.Wm)(u,{to:"/add",class:"add"},{default:(0,a.w5)((()=>[Q])),_:1})])}const et=(0,a._)("br",null,null,-1),it={class:"item"},nt=["src"],at={class:"movie"},rt={class:"name"},ot={class:"grade"},mt={class:"advanceRate"},st={class:"startDate"};function ut(t,e,i,n,r,o){const m=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(m,{to:{name:"detail",query:{num:i.num}}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,k.zw)(i.num),1),et,(0,a.Uk)(" 아이디 "+(0,k.zw)(t.$store.state.items[i.num].id)+" ",1),(0,a._)("div",it,[(0,a._)("img",{src:`${t.$store.state.items[i.num].mPoster}`,alt:""},null,8,nt),(0,a._)("dl",at,[(0,a._)("dt",rt,(0,k.zw)(t.$store.state.items[i.num].movieName),1),(0,a._)("dd",ot,(0,k.zw)(t.$store.state.items[i.num].grade),1),(0,a._)("dd",mt,"예매율 : "+(0,k.zw)(t.$store.state.items[i.num].advanceRate),1),(0,a._)("dd",st,"개봉일 : "+(0,k.zw)(t.$store.state.items[i.num].startDate),1)])])])),_:1},8,["to"])}var lt={name:"item-vue",props:{num:Number}};const gt=(0,b.Z)(lt,[["render",ut]]);var pt=gt,ct={name:"list-vue",data(){return{num:0,search:""}},components:{item:pt},mounted(){this.$store.state.items.sort((function(t,e){return t.id-e.id}))},computed:{filteredList(){return this.$store.state.items.filter((t=>t.movieName.toLowerCase().includes(this.search.toLowerCase())))}},methods:{inputSelectVal:function(t){const e=t.currentTarget,i=[...this.$store.state.items];switch(e.value){case"rank":i.sort((function(t,e){return t.rank-e.rank})),this.$store.state.items=i,console.log("인기순"),console.log(i),console.log(this.$store.state.items);break}}}};const ht=(0,b.Z)(ct,[["render",tt]]);var bt=ht;const dt={class:"add"},vt=(0,a._)("h3",null,"Movie Add",-1),wt={class:"write"},kt=(0,a._)("b",null,[(0,a._)("span",null,"*"),(0,a.Uk)("영화제목")],-1),_t={class:"write"},yt=(0,a._)("b",null,[(0,a._)("span",null,"*"),(0,a.Uk)("개봉일")],-1),ft={class:"write"},$t=(0,a._)("b",null,[(0,a._)("span",null,"*"),(0,a.Uk)("평점")],-1),Nt=(0,a._)("b",null,[(0,a._)("span",null,"*"),(0,a.Uk)("별점")],-1),Dt={class:"write"},Ut=(0,a._)("b",null,[(0,a._)("span",null,"*"),(0,a.Uk)("포스터")],-1),jt={class:"write"},Ct=(0,a._)("b",null,[(0,a._)("span",null,"*"),(0,a.Uk)("영화설명 (요약 버전)")],-1),xt=(0,a._)("b",null,[(0,a._)("span",null,"*"),(0,a.Uk)("영화설명 (상세 버전)")],-1),Pt={class:"write"},zt=(0,a._)("b",null,[(0,a._)("span",null,"*"),(0,a.Uk)("등급")],-1),Rt=(0,a._)("b",null,[(0,a._)("span",null,"*"),(0,a.Uk)("시간")],-1),Tt={class:"write"},qt=(0,a._)("b",null,[(0,a._)("span",null,"*"),(0,a.Uk)("국가")],-1),Ot=(0,a._)("b",null,[(0,a._)("span",null,"*"),(0,a.Uk)("장르")],-1),Gt={class:"write"},At=(0,a._)("b",null,"유투브",-1),Vt={class:"btn_wrap"};function Mt(t,e,i,r,o,m){return(0,a.wg)(),(0,a.iD)("div",dt,[vt,(0,a._)("div",wt,[kt,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"ex) 알라딘","onUpdate:modelValue":e[0]||(e[0]=e=>t.movieName=e)},null,512),[[n.nr,t.movieName]])]),(0,a._)("div",_t,[yt,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"ex) 2022년 10월 11일","onUpdate:modelValue":e[1]||(e[1]=e=>t.startDate=e)},null,512),[[n.nr,t.startDate]])]),(0,a._)("div",ft,[(0,a._)("div",null,[$t,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"ex) 4.1","onUpdate:modelValue":e[2]||(e[2]=e=>t.advanceRate=e)},null,512),[[n.nr,t.advanceRate]])]),(0,a._)("div",null,[Nt,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"ex) ★★★★","onUpdate:modelValue":e[3]||(e[3]=e=>t.grade=e)},null,512),[[n.nr,t.grade]])])]),(0,a._)("div",Dt,[Ut,(0,a._)("input",{onChange:e[4]||(e[4]=(...t)=>m.upload&&m.upload(...t)),type:"file",id:"file"},null,32)]),(0,a._)("div",jt,[Ct,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"ex) 1992년에 개봉한 디즈니 애니메이션 알라딘을...","onUpdate:modelValue":e[5]||(e[5]=e=>t.intro=e)},null,512),[[n.nr,t.intro]]),xt,(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":e[6]||(e[6]=e=>t.synop=e)},null,512),[[n.nr,t.synop]])]),(0,a._)("div",Pt,[(0,a._)("div",null,[zt,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"전체 관람가","onUpdate:modelValue":e[7]||(e[7]=e=>t.watchGradeNm=e)},null,512),[[n.nr,t.watchGradeNm]])]),(0,a._)("div",null,[Rt,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"123분","onUpdate:modelValue":e[8]||(e[8]=e=>t.runningTime=e)},null,512),[[n.nr,t.runningTime]])])]),(0,a._)("div",Tt,[(0,a._)("div",null,[qt,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"대한민국","onUpdate:modelValue":e[9]||(e[9]=e=>t.repNationCd=e)},null,512),[[n.nr,t.repNationCd]])]),(0,a._)("div",null,[Ot,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"액션","onUpdate:modelValue":e[10]||(e[10]=e=>t.genre=e)},null,512),[[n.nr,t.genre]])])]),(0,a._)("div",Gt,[At,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"www.youtube.com/~~","onUpdate:modelValue":e[11]||(e[11]=e=>t.youtube=e)},null,512),[[n.nr,t.youtube]])]),(0,a._)("div",Vt,[(0,a._)("button",{onClick:e[12]||(e[12]=e=>t.$router.go(-1)),class:"back"}," 뒤로가기"),(0,a._)("button",{onClick:e[13]||(e[13]=(...t)=>m.nullCheck&&m.nullCheck(...t)),class:"save"}," 저장하기")])])}var Wt={name:"add-vue",data(){return{url:""}},methods:{upload(t){let e=t.target.files;console.log(e),this.url=URL.createObjectURL(e[0])},nullCheck:function(){return this.movieName?this.startDate?this.advanceRate?this.grade?this.intro?this.synop?this.watchGradeNm?this.runningTime?this.repNationCd?this.genre?void this.save():(alert("장르을 입력하세요."),!1):(alert("국가를 입력하세요."),!1):(alert("시간을 입력하세요."),!1):(alert("등급을 입력하세요."),!1):(alert("설명(상세)을 입력하세요."),!1):(alert("설명(요약)을 입력하세요."),!1):(alert("별점을 입력하세요."),!1):(alert("평점을 입력하세요."),!1):(alert("개봉일을을 입력하세요."),!1):(alert("영화제목을 입력하세요."),!1)},save(){var t={id:this.$store.state.items.length++,movieName:this.movieName,startDate:this.startDate,openingDate:this.openingDate,advanceRate:this.advanceRate,grade:this.grade,mPoster:this.url,wPoster:this.url,intro:this.intro,synop:this.synop,rank:this.rank,director:this.director,actor:[],genre:this.genre,watchGradeNm:this.watchGradeNm,runningTime:this.runningTime,repNationCd:this.repNationCd,youtube:this.youtube};this.$store.state.items.unshift(t),console.log(this.$store.state.items),this.$router.go(-1)}}};const Lt=(0,b.Z)(Wt,[["render",Mt]]);var Zt=Lt;const Ft=[{path:"/",name:"main",component:x},{path:"/detail",name:"detail",component:K,props:!0},{path:"/list",name:"list",component:bt},{path:"/add",name:"add",component:Zt}],Bt=(0,w.p7)({history:(0,w.PO)("/port/vue/movie/"),routes:Ft});var It=Bt,St=i(65),Et=[{id:0,movieName:"알라딘",startDate:"2019년 5월 23일",openingDate:"2019년 5월 23일",advanceRate:"개봉전",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_aladdin.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_aladdin.jpg?raw=true",intro:"1992년에 개봉한 디즈니 애니메이션 알라딘을 원작으로 하는 실사 영화",synop:"머나먼 사막 속 신비의 아그라바 왕국의 시대. 좀도둑 ‘알라딘’은 마법사 ‘자파’의 의뢰로 마법 램프를 찾아 나섰다가 주인에게 세 가지 소원을 들어주는 지니를 만나게 되고, 자스민 공주의 마음을 얻으려다 생각도 못했던 모험에 휘말리게 되는데…",rank:12,director:"가이 리치",actor:[{name:"미나 마수드",number:"480843",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_aladdin1.png?raw=true"},{name:"나오미 스콧",number:"267584",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_aladdin2.png?raw=true"},{name:"윌 스미스",number:"664",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_aladdin3.png?raw=true"}],genre:"판타지, 뮤지컬, 로맨틱 코미디, 모험",watchGradeNm:"전체 관람가",runningTime:"128분",repNationCd:"미국",youtube:"https://www.youtube.com/watch?v=9g5knnlF7Zo"},{id:1,movieName:"탑건-매버릭",startDate:"2022년 6월 22일",openingDate:"2022년 4월 28일",advanceRate:"5.0",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_topgun.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_topgun.jpg?raw=true",intro:"한순간의 실수도 용납되지 않는 하늘 위, 가장 압도적인 비행이 시작된다!",synop:"최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다.그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. 매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데… ",rank:1,director:"조지프 코신스키",actor:[{name:"톰 크루즈",number:"492",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_topgun1.png?raw=true"},{name:"마일스 텔러",number:"185250",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_topgun2.png?raw=true"},{name:"제니퍼 코넬리",number:"778",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_topgun3.png?raw=true"}],genre:"액션",watchGradeNm:"12세 관람가",runningTime:"131분",repNationCd:"미국",youtube:"https://www.youtube.com/watch?v=Mrj9XACVJ8U"},{id:2,movieName:"한산 : 용의 출현",startDate:"2022년 7월 27일",openingDate:"2022년 7월 27일",advanceRate:"5.0",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_hansan.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_hansan.jpg?raw=true",intro:"나라의 운명을 바꿀 압도적 승리의 전투가 시작된다!",synop:"1592년 4월, 조선은 임진왜란 발발 후 단 15일만에 왜군에 한양을 빼앗기며 절체절명의 위기에 놓인다. 조선을 단숨에 점령한 왜군은 명나라로 향하는 야망을 꿈꾸며 대규모 병역을 부산포로 집결시킨다. 한편, 이순신 장군은 연이은 전쟁의 패배와 선조마저 의주로 파천하며 수세에 몰린 상황에서도 조선을 구하기 위해 전술을 고민하며 출전을 준비한다. 하지만 앞선 전투에서 손상을 입은 거북선의 출정이 어려워지고, 거북선의 도면마저 왜군의 첩보에 의해 도난 당하게 되는데… 왜군은 연승에 힘입어 그 우세로 한산도 앞바다로 향하고, 이순신 장군은 조선의 운명을 가를 전투를 위해 필사의 전략을 준비한다. 1592년 여름, 음력 7월 8일 한산도 앞바다, 압도적인 승리가 필요한 조선의 운명을 건 지상 최고의 해전이 펼쳐진다.",rank:2,director:"김한민",actor:[{name:"박해일",number:"1316",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_hansan1.png?raw=true"},{name:"변요한",number:"261949",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_hansan2.png?raw=true"},{name:"안성기",number:"546",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_hansan3.png?raw=true"}],genre:"액션, 드라마",watchGradeNm:"12세 관람가",runningTime:"130분",repNationCd:"대한민국",youtube:"https://www.youtube.com/watch?v=FLNUcZxCT6k"},{id:3,movieName:"라라랜드",startDate:"2016년 12월 7일",openingDate:"2016년 12월 8일",advanceRate:"5.0",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_lalaland.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_lalaland.jpg?raw=true",intro:"황홀한 사랑, 순수한 희망, 격렬한 열정… 이 곳에서 모든 감정이 폭발한다!",synop:"꿈을 꾸는 사람들을 위한 별들의 도시 ‘라라랜드’. 재즈 피아니스트 ‘세바스찬’(라이언 고슬링)과 배우 지망생 ‘미아’(엠마 스톤), 인생에서 가장 빛나는 순간 만난 두 사람은 미완성인 서로의 무대를 만들어가기 시작한다.",rank:3,director:"데이미언 셔젤",actor:[{name:"라이언 고슬링",number:"8129",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_lalaland1.png?raw=true"},{name:"엠마스톤",number:"124100",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_lalaland2.png?raw=true"}],genre:"드라마, 뮤지컬, 로맨스, 멜로",watchGradeNm:"12세 관람가",runningTime:"127분",repNationCd:"미국",youtube:"https://www.youtube.com/watch?v=o8oZ-qOmgtc"},{id:4,movieName:"그래비티",startDate:"2013년 10월 4일",openingDate:"2013년 10월 17일",advanceRate:"4.5",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_gravity.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_gravity.jpg?raw=true",intro:"외계인도, 우주전쟁도 없다. 이것이. 누구도 경험하지 못한 진짜 재난이다.",synop:"허블 우주망원경을 수리하기 위해 우주를 탐사하던 라이언 스톤 박사는 폭파된 인공위성의 잔해와 부딪히면서 소리도 산소도 없는 우주 한 가운데에 홀로 남겨지는데…",rank:4,director:"알폰소 쿠아론",actor:[{name:"산드라 블록",number:"665",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_gravity1.png?raw=true"},{name:"조지 클루니",number:"525",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_gravity2.png?raw=true"}],genre:"스릴러, 재난, 생존, SF",watchGradeNm:"12세 관람가",runningTime:"91분",repNationCd:"미국",youtube:"https://www.youtube.com/watch?v=ql8WbM3Qea8"},{id:5,movieName:"이프 온리",startDate:"2004년 10월 29일",openingDate:"2004년 10월 29일",advanceRate:"4.4",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_ifOnly.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_ifOnly.jpg?raw=true",intro:"오늘, 비로소 사랑을 알았어",synop:"눈앞에서 사랑하는 연인을 잃은 남자는 다음 날 아침, 자신의 옆에서 자고 있는 연인을 보고 소스라치게 놀란다. 기쁨도 잠시, 정해진 운명은 바꿀 수 없단 것을 깨달은 그는 더 늦기 전에 자신의 진정한 사랑을 전하기로 마음먹는데…",rank:5,director:"길 정거",actor:[{name:"제니퍼 러브 휴이트",number:"552",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_ifOnly1.png?raw=true"},{name:"폴 니콜스",number:"93699",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_ifOnly2.png?raw=true"}],genre:"로맨틱 코미디, 멜로",watchGradeNm:"15세 이상",runningTime:"96분",repNationCd:"영국,미국",youtube:"https://www.youtube.com/watch?v=40Ahmsbae94"},{id:6,movieName:"업(Up)",startDate:"2009년 7월 29일",openingDate:"2009년 7월 29일",advanceRate:"5.0",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_up.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_up.jpg?raw=true",intro:"한방울 눈물과 한바탕 웃음! 2009년 가장 아름다운 영화 <업>",synop:"성격 까칠한 할아버지 ‘칼’과 귀여운 8살 탐험가 ‘러셀’이 만났다! 평생 모험을 꿈꿔 왔던 ‘칼’ 할아버지는 수천 개의 풍선을 매달아 집을 통째로 남아메리카로 날려 버리는데, ‘칼’ 할아버지의 이 위대한 모험에 초대 받지 않은 불청객이 있었으니, 바로 황야의 탐험가 ‘러셀’! 지구상에 둘도 없을 이 어색한 커플이 함께 하는 대모험. 그들은 과연 남미의 잃어버린 세계에서 사라져 버린 꿈과 희망,행복을 다시 찾을 수 있을까?",rank:6,director:"피트 닥터, 밥 피터슨",actor:[{name:"에드워드 애스너",number:"12952",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_up1.png?raw=true"},{name:"크리스토퍼 플러머",number:"1205",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_up2.png?raw=true"}],genre:"어드벤처, 애니메이션",watchGradeNm:"전체 관람가",runningTime:"101분",repNationCd:"미국",youtube:"https://www.youtube.com/watch?v=6J6ADorSeYc"},{id:7,movieName:"반지의 제왕",startDate:"2001년 12월 31일",openingDate:"2001년 12월 31일",advanceRate:"5.0",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_ring.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_ring.jpg?raw=true",intro:"21세기 가장 위대한 판타지 걸작의 귀환! <반지의 제왕> 시리즈 확장판 스크린 최초개봉!",synop:"모든 힘을 지배할 악의 군주 ‘사우론’의 절대반지가 깨어나고 악의 세력이 세상을 지배해가며 중간계는 대혼란에 처한다. 호빗 ‘프로도’와 그의 친구들, 엘프 ‘레골라스’, 인간 전사 ‘아라곤’과 ‘보로미르’ 드워프 ‘김리’ 그리고 마법사 ‘간달프’로 구성된 반지원정대는 평화를 지키기 위해 절대반지를 파괴할 유일한 방법인 반지가 만들어진 모르도르를 향해 목숨을 건 여정을 떠난다. 한편, 점점 세력을 넓혀온 사우론과의 피할 수 없는 전쟁을 앞둔 반지원정대는 드디어 거대한 최후의 전쟁을 시작하는데...",rank:7,director:"피터 잭슨",actor:[{name:"일라이저 우드",number:"2440",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_ring1.png?raw=true"},{name:"이안 맥켈런",number:"2482",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_ring2.png?raw=true"},{name:"리브 타일러",number:"8655",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_ring3.png?raw=true"}],genre:"판타지, 어드벤처",watchGradeNm:"12세 관람가",runningTime:"165분",repNationCd:"뉴질랜드, 미국",youtube:"https://www.youtube.com/watch?v=CGLblhh6RTA"},{id:8,movieName:"부산행",startDate:"2016년 07월20일",openingDate:"2016년 07월20일",advanceRate:"5.0",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_busan.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_busan.jpg?raw=true",intro:"전대미문의 재난이 대한민국을 덮친다!",synop:"정체불명의 바이러스가 전국으로 확산되고 대한민국 긴급재난경보령이 선포된 가운데, 열차에 몸을 실은 사람들은 단 하나의 안전한 도시 부산까지 살아가기 위한 치열한 사투를 벌이게 된다.",rank:8,director:"연상호",actor:[{name:"공유",number:"5493",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_busan1.png?raw=true"},{name:"정유미",number:"96817",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_busan2.png?raw=true"},{name:"김수안",number:"265593",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_busan3.png?raw=true"}],genre:"액션, 스릴러",watchGradeNm:"15세 관람가",runningTime:"118분",repNationCd:"대한민국",youtube:"https://www.youtube.com/watch?v=UOTOjA0ngmk"},{id:9,movieName:"어벤져스:엔드게임",startDate:"2019년 04월 24일",openingDate:"2019년 04월 24일",advanceRate:"4.5",grade:"★★★★★",mPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_m_endgame.jpg?raw=true",wPoster:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/poster_w_endgame.jpg?raw=true",intro:"위대한 어벤져스, 운명을 바꿀 최후의 전쟁이 펼쳐진다!",synop:"인피니티 워 이후 절반만 살아남은 지구, 마지막 희망이 된 어벤져스 먼저 떠난 그들을 위해 모든 것을 걸었다!",rank:9,director:"앤서니 루소, 조 루소",actor:[{name:"로버트 다우니 주니어",number:"8357",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_endgame1.png?raw=true"},{name:"크리스 에반스",number:"43624",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_endgame2.png?raw=true"},{name:"마크 러팔로",number:"9144",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_endgame3.png?raw=true"},{name:"스칼렛 요한슨",number:"11739",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_endgame4.png?raw=true"},{name:"제레미 레너",number:"96681",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_endgame5.png?raw=true"},{name:"폴 러드",number:"19931",img:"https://github.com/ssunakimm/ssunakimm.github.io/blob/main/port/vue/movie/img/actor_endgame6.png?raw=true"}],genre:"액션, SF",watchGradeNm:"12세 관람가",runningTime:"191분",repNationCd:"미국",youtube:"https://www.youtube.com/watch?v=Ko2NWhXI9e8"}],Kt=(0,St.MT)({state:{items:Et,num:0},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(v).use(Kt).use(It).mount("#app")}},e={};function i(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,n,a,r){if(!n){var o=1/0;for(l=0;l<t.length;l++){n=t[l][0],a=t[l][1],r=t[l][2];for(var m=!0,s=0;s<n.length;s++)(!1&r||o>=r)&&Object.keys(i.O).every((function(t){return i.O[t](n[s])}))?n.splice(s--,1):(m=!1,r<o&&(o=r));if(m){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[n,a,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,o=n[0],m=n[1],s=n[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(a in m)i.o(m,a)&&(i.m[a]=m[a]);if(s)var l=s(i)}for(e&&e(n);u<o.length;u++)r=o[u],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(l)},n=self["webpackChunkmovie"]=self["webpackChunkmovie"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(6360)}));n=i.O(n)})();
//# sourceMappingURL=app.3db91c59.js.map