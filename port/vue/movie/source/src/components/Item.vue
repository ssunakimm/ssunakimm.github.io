<template>
  <div class="item">
      
  </div>
  <!-- <router-link :to="{name: 'detail', query: {num: num}}">
    <div class="item">
      <img :src="`${ $store.state.items[num].mPoster }`" alt="" />
      <dl class="movie">
        <dt class="name">{{ $store.state.items[num].movieName }}</dt>
        <dd class="grade">{{ $store.state.items[num].grade }}</dd>
        <dd class="advanceRate">예매율 : {{ $store.state.items[num].advanceRate }}</dd>
        <dd class="startDate">개봉일 : {{ $store.state.items[num].startDate }}</dd>
      </dl>    
    </div>
  </router-link> -->
</template>

<script>
export default {
  name: 'item-vue',
  props: {
    num : Number
  }
  
}
</script>