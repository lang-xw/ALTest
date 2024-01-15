<script setup>
  import {computed} from "vue";
  import city from "@/stores/modules/city.js";
  import {useRouter} from "vue-router";
  import useCityStore from "@/stores/modules/city.js";

  const router =useRouter()
  const props = defineProps({
    groupData:{
      type:Object,
      default:()=>({})
    }
  })

  // index-list 	索引字符列表
  const indexList =computed(()=>{
    const list = props.groupData.cities.map( item => item.group )
    //在前面添加 # 表示热门索引
    list.unshift("#")
    return list
  })

  //选中城市
  const cityStore = useCityStore()
  const cityClick = (item) =>{
    //拿到点击的数据，用pinia进行管理
    cityStore.currentCity = item
    // console.log(item)

    //页面回退到上一级
    router.back()
  }
</script>

<template>
  <div class="city-group">
    <!-- index-list 	索引字符列表-->
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(item,index) in groupData.hotCities" :key="index">
          <div class="hot-city" @click="cityClick(item)">
            {{ item.cityName }}
          </div>
        </template>
      </div>

      <template v-for="(item,index) in groupData.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(cityItem,cityIndex) in item.cities">
          <div class="city">
            <van-cell :title="cityItem.cityName"  @click="cityClick(cityItem)"/>
          </div>
        </template>
      </template>
    </van-index-bar>

<!--    <template v-for="(item,index) in groupData.cities" :key="index">-->
<!--      <div class="group-item">-->
<!--        <h2 class="title">{{ item.group }}</h2>-->
<!--        <div class="city-list">-->
<!--          <template v-for="(cityItem,cityIndex) in item.cities">-->
<!--            <div class="city">-->
<!--              {{ cityItem.cityName }}-->
<!--            </div>-->
<!--          </template>-->
<!--        </div>-->
<!--      </div>-->
<!--    </template>-->
  </div>
</template>

<style scoped>
.list{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  margin: 10px 25px 10px 10px;
}
.hot-city{
  width:70px;
  height: 28px;
  font-size: 12px;
  color:#000;
  background-color: #fff4ec;
  border-radius: 14px;
  text-align: center;
  line-height: 28px;
  margin:6px 0;
}
</style>