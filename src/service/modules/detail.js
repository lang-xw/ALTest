import AxRequest from '../requset/index.js'


export function getDetailInfo(houseId){
    return AxRequest.get({
        url:'/detail/infos',
        params:{
            houseId
        }
    })
}