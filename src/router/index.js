import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Register from '@/components/Register';
import Provide from '@/components/Provide';
import Buy from '@/components/Buy';
import Information from '@/components/Information';
import Report from '@/components/Report';
import My from '@/components/My';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/index',
            component: Index
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/provide',
            name: 'Provide',
            component: Provide
        },
        {
            path: '/buy',
            name: 'Buy',
            component: Buy
        },
        {
            path: '/information',
            name: 'Information',
            component: Information
        },
        {
            path: '/report',
            name: 'Report',
            component: Report
        },
        {
            path: '/my',
            name: 'My',
            component: My
        }
    ]
})
