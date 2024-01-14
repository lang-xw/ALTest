<script setup>
  import tabbarData from "@/assets/data/tabbarData.js";
  import {ref} from "vue";
  import router from "@/routers/index.js";
  const  currentIndex  =ref(0)
  function tabClick(index){
    currentIndex.value = index
  }

  //为我们的img src提供url
  function getImgUrl(image){
      //相对路径
      //文件当前路径
      return new URL(`../assets/img/${image}`,import.meta.url).href
  }

  function routerClick(path){
    router.push(path)
  }
</script>

<template>
  <div class="tabbar">
    <template v-for="(item,index) in tabbarData">
      <div class="tabbar-item"
           :class="{active:currentIndex===index}"
           @click="tabClick(index);
           routerClick(item.path)"
      >
        <!--
              这里src不能使用item.img,识别不了
              我们要用到 new URL()
        -->
        <img :src="getImgUrl(item.img)" alt="">
        <span class="text">{{item.text}}</span>
      </div>
    </template>
  </div>
</template>

<style scoped>
  .tabbar{
    position: fixed;
    bottom:0;
    right:0;
    left:0;
    height:50px;
    display:flex;

    padding-top: 3px;
    border-top:1px solid #f3f3f3;
  }
  .tabbar-item{
    flex:1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .tabbar-item img{
    width:32px;
  }
  .tabbar-item .text{
    font-size: 12px;
    margin-top: 2px;
  }
  .active{
    color:orange;
  }
</style>