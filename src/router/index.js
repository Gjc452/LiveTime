import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Time from '../views/Time.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/time',
    component: Time

  }
]

const router = new VueRouter({
  routes
})

export default router
