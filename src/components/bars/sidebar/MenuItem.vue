<template>
  <v-list-item :to="item.link">
    <v-list-item-icon>
      <v-icon v-text="item.icon"></v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title v-text="item.title"></v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>

export default {
  props: {
    item: { type: Object, default: new Object() }
  }
}
</script>