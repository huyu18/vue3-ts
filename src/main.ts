import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import router from './router'
import store from './store'
import hyRequest from './services'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

interface dataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest.request<dataType>({
  url: '/home/multidata',
  method: 'GET',
  showLoading: false
}).then((res) => {
  console.log(res.data)
})
