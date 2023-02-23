<script setup>
  import iconSettingsOutline from './icons/iconSettingsOutline.vue';
</script>

<template>
    <div id="navBar">
      <div class="navBarItem">To Do</div>
      <input class="navBarItem disabledItem" id="searchBar" type="text" placeholder="Search.." disabled>
      <div class="navBarItem">
        <iconSettingsOutline id="settingsIcon" />
      </div>
    </div>
</template>

<style scoped>
  #navBar {
    position: fixed;
    inset: 0;
    width: 100%;
    height: var(--navBar-height);
    background-color:var(--navbar-color);
    color: white;
    border-bottom: var(--navBar-border) solid lightgrey;

    display: flex;
    align-items: center;
  }

  .navBarItem {
    min-width: max-content;
    flex: 1;
    padding: 0px 10px;
  }

  #navBar input {
    min-width: 50px;
    max-width: var(--navBar-searchBar-Width);
    flex-basis: var(--navBar-searchBar-Width);
    height: calc(var(--navBar-height) - 20px);
    border-radius: 5px;
    outline: none;
  }

  .navBarItem:last-child {
    text-align: right;
  }

  .navBarItem:last-child svg {
    position: relative;
    top: 2px;
    width: 28px;
  }

  #searchBar:disabled{
    background-color: white;
  }
  #searchBar, #settingsIcon{
    cursor: not-allowed;
  }
</style>