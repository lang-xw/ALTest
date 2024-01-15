import { defineStore } from 'pinia'
import {getCategories, getHotSug} from '@/service/index.js'


const useHomeStore = defineStore('home',{
    state:()=>({
        hotSugData:[],
        categories:{}
    }),
    actions:{
        async fetchHotSug(){
            const res = await getHotSug()
            // console.log(res,res.data)
            this.hotSugData=res.data
        },
        async fetchCategories(){
            const res = await getCategories()
            console.log(res,res.data)
            this.categories=res.data
}
    }
})


export default useHomeStore