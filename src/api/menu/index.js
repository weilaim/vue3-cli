import { defAxios as request } from '@/utils/http'

export function menuList() {
  return request({
    url: '/menus',
  })
}
