import '@/styles/index.scss'
import '@icon-park/vue-next/styles/index.css'
import 'uno.css'
import { install } from '@icon-park/vue-next/es/all'
import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import App from './App.vue'
import * as ELIcon from '@element-plus/icons-vue'
const app = createApp(App)
for (const iconname in ELIcon) {
  app.component(iconname, ELIcon[iconname])
}
install(app, 'i')
setupStore(app)
setupRouter(app)

app.mount('#app')
