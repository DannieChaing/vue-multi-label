import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'

import personal from '@/pages/personal'
import cpool from '@/pages/cpool'
import oldCpool from '@/pages/oldCpool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'personal',
      children:[
        {
          path: '/personal',
          name: 'personal',
          component: personal,
          meta: {
            title: '个人门户'
          }
        },
        {
          path: '/cpool',
          name: 'cpool',
          component: cpool,
          meta: {
            title: '新客户'
          }
        }
        ,
        {
          path: '/oldCpool',
          name: 'oldCpool',
          component: oldCpool,
          meta: {
            title: '老客户'
          }
        }
      ]
    }
  ]
})
