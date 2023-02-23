import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ekle from '../views/OyunEkle.vue'
import OyunList from '../views/OyunList.vue'
import { authRef } from '@/firebase/config'


const authControl = (to, from, next) => {
  let user = authRef.currentUser

  if (!user) {
    next({ name: 'Home' })
  } else {
    next()
  }
}

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
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/ekle',
    name: 'ekle',
    component: Ekle
  },
  {
    path: '/oyunlar',
    name: 'oyunlar',
    component: OyunList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
