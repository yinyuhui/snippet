// 常用实用 JS 函数

// 保留精确小数
export const getRoundNum = (num, decimal) =>
    Math.round(num * 10 ** decimal) / 10 ** decimal
getRoundNum(1.69, 1) // 1.7

// 生成随机 ID
export const getRandomId = (len) => Math.random().toString(36).substr(3, len)
getRandomId(10)

// 获取最大或最小值
export const getExtremum = (arr, type) => Math[type](...arr)
getExtremum([1, 2, 3], 'min')

// 生成范围内随机数
export const getRandomNum = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min
getRandomNum(1, 10)

// 判断数据类型  不传 type 时返回类型  否则返回布尔值
export const getDataType = (data, type) => {
    const dataType = Object.prototype.toString
        .call(data)
        .replace(/\[object /g, '')
        .replace(/\]/g, '')
        .toLowerCase()
    return type ? dataType === type : dataType
}

// 正则 手机号 2021-01-07
export const telReg = /^[1](([3][0-9])|([4][1,4-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,3,5,8,9]))\d{8}$/
