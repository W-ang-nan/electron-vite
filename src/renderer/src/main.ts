import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from "pinia";
import lazyPlugin from 'vue3-lazy'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(lazyPlugin, {
  loading: new URL('./assets/OpticalDisk.png', import.meta.url).href, // 图片加载时默认图片
  error: new URL('./assets/OpticalDisk.png', import.meta.url).href// 图片加载失败时默认图片
})
app.use(createPinia());

app.use(router)
app.mount('#app')