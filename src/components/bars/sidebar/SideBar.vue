<template>
  <v-navigation-drawer
    v-model="config.model"
    :permanent="config.type === 'permanent'"
    :temporary="config.type === 'temporary'"
    :clipped="config.clipped"
    :floating="config.floating"
    :mini-variant="config.miniVariant"
    :expand-on-hover="config.expandOnHover"
    absolute
    overflow
    app
  >
    <v-toolbar>
        <v-list >
          <v-list-item avatar :class="(config.miniVariant || config.expandOnHover) && 'px-0'">
            <v-list-item-avatar>
              <img src="@/assets/logo.png" >
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Application</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click.stop="config.miniVariant = !config.miniVariant">
                <v-icon v-html="config.miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-toolbar>
      <v-list-item two-line :class="(config.miniVariant || config.expandOnHover) && 'px-2'">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Current User</v-list-item-title>
              <v-list-item-subtitle>role</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
    <v-list :dense="config.dense">
      <component v-for="(item, index) in config.items" 
        :item="item" :key="index"
        :is="item.items == undefined ? MenuItem : GroupItems">
      </component>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import MenuItem from './MenuItem'
  import GroupItems from './GroupItems'

  export default {
    props: {
      config: { type: Object, default: new Object()}
    },
    data: () => ({
      MenuItem: MenuItem,
      GroupItems: GroupItems
    })
  }
</script>