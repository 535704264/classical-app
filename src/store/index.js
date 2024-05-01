import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'

Vue.use(Vuex)


// 创建Vuex的实例， Vuex用于状态存储，核心是store
export default new Vuex.Store({
    modules: {
        tab
    }
})
