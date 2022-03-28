<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './components/login-panel.vue'

export default defineComponent({
  name: 'CMSLogin',

  components: {
    LoginPanel,
  },

  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
