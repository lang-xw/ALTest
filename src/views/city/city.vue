<script setup>
  import { computed, ref } from "vue";
  import { useRouter } from "vue-router";
  import useCityStore from "@/stores/modules/city.js";
  import { storeToRefs } from "pinia";
  import CityGroup from "@/views/city/cpns/city-group.vue";


  const router=useRouter()

  //搜索栏数据
  const searchValue = ref('')
  //搜索栏取消按钮，实现回退
  const cancelClick=()=>{
    router.back()
  }

  //tag切换数据
  const tabActive = ref(0)


  //网络请求
  // 1.在组件内部进行网络请求
  // import AxRequest from '../../service/requset/index.js'
  // AxRequest.get({
  //   url:'/city/all'
  // }).then(res=>{
  //   console.log(res)
  // }).catch(err=>{
  //   console.log(err)
  // })

  //2.外部封装，import引入使用，需要更改时在对应的外部封装文件就可以修改
  // import { getAllCity }  from '@/service'
  // const allCity=ref()
  // getAllCity().then(res=>{
  //   console.log(res)
  //   allCity.value = res.data
  // })


  //3.使用pinia状态管理
  const cityStore = useCityStore()
  //触发网络请求
  cityStore.fetchAllCities()
  //进行解析,响应式数据
  const { allCities }= storeToRefs(cityStore)

  //获取选中标签的数据【国内 /  海外】
  const currentGroup =computed(()=>allCities.value[tabActive.value])
</script>

<template>
  <div class="city top-tabbar-hide">
    <!--顶部-->
    <div class="top">
      <!-- 1.搜索栏-->
      <div class="search">
        <van-search
            v-model="searchValue"
            show-action
            shape="round"
            placeholder="城市/区域/位置"
            @cancel="cancelClick"
        />
      </div>
      <!-- 2.切换tag-->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <!--
            1.网络请求数据，动态渲染 从allCity中
            一开始allCity的默认值是undefined,所以会报错
            ?. 语法：有值是会获取，没有值时不会获取
        -->
        <!--  <van-tab :title="allCity?.cityGroup?.title"></van-tab>-->
        <!--  <van-tab :title="allCity?.cityGroupOverSea?.title"></van-tab>-->

        <!-- 2.v-for循环allCity对象   -->
        <template v-for="(value,key,index) in allCities" :key="key ">
                                    <!-- name属性与tabActive
                                         在标签指定 name 属性的情况下，v-model:tabActive 的值为当前标签的 name
                                         这样就可以获取选中标签的数据【国内 /  海外】
                                    -->
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <div class="context">
        <!--  <city-group :group-data="currentGroup"/>-->
        <!--  这样进行切换时，currentGroup会重新赋值，组件重新渲染时间较长-->

        <!--用v-show来展示可以优化这个问题-->
      <template v-for="(value,key,index) in allCities">
        <city-group :group-data="value" v-show="tabActive === key"/>
      </template>
    </div>
  </div>
</template>

<style scoped>
    /*
      顶部固定，内容滚动
      1.设置top固定,缺点：滚动条位置不好
    .top{
      position: fixed;
      top:0;
      left: 0;
      right: 0;
    }
    .context{
      margin-top: 98px;
    }
    */
    .top{
      position:relative;
      z-index:9;
    }
    /*
      2.局部滚动，页面正常布局，让内容高度固定，
    */
    .context{
      height: calc(100vh - 98px);

      overflow-y: auto;
    }
</style>