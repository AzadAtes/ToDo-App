<script setup>
import iconImportant from '../icons/iconStar.vue'
import IconImportantOutline from '../icons/iconStarOutline.vue';

const props = defineProps({
    task: Object
})

const emit = defineEmits(['makeImportant'])

let logTask = (task) => console.log(task)
</script>

<template>
    <li>
        <label class="checkboxWrapper">
            <input type="checkbox" v-model="props.task.complete" />
        </label>
        <div @click="logTask(task)" id="textWrapper">
            <p id="taskName">{{props.task.task}}</p>
            <div id="footer">
                <p v-if="props.task.myDay" class="footerItem">MyDay</p>
                <p v-if="props.task.date.day != null" class="footerItem">{{ props.task.date.day }}.{{ props.task.date.month }}.{{ props.task.date.year }}</p>
            </div>
        </div>
        <div @click="emit('makeImportant', props.task)">
            <iconImportant class="icon" v-if="props.task.important" />
            <IconImportantOutline class="icon" v-else />
        </div>
    </li>
</template>

<style scoped>
    #footer{
        display: flex;
        gap: 10px;
    }
    .checkboxWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
    }
    #textWrapper {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        gap: 2px;
    }
    #taskName, .footerItem {
        margin: 0px;
        padding: 0px;
    }
    #taskName {
        font-size: large;
    }
    .footerItem {
        color: gray;
        font-size: small;
    }
    .icon{
        margin-left: auto;
        margin-right: 10px;
        border: none;
    }
</style>