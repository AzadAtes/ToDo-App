<script setup>
  import { RouterLink } from 'vue-router'
  import iconSun from './icons/iconSun.vue';
  import iconMenu from './icons/iconMenu.vue';
  import iconStarOutline from './icons/iconStarOutline.vue'
  import iconCalendarOutline from './icons/iconCalendarOutline.vue';
  import iconHouseOutline from './icons/iconHouseOutline.vue';
  import iconPlus from './icons/iconPlus.vue';
  import { useEditBarStore } from '../stores/editBarStore';
    
  const emit = defineEmits(['toggleSidebar'])

  const editBarStore = useEditBarStore()
  const hideSideBar = () => {
    editBarStore.visible = false
  }
</script>

<template>
    <div class="sideBar">
      <div class="sideBarTop">
        <div class="sideBarItem">
          <iconMenu id="toggleBtn" @click="emit('toggleSidebar')" />
        </div>
        <div class="sideBarItem">
          <iconSun />
          <router-link class="sideBarLink" to="/todo/myday" @click="hideSideBar">My Day</router-link>
        </div>
        <div class="sideBarItem">
          <iconStarOutline />
          <router-link class="sideBarLink" to="/todo/important" @click="hideSideBar">Important</router-link>
        </div>
        <div class="sideBarItem">
          <iconCalendarOutline />
          <router-link class="sideBarLink" to="/todo/planned" @click="hideSideBar">Planned</router-link>
        </div>
        <div class="sideBarItem">
          <iconHouseOutline />
          <router-link class="sideBarLink" to="/todo/tasks" @click="hideSideBar">Tasks</router-link>
        </div>
      </div>
      <div class="sideBarBottom">
        <div class="sideBarItem" id="sideBarNewList">
          <iconPlus />
          <div class="sideBarLink">New List</div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.sideBar {
    height: 100%;
    width: inherit;
    position: fixed;
    border-right: 1px solid lightgrey;
    background-color:white;
  }

  .sideBarTop, .sideBarBottom {
    margin: 0px 10px 0px 10px;
  }

  .sideBarTop {
    border-bottom: 1px solid lightgrey;
  }

  .sideBarItem {
    padding: 0px 0px 30px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .sideBarItem:first-child {
    padding-top: 30px;
  }

  #toggleBtn:hover {
    cursor: pointer;
  }

  .sideBarLink {
    display: inline-block;
    text-decoration: none;
    color: black;
  }

  #sideBarNewList > * {
    color: var(--accent-color);
    cursor:not-allowed;
  }
</style>