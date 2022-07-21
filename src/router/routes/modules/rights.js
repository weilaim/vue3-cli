export default [
  {
    name: 'rights',
    path: '/rights',
    component: () => import('@/layout/index.vue'),
    redirect: '/rights/rights',
    meta: {
      // title: '商品管理',
      role: ['admin'],
    },
    children: [
      {
        name: 'rights',
        path: '/rights',
        component: () => import('@/views/rights/index.vue'),
        meta: {
          title: '权限管理',
          role: ['admin'],
        },
      },
      {
        name: 'roles',
        path: '/roles',
        component: () => import('@/views/rights/RolesView.vue'),
        meta: {
          title: '角色列表',
          role: ['admin'],
        },
      },
    ],
  },
]
