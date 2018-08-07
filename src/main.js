import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import Vuex from 'vuex';
import md5 from 'md5';
import sha1 from 'sha1';
import qs from 'qs';

import headerIndex from './components/HeaderIndex';
import footerIndex from './components/FooterIndex';
import swiper from './components/Swiper';

// Vue.use(Vuex);
axios.defaults.withCredentials = true;

Vue.prototype.$http = axios;
Vue.prototype.$md5 = md5;
Vue.prototype.$sha1 = sha1;
Vue.prototype.qs = qs;
Vue.config.productionTip = false;

Vue.component('HeaderIndex', headerIndex);
Vue.component('FooterIndex', footerIndex);
Vue.component('VueSwiper', swiper);

// const store = new Vuex.Store({
//     state: {
//         src: "",
//         username: "",
//         token: window.sessionStorage.setItem('token', "")
//     },
//     mutations: {
//         writeSrc: (state, payload) => {
//             state.src = payload.data;
//             console.log(payload.data);
//         },
//         writeUsername: (state, payload) => {
//             state.username = payload.data;
//         },
//         Login: (state, payload) => {
//             //更改token的值
//             state.token = data.token;
//             window.sessionStorage.setItem('token', data.token);
//         },
//         Logout: (state) => {
//             //登出的时候要清除token
//             state.token = null;
//             window.sessionStorage.removeItem('token');
//         },
//         Username: (state, payload) => {
//             //把用户名、头像存起来
//             state.username = payload.username;
//             state.src = payload.src;
//             window.sessionStorage.setItem('username', data);
//             window.sessionStorage.setItem('src', payload.src);
//         }
//     },
//     action: {
//         UserLogin({ commit }, data) {
//             commit('Login', data);
//         },
//         UserLogout({ commit }) {
//             commit('Logout');
//         },
//         UserName({ commit }, data) {
//             commit('Username', data);
//         }
//     }
// });

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // store,
    render: h => h(App)
})
