import { GScrollbars } from '@gx-design-vue/scrollbar'
import { PageContainer } from '@gx-design-vue/pro-layout'
import GSpin from '@/components/GlobalLayout/Spin'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    GSpin: typeof GSpin
    GScrollbars: typeof GScrollbars
    GProPageContainer: typeof PageContainer
  }
}
