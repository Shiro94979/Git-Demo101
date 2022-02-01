<template>
  <v-app>
    <Sidebar/>
    <Topbar/>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from "~/components/Global/Sidebar.vue"
import Topbar from "~/components/Global/Topbar.vue";
export default {
    name: "DefaultLayout",
    components: {
      Sidebar,
      Topbar },
}
</script>
