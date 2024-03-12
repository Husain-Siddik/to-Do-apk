<template>
    <div class="container">
      <div class="task">
        <!-- title -->
        <div class="title">
          <h1> To Do List</h1>
        </div>
        <!-- form -->
        <div class="form">
          <input
            type="text"
            placeholder="New Task"
            v-model="newTask"
            @keyup.enter="addTask"
          />
          <!-- <button @click="addTask"></button> -->
        </div>
        <!-- task lists -->
        <div class="taskItems">
          <ul  v-for="(task,index) in tasks"
              :key="task.id">
    
              <!-- new added -->
              <li>
                <!-- icon added -->

                 
                  <!-- <input type="radio"   value="HTML" v-on:click="completeTask(task)"  :class="className" > -->
                  <span v-on:click="completeTask(task)" :class="className"  >{{ task.title }}</span>
                    
                    <span v-if="task.completed">{{ isDone}}</span>
               <button v-on:click="removeTask(index)">Cancel⨯</button>

              </li>
             
                <!-- v-bind:task="task"  -->
          
          </ul>
        </div>
        <!-- buttons -->
        <div class="clearBtns">
          <button @click="clearCompleted">Clear completed</button>
          <button @click="clearAll">Clear all</button>
        </div>
        <!-- pending task -->
        <div class="pendingTasks">
          <span>Pending Tasks: {{ incomplete }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "TaskName",
    components: {
      
    },
    data() {
      return {
        task:'',
        newTask: "",
        isDone:'✓',
        tasks: [
        {
          id: 1,
          title: "Learn Vue JS",
          completed: false,
        },
        {
          id: 2,
          title: "Watch netflix",
          completed: false,
        },
        {
          id: 3,
          title: "Go shopping",
          completed: false,
        },
        {
          id: 4,
          title: "Learn guitar",
          completed: false,
        },
        {
          id: 5,
          title: "Send email",
          completed: false,
        },
      ],
       
      };
    },
    computed: {
      incomplete() {
        return this.tasks.filter(this.inProgress).length;
      },
       className() {
       let classes = ['toggle'];
      if (this.task.completed) {
        classes.push('toggle-completed');
        
      }
      return classes.join(' ');
     },
    
    },
    methods: {
      addTask() {
        if (this.newTask) {
          this.tasks.push({
            title: this.newTask,
            completed: false,
          });
          this.newTask = "";
        }
      },
      isCompleted(task) {
        return task.completed;
      },
      inProgress(task) {
        return !this.isCompleted(task);
      },
      clearCompleted() {
        this.tasks = this.tasks.filter(this.inProgress);
      },
      clearAll() {
        this.tasks = [];
      },
      completeTask(task) {
        task.completed = !task.completed;
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      },
    

    },
  };
  </script>
  