import HttpClient from './httpClient'

var token = localStorage.getItem('token')
 var area = localStorage.getItem('area')
       
export default {
  // 首页 banner图
  banner: (callback) => {
    HttpClient.get(
      `/course/banner/`,
      {
      },
      (ret, err) => {
        callback(ret, err)
      }
    )
  }, 
  courseapprove: (parameters, callback) => {
    HttpClient.post(
      `/course_approve/`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  }, 
   courseapprove2: (parameters, callback) => {
    HttpClient.put(
      `/course_approve/`+parameters.id,
      parameters.data,
      (ret, err) => {
        callback(ret, err)
      }
    )
  }, 
  // 课程大纲
  coursesutline: (parameters, callback) => {
    HttpClient.get(
      `/attendance/user/` + parameters.cid+`/`+token,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  }, 
   areas: (parameters, callback) => {
    HttpClient.get(
      `/area/` + parameters.id,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 讲师信息
  teachersInfo: (parameters, callback) => {
    HttpClient.get(
      `/teachers/` + parameters.id,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 课程详情
  getcourse: (parameters, callback) => {
   
    HttpClient.get(
      `/course/` + parameters.id,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  courses: (parameters, callback) => {
    HttpClient.post(
      `/course/` ,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
 courses2: (parameters, callback) => {
    HttpClient.put(
      `/course/`+parameters.Id ,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },

   coursesisbuy: (parameters, callback) => {
    HttpClient.get(
      `/trade_detail/isbuy/` +token+`/`+ parameters.id,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },

  // 课程购买接口
  payCourses: (parameters, callback) => {
    HttpClient.get(
      `/course/` + parameters.id,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 课程列表
  coursesItem: (parameters, callback) => {
    HttpClient.get(
      `/course/`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 我的课程 - 课程接口
  myCourses: (parameters, callback) => {
    HttpClient.get(
      `/trade_detail/user/`+token,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  }, 
  classs: (parameters, callback) => {
    HttpClient.get(
      `/classs/`+parameters.id,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 课程播放记录
  PlayStart:(parameters, callback) => {
    HttpClient.put(
      `/users/playState`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 分类列表
  listItem: (parameters, callback) => {
    HttpClient.get(
      `/course_category/` ,
     parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  }, 
rankItem: (parameters, callback) => {
    HttpClient.get(
      `/course_rank/` ,
     parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 分类详情
  listInfo: (parameters, callback) => {
    HttpClient.get(
      `/course_category/`+ parameters.id ,
      parameters, 
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 搜索-热搜词
  seachItem: (callback) => {
    HttpClient.get(
      `/hotsearch/`,
      {},
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
  // 搜索接口
  searchResults: (parameters, callback) => {
    HttpClient.get(
      `/search/`+ parameters.keyword ,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
    submitorder: (parameters, callback) => {
    HttpClient.post(
      `/trade_detail/`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },
   attend: (parameters, callback) => {
    HttpClient.post(
      `/attendance/`,
      parameters,
      (ret, err) => {
        callback(ret, err)
      }
    )
  },


}
