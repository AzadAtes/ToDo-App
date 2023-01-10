<script setup>
  import TaskList from '../components/TaskList.vue';
  import AddTask from '../components/AddTask.vue';
  import { ref, computed } from 'vue';

  let tasks = ref([]);
  let openTasks = computed(() => tasks.value.filter((tasks) => !tasks.complete))
  let completedTasks = computed(() => tasks.value.filter((tasks) => tasks.complete))

  const addTask = (task) => tasks.value.push({task: task, complete:false})
</script>

<template>
  <div>
    <h1>My Day</h1>
    <AddTask id="addTask" @add-task="addTask" />
    <TaskList class="openTasks" :tasks="openTasks"></TaskList>
    <TaskList class="completedTasks" :canToggle="true" :tasks="completedTasks"> complete </TaskList>
  </div>
</template>

<style scoped>
  #addTask {
    margin-bottom: 15px;
  }
</style>