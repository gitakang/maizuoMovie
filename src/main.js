// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import "./js/rem.js";
import "./css/main.scss";

import Vue from 'vue';
import App from './App'; 
import router from "./router/index.js"

//引入mint-Ui 实现滚动加载（懒加载） 和加载提示
import { InfiniteScroll, Toast } from 'mint-ui';
Vue.use(InfiniteScroll);
Vue.use(Toast);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
