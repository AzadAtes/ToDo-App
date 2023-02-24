<script setup>
  import { ref } from 'vue';
  import { RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue';
  import SideBar from './components/SideBar.vue';
  import editBar from './components/editBar.vue';
  import { useEditBarStore } from './stores/editBarStore';

  let showSidebar = ref(true)
  let toggleSidebar = () => { showSidebar.value = !showSidebar.value }

  const editBarStore = useEditBarStore()
  console.log(editBarStore.searchStr);

  const clearSearch = () => {
    editBarStore.searchStr = ''
  }
</script>

<template>
  <header>
    <NavBar id="navBar" :search-str="editBarStore.searchStr" />
  </header>
  <main>
    <SideBar id="sideBar" v-if="showSidebar" @toggle-sidebar="toggleSidebar" @clear-search="clearSearch" />
    <RouterView id="routerView" :show-sidebar="showSidebar" @toggle-sidebar="toggleSidebar" :class="{ marginRight: editBarStore.visible, marginLeft: showSidebar }" :search="editBarStore.searchStr" />
    <editBar id="editBar" v-if="editBarStore.visible" />
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
