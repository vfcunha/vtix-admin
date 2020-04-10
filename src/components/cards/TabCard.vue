<template>
  <v-card>
    <v-toolbar>
      <v-tabs v-model="tab" fixed-tabs>
        <slot name="tab"></slot>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="tab">
      <slot name="tab-item"></slot>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null
    }
  },
}
</script>