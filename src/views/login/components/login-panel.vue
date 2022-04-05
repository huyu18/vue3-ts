<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon class="icon"><avatar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon class="icon"><cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-verify">
      <el-checkbox v-model="isRememberPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button class="login-btn" type="primary" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Avatar, Cellphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    Avatar,
    Cellphone,
    LoginAccount,
    LoginPhone
  },

  setup() {
    const isRememberPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account')

    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isRememberPassword.value)
      } else {
        console.log('调用phoneRef的phoneLoginAction')
      }
    }

    return {
      isRememberPassword,
      accountRef,
      currentTab,
      phoneRef,
      handleLoginClick
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
  .icon {
    margin-right: 5px;
  }
  .custom-tabs-label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .account-verify {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
