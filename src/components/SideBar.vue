<script setup>
  import { RouterLink } from 'vue-router'
  import iconSun from './icons/iconSun.vue';
  import iconMenu from './icons/iconMenu.vue';
  import iconStarOutline from './icons/iconStarOutline.vue'
  import iconCalendarOutline from './icons/iconCalendarOutline.vue';
  import iconHouseOutline from './icons/iconHouseOutline.vue';
  
  
  const emit = defineEmits(['toggleSidebar'])
</script>

<template>
    <div class="sideBar">
      <div class="sideBarTop">
        <div class="sideBarItem">
          <iconMenu id="toggleBtn" @click="emit('toggleSidebar')" />
        </div>
        <div class="sideBarItem">
          <iconSun />
          <router-link class="sideBarLink" to="/todo/myday">My Day</router-link>
        </div>
        <div class="sideBarItem">
          <iconStarOutline />
          <router-link class="sideBarLink" to="/todo/important">Important</router-link>
        </div>
        <div class="sideBarItem">
          <iconCalendarOutline />
          <router-link class="sideBarLink" to="/todo/planned">Planned</router-link>
        </div>
        <div class="sideBarItem">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22" />
          </svg>
          <router-link class="sideBarLink" to="/todo/tasks">Tasks</router-link>
        </div>
      </div>
      <div class="sideBarBottom">
        <div class="sideBarItem" id="sideBarNewList">
          <iconHouseOutline />
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
    color: #2564cf;
  }

</style>