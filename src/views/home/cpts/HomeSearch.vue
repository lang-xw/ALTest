<script setup>

//获取当前位置
import {useRouter} from "vue-router";

const positionClick=()=>{
  navigator.geolocation.getCurrentPosition(
      res=>{
        console.log("获取位置成功",res)
      },err=>{
        console.log("获取位置失败",err)
      },{
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      })
}
const router=useRouter()
const cityClick=()=>{
  router.push('./city')
  //跳转到city页面，需要隐藏下面的额tabbar
  //1.useRoute()获取当前活跃的路由，通过设置meta属性，来v-if判断显示隐藏
  //2.通过CSS
}
</script>

<template>
  <div class="location">
    <div class="city" @click="cityClick">广州</div>
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <van-icon name="location-o" class="icon" />
    </div>
  </div>
</template>

<style scoped>
  .location{
    display: flex;
    align-content: center;
    align-items: center;
    padding:0 20px;
    height: 50px;
  }
  .city{
    flex: 1;
    color: #333333;
  }
  .text{
    font-size: 13px;
    color: #666666;
  }

  .icon{
    margin-left: 4px;
  }
</style>