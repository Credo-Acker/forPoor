import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import Vuex from 'vuex';

import headerIndex from './components/HeaderIndex';
import footerIndex from './components/FooterIndex';
import swiper from './components/Swiper';

Vue.use(Vuex);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.component('HeaderIndex', headerIndex);
Vue.component('FooterIndex', footerIndex);
Vue.component('VueSwiper', swiper);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
