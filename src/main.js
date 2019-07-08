import Vue from 'vue'
import App from './App.vue'
// 引入外部css
import '../node_modules/bootstrap-3.3.7-dist/css/bootstrap.css'
import './assets/css/index.css'
//导入vue-router
import VueRouter from 'vue-router'
// 注册VueRouter插件
Vue.use(VueRouter)
// 导入HeroList组件
import HeroList from './views/hero/HeroList.vue'
//导入WeaponList组件
import WeaponList from './views/weapon/WeaponList.vue'
//导入EquipList组件
import EquipList from './views/equip/EquipList.vue'
// 创建路由对象
const router = new VueRouter({
  // 配置路由规则
  routes:[
      {path:"/", redirect:"/hero"},
      {name:"hero", path:"/hero", component:HeroList},
      {name:'weapon',path:'/weapon', component:WeaponList},
      {name:'equip',path:'/equip', component:EquipList}
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
