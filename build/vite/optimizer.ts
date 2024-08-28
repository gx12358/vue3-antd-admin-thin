import type { GetManualChunk } from 'rollup'

const vendorLibs: { match: string[]; output: string }[] = [
  {
    match: ['ant-design-vue'],
    output: 'ant-design-vue',
  },
  {
    match: ['@gx-design-vue/pro-field'],
    output: 'pro-field',
  },
  {
    match: ['@gx-design-vue/pro-form'],
    output: 'pro-form',
  },
]

export const configManualChunk: GetManualChunk = (id: string) => {
  if (/[\\/]node_modules[\\/]/.test(id)) {
    const matchItem = vendorLibs.find((item) => {
      const reg = new RegExp(`[\\/]node_modules[\\/]_?(${item.match.join('|')})(.*)`, 'ig')
      return reg.test(id)
    })
    return matchItem ? matchItem.output : null
  }
}
