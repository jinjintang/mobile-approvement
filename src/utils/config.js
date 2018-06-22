// 配置
let dev = {
  safePaths: ['/login'],
  apiBaseURL: 'api',
  imgBaseUrl: 'http://192.168.191.1:8088/',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjJNd1kyYmpnNFdCYlhQMGoifQ',
  imgServer: ''
}

let pro = {
  safePaths: ['/login'],
  apiBaseURL: '/e-learning-app-api/index.php/api/mob/v1/api',
  imgBaseUrl: 'http://192.168.191.1:8088/',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjJNd1kyYmpnNFdCYlhQMGoifQ"',
  imgServer: ''
}

export default process.env.NODE_ENV === 'development' ? dev : pro
