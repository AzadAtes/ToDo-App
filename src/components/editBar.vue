<script setup>
    import iconImportant from '../components/icons/iconStar.vue'
    import IconImportantOutline from '../components/icons/iconStarOutline.vue';
    import iconSun from '../components/icons/iconSun.vue';
    import iconTrash from '../components/icons/iconTrash.vue';
    import { useEditBarStore } from '../stores/editBarStore';    
    import { useTasksStore } from '../stores/tasksStore';
    import { getCurrentInstance } from 'vue'

    const instance = getCurrentInstance()
    const editBarStore = useEditBarStore()
    const taskStore = useTasksStore()

    var prevVal = editBarStore.currTask.task

    const updatePrevVal = () => {
        prevVal = editBarStore.currTask.task
    }

    const changeTaskName = (val) => {
        if(val.replace(/\s+/g, '').length){
            editBarStore.currTask.task = val
            prevVal = val
        }
    }

    const updateTask = (val) => {
        if(val.replace(/\s+/g, '').length){
            editBarStore.currTask.task = val
            taskStore.updateTask(editBarStore.currTask)
        } else {
            editBarStore.currTask.task = prevVal
            instance?.proxy?.$forceUpdate();
        }
    }

    const toggleImportant = () => {
        editBarStore.currTask.important = !editBarStore.currTask.important
        taskStore.updateTask(editBarStore.currTask)
    }

    const toggleMyDay = () => {
        editBarStore.currTask.myDay = !editBarStore.currTask.myDay
        taskStore.updateTask(editBarStore.currTask)
    }

    const deleteTask = () => {
        editBarStore.visible = false
        taskStore.deleteTask(editBarStore.currTask)
    }
</script>

<template>
    <div class="sideBar">
        <div class="wrapper">
            <div class="itemWrapper" id="taskNameWrapper">
                <input class="checkboxInput" type="checkbox" disabled>
                <textarea class="textInput"
                    :value="editBarStore.currTask.task"
                    @focus="updatePrevVal()"
                    @input="changeTaskName($event.target.value)"
                    @blur= "updateTask($event.target.value)"
                />
            </div>
            <div class="itemWrapper colorAccent" v-if="editBarStore.currTask.important" @click="toggleImportant">
                <iconImportant />
                <p>Important</p>
            </div>
            <div class="itemWrapper" v-else @click="toggleImportant">
                <IconImportantOutline />
                <p>Make Important</p>
            </div>
            <div class="itemWrapper colorAccent" v-if="editBarStore.currTask.myDay" @click="toggleMyDay">
                <iconSun />
                <p>Added to myDay</p>
            </div>
            <div class="itemWrapper" v-else @click="toggleMyDay">
                <iconSun />
                <p>Add to myDay</p>
            </div>
            <div class="itemWrapper colorDanger" @click="deleteTask">
                <iconTrash/>
                <p>Delete Task</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        gap: 10px;
        margin-top: 10px;
    }
    .itemWrapper {
        width: 95%;
        display: flex;
        align-items: center;
        border-radius: 5px;
        border: 1px solid lightgrey;
        background-color:white;
        color: grey;
        cursor: pointer;
    }
    #taskNameWrapper{
        cursor: auto;
    }
    .itemWrapper > *{
        margin: 10px 0px 10px 10px;
    }
    .checkboxInput{
        align-self: flex-start;
        margin-top: 16px;
    }
    .textInput{
        flex: 1;
        outline: none;
        border-style: none;
        font-size: 11pt;
        overflow: hidden;
        resize: none;
        font-family: inherit;
        font-size: large ;
        height: 100px;
    }
    .sideBar {
        height: 100%;
        width: inherit;
        position: fixed;
        border-left: 1px solid lightgrey;
        background-color: var(--background-color);
        right: 0;
        top: calc(var(--navBar-height) + 1px);
    }
    .colorDanger{
        color: var(--danger-color);
    }
    .colorAccent{
        color: var(--accent-color);
    }
</style>