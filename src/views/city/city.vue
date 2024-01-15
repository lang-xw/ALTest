<script setup>
  import {ref} from "vue";
  import {useRouter} from "vue-router";
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
  import useCityStore from "@/stores/modules/city.js";
  import {storeToRefs} from "pinia";
  const cityStore = useCityStore()
  //触发网络请求
  cityStore.fetchAllCities()
  //进行解析,响应式
  const { allCities }= storeToRefs(cityStore)
</script>

<template>
  <div class="city top-tabbar-hide">
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
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>

  </div>
</template>

<style scoped>

</style>