<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="sideBar">
      <div class="sideBarTop">
      <router-link class="sideBarItem" to="/todo/myday">My Day</router-link>
      <router-link class="sideBarItem" to="/todo/important">Important</router-link>
      <router-link class="sideBarItem" to="/todo/planned">Planned</router-link>
      <router-link class="sideBarItem" to="/todo/assignedtome">Assigned to me</router-link>
      <router-link class="sideBarItem" to="/todo/tasks">Tasks</router-link>
      </div>
      <div class="sideBarBottom">
        <div class="sideBarItem">New List</div>
      </div>
    </div>
</template>

<style scoped>
.sideBar {
    border-right: 1px solid lightgrey;
    background-color:white;
    height: inherit;
    width:290px;
    position: fixed;
    left: 0px;
  }
  
  .sideBarItem {
    display: block;
    padding: 0px 0px 30px 10px;
    text-decoration: none;
    color: black;
  }
  
  .sideBarItem:first-child {
    padding-top: 30px;
  }

  .sideBarTop {
    border-bottom: 1px solid lightgrey;
    margin: 0px 7% 0px 7%;
  }

  .sideBarBottom {
    margin: 0px 7% 0px 7%;
  }

  @media only screen and (max-width: 960px) {  /* sidebar width should be fit-content, therefore margin on routerview has to adapt properly */
    main .sideBar {
      width: 150px;
    }
  }
</style>