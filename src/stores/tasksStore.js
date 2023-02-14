import { defineStore } from "pinia";
import { ref } from "vue";

export const useTasksStore = defineStore('tasks', () => {

  const tasks = ref([])

  const getTasks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:4444/api/v1/tasks')
      const data = await response.json()
      tasks.value = data.tasks
    } catch (error) {
      alert(`Could not get tasks.\n${error}`)
    }
  }

  const addTask = async (task, { complete = false, important = false, myDay = false, planned = false, date = { day: null, month: null, year: null }}) => {

    if (!task.replace(/\s+/g, '').length) {
      return
    }

    const newTask = {"task" : task, "complete": complete, "myDay": myDay, "important": important, "planned": planned, "date": date}

    if(newTask.date.day != null && newTask.date.month != null && newTask.date.year != null){
      newTask.planned = true
    }
    
    tasks.value.push(newTask)
    
    try {
      const response = await fetch('http://127.0.0.1:4444/api/v1/tasks', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
      })
      const data = await response.json()
      newTask._id = data.task._id
    } catch (error) {
      alert(`Could not add task "${newTask.task}".\n${error}`)
      tasks.value.splice(tasks.value.indexOf(newTask),1)
    }
  }

  const updateTask = async (task, options = {}) => {

    let taskCopy = JSON.parse(JSON.stringify(task))

    for (let i=0 ; i < Object.keys(options).length; i++) {
      let currKey = Object.keys(options)[i]
      task[currKey] = options[currKey]
    }
    try {
      await fetch(`http://127.0.0.1:4444/api/v1/tasks/${task._id}`, {
        method: 'PATCH',
        headers: {  
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })
    } catch (error) {
      alert(`Could not update task "${task.task}".\n${error}`)
      Object.assign(task, taskCopy)
    }
  }

  const deleteTask = async (task) => {
    const index = tasks.value.indexOf(task)
    delete tasks.value[index]
    try {
      await fetch(`http://127.0.0.1:4444/api/v1/tasks/${task._id}`, {
        method: 'DELETE',
        headers: {  
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      tasks.value.splice(index,1)
    } catch (error) {
      alert(`Could not delete task "${task.task}".\n${error}`)
      tasks.value[index] = task
    }
  }

  return { tasks, addTask, getTasks, updateTask, deleteTask }
})
