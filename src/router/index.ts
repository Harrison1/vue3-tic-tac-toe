import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '/src/containers/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
