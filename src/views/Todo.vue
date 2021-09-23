<template>
  <div class="todo ">
    <v-text-field
      v-model="newTitleTask"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Add task"
      append-icon="mdi-plus"
      clearable
      hide-details
    ></v-text-field>

    <v-list class="pt-0" flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'indigo lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
              >
                {{ task.title }}</v-list-item-title
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-menu >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn dark icon v-bind="attrs" v-on="on">
                    <v-icon color="gray">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
 
                <v-list>
                  <v-list-item  v-for="(item, i) in items" :key="i">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      newTitleTask: "",
      tasks: [],
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
  methods: {
    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },

    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },

    addTask() {
      if (this.newTitleTask) {
        let newTask = {
          id: Date.now(),
          title: this.newTitleTask,
          done: false,
        };

        this.tasks.push(newTask);
        this.newTitleTask = "";
      }
    },
  },
};
</script>
