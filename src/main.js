import Vue from 'vue'
import App from './App.vue'
// 引入外部css
import '../node_modules/bootstrap-3.3.7-dist/css/bootstrap.css'
import './assets/css/index.css'
// 导入router模块
import router from './router.js'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
