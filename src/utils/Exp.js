
export function number(str){
    var reg = /^[1-9][0-9]*$/
    return reg.test(str)
}

export function slot(str){
    var reg = /^0{1}(?:\.\d{1,6})?$/
    return reg.test(str)
}

// 手机号验证
export function isvalidPhone(str) {
    var  reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    return reg.test(str)
}