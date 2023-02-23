import { defineStore } from "pinia";
import { ref } from "vue";

export const useEditBarStore = defineStore('editBar', () => {

    let visible = ref(false)
    let currTask = ref()

    const editTask = (task) => {
        visible.value = true
        currTask.value = task
    }

    return { currTask, visible, editTask }
})
