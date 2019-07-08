import Vue from 'vue'
import App from './App.vue'
// 引入外部css
import '../node_modules/bootstrap-3.3.7-dist/css/bootstrap.css'
import './assets/css/index.css'
// 加载路由模块


new Vue({
  el:'#app',
  render: h => h(App),
}).$mount('#app')
