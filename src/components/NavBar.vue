<script setup>
  import iconSettingsOutline from './icons/iconSettingsOutline.vue';
  import { useRouter } from 'vue-router'
  import { useEditBarStore } from '../stores/editBarStore';  

  const emit = defineEmits(['showSearch'])

  const router = useRouter()
  const editBarStore = useEditBarStore()


  const showSearch = () => {
    editBarStore.visible = false
    router.push({ name: 'search' })
  }
</script>

<template>
    <div id="navBar">
      <div class="navBarItem">To Do</div>
      <input class="navBarItem disabledItem" id="searchBar" type="text" placeholder="Search.." v-model="editBarStore.searchStr" @input="showSearch">
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
</style>