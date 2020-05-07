import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Index from '../components/base/index.vue'
import Things from '../components/Things/things.vue'
import ThingsDetail from '../components/Things/thingsDetail.vue'
import Withus from '../components/Withus/withus.vue';
import FindLaw from '../components/Findlaw/findLaw.vue';
import Learn from '../components/Learn/learn.vue';
Vue.use(Router)

export default new Router({
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
            { path: '/learn', component: Learn }
        ]
    }]
})