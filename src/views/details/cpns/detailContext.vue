<script setup>
const props=defineProps({
  contextData:{
    type:Object,
    default:()=>({})
  }
})
</script>

<template>
    <div class="detail-context">
      <div class="houseName">
        {{contextData.houseName}}
      </div>
      <div class="tags">
        <template v-for="(item,index) in contextData.houseTags" :key="index">
          <span class="tags-name"
                v-if="item.tagText"
                :style="{color:item.tagText.color,background:item.tagText.background.color}"
          >
            {{item.tagText.text}}
          </span>
        </template>
      </div>
      <div class="comment item">
        <span class="overall">{{ contextData.commentBrief.overall}}</span>
        <span class="score-title ">{{contextData.commentBrief.scoreTitle}}</span>
        <span class="context">{{contextData.commentBrief.commentBrief}}</span>
        <span class="map ">{{contextData.commentBrief.totalCount}}条评论></span>
      </div>
      <div class="position item">
          <span class="address title">{{contextData.nearByPosition.address}}</span>
          <span class="map">地图·周边 ></span>
      </div>
    </div>
</template>

<style scoped>
.detail-context{
  padding: 20px 15px 20px 20px;
}
.houseName{
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
}
.tags-name{
  margin-right: 8px;
}
.tags{
  height: 36px;
  margin:10px 0;
  display: flex;

  align-items: center;
}
.item{
  background-color: #f0f2f6;
  height: 36px;
  margin:10px 0;
  display: flex;
  align-items: center;
}

.address{
  width: 220px;
}
.overall{
  font-size: 16px;
  margin-right:   5px;
}
.item .title{
  font-weight: 600;
}
.context{
  margin-left: 6px;
  font-size: 12px;
  color: #666666;
}
.map{
  color:#FF9854;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto
}
</style>