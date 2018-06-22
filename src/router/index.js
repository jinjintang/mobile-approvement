import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import security from './../utils/security'
import localStore from './../utils/localStore'
import JsonUtils from './../utils/json'

import learingIndex from '@/module-index/index'


import login from '@/module-my/login'




import approvedetail from '@/module-index/approvedetail'
import coursedetail from '@/module-index/coursedetail'




import myIndex from '@/module-my/index'
import personalData from '@/module-my/personalData'

import register from '@/module-my/register'



Vue.use(Router)

// 注册路由
const router = new Router({
  routes: [
    
     
      {
      path: '/',                   // 首页
      name: 'login',
      component: login
    },
    
    {
      path: '/approvedetail/:classId',                   // 首页
      name: 'approvedetail',
      component: approvedetail
    },
        {
      path: '/coursedetail/:classId',                   // 首页
      name: 'coursedetail',
      component: coursedetail
    },
     
   
    {
      path: '/index',                   // 首页
      name: 'learingIndex1',
      component: learingIndex
    },
   
    {
      path: '/my',                      // 我的
      name: 'myIndex',
      component: myIndex
    },
   
    
    {
      path: '/personalData',       // 个人资料
      name: 'personalData',
      component: personalData,
    },
  
    {
      path: '/register',              // 登录
      name: 'register',
      component: register,
    },
    
  ]
})

// 路由权限控制
// router.beforeEach((to, from, next) => {
//   let user = store.state.mineStore.uid
//   if (!user) {
//     let tmp = localStore.getItem('mobUser', null)
//     user = tmp === null ? null : JsonUtils.stringToJson(tmp)
//     store.commit('save', user)
//   }
//   if (to.path === '/register'){
//     next()
//     return
//   }
//   if (security.chkLogin(user, to.path)) {
//     next()
//   } else {
//     next('/login')
//   }
// })

export default router
