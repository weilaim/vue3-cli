export default [
  {
    name: 'reports',
    path: '/reports',
    component: () => import('@/layout/index.vue'),
    redirect: '/reports/reports',
    meta: {
      title: '数据统计',
      role: ['admin'],
    },
    children: [
      {
        name: 'reports',
        path: '/reports',
        component: () => import('@/views/reports/index.vue'),
        meta: {
          title: '数据统计',
          role: ['admin'],
        },
      },
    ],
  },
]
