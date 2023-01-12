<script setup>
  import TaskList from '../components/TaskList.vue';
  import { computed } from 'vue';

  const props = defineProps({
    tasks:Array
  })

  let openTasks = computed(() => props.tasks.filter((tasks) => !tasks.complete))
  let completedTasks = computed(() => props.tasks.filter((tasks) => tasks.complete))
</script>

<template>
  <div>
    <TaskList :tasks="openTasks"></TaskList>
    <TaskList :tasks="completedTasks" canToggle> complete </TaskList>
  </div>
</template>

<style scoped>
</style>