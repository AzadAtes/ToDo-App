<script setup>
    import { ref } from 'vue';
    import { useTasksStore } from '../../stores/tasksStore';
    import iconCalendarOutline from '../icons/iconCalendarOutline.vue';
    import iconBellOutline from '../icons/iconBellOutline.vue';
    import iconRepeat from '../icons/iconRepeat.vue';

    const props = defineProps({
      options: Object,
    })

    let { addTask } = useTasksStore(); 
    let newTask = ref("")

    const add = () => {
      addTask(newTask.value , props.options)
      newTask.value = ""
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
      <iconCalendarOutline />
      <iconBellOutline />
      <iconRepeat />
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
    color: #2564cf;
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

  .footer > * {
    padding: 5px;
    margin: 5px
  }
  
  .footer input[type=submit] {
    margin-left: auto;
  }

  .footer svg {
    color: gray;
  }
</style>