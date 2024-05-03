import Mock from 'mockjs'

//  这里全是mock拦截后的假数据
export default {
    getFakeHomeData: () => {
        const data = {code:200,msg: "Welcome to home."}
        return data
    }
}