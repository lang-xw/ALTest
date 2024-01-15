<script setup>

//获取当前位置
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city.js";
import { storeToRefs } from "pinia";
import { formatDate, rangeDate } from "@/utils/formatDate.js";
import { ref } from "vue";

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    res => {
      console.log("获取位置成功", res)
    }, err => {
      console.log("获取位置失败", err)
    }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  })
}
const router = useRouter()
const cityClick = () => {
  router.push('./city')
  //跳转到city页面，需要隐藏下面的额tabbar
  //1.useRoute()获取当前活跃的路由，通过设置meta属性，来v-if判断显示隐藏
  //2.通过CSS
}

//引入store，数据方便
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

//日期选择,动态显示
const nowDate = new Date()
const nextDate = new Date()
nextDate.setDate(nowDate.getDate() + 1)

const startDate = ref(formatDate(nowDate))
const endDate = ref(formatDate(nextDate))
//差值
const rangeDay = ref(rangeDate(nowDate, nextDate))
//日历组件用于选择日期或日期区间
const show = ref(false)

const onConfirm = (value) => {
  const selectStart = value[0]
  const selectEnd = value[1]
  //日期选择,格式化日期
  startDate.value = formatDate(selectStart)
  endDate.value = formatDate(selectEnd)
  //选择后的差值
  rangeDay.value = rangeDate(selectStart, selectEnd)
  //隐藏日历
  show.value = false
}

//使用store管理
import useHomeStore from "@/stores/modules/home.js";
const homeStore = useHomeStore()
const { hotSugData } = storeToRefs(homeStore)


//开始搜索路由跳转
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
  <!-- 位置信息 -->
  <div class="location">
    <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <van-icon name="location-o" class="icon" />
    </div>
  </div>

  <!-- 日期选择、时间计算 -->
  <div class="select-data section" @click="show = true">
    <div class="start">
      <span class="tip">入住</span>
      <!-- 今天-->
      <span class="data">{{ startDate }}</span>
    </div>
    <div class="mid">
      <span class="tip">共{{ rangeDay }}晚</span>
    </div>
    <div class="end">
      <span class="tip">离店</span>
      <!-- 明天-->
      <span class="data">{{ endDate }}</span>
    </div>
  </div>

  <!-- 日历组件用于选择日期或日期区间-->
  <div class="showTime">
    <van-calendar v-model:show="show" type="range" color="#ff9854" :round="false" @confirm="onConfirm"
      :show-confirm="false">
    </van-calendar>
  </div>


  <div class="secaion section">
    <div class="price tip">价格不限</div>
    <div class="people tip">人数不限</div>
  </div>
  <div class="keywords section">
    <span class="tip">关键字/民宿名/位置</span>
  </div>

<!--  热门建议-->
  <div class="hotSug">
    <template v-for="(item, index) in hotSugData" :key="index">
      <div class="hot-item">
        {{ item.tagText.text }}
      </div>
    </template>
  </div>

<!--  搜索按钮-->
  <div class="search section">
    <div class="btn" @click="searchBtnClick">开始搜索</div>
  </div>
</template>


<style scoped>
.showTime {
  /*
    显示日期选择时，满屏
     */
  --van-calendar-popup-height: 100% !important;
}

.location {
  display: flex;
  align-content: center;
  align-items: center;
  padding: 0 25px;
  height: 50px;
}

.city {
  flex: 1;
  color: #333333;
}

.text {
  font-size: 13px;
  color: #666666;
}

.icon {
  margin-left: 4px;
}

.section {
  display: flex;
  padding: 0 20px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
}

.select-data .start,
.end {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.end {
  margin-right: 40px;
}

.tip {
  font-size: 12px;
  color: #999;
  margin-bottom: 1px;
}

.people {
  margin-right: 50px;
}

.hotSug {
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px;
  margin: 8px 0;
}

.hot-item {
  font-size: 12px;
  color: #3f4954;
  background-color: #f1f3f5;
  padding: 4px 8px;
  margin: 3px;
  border-radius: 14px;
}
.search .btn{
  width: 342px;
  height:38px;
  max-height: 50px;
  font-size: 18px;
  font-weight: 500;
  line-height: 38px;
  text-align: center;
  border-radius: 20px;
  color:#fff;
  background-image: linear-gradient(90deg,#fa8c1d,#fcaf3f);
}
</style>