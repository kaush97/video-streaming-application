import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Logs from '../components/Logs'
import Rooms from '../components/Rooms'
import Video from '../components/Video'
import AddRoom from '../components/AddRoom'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AddRoom',
    name: 'AddRoom',
    component: AddRoom
  },
  {
    path: '/Logs',
    name: 'Logs',
    component: Logs
  },
  {
    path: '/Rooms',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/Video',
    name: 'Video',
    component: Video
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
