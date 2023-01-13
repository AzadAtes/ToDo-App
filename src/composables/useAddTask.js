export function useAddTask() {
    function addTask (tasks, newTask) {
        tasks.push({task : newTask, complete: false, myDay: false, important: false})
    }

    function addTaskMyDay (tasks, newTask) {
        tasks.push({task : newTask, complete: false, myDay: true, important: false})
    }

    function addTaskImportant (tasks, newTask) {
        tasks.push({task : newTask, complete: false, myDay: false, important: true})
    }

    return { addTask, addTaskMyDay, addTaskImportant }
}