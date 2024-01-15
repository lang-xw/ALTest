<script setup>
import useHomeStore from "@/stores/modules/home.js";
import {storeToRefs} from "pinia";

const homeStore=useHomeStore()
const { categories }=storeToRefs(homeStore)
</script>

<template>
  <div class="categories">
    <template v-for="(item,index) in categories">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="title">{{item.title}}</div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.categories{
  display: flex;
  height: 80px;
  overflow-x: auto;
  //overflow-x:hidden;
  padding:0 10px;
  &::-webkit-scrollbar{
    display: none;
  }
}
.item{
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:70px;
  text-align: center;
}
.item img{
  width:32px;
  height: 32px;
}
.item .title{
  font-size: 12px;
  margin-top:8px;
}
</style>