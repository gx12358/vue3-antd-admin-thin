import dayjs from 'dayjs'
import type { MenuDataItem } from '@gx-design-vue/pro-layout'
import { getLevelData } from '@gx-design-vue/pro-utils'

export const menuList: MenuDataItem[] = getLevelData([
  {
    component: 'Page/one',
    createTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    menuId: 2,
    path: 'one',
    title: '页面一',
    name: 'PageOne',
    menuType: 'C',
    orderNum: '2',
    isFrame: '1',
    parentId: 0,
    target: '',
    hidden: false,
    outLinkType: 0
  }
]).map(item => ({ ...item, children: [] }))
