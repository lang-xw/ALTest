import { defineStore } from 'pinia'
import {getAllCity} from "@/service/index.js";

const useCityStore=defineStore('city',{
    state:()=>({
        allCities:{}
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