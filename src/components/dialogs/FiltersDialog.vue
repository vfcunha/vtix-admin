<template>
    <v-dialog v-model="dialog" scrollable persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn depressed class="mb-2" v-on="on">
          <v-icon>mdi-filter</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title v-if="title">{{ title }}</v-card-title>
        <v-divider v-if="title"></v-divider>
        <v-card-text style="height: 500px;">
          <v-tabs v-model="tab" vertical>
            <slot name="tab"></slot>
            <slot name="tab-item"></slot>
          </v-tabs>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Find</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    props: {
      title: { type: String}
    },
    data: () => ({
      tab: {},
      dialog: false,
    }),
  }
</script>