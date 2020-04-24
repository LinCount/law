import Vue from 'vue'
import App from './App'
import router from './router'
//导入全局css
import './assets/css/global.css'
//导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})