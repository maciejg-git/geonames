import Vue from 'vue'
import VueRouter from 'vue-router'
import Geonames from '../components/Geonames.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/geonames',
    name: 'geonames',
    component: Geonames
  },
	{ 
		path: '/', 
		redirect: '/geonames' 
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active"
})

export default router
