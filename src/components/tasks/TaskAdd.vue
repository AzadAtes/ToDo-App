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

    // REFACTOR NEEDED. It works, but its messy. !!!
    const add = () => {
      let today = new Date()
      let optionsCopy = JSON.parse(JSON.stringify(props.options))
      delete optionsCopy.date
      if (props.options.planned === true) {
        optionsCopy.date = {day: today.getDate(), month: today.getMonth()+1, year: today.getFullYear()}
      }
      if (taskDate.value) {
        optionsCopy.planned = true
        optionsCopy.date = {day: taskDate.value.getDate(), month: taskDate.value.getMonth()+1, year: taskDate.value.getFullYear()}
        optionsCopy.fullDate = taskDate.value
      }
      addTask(newTask.value , optionsCopy)
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
      <iconRepeat class="footerIcon" id="repeatIcon" />
      <input type="submit" value="add" @click.prevent="add" :class="newTask.length ? 'colorAccent' : 'colorGrey'" />
    </div>
  </form>
</template>

<style scoped>
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
    padding: 5px 10px 5px 10px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid lightgrey;
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
  #repeatIcon{
    cursor: not-allowed;
  }
  .colorAccent{
    color: var(--accent-color);
  }
  .colorGrey{
    color: grey;
  }
</style>