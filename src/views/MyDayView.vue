<script setup>
  import TaskList from '../components/TaskList.vue';
  import AddTask from '../components/AddTask.vue';
  import { ref, computed } from 'vue';

  let tasks = ref([]);
  let newTask = ref("test")
  let openTasks = computed(() => tasks.value.filter((tasks) => !tasks.complete))
  let completedTasks = computed(() => tasks.value.filter((tasks) => tasks.complete))

  function add(task) {
        tasks.value.push({task: task, complete:false});
        newTask = ""
    }
</script>

<template>
  <div>
    <h1>My Day</h1>
    <AddTask id="addToDo" v-model="newTask" @add-task="add" />
    <TaskList class="openTasks" :tasks="openTasks"></TaskList>
    <TaskList class="completedTasks" :canToggle="true" :tasks="completedTasks"> complete </TaskList>
  </div>
</template>

<style scoped>
  #addToDo {
    margin-bottom: 15px;
  }
</style>