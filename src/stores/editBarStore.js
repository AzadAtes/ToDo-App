import { defineStore } from "pinia";
import { ref } from "vue";
import { useLocalStorage } from '../composables/useLocalStorage';

export const useEditBarStore = defineStore('editBar', () => {

    let visible = useLocalStorage('editbarVisible', false)
    let currTask = useLocalStorage('currTask', {})
    let searchStr = useLocalStorage('searchStr', '')

    const editTask = (task) => {
        visible.value = true
        currTask.value = task
    }

    return { currTask, visible, searchStr, editTask }
})
