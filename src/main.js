/*
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-06-30 14:56:47
 * @Description: 
 */
import { createApp } from 'vue'
import './styles/index.css'
import router from "./router"
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
