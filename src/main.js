import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import axios from 'axios'
// 让所有vue实例都具有一个属性axios,给Vue构造函数的原型增加成员
Vue.prototype.axios= axios
// 引入外部css
import '../node_modules/bootstrap-3.3.7-dist/css/bootstrap.css'
import './assets/css/index.css'
// 导入router模块
import router from './router.js'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
