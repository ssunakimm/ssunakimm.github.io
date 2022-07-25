<template>
    <div class="post">
        <div class="post-header">
        <div class="profile" :style="{backgroundImage:`url(${postdata.userImage})`}"></div>
        <span class="profile-name">{{postdata.name}}</span>
        </div>
        <div class="post-body" :style="{backgroundImage:`url(${postdata.postImage})`}"></div>
        <div class="post-content">
        <p>{{postdata.likes}} Likes</p>
        <p><strong>{{postdata.name}}</strong> {{postdata.content}}</p>
        <p class="date">{{postdata.date}}</p>
        </div>
    </div>   
</template>

<script>
export default {
    name : 'vue-post',
    props : {
        postdata :  Array
    }
}
</script>

<style>

</style>