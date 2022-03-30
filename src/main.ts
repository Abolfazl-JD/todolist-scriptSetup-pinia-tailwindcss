import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/index.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
})
