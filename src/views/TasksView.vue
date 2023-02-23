<script setup>
  import Tasks from '../components/tasks/Tasks.vue';
  import iconHouseOutline from '../components/icons/iconHouseOutline.vue';

  const props = defineProps({
    showSidebar: Boolean
  })

  const emit = defineEmits(['toggleSidebar'])
</script>

<template>
  <div>
    <Tasks :show-sidebar="showSidebar" @toggle-sidebar="emit('toggleSidebar')">
      <template v-slot:title> Tasks </template>
      <template v-slot:icon>
        <iconHouseOutline />
      </template>
    </Tasks>
  </div>
</template>

