export default [
  {
    name: 'goods',
    path: '/goods',
    component: () => import('@/layout/index.vue'),
    redirect: '/goods/categories',
    meta: {
      title: '商品管理',
      role: ['admin'],
      icon: 'mdi:menu',
    },
    children: [
      {
        name: 'categories',
        path: '/categories',
        component: () => import('@/views/categories/index.vue'),
        meta: {
          title: '商品分类',
          role: ['admin'],
          icon: 'mdi:table',
        },
      },
    ],
  },
]
