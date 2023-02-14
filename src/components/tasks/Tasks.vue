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
    filterLogic: {
      type: String,
      default: 'OR'
    },
    showSidebar: Boolean,
  })
  
  const emit = defineEmits(['toggleSidebar'])

  const taskStore = useTasksStore()
  taskStore.getTasks()

  const makeImportant = (task) => {
    taskStore.updateTask(task, {important: !task.important})
  }

  // REFACTOR NEEDED. It works, but its messy. !!!
  let myTasks = computed(() => {
    let tasks = [...taskStore.tasks]
    if (props.filterLogic === 'OR'){
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
    } else {
      for (let i=0 ; i < Object.keys(props.options).length; i++) {
        let currKey = Object.keys(props.options)[i]
        if ( currKey == "date" && props.options.date) {
          for (let j=0 ; j < Object.keys(props.options.date).length; j++) {
            currKey = Object.keys(props.options.date)[j]
            tasks = tasks.filter((task) => task.date[currKey] == props.options.date[currKey])
          }
        } else {
          tasks = tasks.filter((task) => task[currKey] == props.options[currKey])
        }
      }
      return tasks
    }
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