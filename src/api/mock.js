import Mock from 'mockjs'
import HomeApi from "./mockServeData/home";

// 定义mock 请求拦截
// 1.mock基础版
// Mock.mock('/api/home/gateData', function (){
//     console.log("mock拦截到首页请求")
//     return 1 // 返回的data
// })


// 2.mock 方法数据分离版
Mock.mock('/api/home/gateData', HomeApi.getHomeData())