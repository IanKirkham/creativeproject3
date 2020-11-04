import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Watchlist from '../views/Watchlist.vue'
import Movie from '../views/Movie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/watchlist',
    name: 'Watchlist',
    component: Watchlist
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
