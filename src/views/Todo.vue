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

    <v-list class="pt-0" flat v-if="$store.state.tasks.length">
      <div v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item
          @click="$store.commit('doneTask', task.id)"
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
              <v-btn icon @click.stop="$store.commit('deleteTask', task.id)">
                <v-icon color="gray lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>

    <div v-else>
      <div class="text-center no-tasks">
        <v-icon size="100" color="primary ">mdi-check</v-icon>
        <div class="text-h5 primary--text">
          no tasks
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      newTitleTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', this.newTitleTask)
      this.newTitleTask = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.no-tasks {
  height: 100%;
  transform: translateY(100%);
  opacity: 0.5
}
</style>
