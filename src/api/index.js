import http from '../utils/request'
// import axios from "axios";
// import Vue from 'vue'

// 请求首页数据，登录相关
// vue->mockjs 定义获取的方法
export const getHomeData = () => {
    // 返回一个promise对象
    return http.get('/home/gateData')
}