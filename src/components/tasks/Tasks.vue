<script setup>
  import { ref, computed } from 'vue';
  import TaskList from './TaskList.vue';
  import TaskAdd from './TaskAdd.vue';
  import { useTasksStore } from '../../stores/tasksStore';

  const props = defineProps({
    options: {
      type: Object,
      default: {}
    },
    showSidebar: Boolean,
  })
  
  const emit = defineEmits(['toggleSidebar'])

  let { getTasks } = useTasksStore();

  let myTasks = computed(() => {
    let tasks = getTasks().value
    for (let i=0 ; i < Object.keys(props.options).length; i++) {
      let currKey = Object.keys(props.options)[i]
      tasks = tasks.filter((tasks) => tasks[currKey] == props.options[currKey])
    }
    return tasks
  })

  let openTasks = computed(() => myTasks.value.filter((tasks) => !tasks.complete))
  let completedTasks = computed(() => myTasks.value.filter((tasks) => tasks.complete))

  let showCompleted = ref(true)
</script>

<template>
  <div>
    <div id="title" style="padding-left:5px; padding-top: 2px;">
      <svg class="toggleBtn" v-if="!props.showSidebar" @click="emit('toggleSidebar')" style="width:24px;height:24px;" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
      <slot name="icon" class="toggleBtn" v-else></slot>
      <p><slot name="title"></slot></p>
      <svg style="width:24px;height:24px" viewBox="0 0 24 24" @click="showCompleted = !showCompleted">
        <path fill="currentColor" d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
      </svg>
    </div>
    <TaskAdd id="addTask" :options="props.options" />
    <TaskList :tasks="openTasks"></TaskList>
    <TaskList v-if="showCompleted" :tasks="completedTasks" canToggle> complete </TaskList>
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

  .toggleBtn:hover {
    cursor: pointer;
  }
</style>