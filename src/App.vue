<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
</script>


<template>
  <header>
    <NavBar id="navBar" />
  </header>
  <main>
    <SideBar id="sideBar" />
    <RouterView id="routerView"  />
  </main>
</template>


<style scoped>
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
