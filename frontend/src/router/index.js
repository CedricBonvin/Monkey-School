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
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/contact.vue')
  },
  {
    path: '/cours',
    name: 'cours',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cours" */ '../views/cours.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  scrollBehavior () {
    
      return { x: 0, y: 0 }
    
  },
  routes,
})


export default router
