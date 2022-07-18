import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { setupRouterGuard } from './guard'
import { basicRoutes as routes } from './routes'
import { asyncRoutes as asRoute } from './routes'

export const router = createRouter({
  history: createWebHistory('/'),
  routes,
  asRoute,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app) {
  app.use(router)
  setupRouterGuard(router)
}
