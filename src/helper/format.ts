export const stringFormatSpaceWrap = (value: string) => {
  return value?.replace(/\r\n/g, '').replace(/\n/g, '').replace(/\s/g, '')
}

export const stringFormatSpace = (value: string) => {
  return value?.replace(/^\s+|\s+$/g, '')
}

/**
 * 时间戳格式化
 * @param {Number|String} time 13位时间戳
 * @param {String} fmt 格式化模版
 * @return {String}
 * 月(M)、日(d)、小时(h)、24小时制(H)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 示例：
 * timeFormat(1446603656378, 'yyyy-MM-dd HH:mm:ss.S') ==> 2006-07-02 08:09:04.423
 * timeFormat(1446603656378, 'yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423 12小时制
 * timeFormat(1446603656378, 'yyyy-M-d h:m:s.S') ==> 2006-7-2 8:9:4.18
 */
export function timeFormat(time: number, fmt = 'yyyy-MM-dd HH:mm:ss') {
  const _time = new Date(time)
  const o: {[key: string]: any} = {
    'M+': _time.getMonth() + 1, // 月份
    'd+': _time.getDate(), // 日
    'h+': _time.getHours() % 12 === 0 ? 12 : _time.getHours() % 12, // 12小时制
    'H+': _time.getHours(), // 小时
    'm+': _time.getMinutes(), // 分
    's+': _time.getSeconds(), // 秒
    'q+': Math.floor((_time.getMonth() + 3) / 3), // 季度
    S: _time.getMilliseconds(), // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (_time.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return fmt
}
