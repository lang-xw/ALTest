<script setup>
  import tabbarData from "@/assets/data/tabbarData.js";
  import {ref} from "vue";
  import router from "@/routers/index.js";


  const active = ref('home')
</script>

<template>
  <div class="tabbar" >

    <!--    使用vantUI库-->
    <van-tabbar v-model="active" active-color="orange" route>
      <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="star-o" to="/favor">收藏</van-tabbar-item>
      <van-tabbar-item name="friends" icon="gem-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item name="setting" icon="other-pay" to="/message">消息</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<!---->
<style scoped></style>

