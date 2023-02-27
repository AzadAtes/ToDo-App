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
      <template v-slot:title>
        <div id="titleSlot">
          Tasks
        </div>
      </template>
      <template v-slot:icon>
        <div id="iconSlot">
          <iconHouseOutline />
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