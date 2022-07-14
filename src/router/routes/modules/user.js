export default [
  {
    name: 'users',
    path: '/users',
    component: () => import('@/layout/index.vue'),
    redirect: '/users/users',
    meta: {
      title: '动态路由1222',
      role: ['admin'],
    },
    children: [
      {
        name: 'users',
        path: '/users',
        component: () => import('@/views/users/index.vue'),
        meta: {
          title: '这里用户列表啊',
          role: ['admin'],
        },
      },
    ],
  },
]
