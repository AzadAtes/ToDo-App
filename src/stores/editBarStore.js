import { defineStore } from "pinia";
import { useTasksStore } from "./tasksStore";
import { useLocalStorage } from '../composables/useLocalStorage';

export const useEditBarStore = defineStore('editBar', () => {

    
const taskStore = useTasksStore()

    let visible = useLocalStorage('editbarVisible', false)
    let currTask = useLocalStorage('currTask', {})
    let searchStr = useLocalStorage('searchStr', '')
    let searchResult = useLocalStorage('searchResult' ,[])

    const editTask = (task) => {
        visible.value = true
        currTask.value = task
    }

    let updateSearchResult = () => {
        if(searchStr.value.length){
            searchResult.value = taskStore.tasks.filter((task) => task.task.includes(searchStr.value))
        } else {
            searchResult.value = []
        }
    }

    return { currTask, visible, searchStr, searchResult, updateSearchResult, editTask }
})
