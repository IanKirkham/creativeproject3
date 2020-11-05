import Vue from 'vue'
import App from './App.vue'
import router from './router'
import apidata from './api-data.js'

let data = {
  movies: apidata,
  searched: [],
  watchlist: [],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
