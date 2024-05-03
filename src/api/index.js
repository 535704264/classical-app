import http from '../utils/request'
// import axios from "axios";
// import Vue from 'vue'

// 请求首页数据，登录相关, 这里的export都是后端真实的接口，后端真实的请求接口地址
// 这里的export和.vue文件的方法相一致
// vue->mockjs 定义获取的方法 
// http请求时配置了自动加上前缀/api
export const getHomeData = () => {
    // 返回一个promise对象
    return http.get('/home/gateData')
}

export const getMenu = () => {
    return http.get('/user/getMenu')
}