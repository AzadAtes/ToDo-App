<script setup>
    import TaskList from '../components/tasks/TaskList.vue';
    import iconMenu from '../components/icons/iconMenu.vue';
    import { useTasksStore } from '../stores/tasksStore';
    import { useEditBarStore } from '../stores/editBarStore';  
    import { computed } from 'vue';

    const props = defineProps({
        showSidebar: Boolean,
        search: String
    })

    const emit = defineEmits(['toggleSidebar'])

    const taskStore = useTasksStore()
    const editBarStore = useEditBarStore()

    const makeImportant = (task) => {
        taskStore.updateTask(task, {important: !task.important})
    }

    let matchingTasks = computed(() => {
        if(props.search.length){
            return taskStore.tasks.filter((task) => task.task.includes(editBarStore.searchStr))
        } else {
            return []
        }
    })

</script>

<template>
    <div>
        <div id="title">
            <iconMenu class="toggleBtn" v-if="!props.showSidebar" @click="emit('toggleSidebar')" />
            <p>Searching for "{{ props.search }}"</p>
        </div>
        <TaskList :tasks="editBarStore.searchResult" @make-important="makeImportant" />
    </div>
</template>

<style scoped>
    #title {
        display: flex;
        align-items: center;
        gap: 15px;
        padding-left:5px;
        padding-top: 2px;
    }
    #title > p {
        color: var(--accent-color);
        font-size: large;
    }
    .toggleBtn:hover {
        cursor: pointer;
    }
</style>
