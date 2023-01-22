<script setup>
  import Tasks from '../components/tasks/Tasks.vue';

  const props = defineProps({
    tasks:Array,
    showSidebar: Boolean
  })

  const emit = defineEmits(['toggleSidebar'])
</script>

<template>
  <div>
    <Tasks :show-completed="showCompleted" :tasks="tasks" :my-tasks="tasks" :show-sidebar="showSidebar" :options="{ myDay: true }" @toggle-sidebar="emit('toggleSidebar')">
      <template v-slot:title> Tasks </template>
      <template v-slot:icon>
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22" />
        </svg>
      </template>
    </Tasks>
  </div>
</template>

