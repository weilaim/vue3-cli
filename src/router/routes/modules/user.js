export default [
  {
    name: 'user',
    path: '/user',
    component: () => import('@/layout/index.vue'),
    redirect: '/user/list',
    meta: {
      title: '动态路由1222',
      role: ['admin'],
    },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/users/index.vue'),
      },
    ],
  },
]
