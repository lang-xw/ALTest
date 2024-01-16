<script setup>
import HomeNavBar from "@/views/home/cpts/HomeNavBar.vue";
import HomeSearch from './cpts/HomeSearch.vue'
import useHomeStore from "@/stores/modules/home.js";
import HomeCategories from "@/views/home/cpts/HomeCategories.vue";
import HomeList from "@/views/home/cpts/HomeList.vue";
import pageScroll from "@/hooks/pageScroll.js";
import {watch} from "vue";

//网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSug()
homeStore.fetchCategories()
homeStore.fetchHomeList()


// let currentPage = 1  直接在store里管理
const moreClick=()=>{
  // currentPage++
  homeStore.fetchHomeList()
}

//1.有参数，参数为函数
// pageScroll(()=>{
//   homeStore.fetchHomeList()
// })

// 2.监听滚动,自动更新列表(函数提取),没有参数
const { isReachBottom }= pageScroll()
//监听是否到底底部
watch(isReachBottom,(newValue)=>{
  if(newValue){
    //请求完成后，数据变多,isReachBottom变为否
    homeStore.fetchHomeList().then(res=>{
      isReachBottom.value=false
    })
  }
})


</script>

<template>
    <div class="home">
      <home-nav-bar/>
      <div class="banner">
        <img src="@/assets/img/homebanner.jpg" alt="">
      </div>
      <home-search/>
      <home-categories/>
      <home-list/>
<!--      <button @click="moreClick">  加载更多</button>-->
      <!--
          自动更新，监听页面滚动到底部时，自动加载moreClick()函数
          windows滚动，元素没有设置高度
      -->
    </div>
</template>

<style scoped>
  .banner img{
    width:100%;
  }
.home{
  padding-bottom: 55px;
}
</style>