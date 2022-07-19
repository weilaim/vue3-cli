import dayjs from 'dayjs'
const filterTime = (val, format = 'YYYY-MM-DD') => {
  if (!isNulld(val)) {
    // val = parseInt(val) * 1000
    return dayjs.unix(val).format(format)
  } else {
    return '--'
  }
}

export const isNulld = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
}

// vue 的全局属性
// https://v3.cn.vuejs.org/guide/migration/filters.html#%E5%85%A8%E5%B1%80%E8%BF%87%E6%BB%A4%E5%99%A8
export default (app) => {
  app.config.globalProperties.$filters = {
    filterTime,
  }
}
