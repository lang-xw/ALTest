<script setup>
defineProps({
  homeListData:{
    type:Object,
    default:()=>({})
  }
})
</script>

<template>
  <div class="type-3">
    <div class="inner">
    <div class="background">
      <img :src="homeListData.image.url" alt="">
    </div>
    <div class="info">
      <div class="location">
        <van-icon name="location-o" />{{homeListData.location}}
      </div>
      <div class="name">{{homeListData.houseName}}</div>
      <div class="text">{{homeListData.summaryText}}</div>
      <div class="comment">
        <span class="price">￥{{homeListData.finalPrice}}</span>
        <!-- 判断是否有价格优惠       -->
        <span class="productPrice" v-if="!(homeListData.finalPrice==homeListData.productPrice)">￥{{homeListData.productPrice}}</span>
        <span class="priceTip" v-if="homeListData.priceTipBadge">
          {{homeListData.priceTipBadge.text}}
        </span>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.type-3{
  width:50%
}
.inner{
  position:relative;
  margin:6px 5px;
  background-color: #fff;
  border-radius: 6px;
  overflow:hidden;
}

.background img{
  width:100%
}

.info{
  //position:absolute;
  //bottom: 0;
  padding:8px 10px;
  //color:#fff;
}

.info .location,.text{
  font-size: 12px;
  color:#666666;
}
.info .name{
  color:#000;
  margin:5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /*文本有两行*/
  -webkit-box-orient: vertical;
}
.comment{
  display: flex;
  //justify-content: space-between;
  margin-top: 10px;
  text-align: center;
}
.comment .price{
  color:#ff9854
}
.comment .productPrice{
  font-size: 12px;
  color:#999999;
  text-decoration-line:line-through;
}
.comment .priceTip{
  font-size: 12px;
  color:#FFFFff;
  background-color:#FF6666;
  border-radius: 8px;
  margin-left: 4px;
  padding:2px
}

</style>