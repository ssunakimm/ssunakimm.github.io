<template>
  <section class="main" :style="{ backgroundImage : `url(${mainBg})`}">
    <div class="info">
      <dl class="movie">
        <dt class="name">{{ $store.state.items[num].movieName }}</dt>
        <dd class="grade">{{ $store.state.items[num].grade }}</dd>
        <dd class="intro">{{ $store.state.items[num].intro }}</dd>
      </dl>
      <router-link to="/list" class="btn">리스트보기</router-link>
    </div>
  </section>
</template>

<script>

export default {
  name: 'main-vue',
  data() {
    return {
      num : 0,
      mainBg : '',
      winWidth: 0,
    }
  },
  mounted(){
  
  

  
  },
  created() {
     //랜덤숫자가 mounted에 있었는데이게먼저 되서 num값이 항상0 이길래 변경해줌..!
    // 0~10 사이 랜덤숫자 
    this.num = Math.floor(Math.random() * 11);  
 
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
      handleResize() {
        
          this.winWidth = window.innerWidth;
          if(this.winWidth < 1024) { //모바일사이즈인 경우
            this.mainBg = this.$store.state.items[this.num].mPoster;
            
          }else {
            this.mainBg = this.$store.state.items[this.num].wPoster;
          }
      }
  }
}
</script>
