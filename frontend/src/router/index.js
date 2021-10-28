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
  },
  {
    path: '/livreDor',
    name: 'livreDor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cours" */ '../views/livre.vue')
  },
  {
    path: '/inscription',
    name: 'inscription',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cours" */ '../views/inscription.vue')
  },
  {
    path: '/inscription-validation',
    name: 'inscription-validation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cours" */ '../views/inscription-validation.vue')
  },
  {
    path: '/panier',
    name: 'panier',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cours" */ '../views/panier')
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cours" */ '../views/admin')
  },
  {
    path: '/paiement',
    name: 'paiement',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cours" */ '../views/paiement')
  },
  
  
]

const router = new VueRouter({
  mode: "history",
  scrollBehavior () {
    
      return { x: 0, y: 0 }
    
  },
  routes,
})


export default router
