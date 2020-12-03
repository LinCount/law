import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Index from '../components/base/index.vue'
import Things from '../components/Things/things.vue'
import Exchange from '../components/Things/exchange.vue'
import ThingsDetail from '../components/Things/thingsDetail.vue'
import Withus from '../components/Withus/withus.vue';
import FindLaw from '../components/Findlaw/findLaw.vue';
import Learn from '../components/Learn/learn.vue';
import Login from '../components/base/login.vue'
import Register from '../components/base/register.vue'
import Forget from '../components/base/forget.vue'
import Error from '../components/error.vue'
import ConsultSream from '../components/ConsultStream/consultSream'
import NewDetail from '../components/Things/newDetail.vue'
import Pay from '../components/ConsultStream/pay'
import Order from '../components/order/order.vue'
Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: Home,
        redirect: '/index',
        children: [
            { path: '/index', component: Index },
            { path: '/things', component: Things },
            { path: '/thingsDetail', component: ThingsDetail },
            { path: '/withus', component: Withus },
            { path: '/findLaw', component: FindLaw },
            { path: '/learn', component: Learn },
            { path: '/login', component: Login },
            { path: '/register', component: Register },
            { path: '/forget', component: Forget },
            { path: '/error', component: Error },
            { path: '/consultSream', component: ConsultSream },
            { path: '/newDetail', component: NewDetail },
            { path: '/pay', component: Pay },
            { path: '/exchange', component: Exchange },
            { path: '/order', component: Order },
        ]
    }]
});
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next();
    } else {
        let token = localStorage.getItem('Authorization');

        if (token === 'null' || token === '') {
            next('/login');
        } else {
            next();
        }
    }
});
export default router;