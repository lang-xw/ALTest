import {createRouter,createWebHashHistory} from 'vue-router'

const router=createRouter({
    history:createWebHashHistory(),
    //映射关系   path--->component
    routes:[
        {
            path:'',
            redirect:'/home'
        },
        {
            path:'/home',
            component:()=>import("../views/home/Home.vue")   //路由懒加载
        },
        {
            path:'/order',
            component:()=>import("../views/order/Order.vue")   //路由懒加载
        },
        {
            path:'/message',
            component:()=>import("../views/ message/meaasge.vue")   //路由懒加载
        },
        {
            path:'/favor',
            component:()=>import("../views/favor/favor.vue")   //路由懒加载
        }
    ]
})

export default router