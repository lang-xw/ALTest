<script setup>

import {useRoute, useRouter} from "vue-router";
import { getDetailInfo } from '@/service/index.js'
import {computed, ref} from "vue";
import DetailSwipe from "@/views/details/cpns/detailSwipe.vue";
import DetailContext from "@/views/details/cpns/detailContext.vue";
const router=useRouter()


//网络请求
const route=useRoute()
const houseId=route.params.id
const detailItem=ref({})
const mainPart = computed(()=>detailItem.value.mainPart)
// console.log(houseId)
getDetailInfo(houseId).then(res=>{
  detailItem.value = res.data
  // console.log(detailItem)
})

const onClickLeft=()=>{
  router.back()
}
</script>

<template>
  <div class="detail">
    <div class="nav">
      <van-nav-bar
          title="房屋详情"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
      />
    </div>
    <div class="main" v-if="mainPart">
            <!--   mainport 有数据时才会显示-->
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <detail-context :context-data="mainPart.topModule"/>
    </div>
  </div>
</template>

<style scoped>
.nav{
  --van-nav-bar-title-text-color:#ff9854 !important;
  --van-nav-bar-icon-color:#ff9854 !important;
  --van-nav-bar-text-color:#ff9854 !important;
}
</style>