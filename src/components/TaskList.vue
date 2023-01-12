<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        tasks: Array,
        canToggle: {type: Boolean,
                    default: false}
    })

    let visible = ref(!props.canToggle)
    let toggleVisibility = () => visible.value = !visible.value
    let logTask = (task) => console.log(task)
</script>

<template>
    <div v-if="props.tasks.length">
        <div class="title" v-if="canToggle" :class="visible ? '' : 'toggled'">
            <button @click="toggleVisibility">
                <p><slot></slot></p>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M8 9H16L12 16" />
                </svg>
            </button>
        </div>
        <div class="title" v-else>
            <p><slot></slot></p>
        </div>
        <ul class="taskList" v-if="visible">
            <li class="taskListItem" v-for="task in props.tasks" :key="props.tasks">
                <label class="checkboxWrapper">
                    <input type="checkbox" v-model="task.complete" />
                </label>
                <p @click="logTask(task)">
                    {{task.task}}
                </p>
                <svg class="taskListItem" style="width:24px;height:24px;" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
                </svg>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .toggled {
        top: -20px !important;
    }

    .title {    
        display: flex;
        align-items: center;
        position: relative;
        left: 5px;
        top: 20px;

    }

    .title button {
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        border: none;
        background: none;
    }
    .title p:empty{
        display: none;
    }
    .taskList {
        display: flex;
        flex-direction: column;
        gap: 5px;
        list-style: none;
        padding-left: 0;
    }

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