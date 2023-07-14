import { createApp } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import '@/js/firebase'
import router from '@/router'
import store from '@/stores'
import App from '@/app.vue'
import '@/css/styles.css'

const auth = getAuth()

onAuthStateChanged(auth, user => {
  user ? router.push('/') : router.push('/login')
})

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
