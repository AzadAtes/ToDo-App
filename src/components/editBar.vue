<script setup>
    const props = defineProps({
        editableTask: Object,
    })
    const emit = defineEmits(['toggleEditBar'])
</script>

<template>
    <div class="sideBar" @click="emit('toggleEditBar')">

    </div>
</template>

<style scoped>
    .sideBar {
        height: 100%;
        width: inherit;
        position: fixed;
        border-left: 1px solid lightgrey;
        background-color:white;
        right: 0;
        top: calc(var(--navBar-height) + 1px);
    }


</style>