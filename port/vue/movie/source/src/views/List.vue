<template>
  <div class="list">
    <h3>Movie List</h3>
    <div class="search">
      <input type="text" v-model="search" placeholder="제목을 입력하세요."/>
      <div class="icon"></div>
      <select v-on:change="inputSelectVal">
        <option value="base" selected>정렬</option>
        <option value="rank">인기순</option>
        <option value="name">이름순</option>
      </select>
    </div>
    
    <article>
      <router-link :to="{name: 'detail', query: {num: item.id}}" v-for="item in filteredList" :key="item.id">
        <div class="item">
          <img :src="`${ item.mPoster }`" alt="" />
          <dl class="movie">
            <dt class="name">{{ item.movieName }}</dt>
            <dd class="grade">{{ item.grade }}</dd>
            <dd class="advanceRate">예매율 : {{ item.advanceRate }}</dd>
            <dd class="startDate">개봉일 : {{ item.startDate }}</dd>
          </dl>    
        </div>
      </router-link>
    </article>
    <router-link to="/add" class="add">영화추가</router-link>
  </div>
</template>
<script>

export default {
  name: 'list-vue',
  data(){
    return {
      num : 0,
      search: '',
    }
  },
  components : {
  },
  mounted(){
    this.$store.state.items.sort(function(a,b){
      return a.id - b.id
    })
  },
  computed: {
    filteredList() {
      return this.$store.state.items.filter(item => {
        return item.movieName.toLowerCase().includes(this.search.toLowerCase()) ;
        
      })      
    },
  },
  methods:{
    inputSelectVal: function (e) {
        const sel = e.currentTarget;
        const filterData = [...this.$store.state.items];
        switch(sel.value) {
            case 'base' : //id순 정렬
              filterData.sort(function(a,b){
                return a.id - b.id
              })
              this.$store.state.items = filterData              
              break;
            case 'rank' : //인기순 정렬
              filterData.sort(function(a,b){
                return a.rank - b.rank
              })
              this.$store.state.items = filterData              
              break;
            case 'name' : //이름순 정렬
              filterData.sort(function(a,b){
                return a.movieName.localeCompare(b.movieName)
              })
              this.$store.state.items = filterData
              break;            
        }
    },
  }
}
</script>
