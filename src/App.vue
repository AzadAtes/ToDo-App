<script setup>
import { RouterView } from 'vue-router'
import navBar from './components/TheNavBar.vue';
import sideBar from './components/TheSideBar.vue';
</script>


<template>
  <header>
    <navBar />
  </header>
  <main>
    <sideBar class="sideBar" />
    <RouterView class="routerView" />
  </main>
</template>


<style scoped>
  main {
    height: 100vh;
    margin-top: calc(var(--navBar-height) + var(--navBar-border));
  }

  .routerView {
    margin: inherit;
    height: inherit;
    background-color: #faf9f8;
    margin-left: 290px;
    padding: 30px;
  }

  @media only screen and (max-width: 960px) {  /* sidebar width should be fit-content, therefore margin on routerview has to adapt properly */
    main .routerView {
      margin-left: 175px;
    }
  }
</style>
