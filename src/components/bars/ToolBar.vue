<template>
<v-app-bar :clipped-left="config.clipped" app absolute>
  <v-app-bar-nav-icon
    v-if="config.type !== 'permanent'"
    @click.stop="config.model = !config.model"
  ></v-app-bar-nav-icon>
  <v-toolbar-title>Vuetify-Admin</v-toolbar-title>
  <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>alert</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
</v-app-bar>
</template>

<script>
export default {
  props: {
    config: {type:Object}
  },
  data() {
    return {
      
    }
  },
}
</script>