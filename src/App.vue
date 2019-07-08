<template>
  <div id="app">
    <!-- 头部组件 -->
    <app-header></app-header>
    <!-- 这是侧边栏 -->
    <div class="container-fluid">
      <div class="row">
        <app-sidebar></app-sidebar>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppSidebar from "./components/AppSidebar";

export default {
  name: "app",
  components: {
    AppHeader,
    AppSidebar
  }
};
</script>

<style>
</style>
