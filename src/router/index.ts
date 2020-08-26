import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)
console.log(process.env.BASE)
const base =
  process.env.NODE_ENV === 'production' ? 'como-se-escriben-los-numeros' : '/'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: base,
  routes,
})

export default router
