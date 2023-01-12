<script setup>
  import { computed } from 'vue';
  import Tasks from '../components/Tasks.vue';
  import TaskAdd from '../components/TaskAdd.vue';
  import { useAddTask } from '../composables/useAddTask';

  let { addTaskMyDay } = useAddTask();

  const props = defineProps({
    tasks:Array
  })

  let myTasks = computed(() => props.tasks.filter((tasks) => tasks.myDay))
</script>

<template>
  <div>
    <h1>My Day</h1>
    <TaskAdd id="addTask" @add-task="addTaskMyDay(props.tasks, $event)" />
    <Tasks :tasks="myTasks" />
  </div>
</template>

<style scoped>
  #addTask {
    margin-bottom: 15px;
  }
</style>