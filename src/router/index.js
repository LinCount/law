import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Index from '../components/base/index.vue'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Home,
        redirect: '/index',
        children: [
            { path: '/index', component: Index }
        ]
    }]
})