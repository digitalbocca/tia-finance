import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './../views/home.vue'
import Mensalidades from './../views/mensalidades.vue'
import Login from './../views/login.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mensalidades',
      name: 'mensalidades',
      component: Mensalidades
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
