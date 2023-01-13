<script setup>
const props = defineProps({
    task: Object
})

let logTask = (task) => console.log(task)
</script>

<template>
    <li>
        <label class="checkboxWrapper">
            <input type="checkbox" v-model="props.task.complete" />
        </label>
        <p @click="logTask(task)">
            {{props.task.task}}
        </p>
        <div @click="props.task.important = !props.task.important">
            <svg v-if="props.task.important" class="taskListItem" style="width:24px;height:24px;" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
            <svg v-else class="taskListItem" style="width:24px;height:24px;" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
            </svg>
        </div>
    </li>
</template>

<style>
    .taskListItem  {
        display: flex;
        align-items: center;
        height: 45px;
        border-radius: 5px;
        background-color: white;
        border: 1px solid lightgrey;
    }

    .taskListItem:hover, .checkboxWrapper:hover, .checkboxWrapper input:hover {
        cursor: pointer;
    }

    .checkboxWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
    }

    .taskListItem p {
        flex: 1;
    }

    .taskListItem svg {
        margin-left: auto;
        margin-right: 10px;
        border: none;
    }
</style>