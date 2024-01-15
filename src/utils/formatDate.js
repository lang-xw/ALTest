import dayjs from 'dayjs'

//日期的处理，将new Date()  --->  MM月DD日
export function formatDate(date){
    return dayjs(date).format("MM月DD日")
}

//日期差值，共有几天
export function rangeDate(startDate,endDate){
    return dayjs(endDate).diff(startDate,'day')
}