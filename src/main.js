// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import axios from 'axios'
import './assets/base.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(MintUI)

Vue.config.productionTip = false

var openid='ovrWG1d6mOX0zelyK7Hy_M6LyiNM'
//localStorage.setItem('token',openid)
//var openid=localStorage.getItem('openid')

var img = localStorage.getItem('IMG')


let baseUrl = ''
//let headers = {'X-Requested-With': 'XMLHttpRequest'}

if (process.env.NODE_ENV === 'production') {
 baseUrl = 'http://127.0.0.1:8088/v1/'
}

else {
  //var temp_token="Bearer "+tmp_token;

   baseUrl = 'http://127.0.0.1:8088/v1/'
  

  //axios.defaults.headers.common['Authorization'] = temp_token;
}


// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//         if (localStorage.getItem('token')) {  // 通过vuex state获取当前的token是否存在
//             next();
//         }
//         else {
//             next({
//                 path: '/login',
//                 query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//             })
//         }
//     }
//     else {
//         next();
//     }
// })
const AXIOS = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
  //headers: headers
})
AXIOS.interceptors.request.use(
    config => {

        if (localStorage.getItem('token')) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// // http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         if (error.response) {
//             switch (error.response.status) {
//                 case 401:
//                     // 返回 401 清除token信息并跳转到登录页面
//                     store.commit(types.LOGOUT);
//                     router.replace({
//                         path: 'login',
//                         query: {redirect: router.currentRoute.fullPath}
//                     })
//             }
//         }
//         return Promise.reject(error.response.data)   // 返回接口返回的错误信息
//     });
const MsgBox = MintUI.MessageBox

Vue.prototype.$msgbox = MsgBox

Vue.prototype.$alert = MsgBox.alert

Vue.prototype.$confirm = MsgBox.confirm

Vue.prototype.$prompt = MsgBox.prompt

Vue.prototype.$ax = AXIOS;
Vue.prototype.$openid = openid;
Vue.prototype.$IMG = img;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
