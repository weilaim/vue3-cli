import { defAxios as request } from '@/utils/http'

export function roleList() {
  return request({
    url: '/roles',
  })
}

//删除角色
export function deleRole(id) {
  return request({
    url: `/roles/${id}`,
    method: 'delete',
  })
}
export function addRole(data) {
  return request({
    url: `roles`,
    method: 'post',
    data,
  })
}
