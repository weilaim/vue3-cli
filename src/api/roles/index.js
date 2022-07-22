import { defAxios as request } from '@/utils/http'

export function roleList() {
  return request({
    url: '/roles',
  })
}

export function role(data) {
  return request({
    url: `/roles/${data.id}`,
  })
}
//删除角色
export function deleRole(id) {
  return request({
    url: `/roles/${id}`,
    method: 'delete',
  })
}

//编辑角色
export function editorRole(data) {
  return request({
    url: `/roles/${data.id}`,
    method: 'put',
    data,
  })
}
export function addRole(data) {
  return request({
    url: `roles`,
    method: 'post',
    data,
  })
}
