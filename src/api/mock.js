import Mock from 'mockjs'
import HomeApi from "./mockServeData/home";

// 此文件 定义mock 请求拦截，模拟假数据，和mockServeData中的方法相一致
// 这里定义了接口拦截后返回怎样的mock数据

// 1.mock基础版
// Mock.mock('/api/home/gateData', function (){
//     console.log("mock拦截到首页请求")
//     return 1 // 返回的data
// })


// 2.mock 方法数据分离版
Mock.mock('/api/home/gateData', HomeApi.getFakeHomeData())

Mock.mock('/api/home/getMenu', HomeApi.getForgedMenu())