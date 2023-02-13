<script setup>
  import { ref, computed } from 'vue';
  import TaskList from './TaskList.vue';
  import TaskAdd from './TaskAdd.vue';
  import { useTasksStore } from '../../stores/tasksStore';
  import iconMenu from '../icons/iconMenu.vue';
  import iconDotsVertical from '../icons/iconDotsVertical.vue'

  const props = defineProps({
    options: {
      type: Object,
      default: {}
    },
    showSidebar: Boolean,
  })
  
  const emit = defineEmits(['toggleSidebar'])

  const taskStore = useTasksStore();
  taskStore.getTasks()

  const makeImportant = (task) => {
    taskStore.updateTask(task, {important: !task.important})
  }
  let myTasks = computed(() => {
    let tasks = taskStore.tasks
    for (let i=0 ; i < Object.keys(props.options).length; i++) {
      let currKey = Object.keys(props.options)[i]
      tasks = tasks.filter((task) => task[currKey] == props.options[currKey])
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
      <iconMenu class="toggleBtn" v-if="!props.showSidebar" @click="emit('toggleSidebar')" />
      <slot name="icon" class="toggleBtn" v-else></slot>
      <p><slot name="title"></slot></p>
      <iconDotsVertical @click="showCompleted = !showCompleted" />
    </div>
    <TaskAdd id="addTask" :options="props.options" />
    <TaskList :tasks="openTasks" @make-important="makeImportant" />
    <TaskList v-if="showCompleted" @make-important="makeImportant" :tasks="completedTasks" canToggle> complete </TaskList>
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