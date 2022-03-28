<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><avatar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone />
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

    const handleLoginClick = () => {
      accountRef.value?.loginAction()
    }

    return {
      isRememberPassword,
      accountRef,
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
