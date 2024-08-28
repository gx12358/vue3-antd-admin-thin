import type { App } from 'vue'

import { PageContainer } from '@gx-design-vue/pro-layout'

const gxProDesign = (app: App) => {
  app.component('g-pro-page-container', PageContainer)
}
export default gxProDesign
