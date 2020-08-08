<template>
  <v-footer :inset="config.inset" app>
    <span class="px-3">&copy; {{ new Date().getFullYear() }} by {{ config.author }}</span>
    <span class="px-3">Powered by <a href="https://vuetifyjs.com/">Vuetify</a></span>
  </v-footer>
</template>

<script>
export default {
  props: {
    config: { type: Object, default: new Object({inset: true}) }
  }
}
</script>

<style lang="stylus" scoped>

</style>