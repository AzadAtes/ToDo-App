<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';

let showSidebar = ref(true)
let toggleSidebar = () => { showSidebar.value = !showSidebar.value }

const date = new Date()
console.log(date.getDate(), date.getMonth() + 1, date.getFullYear());
</script>

<template>
  <header>
    <NavBar id="navBar" />
  </header>
  <main>
    <SideBar id="sideBar" v-if="showSidebar" @toggle-sidebar="toggleSidebar" />
    <RouterView id="routerView" :show-sidebar="showSidebar" @toggle-sidebar="toggleSidebar" />
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
