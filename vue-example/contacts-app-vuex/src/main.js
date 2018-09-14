import Vue from 'vue';
import App from './App.vue';
// import App from './AppAxiosTest.vue'
import axios from 'axios';
import ES6Promise from 'es6-promise';
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
ES6Promise.polyfill();

new Vue({
  render: h => h(App)
}).$mount('#app');
