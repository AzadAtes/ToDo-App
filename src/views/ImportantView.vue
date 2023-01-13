<script setup>
  import { computed } from 'vue';
  import Tasks from '../components/Tasks.vue';
  import TaskAdd from '../components/TaskAdd.vue';
  import { useAddTask } from '../composables/useAddTask';

  const props = defineProps({
    tasks:Array
  })

  let myTasks = computed(() => props.tasks.filter((tasks) => tasks.important))
</script>

<template>
  <div>
    <h1>Important</h1>
    <TaskAdd id="addTask" @add-task="useAddTask(props.tasks, { task: $event, important: true})" />
    <Tasks :tasks="myTasks" />
  </div>
</template>

<style scoped>
  #addTask {
    margin-bottom: 15px;
  }
</style>