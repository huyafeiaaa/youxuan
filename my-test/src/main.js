// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Axios from 'axios'
import $ from 'jquery'
import store from './store'
import VueLazyload from 'vue-lazyload'
Vue.prototype.$ajax = Axios
Vue.config.productionTip = false


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '加载失败',
  loading: '../build/shibai.gif',
  attempt: 2,
  listenEvents: [ 'scroll', 'mousewheel']
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store
})
