import { createApp } from 'vue'
import { store, key } from './store'
import ElementPlus from 'element-plus'
import router from "./router";
import App from './App.vue'

import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(store, key)

app.mount('#app')