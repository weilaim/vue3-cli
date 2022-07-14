export default [
  {
    name: 'orders',
    path: '/orders',
    component: () => import('@/layout/index.vue'),
    redirect: '/orders/orders',
    meta: {
      // title: '动态路由1222',
      role: ['admin'],
    },
    children: [
      {
        name: 'orders',
        path: '/orders',
        component: () => import('@/views/orders/index.vue'),
        meta: {
          title: '订单管理',
          role: ['admin'],
        },
      },
    ],
  },
]
