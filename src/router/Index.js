import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index/Index'
import recommend from '../pages/recommend/recommend'
import mine from '../pages/mine/mine'
import login from '../pages/login/login'
import person from '../pages/person/person'
import houseDetail from '../pages/houseDetail/houseDetail'
import mineDetails from '../pages/mineDetails/mineDetails'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: recommend
    },
    {
      path:'/mine',
      name:'Mine',
      component: mine
    },
    {
      path:'/login',
      name:'Login',
      component: login
    },
    {
      path:'/person',
      name:'Person',
      component: person
    },
    {
      path:'/houseDetail',
      name:'HouseDetail',
      component: houseDetail
    },
    {
      path:'/mineDetails',
      name:'MineDetails',
      component: mineDetails
    }
  ]
})
