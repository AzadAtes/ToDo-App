<script setup>
    import { ref } from 'vue';
    import { useTasksStore } from '../../stores/tasksStore';
    import iconCalendarOutline from '../icons/iconCalendarOutline.vue';
    import iconRepeat from '../icons/iconRepeat.vue';
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

    const props = defineProps({
      options: Object,
    })

    let { addTask } = useTasksStore(); 
    let newTask = ref("")
    let taskDate = ref();

    const add = () => {
      if (taskDate.value) {
        props.options.date = {day: taskDate.value.getDate(), month: taskDate.value.getMonth()+1, year: taskDate.value.getFullYear()}
        console.log(props.options);
      }
      addTask(newTask.value , props.options)
      newTask.value = ""
      taskDate.value = ""
    }
</script>

<template>
  <form>
    <div class="newTask">
      <div class="checkboxWrapper">
        <input type="checkbox" disabled />
      </div>
      <input type="text" placeholder="Add new Task" v-model="newTask" @keydown.enter.prevent="add" />
    </div>
    <div class="footer">
        <Datepicker id="datePicker" v-model="taskDate" :enable-time-picker="false">
        <template #input-icon>
            <iconCalendarOutline />
        </template>
      </Datepicker>
      <iconRepeat class="footerIcon" />
      <input type="submit" value="add" @click.prevent="add" />
    </div>
  </form>
</template>

<style>
  .newTask  {
    display: flex;
    align-items: center;
    height: 45px;
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 5px;
  }
  .checkboxWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
  }
  .newTask input[type=text] {
    flex: 1;
    border-style: hidden;
    color: var(--accent-color);
  }
  .newTask input[type=text]:focus {
    outline: none;
    color: black;
    border-style: hidden;
  }
  .footer {
    display: flex;
    align-items: center;
    height: 38px;
    border-radius: 5px;
    background-color: #faf9f8;
    border: 1px solid lightgrey;
  }
  .footer input[type=submit] {
    margin-left: auto;
    margin-right: 10px;
  }
  .footerIcon{
    color: gray;
    padding: 5px;
    margin: 5px
  }
  #datePicker svg:first-child {
    padding: 6px 0px 0px 10px;
  }
  #datePicker input:first-child {
    padding-left: 40px;
  }
</style>