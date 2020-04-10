<template>
  <v-card>
    <v-app-bar >
      <slot name="left"></slot>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <slot name="right"></slot>
    </v-app-bar>
    <v-card-text>
        <slot name="content"></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String}
  }
}
</script>