import { defineStore } from "pinia";
import { useStorage } from '../composables/useStorage';


export const useTasksStore = defineStore('tasks', () => {
  const tasks = useStorage('tasks', [])

  function getTasks() {
    return tasks
  }

  function addTask(task = '', { complete = false, important = false, myDay = false}) {
    if (task.replace(/\s+/g, '').length) {
        tasks.value.push({task : task, complete: complete, myDay: myDay, important: important, steps:[]})
        tasks.value[tasks.value.length-1].steps.push('step1')
    }
  }

  return { getTasks, addTask }
})
