import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "./assets/iconfont/iconfont.css"

import "./assets/scss/style.scss"
import router from './router'


import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// require styles
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import Card from "./components/card.vue"
Vue.component("m-card",Card)

import ListCard from "./components/ListCard.vue"
Vue.component("m-list-card",ListCard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')