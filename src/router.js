import Vue from 'vue'
import Router from 'vue-router'
import Search from './views/search/Search.vue'
import Result from './views/result/Result.vue'
import Place from './views/place/Place.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '/place/:key',
      name: 'place',
      component: Place
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
