<script setup>
  import { computed } from 'vue';
  import Tasks from '../components/tasks/Tasks.vue';
  import TaskAdd from '../components/tasks/TaskAdd.vue';
  import { useAddTask } from '../composables/useAddTask';

  const props = defineProps({
    tasks: Array,
    sidebarVisible: Boolean
  })
  
  const emit = defineEmits(['toggleSidebar'])

  let myTasks = computed(() => props.tasks.filter((tasks) => tasks.myDay))
</script>

<template>
  <div>
    <div id="title" style="padding-left:5px; padding-top: 2px;">
      <svg id="toggleBtn" v-if="!props.sidebarVisible" @click="emit('toggleSidebar')" style="width:24px;height:24px;" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
      <p>My Day</p>
    </div>
    <TaskAdd id="addTask" @add-task="useAddTask(props.tasks, { task: $event, myDay: true})" />
    <Tasks :tasks="myTasks" />
  </div>
</template>

<style scoped>
  #addTask {
    margin-bottom: 15px;
  }

  #title {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  #toggleBtn:hover {
    cursor: pointer;
  }
</style>