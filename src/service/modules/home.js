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

export function getHomeList(currentPage){
    return AxRequest.get({
        url:'home/houselist',
        params:{
            //第几页数据，有较多数据时，按页请求数据，
            page:currentPage
        }
    })
}