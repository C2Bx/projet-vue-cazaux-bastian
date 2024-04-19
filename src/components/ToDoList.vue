<template>
    <div>
      <h1>Liste des Tâches</h1>
      <p>Tâches complétées: {{ completedCount }} sur {{ tasks.length }}</p>
      <progress max="100" :value="completedPercentage"></progress>
      <table>
        <thead>
          <tr>
            <th>Tâche</th>
          </tr>
        </thead>
        <tbody>
          <ToDoTask v-for="task in tasks" :key="task.id" :task="task" />
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import ToDoTask from './ToDoTask.vue';
  import axios from 'axios';
  
  export default {
    components: {
      ToDoTask
    },
    data() {
      return {
        tasks: []
      };
    },
    computed: {
      completedCount() {
        return this.tasks.filter(task => task.completed).length;
      },
      completedPercentage() {
        return (this.completedCount / this.tasks.length) * 100;
      }
    },
    mounted() {
      this.fetchTasks();
    },
    methods: {
      fetchTasks() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
          .then(response => {
            this.tasks = response.data;
          })
          .catch(error => console.error("There was an error!", error));
      }
    }
  }
  </script>
  