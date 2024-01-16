<script setup>
import useMainStore from "@/stores/modules/main.js";
import {storeToRefs} from "pinia";
import {computed} from "vue";
import {formatDate} from "@/utils/formatDate.js";

const mainStore = useMainStore()
const { startDate,endDate } =storeToRefs(mainStore)

const startDateStr = computed(()=>formatDate(startDate.value,'MM.DD'))
const endDateStr = computed(()=>formatDate(endDate.value,'MM.DD'))
</script>

<template>
<div class="search-bar">
    <div class="time" @click="show = true">
      <div class="live">
        <span class="tip">住</span>
        <span class="data">{{ startDateStr }}</span>
      </div>
      <div class="leave">
        <span class="tip">离</span>
        <span class="data">{{ endDateStr }}</span>
      </div>
    </div>
    <div class="keyword">
      关键字/民宿名/位置
    </div>
    <div class="search-icon ">
      <van-icon name="search"  size="20"/>
    </div>
</div>
</template>

<style scoped>
.search-bar{
  display: flex;
  background-color: #f3f3f3;
  padding:10px 15px;
  border-radius: 10px;
  color:#666666;
}
.time .tip{
  font-size: 12px;
  margin-right: 5px;
  color:#999;
}
.keyword{
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.search-icon{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto
}
</style>