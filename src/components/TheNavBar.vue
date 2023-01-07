<script setup></script>

<template>
    <div id="navBar">
      <div class="navBarItems">To Do</div>
      <input class="navBarItems" type="text" placeholder="Search..">
      <div class="navBarItems">
        <img src="./../assets/logo.svg" alt="">
      </div>
    </div>
</template>

<style scoped>
  #navBar {
    position: fixed;
    inset: 0;
    width: 100%;
    height: var(--navBar-height);

    background-color:#2564cf;
    color: white;
    border-bottom: var(--navBar-border) solid lightgrey;

    display: flex;
    align-items: center;
  }

  .navBarItems {
    min-width: max-content;
    flex: 1;
    padding: 0px 10px;
  }

  #navBar input {
    min-width: 50px;
    max-width: var(--navBar-searchBar-Width);
    flex-basis: var(--navBar-searchBar-Width);
    height: calc(var(--navBar-height) - 20px);
    padding: 0;
    border-radius: 5px;
  }

  .navBarItems:last-child {
    text-align: right;
  }

  .navBarItems:last-child img {
    position: relative;
    top: 2px;
    width: 28px;
  }
</style>