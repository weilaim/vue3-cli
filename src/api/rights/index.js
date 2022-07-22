import { defAxios as request } from '@/utils/http'

export function rightsList(type) {
  return request({
    url: `/rights/${type}`,
  })
}
