import { getLevelData } from '@gx-design-vue/pro-utils'
import dayjs from 'dayjs'

export const menuList: SystemMenuItem[] = getLevelData<SystemMenuItem>([
  {
    component: 'Page/one',
    createTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    menuId: 2,
    path: 'one',
    title: '页面一',
    name: 'PageOne',
    menuType: 'C',
    order: 1,
    parentId: 0,
    hidden: false
  }
]).map(item => ({ ...item, children: [] }))
