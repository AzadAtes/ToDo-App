<script setup>
  import Tasks from '../components/tasks/Tasks.vue';
  import iconStarOutline from '../components/icons/iconStarOutline.vue';

  const props = defineProps({
    showSidebar: Boolean
  })

  const emit = defineEmits(['toggleSidebar'])
</script>

<template>
  <div>
    <Tasks :options="{ important: true }" :show-sidebar="showSidebar" @toggle-sidebar="emit('toggleSidebar')">
      <template v-slot:title> Important </template>
      <template v-slot:icon>
        <iconStarOutline />
      </template>
    </Tasks>
  </div>
</template>
