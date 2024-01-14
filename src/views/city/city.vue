<script setup>
  import {ref} from "vue";
  import {useRouter} from "vue-router";
  const router=useRouter()

  //搜索栏数据
  const searchValue = ref('')
  //搜索栏取消按钮，实现回退
  const cancelClick=()=>{
    router.back()
  }

  //tag切换数据
  const tabActive = ref(0)

</script>

<template>
  <div class="city top-tabbar-hide">
    <!-- 1.搜索栏-->
    <div class="search">
        <van-search
            v-model="searchValue"
            show-action
            shape="round"
            placeholder="城市/区域/位置"
            @cancel="cancelClick"
        />
    </div>
    <!-- 2.切换tag-->
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <van-tab title="国内/港澳台"></van-tab>
      <van-tab title="海外"></van-tab>
    </van-tabs>

  </div>
</template>

<style scoped>

</style>