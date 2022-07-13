import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../components/Menu.vue'
import Finish from '../components/Finish.vue'

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/Finish',
    name: 'Finish',
    component: Finish
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
