<script setup>
import { ref } from 'vue';

let toDoList = ref([]);
toDoList.value.push({task: "hello", complete:false});
toDoList.value.push({task: "world", complete:false});

function alertToDo(toDo) {
    alert(toDo.task + ' | ' + toDo.complete)
}
</script>

<template>
    <ul class="toDoList">
        <li class="toDoListItem" v-for="toDo in toDoList">
            <label class="checkboxWrapper">
                <input type="checkbox" v-model="toDo.complete" />
            </label>
            <p @click="alertToDo(toDo)">
                {{toDo.task}}
            </p>
            <svg class="toDoListItem" style="width:24px;height:24px;" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
            </svg>
        </li>
    </ul>
</template>

<style scoped>
    .toDoList {
        display: flex;
        flex-direction: column;
        gap: 5px;
        list-style: none;
        padding-left: 0;
    }

    .toDoListItem  {
        display: flex;
        align-items: center;
        height: 45px;
        border-radius: 5px;
        background-color: white;
        border: 1px solid lightgrey;
    }

    .toDoListItem:hover, .checkboxWrapper:hover, .checkboxWrapper input:hover {
        cursor: pointer;
    }

    .checkboxWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
    }

    .toDoListItem p {
        flex: 1;
    }

    .toDoListItem svg {
        margin-left: auto;
        margin-right: 10px;
        border: none;
    }

</style>