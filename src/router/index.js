import Vue from 'vue'
import Router from 'vue-router'

import Albums from '@/components/Albums'

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/albums/:id',
      name: 'Albums',
      component: Albums,
      props: true
    }
  ]
})
