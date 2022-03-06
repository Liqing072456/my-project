import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home'
import OurWorks from '@/views/OurWorks/OurWorks.vue'
import ColorfulLife from '@/views/ColorfulLife/ColorfulLife'
import GoodMembers from '@/views/GoodMembers/GoodMembers'
import JoinUs from '@/views/JoinUs/JoinUs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{show:true}
    },
    {
      path: '/ourworks',
      name: 'ourworks',
      component: OurWorks,
      meta:{show:false}
    },
    {
      path: '/colorfullife',
      name: 'colorfullife',
      component: ColorfulLife,
      meta:{show:true}
    },
    {
      path: '/goodmembers',
      name: 'goodmembers',
      component: GoodMembers,
      meta:{show:true}
    },
    {
      path: '/joinus',
      name: 'joinus',
      component: JoinUs,
      meta:{show:true}
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
