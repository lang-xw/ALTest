<script setup>
import HomeNavBar from "@/views/home/cpts/HomeNavBar.vue";
import HomeSearch from './cpts/HomeSearch.vue'
import useHomeStore from "@/stores/modules/home.js";
import HomeCategories from "@/views/home/cpts/HomeCategories.vue";

//网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSug()
homeStore.fetchCategories()
</script>

<template>
    <div class="home">
      <home-nav-bar/>
      <div class="banner">
        <img src="@/assets/img/homebanner.jpg" alt="">
      </div>
      <home-search/>
      <home-categories/>
    </div>
</template>

<style scoped>
  .banner img{
    width:100%;
  }
</style>