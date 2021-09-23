<template>
  <header>
    <Navigation :drawer="drawer" :items="items" />

    <v-app-bar
        app
        color="primary"
        dark
        shrink-on-scroll
        src="https://picsum.photos/1920/1080?random"
        prominent
    >
        <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
        </template>

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>Todo list</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
        </v-btn>
    </v-app-bar>

  </header>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
  name: 'Header',
  components: {
    Navigation
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
    right: null,
  }),
};
</script>

<style></style>
