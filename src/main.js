import Vue from 'vue'
import RadialMenu from 'custom-radial-menu/radial-menu-component.common.js'
import App from './App.vue'

Vue.component('radial-menu', RadialMenu)

new Vue({
  el: '#app',
  render: h => h(App)
})
