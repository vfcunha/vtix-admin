<template>
  <v-app dark>
    <component :is="layout">
      <router-view :layout.sync="layout"></router-view>
    </component>
  </v-app>
</template>

<script>

export default {
  updated () {
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
    layout: 'div'
  })
}
</script>