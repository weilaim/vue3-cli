import { createPageLoadingGuard } from './page-loading-guard'
import { createPageTitleGuard } from './page-title-guard'
import { createPermissionGuard } from './permission-guard'

export function setupRouterGuard(router) {
  createPermissionGuard(router)
  createPageLoadingGuard(router)
  createPageTitleGuard(router)
}
