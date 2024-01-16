//对axios的封装，方便管理
import axios from 'axios'

import {BASEURL,TIMEOUT}  from './config.js'
import useMainStore from "@/stores/modules/main.js";

const mainStore=useMainStore()
class AxiosRequest{
    constructor(baseURL,timeout) {
        this.instance=axios.create({
            baseURL,
            timeout
        })
        //网络请求拦截器,设置loading
        // this.instance.interceptors.request.use(config=>{
        //     mainStore.isloading=true
        //     return config
        // },err=>{
        //     return err
        // })
        //网络响应拦截器，设置loading
        // this.instance.interceptors.response.use(res=>{
        //     mainStore.isloading=false
        //     return res
        // },err => {
        //     mainStore.isloading=false
        //     return err
        // })
    }
    request(config){
        mainStore.isloading=true
        return new Promise((resolve,reject)=>{
            this.instance.request(config).then(res=>{
                mainStore.isloading=false
                resolve(res.data)
            }).catch(err=>{
                mainStore.isloading=false
                reject(err)
            })
        })
    }

    get(config){
        return this.request({...config,method:'get'})
    }
    post(config){
        return this.request({...config,method:'post'})
    }
}


export default new AxiosRequest(BASEURL,TIMEOUT)