<script setup>
  import Tasks from '../components/tasks/Tasks.vue';
  import iconSun from '../components/icons/iconSun.vue';

  const props = defineProps({
    showSidebar: Boolean
  })

  const emit = defineEmits(['toggleSidebar'])

  let today = new Date()
</script>

<template>
  <div>
    <Tasks :options="{ myDay: true, date: { day: today.getDate(), month: today.getMonth()+1, year: today.getFullYear()}}" :show-sidebar="showSidebar"  @toggle-sidebar="emit('toggleSidebar')">
      <template v-slot:title>
        <div id="titleSlot">
          My Day
        </div>
      </template>
      <template v-slot:icon>
        <div id="iconSlot">
          <iconSun />
        </div>
      </template>
    </Tasks>
  </div>
</template>
