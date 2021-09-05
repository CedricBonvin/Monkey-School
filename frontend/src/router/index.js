import Vue from 'vue'
import VueRouter from 'vue-router'
import acceuil from '../views/acceuil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'acceuil',
    component: acceuil
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
