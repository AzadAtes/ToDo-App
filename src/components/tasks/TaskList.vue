<script setup>
    import { ref } from 'vue';
    import Task from './Task.vue';
    import IconTriangleDown from '../icons/iconTriangleDown.vue';

    const props = defineProps({
        tasks: Array,
        canToggle: {type: Boolean,
                    default: false}
    })

    const emit = defineEmits(['makeImportant'])

    let visible = ref(!props.canToggle)
    let toggleVisibility = () => visible.value = !visible.value
</script>

<template>
    <div v-if="props.tasks.length">
        <div class="title" v-if="canToggle" :class="visible ? '' : 'toggled'">
            <button @click="toggleVisibility">
                <p><slot></slot></p>
                <IconTriangleDown />
            </button>
        </div>
        <div class="title" v-else>
            <p><slot></slot></p>
        </div>
        <ul id="taskList" v-if="visible">
            <Task class="taskListItem" v-for="task in props.tasks" @make-important="(task) => emit('makeImportant', task)" :task="task" :key="task._id" />
        </ul>
    </div>
</template>

<style scoped>
    .taskListItem  {
        display: flex;
        align-items: center;
        padding: 5px 0px 5px 0px;
        border-radius: 5px;
        background-color: white;
        border: 1px solid lightgrey;
        min-height: 40px;
    }
    .taskListItem:hover {
        cursor: pointer;
    }
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
    #taskList {
        display: flex;
        flex-direction: column;
        gap: 5px;
        list-style: none;
        padding-left: 0;
    }
</style>
