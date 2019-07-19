// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {store} from "./store/store"
import axios from "axios"
import './assets/font/iconfont.css'
// 冯慧引入省市级联动的插件
import VDistpicker from 'v-distpicker'
Vue.component('v-distpicker', VDistpicker);
import './assets/font_log/iconfont.css'  //字体图标


Vue.prototype.axios=axios

Vue.config.productionTip = false
Vue.use(ElementUI);
require("./mock")

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>',
  render: h => h(App),
  store
})
