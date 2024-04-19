<template>
    <tr>
      <td @click="toggleCompletion">
        <input type="checkbox" v-model="task.completed" @click.stop>
        <span :class="{ 'completed': task.completed }">{{ task.title }}</span>
      </td>
    </tr>
  </template>
  
  <script>
  export default {
    props: ['task'],
    methods: {
      toggleCompletion() {
        this.task.completed = !this.task.completed;
      }
    }
  }
  </script>
  
  <style>
  .completed {
    text-decoration: line-through;
  }
  </style>
  