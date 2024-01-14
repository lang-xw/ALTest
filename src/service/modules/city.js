import AxRequest from '../requset/index.js'


export function getAllCity(){
    return AxRequest.get({
        url:'/city/all'
    })
}
