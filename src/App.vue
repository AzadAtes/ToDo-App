<script setup>
import { RouterView } from 'vue-router'
import { ref, computed } from 'vue';
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
import { useStorage } from './composables/useStorage';

let tasks = useStorage('tasks', [], true)
let showSidebar = ref(true)
let sidebarVisible = computed(() => { return showSidebar.value })
</script>

<template>
  <header>
    <NavBar id="navBar" />
  </header>
  <main>
    <SideBar id="sideBar" v-if="showSidebar" @toggle-sidebar="showSidebar = !showSidebar" />
    <RouterView id="routerView" :tasks="tasks" :sidebar-visible="sidebarVisible" @toggle-sidebar="showSidebar = !showSidebar" />
  </main>
</template>

<style scoped>
  #navBar {
    z-index: 999;
  }

  main {
    position: relative;
    top: calc(var(--navBar-height) + var(--navBar-border));
  }

  #sideBar {
    width: 290px !important;
  }
  
  #sideBar + * {
    margin-left: 290px !important;
  }
  
  #routerView {
    padding: 15px;
  }

  @media only screen and (max-width: 960px) {  /* "width" on ".sidebar" should be "fit-content", therefore "margin" on ".sideBar + *" has to adapt properly */
    #sideBar {
      width: 175px !important;
    }
    #sideBar + * {
      margin-left: 175px !important;
    }
  }
</style>
