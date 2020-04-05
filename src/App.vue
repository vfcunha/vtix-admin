<template>
  <v-app >
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
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