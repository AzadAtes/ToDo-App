export function useAddTask(tasks, {task = '', complete = false, important = false, myDay = false}) {
    if (task.replace(/\s+/g, '').length) {
        tasks.push({task : task, complete: complete, myDay: myDay, important: important})
    }
}