export function useAddTask(tasks, task = '', { complete = false, important = false, myDay = false}) {
    console.log(tasks.task)
    if (task.replace(/\s+/g, '').length) {
        tasks.push({task : task, complete: complete, myDay: myDay, important: important, steps:[]})
        tasks[tasks.length-1].steps.push('step1')
    }
}