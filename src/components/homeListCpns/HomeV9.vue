<script setup>
import {ref} from "vue";

const props=defineProps({
  homeListData:{
    type:Object,
    default:()=>({})
  }
})
const value= ref(Number(props.homeListData.commentScore))
</script>

<template>
  <div class="type-9">
    <div class="inner">
      <div class="background">
        <img :src="homeListData.image.url" alt="">
      </div>
      <div class="info">
        <div class="text">{{homeListData.summaryText}}</div>
        <div class="name">{{homeListData.houseName}}</div>
        <div class="comment">
          <van-rate v-model="value" allow-half readonly :size="15" color="#fff"/>
          <span class="price">￥{{homeListData.finalPrice}}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.type-9{
  width:50%
}
.inner{
  position:relative;
  margin:5px;
  background-color: #fff;
  border-radius: 6px;
  overflow:hidden;
}

.background img{
  width:100%
}

.info{
  position:absolute;
  bottom: 0;
  padding:8px 10px;
  color:#fff;
}

.info .text{
  font-size: 12px;
}
.info .name{
  margin:5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /*文本有两行*/
  -webkit-box-orient: vertical;
}
.comment{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>