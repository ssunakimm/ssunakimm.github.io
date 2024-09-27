<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="step++" v-if="step == 0">Next</li>
      <li @click="publish" v-if="step == 1">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  
  <Container  :postdata = "postdata" :step = "step" :uploadImg = "uploadImg"/>
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" @change="upload"/>
      <label for="file" class="input-plus" >+</label>
    </ul>
  </div>
</template>

<script>
import Container from './components/Container.vue'
import postdata from './assets/postdata.js'
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      postdata : postdata,
      clickIndex : 1,
      step : 0,
      uploadImg : ''

    }
  },
  components : {
    Container,    
  },
  methods : {
    more() {
      axios.get('https://codingapple1.github.io/vue/more'+`${this.clickIndex}`+'.json')
      .then( 결과 => {
        console.log(결과.data);
        this.postdata.push(결과.data)
      })
      
      this.clickIndex ++;
    },
    upload(e){
      let 파일 = e.target.files; //클릭한 이미지
      console.log(파일[0])
      let url = URL.createObjectURL(파일[0]);
      console.log("url : "+url); //이미지의 url 알아오기
      this.uploadImg = url

      this.step++
    },
    publish(){
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadImg,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: "perpetua"
      };
      this.postdata.unshift(내게시물); //왼쪽 array에 내 게시물 추가하기
      this.step = 0;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
