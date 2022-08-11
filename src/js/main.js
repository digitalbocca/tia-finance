import { createApp } from 'vue'
import App from './../app.vue'
import router from './../router'
import './../css/styles.css'
import { initApp } from './firebase'

initApp()

const app = createApp(App)

app.use(router)
app.mount('#app')
