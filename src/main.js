import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//导入axios配置
import axios from 'axios'
//导入全局css
import './assets/css/global.css'
//导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
    el: '#app',
    router,
    store, //挂载到vue实例中
    axios,
    render: h => h(App)
});
//axios全局配置
const instence = axios.create({
    //请求接口
    baseURL: "/api",
    //超时设置
    timeout: 8000,
    //请求头设置
    headers: {
        "accept": "application/json",
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', //解决同源策略，实现跨域访问
    }
});
// 在发送请求之前做些什么("请求拦截器")
instence.interceptors.request.use(config => {
    //假设接口需要对接token，可以用store保存token,在拦截器中设置到header中
    if (localStorage.getItem('Authorization')) {
        config.headers.Authorization = localStorage.getItem('Authorization');
    }
    return config;
}, error => {
    // 对请求错误做些什么
    //console.log(error)
});
//respone拦截器==>对响应做处理
instence.interceptors.response.use(
    response => { //成功请求到数据
        if (response.data.statusCode == 200) {
            return response.data.data
        } else {
            return "请求错误"
        }
    }
);
//将axios挂载到Vue的原型上
Vue.prototype.$http = instence
    //vue的生命周期,请求API的使用
    //created(){
    //    let that = this;
    //    that.$http.get("url?name="+"gaofei").then(data=>{
    //      console.log(data)
    //    })
    //  }