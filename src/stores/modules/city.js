import { defineStore } from 'pinia'
import {getAllCity} from "@/service/index.js";

const useCityStore=defineStore('city',{
    state:()=>({
        allCities:{},

        //默认值，第一次加载
        currentCity:{ cityName:"广州" }
    }),
    actions:{
      async fetchAllCities(){
          const res = await getAllCity()
          // console.log(res.data)
          this.allCities = res.data
      }
    }
})


export default useCityStore