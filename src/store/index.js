import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, newTitleTask) {
      if (newTitleTask) {
        
        let newTask = {
          id: Date.now(),
          title: newTitleTask,
          done: false,
        };

        state.tasks.push(newTask);
        newTitleTask = "";
      }
    },

    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },

    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
  },
  actions: {},
  modules: {},
});
