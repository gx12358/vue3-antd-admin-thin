import mockjs from 'mockjs'

const { Random } = mockjs

const admin = [ 1, 2 ]

export interface RolesInfo {
  roleId: number;
  roleKey: string;
  roleName: string;
  status: string;
}

export interface UserDetails {
  roles: RolesInfo[];
  userId: number;
  roleIds: number[];
  userName: string;
  nickName: string;
  avatar: string;
  admin: boolean;
  address: string;
  signature: string;
  introduction: string;
  tags?: string;
  phone?: string;
  email?: string;
  levelName?: string;
  provinceCode?: string;
  cityCode?: string;
  districtCode?: string;
  loginDate?: string;
}

export interface UserInfo {
  roles: string[];
  permissions: string[];
  user: UserDetails;
}

export interface UserList {
  id: number;
  name: string;
}

export const accessTokens = {
  gx12358: 'gx-accessToken',
  admin: 'admin-accessToken',
  editor: 'editor-accessToken',
  no_editor: 'test-accessToken'
}

export const accounts = {
  admin: 'gx.design',
  gx12358: 'aa123456',
  editor: 'gx.design',
  no_editor: 'gx.design'
}

export const rolesInfo: RolesInfo[] = [
  {
    roleId: 1,
    roleKey: 'gx-admin',
    roleName: 'gx12358-超级管理员',
    status: '0'
  },
  {
    roleId: 2,
    roleKey: 'admin',
    roleName: '超级管理员',
    status: '0'
  },
  {
    roleId: 3,
    roleKey: 'editor',
    roleName: '编辑人员',
    status: '0'
  }
]

export const tokenAccount = {
  '1': accessTokens.gx12358,
  '2': accessTokens.admin,
  '3': accessTokens.editor,
  '4': accessTokens.no_editor
}

const rolesInfoAccount = {
  '1': rolesInfo.filter(item => [ 1 ].includes(item.roleId)),
  '2': rolesInfo.filter(item => [ 2 ].includes(item.roleId)),
  '3': rolesInfo.filter(item => [ 3 ].includes(item.roleId)),
  '4': rolesInfo.filter(item => [ 3 ].includes(item.roleId))
}

const nickNameAccount = {
  '1': 'gx12358',
  '2': 'admin',
  '3': 'editor',
  '4': 'no_editor'
}

export const defaultUser: UserInfo = {
  permissions: [ '*:*:*' ],
  roles: rolesInfoAccount[String(2)].map(item => item.roleKey),
  user: {
    userId: 1,
    admin: admin.includes(1),
    roles: rolesInfoAccount[String(1)],
    levelName: '前端开发工程师',
    roleIds: rolesInfoAccount[String(1)].map(item => item.roleId),
    nickName: nickNameAccount[String(1)],
    address: '安徽省合肥市瑶海区',
    provinceCode: '340000',
    cityCode: '340100',
    districtCode: '340102',
    email: 'gx12358@gmail.com',
    phone: '18811217623',
    introduction: Random.cparagraph(10, 15),
    avatar: 'https://ahtv-obs.obs.cn-north-4.myhuaweicloud.com/20211111162748.jpg',
    tags: Array.from({ length: Random.integer(4, 8) }).map(_ => Random.cword(2, 6)).join(),
    userName: Object.keys(accessTokens).find(el => tokenAccount[String(1)] === accessTokens[el])
  } as UserDetails
}
