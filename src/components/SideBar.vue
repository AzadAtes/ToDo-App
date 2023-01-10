<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="sideBar">
      <div class="sideBarTop">
        <div class="sideBarItem">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </div>
        <div class="sideBarItem">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" />
          </svg>
          <router-link class="sideBarLink" to="/todo/myday">My Day</router-link>
        </div>
        <div class="sideBarItem">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
          </svg>
          <router-link class="sideBarLink" to="/todo/important">Important</router-link>
        </div>
        <div class="sideBarItem">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 11H9V13H7V11M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 5V7H5V5H19M5 19V9H19V19H5M11 15H13V17H11V15M15 15H17V17H15V15M15 11H17V13H15V11Z" />
          </svg>
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
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
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

  .sideBarLink {
    display: inline-block;
    text-decoration: none;
    color: black;
  }

  #sideBarNewList > * {
    color: #2564cf;
  }

</style>