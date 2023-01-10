<script setup>
  import TaskList from '../components/TaskList.vue';
  import AddTask from '../components/AddTask.vue';
  import { ref } from 'vue';

  let tasks = ref([]);
</script>

<template>
  <div>
    <h1>My Day</h1>
    <AddTask id="addToDo" :tasks="tasks" />
    <TaskList class="openTasks" :tasks="tasks.filter(tasks => !tasks.complete)"></TaskList>
    <TaskList class="completedTasks" :canToggle="true" :tasks="tasks.filter(tasks => tasks.complete)"> complete </TaskList>
  </div>
</template>

<style scoped>
  #addToDo {
    margin-bottom: 15px;
  }
</style>