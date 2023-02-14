<script setup>
  import Tasks from '../components/tasks/Tasks.vue';
  import iconCalendarOutline from '../components/icons/iconCalendarOutline.vue';

  const props = defineProps({
    showSidebar: Boolean
  })

  const emit = defineEmits(['toggleSidebar'])
</script>

<template>
  <div>
    <Tasks :options="{ planned: true }" :show-sidebar="showSidebar"  @toggle-sidebar="emit('toggleSidebar')">
      <template v-slot:title> Planned </template>
      <template v-slot:icon>
        <iconCalendarOutline />
      </template>
    </Tasks>
  </div>
</template>