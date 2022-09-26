<template>
  <div class="add">
    <h3>Movie Add</h3>
    <div class="write">
        <b><span>*</span>영화제목</b>
        <input type="text" placeholder="ex) 알라딘" v-model="movieName" />
    </div>
    <div class="write">
        <b><span>*</span>개봉일</b>
        <input type="text" placeholder="ex) 2022년 10월 11일" v-model="startDate" />
    </div>
    <div class="write">
        <div>
          <b><span>*</span>평점</b>
          <input type="text" placeholder="ex) 4.1" v-model="advanceRate"/>
        </div>
        <div>
          <b><span>*</span>별점</b>
          <input type="text" placeholder="ex) ★★★★" v-model="grade"/>
        </div>
    </div>
    <div class="write">
        <b><span>*</span>포스터</b>
        <input @change="upload" type="file" id="file" />
    </div>    
    <div class="write">
      <b><span>*</span>영화설명 (요약 버전)</b>
      <input type="text" placeholder="ex) 1992년에 개봉한 디즈니 애니메이션 알라딘을..." v-model="intro"/>

      
      <b><span>*</span>영화설명 (상세 버전)</b>
      <textarea  v-model="synop"></textarea>
    </div>

    <div class="write">
      <div>
        <b><span>*</span>등급</b>
        <input type="text" placeholder="전체 관람가" v-model="watchGradeNm"/>
      </div>
      
      <div>
        <b><span>*</span>시간</b>
        <input type="text" placeholder="123분" v-model="runningTime"/>
      </div>
    </div>

    <div class="write">
      <div>
        <b><span>*</span>국가</b>
        <input type="text" placeholder="대한민국" v-model="repNationCd"/>
      </div> 
      <div>
        <b><span>*</span>장르</b>
        <input type="text" placeholder="액션" v-model="genre"/>
      </div>
    </div>
    
    <div class="write">
      <b>유투브</b>
      <input type="text" placeholder="www.youtube.com/~~" v-model="youtube"/>
    </div>
    <div class="btn_wrap">
      <button @click="$router.go(-1)" class="back"> 뒤로가기</button>
      <button @click="nullCheck" class="saveMovie"> 저장하기</button>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'add-vue',
  data(){
    return {
      url : '',
    }
  },
  methods : {
    upload(e){
      let file = e.target.files; //클릭한 이미지
      this.url = URL.createObjectURL(file[0]);
    },
    nullCheck : function(){  
        if (!this.movieName){
          alert('영화제목을 입력하세요.')
          return false;
        }
        else if(!this.startDate){
          alert('개봉일을을 입력하세요.')
          return false;
        }else if(!this.advanceRate){
          alert('평점을 입력하세요.')
          return false;
        }else if(!this.grade){
          alert('별점을 입력하세요.')
          return false;
        }else if(!this.intro){
          alert('설명(요약)을 입력하세요.')
          return false;
        }else if(!this.synop){
          alert('설명(상세)을 입력하세요.')
          return false;
        }else if(!this.watchGradeNm){
          alert('등급을 입력하세요.')
          return false;
        }else if(!this.runningTime){
          alert('시간을 입력하세요.')
          return false;
        }else if(!this.repNationCd){
          alert('국가를 입력하세요.')
          return false;
        }else if(!this.genre){
          alert('장르을 입력하세요.')
          return false;
        }
        
        this.saveMovie();
    },
    saveMovie(){
      const maxId = this.$store.state.items
        .map((item) => item.id)
        .reduce((pvalue, cvalue) => {
          if (pvalue > cvalue) return pvalue;
          else return cvalue;
        }); 

      var newData = {
        "id":maxId+1,
        "movieName":this.movieName,
        "startDate":this.startDate,
        "openingDate" : this.openingDate,
        "advanceRate" : this.advanceRate,
        "grade" : this.grade,
        "mPoster":this.url,
        "wPoster":this.url,
        "intro":this.intro,
        "synop":this.synop,
        "rank":this.rank,
        "director":this.director,
        "actor":[],
        "genre":this.genre,
        "watchGradeNm":this.watchGradeNm,
        "runningTime" : this.runningTime,
        "repNationCd" : this.repNationCd ,
        "youtube" : this.youtube
      };
      this.$store.state.items.push(newData);      
      this.$router.go(-1)
    }
  }
}
</script>