<template>
  <v-app-bar fixed app>
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title v-text="title" />
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: 'TopbarCom',
  data() {
    return {
      title: 'Vuetify.js',
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('set_drawer', !this.$store.state.drawer)
    },
  },
}
</script>

<style>
</style>
