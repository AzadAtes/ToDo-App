<script setup>
import iconImportant from '../icons/iconStar.vue'
import IconImportantOutline from '../icons/iconStarOutline.vue';

const props = defineProps({
    task: Object
})

const emit = defineEmits(['makeImportant'])


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
        <div @click="emit('makeImportant', props.task)">
            <iconImportant class="taskListItem" v-if="props.task.important" />
            <IconImportantOutline class="taskListItem" v-else />
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