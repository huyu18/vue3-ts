<template>
  <div class="login-phone">
    <el-form
      label-width="80px"
      :rules="rules_phone"
      :model="phone"
      ref="formRef"
    >
      <el-form-item label="手机号" prop="tel">
        <el-input v-model="phone.tel" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code-content">
          <el-input class="code" v-model="phone.code" />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules_phone } from '../config/login'

export default defineComponent({
  setup() {
    const phone = reactive({
      name: '',
      password: ''
    })

    return {
      phone,
      rules_phone
    }
  }
})
</script>

<style lang="less" scoped>
.login-phone {
  .code-content {
    display: flex;
    justify-content: space-between;
    .code {
      margin-right: 15px;
    }
  }
}
</style>
