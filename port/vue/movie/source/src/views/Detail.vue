<template>
  <div class="detail">
    <button @click="$router.go(-1)" class="back"> 뒤로가기</button>
    <div class="bg" :style="{ backgroundImage : `url(${$store.state.items[$route.query.num].wPoster})`}"></div>    
    <dl class="movie">
      <dt class="name">{{ $store.state.items[$route.query.num].movieName }}</dt>
      <dd class="grade">{{ $store.state.items[$route.query.num].grade }} <b>{{ $store.state.items[$route.query.num].advanceRate }}</b></dd>
      <dd class="all">
        <span>{{ $store.state.items[$route.query.num].watchGradeNm }}</span>
        <span>{{ $store.state.items[$route.query.num].runningTime}}</span>
        <span>{{ $store.state.items[$route.query.num].repNationCd}}</span>
      </dd>
      <dd class="all">
        <div v-if="$store.state.items[$route.query.num].director">{{ $store.state.items[$route.query.num].director }} 감독</div>
        #{{ $store.state.items[$route.query.num].genre }}        
      </dd>
      <dd class="startDate">{{ $store.state.items[$route.query.num].startDate }} 개봉</dd>
      <dd class="synop">{{ textArray[0] }} {{ textArray[1] }} {{ textArray[2] }} <button type="button" class="more" @click="more" v-if="btnMore">더보기</button></dd>
      <dd class="link" v-if="$store.state.items[$route.query.num].actor.length > 1"><a :href="`${ $store.state.items[$route.query.num].youtube }`" target="_blank">유투브 링크로 이동</a></dd>
    </dl>  
    <dl class="actor" v-if="$store.state.items[$route.query.num].actor.length > 1">
      <dt class="name">출연자</dt>
      <dd>
        <ul>
          <li v-for="(actor,i) in $store.state.items[$route.query.num].actor" :key="i">
            <a :href="`https://movie.daum.net/person/main?personId=${ actor.number }`" target="_blank">
            <img :src="`${ actor.img }`" alt="" />{{actor.name}}
            </a>
          </li>
        </ul>
      </dd>      
    </dl>  
    <button @click="delMovie($route.query.num)" class="del" type="button"> 삭제하기</button>
  </div>
</template>

<script>
export default {
  name: 'datail-vue',
  data(){
    return {
      synop : '',
      textArray : [],
      btnMore : true,
      idArray : []
    }
  },
  props: {
    num : Number
  },
  created(){
    for (var i = 0; i < this.$store.state.items.length; i++) {
      this.idArray.push(this.$store.state.items[i].id);      
    }    
    let idNum = this.idArray.findIndex(v => v == this.$route.query.num);
    this.$route.query.num = idNum    
    this.synop = this.$store.state.items[idNum].synop
    
    
    
  },
  mounted() {
    let copy = this.synop;
    let text1 = copy.slice(0, 70); //요약버전
    this.textArray.push(text1);
    this.textArray.push('...');
  },
  methods: {
    more(){      
      let copy = this.synop;
      let text2 = copy.slice(70, copy.length); //더보기버전
      this.textArray.push(text2);
      this.textArray.splice(1, 1);
      this.btnMore = false //더보기버튼 숨기기
      
    },
    delMovie(idNum){      
      const newItem = this.$store.state.items.filter((item) => {
        if (item.id == this.idArray[idNum]) return false;
        else return true;
      });
      this.$store.state.items = newItem;
      this.$router.go(-1)
    }
  }

}
</script>