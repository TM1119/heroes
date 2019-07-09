// 路由模块
import Vue from 'vue'
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
// 导入HeroAdd组件
import HeroAdd  from './views/hero/HeroAdd.vue'
// 创建路由对象
const router = new VueRouter({
  // 选项
  // 当浏览器地址中的路由地址和router-link生成的a标签的href精确匹配的时候 添加类样式
  linkExactActiveClass :'active',
  // 配置路由规则
  routes:[
      {path:"/", redirect:"/hero"},
      {name:"hero", path:"/hero", component:HeroList},
      {name:'weapon',path:'/weapon', component:WeaponList},
      {name:'equip',path:'/equip', component:EquipList},
      {name:'heroadd', path:'/hero/heroadd',component:HeroAdd}
  ]
})
// 导出router对象
export default router