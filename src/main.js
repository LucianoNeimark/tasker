import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Routes:

Vue.use(VueRouter)
Vue.use(BootstrapVue);
Vue.config.productionTip = false

const home = { template: '<div> home </div>'}
const routes = [
 	{ path: '/', component: home}
 ]

const router = new VueRouter({
	routes
})

new Vue({
  router
}).$mount('#app')
