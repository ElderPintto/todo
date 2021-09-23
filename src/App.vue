<template>
  <v-app id="inspire">
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/layout/Header.vue'
export default {
  components: {
    Header
  },
  data: () => ({}),
};
</script>
