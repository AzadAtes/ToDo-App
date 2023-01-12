<script setup>
  import Tasks from '../components/Tasks.vue';
  import TaskAdd from '../components/TaskAdd.vue';
  import { useAddTask } from '../composables/useAddTask';

  let { addTask} = useAddTask();

  const props = defineProps({
    tasks:Array
  })
</script>

<template>
  <div>
    <h1>Tasks</h1>
    <TaskAdd id="addTask" @add-task="addTask(props.tasks, $event)" />
    <Tasks :tasks="props.tasks" />
  </div>
</template>

<style scoped>
  #addTask {
    margin-bottom: 15px;
  }
</style>