import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import login from '@/components/login'
import bangdan from '@/components/bangdan'
import register from '@/components/register'
import fenlei from '@/components/fenlei'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/index',
    	component:index
    },
    {
    	path:'/login',
    	component:login
    },
    {
    	path:'/bangdan',
    	component:bangdan
    },
    {
    	path:'/register',
    	component:register
    },
    {
    	path:'/fenlei',
    	component:fenlei
    }
  ]
})
