<script setup>
import useMainStore from "@/stores/modules/main.js";
import {storeToRefs} from "pinia";
import {computed, ref} from "vue";
import {formatDate, rangeDate} from "@/utils/formatDate.js";
import {useRouter} from "vue-router";
const router=useRouter()
const mainStore = useMainStore()
const { startDate,endDate } =storeToRefs(mainStore)
const startDateStr = computed(()=>formatDate(startDate.value,'MM.DD'))
const endDateStr = computed(()=>formatDate(endDate.value,'MM.DD'))

const show = ref(false)

const onConfirm = (value) => {
  const selectStart = value[0]
  const selectEnd = value[1]
  mainStore.startDate = selectStart
  mainStore.endDate = selectEnd
  show.value = false
}

const searchBtnClick=()=>{
  router.push({
    path:'/search',
    query:{
      startDate:startDate.value,
      endDate:endDate.value,
      // currentCity 可以使用pinia
    }
  })
}
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
      <input type="text" placeholder="关键字/民宿名/位置">
    </div>
    <div class="search-icon "  @click="searchBtnClick">
      <van-icon name="search"  size="20"/>
    </div>

    <div class="showTime">
      <van-calendar v-model:show="show" type="range" color="#ff9854" :round="false" @confirm="onConfirm"
                    :show-confirm="false">
      </van-calendar>
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
input{
  border-style: none;
  background-color: #f3f3f3;
}
.search-icon{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto
}
</style>