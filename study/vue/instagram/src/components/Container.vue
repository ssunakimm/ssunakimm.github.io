<template>
    <div>

        <!-- 저번시간에 만든거 -->
        <div v-if="step == 0">
            <Post :postdata="postdata" v-for="(postdata, i) in postdata" :key="i" />
        </div>

        <div v-if="step == 1">
        <!-- 필터선택페이지 -->
            <div class="upload-image" :style="{backgroundImage:`url(${uploadImg})`}"></div>
            <div class="filters">
                <div class="filter-1" :style="{backgroundImage:`url(${uploadImg})`}"></div>
                <div class="filter-1" :style="{backgroundImage:`url(${uploadImg})`}"></div>
                <div class="filter-1" :style="{backgroundImage:`url(${uploadImg})`}"></div>
                <div class="filter-1" :style="{backgroundImage:`url(${uploadImg})`}"></div>
                <div class="filter-1" :style="{backgroundImage:`url(${uploadImg})`}"></div>
            </div>
        </div>

        <div v-if="step == 2">
        <!-- 글작성페이지 -->
            <div class="upload-image"></div>
            <div class="write">
                <textarea class="write-box">write!</textarea>
            </div>
        </div>
    </div>  
</template>

<script>
import Post from './Post.vue'

export default {
    name : 'vue-container',    
    components : {
        Post,    
    },
    props : {
        postdata :  Array,
        step :  Number,
        uploadImg : String
    }
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>