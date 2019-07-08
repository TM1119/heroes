import Vue from 'vue'
import App from './App.vue'
// 引入外部css
import '../node_modules/bootstrap-3.3.7-dist/css/bootstrap.css'
import './assets/css/index.css'
//导入vue-router
import VueRouter from 'vue-router'
注册VueRouter插件
Vue.use(VueRouter)

// 创建路由对象
const router = new VueRouter({
  // 配置路由规则
  routes:[

  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
