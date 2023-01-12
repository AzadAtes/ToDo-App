export function useAddTask() {
    function addTask (arr, taskName) {
        arr.push({task : taskName, complete: false, myDay: false, important: false})
    }

    function addTaskMyDay (arr, taskName) {
        arr.push({task : taskName, complete: false, myDay: true, important: false})
    }

    function addTaskImportant (arr, taskName) {
        arr.push({task : taskName, complete: false, myDay: false, important: true})
    }

    return { addTask, addTaskMyDay, addTaskImportant }
}