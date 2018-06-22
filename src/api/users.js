import HttpClient from './httpClient'
var token = localStorage.getItem('token')
export default {
  // 登录接口
  login: (parameters, callback) => {
    HttpClient.post(
      `/users/login`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 注册接口
  register: (parameters, callback) => {
    HttpClient.put(
      `/suser/`+token,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
 validate: (parameters, callback) => {
    HttpClient.get(
      `/suser/`+parameters.USERNAME,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 退出接口
  logOut: ( callback) => {
    HttpClient.post(
      `/users/out`,
      {},
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  //我的-个人信息
  myMessage: ( callback) => {
    HttpClient.get(
      `/suser/`+token,
      {},
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 我的订单
  myOrder: (parameters, callback) => {
    HttpClient.get(
      `/trade_detail/`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },  
  approveItem: (parameters, callback) => {
    HttpClient.get(
      '/course/approve/'+localStorage.getItem('area')+'/'+parameters.key,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },  
   approveResult: (parameters, callback) => {
    HttpClient.put(
      '/course_approve/'+parameters.Aid,
      parameters.data,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },   
   approveResult2: (parameters, callback) => {
    HttpClient.post(
      '/course_approve/',
      parameters.data,
      (ret, err) => {
        callback(ret, err)
      }
    )
  }, 
   getUser: (parameters, callback) => {
    HttpClient.get(
      `/student/`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 短信验证码
  sendCode: (parameters, callback) => {
    HttpClient.post(
      `/system/telcode`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  }, 
  addUser: (parameters, callback) => {
    HttpClient.post(
      `/student/`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  }
}
