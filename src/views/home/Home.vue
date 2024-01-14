<script setup>
import HomeNavBar from "@/views/home/cpts/HomeNavBar.vue";
import HomeSearch from './cpts/HomeSearch.vue'
</script>

<template>
    <div class="home">
      <home-nav-bar/>
      <div class="banner">
        <img src="@/assets/img/homebanner.jpg" alt="">
      </div>
      <home-search/>
    </div>
</template>

<style scoped>
  .banner img{
    width:100%;
  }
</style>