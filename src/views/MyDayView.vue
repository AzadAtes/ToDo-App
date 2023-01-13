<script setup>
  import { computed } from 'vue';
  import Tasks from '../components/tasks/Tasks.vue';
  import TaskAdd from '../components/tasks/TaskAdd.vue';
  import { useAddTask } from '../composables/useAddTask';

  const props = defineProps({
    tasks:Array
  })

  let myTasks = computed(() => props.tasks.filter((tasks) => tasks.myDay))
</script>

<template>
  <div>
    <h1>My Day</h1>
    <TaskAdd id="addTask" @add-task="useAddTask(props.tasks, { task: $event, myDay: true})" />
    <Tasks :tasks="myTasks" />
  </div>
</template>

<style scoped>
  #addTask {
    margin-bottom: 15px;
  }
</style>