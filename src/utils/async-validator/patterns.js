// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
export function isCardNo(card) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return reg.test(card)
}
// 是否为手机号码
export function isMobile(mobile) {
    return /^1\d{10}$/.test(mobile)
}
// 是否为空
export function isNonEmpty(value) {
    return value.length !== 0
}
// 纯英文
export function onlyEn(value) {
    return /^[A-Za-z]+$/.test(value)
}
// 纯中文
export function onlyZh(value) {
    return /^[\u4e00-\u9fa5]+$/.test(value)
}

// 是否为邮箱
export function isEmail(value) {
    return /(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/.test(value)
}

export default {
    isCardNo,
    isMobile,
    isNonEmpty,
    onlyEn,
    onlyZh,
    isEmail,
}
