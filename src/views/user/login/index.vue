<script setup lang="ts">
import Logo from '@/assets/logo.png'
import { isDev } from '@/utils/env'
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue'
import { GlobalFooter } from '@gx-design-vue/pro-layout'
import { useProForm } from '@gx-design-vue/pro-provider'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface UserState {
  userName: string
  password: string
}

interface loginState {
  redirect: string
  dependencies: Record<string, any>
  devDependencies: Record<string, any>
}

const { pkg } = __APP_INFO__

const store = useStore()
const route = useRoute()
const router = useRouter()

const userForm = reactive({
  userName: isDev() ? 'admin' : '',
  password: isDev() ? 'gx.design' : '',
  autoLogin: true
} as UserState)

const userRules = reactive({
  userName: [ { required: true, message: '用户名是必填项！' } ],
  password: [ { required: true, message: '密码是必填项！' } ]
})

const { validate, validateInfos } = useProForm(userForm, userRules)

const state: loginState = reactive({
  redirect: '/',
  dependencies: pkg.dependencies,
  devDependencies: pkg.devDependencies
})

watch(
  () => route.fullPath,
  () => {
    state.redirect = (route.query?.redirect as string) || '/'
  },
  {
    deep: true,
    immediate: true
  }
)
const handleRoute = () => {
  return state.redirect === '/exception/404' || state.redirect === '/exception/403'
    ? '/'
    : state.redirect
}

const handleSubmit = async () => {
  validate().then(async () => {
    const response: any = await store.user.userLogin(toRaw(userForm))
    if (response) {
      router.push({ path: handleRoute() })
    }
  }).catch(() => {})
}
</script>

<template>
  <div :class="$style['login-container']">
    <div :class="$style.content">
      <div :class="$style.loginWrapper">
        <div :class="$style.loginBackground" />
        <div :class="$style.loginTop">
          <div :class="$style.loginHeader">
            <div :class="$style.loginLogo">
              <img :src="Logo" alt="">
            </div>
            <div :class="$style.loginTitle">
              GX Pro Admin
            </div>
          </div>
          <div :class="$style.loginDesc">
            GX Pro Admin 是一套基于vue（{{ state.dependencies.vue }}） + ant-design-vue（{{
              state.dependencies['ant-design-vue']
            }}） 开发的一套后台系统
          </div>
        </div>
        <div :class="$style.loginMain">
          <a-tabs centered>
            <a-tab-pane tab="账号密码登录" tab-key="user-pd">
              <a-form>
                <a-form-item v-bind="validateInfos.userName" :required="false">
                  <a-input
                    v-model:value="userForm.userName"
                    size="large"
                    allow-clear
                    placeholder="用户名: admin"
                  >
                    <template #prefix>
                      <UserOutlined />
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item v-bind="validateInfos.password" :required="false">
                  <a-input-password
                    v-model:value="userForm.password"
                    size="large"
                    allow-clear
                    placeholder="密码: gx.design"
                  >
                    <template #prefix>
                      <LockOutlined />
                    </template>
                  </a-input-password>
                </a-form-item>
                <a-form-item class="mt-24px">
                  <a-button size="large" type="primary" block @click="handleSubmit">登录</a-button>
                </a-form-item>
              </a-form>
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>
    <GlobalFooter />
  </div>
</template>

<style lang="less" module>
@import './style';
</style>
