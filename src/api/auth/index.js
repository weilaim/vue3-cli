import { defAxios as request } from '@/utils/http'

export const login = (data) => {
  return request({
    url: '/login',
    method: 'POST',
    data,
  })
}

export const refreshToken = () => {
  return request({
    url: '/auth/refreshToken',
    method: 'post',
  })
}
