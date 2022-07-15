import '@/styles/index.scss'
import 'uno.css'

import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import App from './App.vue'
import * as ELIcon from '@element-plus/icons-vue'
const app = createApp(App)
for (const iconname in ELIcon) {
  app.component(iconname, ELIcon[iconname])
}
setupStore(app)
setupRouter(app)

app.mount('#app')
