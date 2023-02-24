<script setup>
  import iconClose from './icons/iconClose.vue';
  import iconSettingsOutline from './icons/iconSettingsOutline.vue';
  import { useRouter } from 'vue-router'
  import { useEditBarStore } from '../stores/editBarStore';  

  const emit = defineEmits(['showSearch'])

  const router = useRouter()
  const editBarStore = useEditBarStore()

  const showSearch = () => {
    editBarStore.visible = false
    editBarStore.updateSearchResult()
    router.push({ name: 'search' })
  }

  const closeSearch = () => {
    editBarStore.searchStr = ''
    router.go(-1)
  }
</script>

<template>
    <div id="navBar">
      <div class="navBarItem">View Source Code</div>
      <div id="searchBar">
        <input class="navBarItem" type="text" placeholder="Search.." v-model="editBarStore.searchStr" @input="showSearch">
        <iconClose id="searchBarIcon" v-if="router.currentRoute.value.fullPath == '/todo/search'" @click="closeSearch" />
        <div id="searchBarIcon" v-else></div>
      </div>
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

  #searchBar{
    display: flex;
    align-items: center;
    min-width: 50px;
    max-width: var(--navBar-searchBar-Width);
    flex-basis: var(--navBar-searchBar-Width);
    height: calc(var(--navBar-height) - 15px);
    background-color: white;
    border-radius: 5px;
  }

  #searchBar input {
    max-width: 90%;
    height: 85%;
    border: 0;
    outline: none;
    border-radius: 5px;
  }

  .navBarItem:last-child {
    text-align: right;
  }

  .navBarItem:last-child svg {
    position: relative;
    top: 2px;
    width: 28px;
  }

  #searchBarIcon{
    padding-right: 5px;
    height: 15px !important;
    width: 15px !important;
    color: var(--accent-color);
    cursor: pointer;
  }
</style>