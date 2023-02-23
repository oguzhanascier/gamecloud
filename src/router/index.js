import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ekle from '../views/OyunEkle.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: function () {
      return import( '../views/AboutView.vue')
    }
  },
  {
    path: '/ekle',
    name: 'ekle',
    component: Ekle
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
