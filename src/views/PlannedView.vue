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
      <template v-slot:title>
        <div id="titleSlot">
          Planned
        </div>
      </template>
      <template v-slot:icon>
        <div id="iconSlot">
          <iconCalendarOutline />
        </div>
      </template>
    </Tasks>
  </div>
</template>

<style scoped>
  #iconSlot, #titleSlot{
    color: var(--accent-color);
  }
</style>