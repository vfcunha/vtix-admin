<template>
  <v-list-group
        :prepend-icon="item.icon"
        no-action
        :sub-group="isSubGroup"
      >
      <v-list-item slot="activator">
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <component v-for="(item, index) in item.items" 
        :item="item" :key="index" :isSubGroup="true"
        :is="item.items == undefined ? MenuItem : GroupItems">
      </component>
  </v-list-group>
</template>

<script>
import MenuItem from './MenuItem'
import GroupItems from './GroupItems'

export default {
  props: {
    item: { type: Object, default: new Object() },
    isSubGroup: { type: Boolean, default: false },
  },
  data: () => ({
    MenuItem: MenuItem,
    GroupItems: GroupItems
  })
}
</script>