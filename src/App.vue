<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
import editBar from './components/editBar.vue';

let showSidebar = ref(true)
let showEditBar = ref(true)
let toggleSidebar = () => { showSidebar.value = !showSidebar.value }
let toggleEditBar = () => { showEditBar.value = !showEditBar.value }

const date = new Date()
console.log(date.getDate(), date.getMonth() + 1, date.getFullYear());
</script>

<template>
  <header>
    <NavBar id="navBar" />
  </header>
  <main>
    <SideBar id="sideBar" v-if="showSidebar" @toggle-sidebar="toggleSidebar" />
    <RouterView id="routerView" :show-sidebar="showSidebar" @toggle-sidebar="toggleSidebar" :class="{ marginRight: showEditBar, marginLeft: showSidebar }" />
    <editBar id="editBar" v-if="showEditBar" @toggle-edit-bar="toggleEditBar"/>
  </main>
</template>

<style scoped>
  .marginLeft {
    margin-left: 290px !important;
  }
  
  .marginRight {
    margin-right: 290px !important;
  }

  #navBar, #editBar {
    z-index: 999;
  }

  main {
    position: relative;
    top: calc(var(--navBar-height) + var(--navBar-border));
  }

  #sideBar, #editBar {
    width: 290px !important;
  }

  #routerView {
    padding: 15px;
  }

  @media only screen and (max-width: 960px) {  /* "width" on ".sidebar" should be "fit-content", therefore "margin" on ".sideBar + *" has to adapt properly */
    #sideBar, #editBar {
      width: 150px !important;
    }
    .marginLeft {
      margin-left: 150px !important;
    }
    .marginRight {
      margin-right: 150px !important;
    }
  }
</style>
