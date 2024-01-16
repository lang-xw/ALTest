<script setup>
import {ref} from "vue";

const props = defineProps({
  swipeData:{
    type:[],
    default:()=>[]
  }
})
console.log(props.swipeData)

const swipeGroup={}

//相当于
// swipeGroup={
//     item.enumPictureCategory：[]
//      2:[],
//      4:[],
//      9:[],
// }
for(const item of props.swipeData){
  swipeGroup[item.enumPictureCategory] =[]
}

for(const item of props.swipeData){
  const valueArray = swipeGroup[item.enumPictureCategory]
  valueArray.push(item)
}
// console.log(swipeGroup)
// swipeGroup={      valueArray 就是对象里的 item.enumPictureCategory：[]
//     item.enumPictureCategory：[]
//      2:[item],
//      4:[item],
//      9:[item],
// }

const getCategoryIndex=(item)=>{
  const valueArray = swipeGroup[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item) + 1
}
const getName=(name)=>{
    return name.replace("】","").replace("【","")
}
</script>

<template>
  <div class="swipe">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="(item,index) in swipeData" :key="index">
        <img :src="item.url"  alt=""/>
      </van-swipe-item>
      <template #indicator="{ active, total }">
<!--        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>-->
        <div class="indicator">
          <template v-for="(value,key,index) in swipeGroup" :key="key">
            <span
                class="item"
                :class="{activeShow:swipeData[active]?.enumPictureCategory == key}"
            >
              <span class="text">{{ getName(value[0].title) }}</span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                  {{getCategoryIndex(swipeData[active])}}/{{value.length}}
              </span>
            </span>
          </template>

        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style scoped>
.swipe img{
  width:100%
}
.custom-indicator,.indicator{
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
}
.item{
  border-radius: 5px;
  padding:2px 4px
}
.activeShow{
  background-color: #fff;

}
</style>