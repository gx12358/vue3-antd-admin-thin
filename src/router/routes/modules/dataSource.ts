export default [
  {
    path: '/page1',
    name: 'PageOne',
    component: () => import('@/views/Page/one.vue'),
    meta: {
      order: 0,
      iconFont: 'iconfont',
      icon: 'gx-gongzuotai',
      title: '页面一'
    }
  },
  {
    path: '/page2',
    name: 'PageTwo',
    component: () => import('@/views/Page/two.vue'),
    meta: {
      order: 1,
      iconFont: 'iconfont',
      icon: 'gx-gongzuotai',
      title: '页面二'
    }
  },
] as AppRouteModule[]
