<script setup>
  import { computed } from 'vue';
  import TaskList from './TaskList.vue';
  import TaskAdd from './TaskAdd.vue';
  import { useTasksStore } from '../../stores/tasksStore';
  import iconMenu from '../icons/iconMenu.vue';

  const props = defineProps({
    options: {
      type: Object,
      default: {}
    },
    showSidebar: Boolean,
  })
  
  const emit = defineEmits(['toggleSidebar'])

  const taskStore = useTasksStore()

  const makeImportant = (task) => {
    taskStore.updateTask(task, {important: !task.important})
  }

  // REFACTOR NEEDED. It works, but its messy. !!!
  let myTasks = computed(() => {
    let tasks = [...taskStore.tasks]
      if (Object.keys(props.options).length){
        tasks = tasks.filter((task) => {
          for (let i=0 ; i < Object.keys(props.options).length; i++){
            let currKey = Object.keys(props.options)[i]
            if ( currKey == "date" && props.options.date) {
              for (let j=0 ; j < Object.keys(props.options.date).length; j++) {
                let currInnerKey = Object.keys(props.options.date)[j]
                if (task.date[currInnerKey] !== props.options.date[currInnerKey]) {
                  return false
                } else {
                  return true
                }
              }
            } 
            if (task[currKey] == props.options[currKey]) {
              return true
            }
          }
          return false
        })
      }
      return tasks
  })
  
  let openTasks = computed(() => myTasks.value.filter((tasks) => !tasks.complete))
  let completedTasks = computed(() => myTasks.value.filter((tasks) => tasks.complete))
</script>

<template>
  <div>
    <div id="title">
      <iconMenu class="toggleBtn" v-if="!props.showSidebar" @click="emit('toggleSidebar')" />
      <slot name="icon" v-else></slot>
      <p><slot name="title"></slot></p>
    </div>
    <TaskAdd id="addTask" :options="props.options" />
    <TaskList :tasks="openTasks" @make-important="makeImportant" />
    <TaskList @make-important="makeImportant" :tasks="completedTasks" canToggle> complete </TaskList>
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
    padding-left:5px;
    padding-top: 2px;
  }

  .toggleBtn:hover {
    cursor: pointer;
  }
</style>