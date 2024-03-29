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
            component:()=>import("@/views/message/meaasge.vue")   //路由懒加载
        },
        {
            path:'/favor',
            component:()=>import("../views/favor/favor.vue")   //路由懒加载
        },
        {
            path:'/city',
            component:()=>import("../views/city/city.vue"),   //路由懒加载
            meta:{
                HideTabbar:true
            }
        },
        {
            path:'/search',
            component:()=>import('../views/search/search.vue'),
            meta:{
                HideTabbar: true
            }
        },
        {
            path:'/detail/:id',//动态绑定每一个item
            component:()=>import('../views/details/detail.vue'),
            meta:{
                HideTabbar: true
            }
        }
    ]
})

export default router