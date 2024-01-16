<script setup>

import useMainStore from "@/stores/modules/main.js";

const mainStore=useMainStore()

const loadClick=()=>{
  mainStore.isloading=false
}
</script>

<template>
  <div
      class="loading"
      v-if="mainStore.isloading"
      @click="loadClick"
  >
    <div class="pg">
      <img src="@/assets/img/loading.gif" alt="">
    </div>
  </div>
</template>

<style scoped>
.loading {
  position:fixed;
  z-index: 100;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background:rgba(0,0,0,.3);
}
.pg{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 104px;
}
.pg img{
  width: 70px;
  height: 70px;
}
</style>