<script setup>
    import { ref } from 'vue';

    const emit = defineEmits()
    let newTask = ref("")

    const addTask = () => {
      emit('addTask', newTask.value)
      newTask.value = ""
    }
</script>

<template>
    <form>
      <div class="newTask">
        <div class="checkboxWrapper">
          <input type="checkbox" disabled />
        </div>
        <input type="text" placeholder="Add new Task" v-model="newTask" @keydown.enter.prevent="addTask">
      </div>
      <div class="footer">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7 11H9V13H7V11M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 5V7H5V5H19M5 19V9H19V19H5M11 15H13V17H11V15M15 15H17V17H15V15M15 11H17V13H15V11Z" />
        </svg>
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z" />
        </svg>
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z" />
        </svg>
        <input type="submit" value="add" @click.prevent="addTask" />
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