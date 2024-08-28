import type { AppRouteModule } from '@gx-design-vue/pro-layout'

const dataSource: AppRouteModule = {
  path: '/two',
  name: 'PageTwo',
  component: () => import('@/views/Page/two.vue'),
  meta: {
    title: '页面2'
  }
}

export default dataSource
