<template>
  <v-footer :inset="config.inset" app>
    <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  props: {
    config: { type: Object, default: new Object({inset: true}) }
  }
}
</script>