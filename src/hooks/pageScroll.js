import {onMounted, onUnmounted, ref} from "vue";
import _ from "lodash";

// //传入参数，参数为回调函数
// export default function pageScroll(callBack) {
//     //是否到达底部，默认为否
//     const scrollChange = () => {
//         const clientHeight = document.documentElement.clientHeight
//         //clientHeight 时，该属性将返回视口高度
//
//         const scrollTop = document.documentElement.scrollTop + 1
//         //一个元素的 scrollTop 值是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量
//
//         const scrollHeight = document.documentElement.scrollHeight
//         //Element.scrollHeight 只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容
//
//         if (clientHeight + scrollTop >= scrollHeight) {
//             console.log('滚动到底部了')
//             //更改为真
//             if (callBack) callBack()
//         }
//     }
//     onMounted(() => {
//         window.addEventListener('scroll', scrollChange)
//     })
//     onUnmounted(() => {
//         window.removeEventListener('scroll', scrollChange)
//     })
// }

// 没有参数
export default function pageScroll(){
    //是否到达底部，默认为否
    const isReachBottom = ref(false)
    const scrollTop=ref(0)
    const clientHeight=ref(0)
    const scrollHeight=ref(0)
    //节流
    const scrollChange=_.throttle(()=>{
        clientHeight.value=document.documentElement.clientHeight
        //clientHeight 时，该属性将返回视口高度

        scrollTop.value=document.documentElement.scrollTop+1
        //一个元素的 scrollTop 值是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量
        // console.log('正在滚动')
        scrollHeight.value=document.documentElement.scrollHeight
        //Element.scrollHeight 只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容

        if( scrollTop.value + clientHeight.value >= scrollHeight.value){
            console.log('滚动到底部了')
            //更改为真
            isReachBottom.value=true
        }
    },100)
    onMounted(()=>{
        window.addEventListener('scroll',scrollChange)
    })
    onUnmounted(()=>{
        window.removeEventListener('scroll',scrollChange)
    })

    return {
        isReachBottom,scrollTop,scrollHeight,clientHeight
    }
}