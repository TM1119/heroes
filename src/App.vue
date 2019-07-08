<template>
  <div id="app">
    <app-header></app-header>
  <div class="container-fluid">
    <div class="row">
     <!-- AppSilder -->
     <app-silder></app-silder>
     <!--主内容区域 -->
     <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script>

// 引入AppHeader模块
import AppHeader from "./components/AppHeader.vue"
//引入AppSilder模块
import AppSilder from './components/AppSilder.vue'
export default {
  name: "app",
  components: {
  AppHeader,
  AppSilder
  }
};
</script>

<style>
</style>
