<script setup>
import TabBar from "@/components/TabBar.vue";

import { useRoute } from "vue-router";


const route=useRoute() //获取当前路由

</script>

<template>
  <router-view/>
  <tab-bar v-if="!route.meta.HideTabbar"></tab-bar>
<!--  <tab-bar/>-->
</template>

<style scoped>

</style>
