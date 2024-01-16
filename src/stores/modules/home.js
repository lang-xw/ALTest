import { defineStore } from 'pinia'
import {getCategories, getHomeList, getHotSug} from '@/service/index.js'


const useHomeStore = defineStore('home',{
    state:()=>({
        hotSugData:[],
        categories:[],
        currentPage:1,
        homeList:[]
    }),
    actions:{
        async fetchHotSug(){
            const res = await getHotSug()
            // console.log(res,res.data)
            this.hotSugData=res.data
        },
        async fetchCategories(){
            const res = await getCategories()
            // console.log(res,res.data)
            this.categories=res.data
        },
        async fetchHomeList(){
            const res = await getHomeList(this.currentPage)
            // console.log(res,res.data)
            //分页数据请求
            this.homeList.push(...res.data)
            this.currentPage++
        }

    }
})


export default useHomeStore