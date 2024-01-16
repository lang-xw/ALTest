<script setup>
import useHomeStore from "@/stores/modules/home.js";
import {storeToRefs} from "pinia";
import HomeV9 from "@/components/homeListCpns/HomeV9.vue";
import HomeV3 from "@/components/homeListCpns/HomeV3.vue";

const homeStore = useHomeStore()
const{ homeList } =storeToRefs(homeStore)
</script>

<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item,index) in homeList" :key="item.data.houseId">
        <!-- discoveryContentType  判断是哪个类别-->
        <home-v9 v-if="item.discoveryContentType === 9" :homeListData="item.data"/>
        <home-v3 v-else-if="item.discoveryContentType === 3" :homeListData="item.data"/>
      </template>
    </div>
  </div>
</template>

<style scoped>
.content{
  padding:10px 8px
}
.title{
  font-size: 22px;
  padding:0 15px;
}
.list{
  display: flex;
  flex-wrap: wrap;
}
</style>