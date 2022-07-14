import { useUserStore } from '@/store/modules/user'
import { usePermissionStore } from '@/store/modules/permission'
import { NOT_FOUND_ROUTE } from '@/router/routes'
import { getToken, removeToken } from '@/utils/token'
import { toLogin } from '@/utils/auth'
import { removeLStorageUser } from '../../utils/user'

//白名单
const WHITE_LIST = ['/login']

export function createPermissionGuard(router) {
  const userStore = useUserStore()
  const permissionStore = usePermissionStore()
  router.beforeEach(async (to, from, next) => {
    const token = getToken()
    if (token) {
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        if (userStore.userId) {
          // 已经拿到用户信息 TOD
          next()
        } else {
          //先执行一下init
          userStore.init()
          const accessRoutes = permissionStore.generateRoutes(userStore.role)

          accessRoutes.forEach((route) => {
            !router.hasRoute(route.name) && router.addRoute(route)
          })
          router.addRoute(NOT_FOUND_ROUTE)
          next({ ...to, replace: true })
        }
      }
    } else {
      if (WHITE_LIST.includes(to.path)) {
        next()
      } else {
        next({ path: '/login' })
      }
    }
  })
}
