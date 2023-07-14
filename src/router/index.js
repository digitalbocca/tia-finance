import { createRouter, createWebHashHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'

import Home from '@/views/home.vue'
import Mensalidades from '@/views/mensalidades.vue'
import Login from '@/views/login.vue'

const auth = getAuth()

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mensalidades/:client',
      name: 'mensalidades',
      component: Mensalidades,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  }
  if (auth.currentUser) {
    next()
  } else {
    next('/login')
  }
})

export default router
