import { createApp } from 'vue'
import App from './../app.vue'
import router from './../router'
import './../css/styles.css'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth()

onAuthStateChanged(auth, user => {
  if (user) {
    router.push('/')
  } else {
    console.log('Indo para o login')
    router.push('/login')
  }
})

const app = createApp(App)

app.use(router)
app.mount('#app')
