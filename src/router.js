import Vue from 'vue'
import Router from 'vue.router'
import home from './componets/home'
import contact from './componets/contact'

Vue.use(Router)

export default new Router ({

	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/contact',
			name: 'contact',
			component: contact
		}
	]


})