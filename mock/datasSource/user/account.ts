import dayjs from 'dayjs'
import type { UserInfo } from '@gx-mock/config/user'
import { defaultUser } from '@gx-mock/config/user'
import { getMockRequest, getTokeUserInfo } from '@gx-mock/util/utils'

export default [
  getMockRequest<UserInfo | DefaultResult<null>, any>({
    url: '/user/queryUserDetail',
    method: 'get',
    callback: (_, token = '') => {
      if (token) {
        const tokenUserInfo = getTokeUserInfo(token)
        if (tokenUserInfo && tokenUserInfo?.userId) {
          return {
            ...defaultUser,
            user: {
              ...defaultUser.user,
              loginDate: dayjs().format('YYYY-MM-DD HH:mm:ss')
            }
          }
        }
      }

      return {
        code: 500,
        message: '用户信息获取失败'
      }
    }
  })
]
