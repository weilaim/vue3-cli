import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { setupRouterGuard } from './guard'
import { basicRoutes as routes } from './routes'

export const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app) {
  autoload(router)
  app.use(router)
  setupRouterGuard(router)
}
