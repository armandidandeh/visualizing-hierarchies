import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:      '/',
      name:      'home',
      component: Home
    },
    {
      path:      '/intro',
      name:      'introduction',
      component: () => import(/* webpackChunkName: "intro" */ '@/views/intro.vue'),
      meta:      {
        title: 'Introductions'
      }
    },
    {
      path:      '/definition',
      name:      'definition',
      component: About,
      meta:      {
        title: 'Defining a Hierarchy'
      }
    },
    {
      path:      '/examples',
      name:      'examples',
      component: About,
      meta:      {
        title: 'Examples'
      }
    },
    {
      path:      '/about',
      name:      'about',
      component: About
    }

  ]
})
