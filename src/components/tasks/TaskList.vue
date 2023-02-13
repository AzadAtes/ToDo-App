<script setup>
    import { ref } from 'vue';
    import task from './task.vue';
    import iconTriangleDown from '../icons/iconTriangleDown.vue';

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
                <iconTriangleDown />
            </button>
        </div>
        <div class="title" v-else>
            <p><slot></slot></p>
        </div>
        <ul id="taskList" v-if="visible">
            <task class="taskListItem" v-for="task in props.tasks" @make-important="emit('makeImportant', task)" :task="task" :key="task._id" />
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
    #taskList {
        display: flex;
        flex-direction: column;
        gap: 5px;
        list-style: none;
        padding-left: 0;
    }
</style>