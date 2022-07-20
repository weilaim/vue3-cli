import { defAxios as request } from '@/utils/http'

export function getUsers(params = {}) {
  return request({
    url: '/users',
    params,
  })
}

//添加用户
export function addUser(data) {
  return request({
    url: '/users',
    method: 'POST',
    data,
  })
}
//更改用户状态
export function changeUserState(uid, type) {
  return request({
    url: `/users/${uid}/state/${type}`,
    method: 'put',
  })
}
export function getUser(id) {
  if (id) {
    return request({
      url: `/users/${id}`,
      method: 'get',
    })
  }
  return request({
    url: '/user',
    method: 'get',
  })
}

export function saveUser(data = {}, id) {
  if (id) {
    return request({
      url: '/user',
      method: 'put',
      data,
    })
  }

  return request({
    url: `/user/${id}`,
    method: 'put',
    data,
  })
}
