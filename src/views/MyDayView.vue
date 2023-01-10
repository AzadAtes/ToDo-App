<script setup>
  import ToDoList from '../components/ToDoList.vue';
  import AddToDo from '../components/AddToDo.vue';
  import { ref, computed } from 'vue';

  let tasks = ref([]);
</script>

<template>
  <div id="myDay">
    <h1>My Day</h1>
    <AddToDo id="addToDo" :tasks="tasks" />
    <ToDoList class="openTasks" :tasks="tasks.filter(tasks => !tasks.complete)"></ToDoList>
    <ToDoList class="completedTasks" :canToggle="true" :tasks="tasks.filter(tasks => tasks.complete)"> complete </ToDoList>
  </div>
</template>

<style scoped>
  #addToDo {
    margin-bottom: 15px;
  }
</style>