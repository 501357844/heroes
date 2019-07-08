import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./assets/css/index.css"


import axios from 'axios'
axios.defaults.baseURL = ' http://localhost:3000/'
Vue.prototype.axios = axios

import router from './router'


new Vue({
  el:'#app',
  render: h => h(App), 
  router,
})
