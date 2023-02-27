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
      <template v-slot:title>
        <div id="titleSlot">
          Important
        </div>
      </template>
      <template v-slot:icon>
        <div id="iconSlot">
          <iconStarOutline />
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