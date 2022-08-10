import { createApp } from 'vue'
import App from './../app.vue'
import router from './../router'
import './../css/styles.css'

import { auth } from './firebase'

console.log(auth)

const app = createApp(App)

app.use(router)
app.mount('#app')
