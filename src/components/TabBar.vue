<script setup>

</script>

<template>
  <div class="tabbar">
    <div class="tabbar-item">
      <img src="../assets/img/tabhome.png" alt="">
      <span class="text">首页</span>
    </div>
    <div class="tabbar-item">
      <img src="../assets/img/tabfavor.png" alt="">
      <span class="text">收藏</span>
    </div>
    <div class="tabbar-item">
      <img src="../assets/img/taborder.png" alt="">
      <span class="text">订单</span>
    </div>
    <div class="tabbar-item">
      <img src="../assets/img/tabmessage.png" alt="">
      <span class="text">消息</span>
    </div>
  </div>
</template>

<style scoped>
  .tabbar{
    position: fixed;
    bottom:0;
    right:0;
    left:0;
    height:50px;
    display:flex;

    padding-top: 3px;
    border-top:1px solid #f3f3f3;
  }
  .tabbar-item{
    flex:1;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .tabbar-item img{
    width:32px;
  }
  .tabbar-item .text{
    font-size: 12px;
    margin-top: 2px;
  }
</style>