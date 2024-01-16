import dayjs from 'dayjs'

//日期的处理，将new Date()  --->  MM月DD日
//format设置参数，默认样式  “MM月DD日”
export function formatDate(date,format='MM月DD日'){
    return dayjs(date).format(format)
}

//日期差值，共有几天
export function rangeDate(startDate,endDate){
    return dayjs(endDate).diff(startDate,'day')
}