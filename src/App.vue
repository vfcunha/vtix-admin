<template>
  <v-app dark>
    <component :is="layout">
      <router-view :layout.sync="layout"></router-view>
    </component>
  </v-app>
</template>

<script>
import MainLayout from './layouts/main';

export default {
  created () {
    this.$vuetify.theme.dark = this.config.dark
  },
  computed: {
    config: {
      get () {
        return this.$store.getters.layout
      }
    }
  },
  data: () => ({
    layout: MainLayout
  })
}
</script>