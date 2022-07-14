import { defineStore } from 'pinia'
import { asyncRoutes, basicRoutes } from '@/router/routes'

//是否有权限
function hasPermission(route, role) {
  const routeRole = route.meta?.role ? route.meta.role : []
  // console.log(routeRole or role)  ['admin'] or ['editor']
  if (!role.length || !routeRole.length) {
    return false
  }
  return role.some((item) => routeRole.includes(item))
}

//过滤路由
function filterAsyncRoutes(routes = [], role) {
  const ret = []
  routes.forEach((route) => {
    if (hasPermission(route, role)) {
      const curRoute = {
        ...route,
        children: [],
      }

      if (route.children && route.children.length) {
        curRoute.children = filterAsyncRoutes(route.children, role)
      } else {
        // eflect.deleteProperty 允许用于删除属性。它很像 delete operator ，但它是一个函数。
        Reflect.deleteProperty(curRoute, 'children')
      }
      ret.push(curRoute)
    }
  })
  return ret
}

export const usePermissionStore = defineStore('permission', {
  state() {
    return {
      accessRoutes: [],
    }
  },
  getters: {
    routes() {
      return basicRoutes.concat(this.accessRoutes)
    },
    menus() {
      return this.routes.filter((route) => route.name && !route.isHidden)
    },
  },
  actions: {
    generateRoutes(role = []) {
      //能通行的路由
      const accessRoutes = filterAsyncRoutes(asyncRoutes, role)
      this.accessRoutes = accessRoutes
      return accessRoutes
    },
  },
})
