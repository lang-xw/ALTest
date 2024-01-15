import AxRequest from '../requset/index.js'

//热门建议网络请求
export function getHotSug(){
    return AxRequest.get({
        url:'home/hotSuggests'
    })
}


export function getCategories(){
    return AxRequest.get({
        url:'home/categories'
    })
}
