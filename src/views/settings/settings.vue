<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs10>
        <v-card>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 md6>
                <span>Scheme</span>
                <v-switch v-model="dark" primary label="Dark"></v-switch>
              </v-flex>
              <v-flex xs12 md6>
                <span>Drawer</span>
                <v-radio-group v-model="config.sideBar.type" column>
                  <v-radio
                    v-for="drawer in config.drawers"
                    :key="drawer"
                    :label="drawer"
                    :value="drawer.toLowerCase()"
                    primary
                  ></v-radio>
                </v-radio-group>
                <v-switch v-model="config.sideBar.dense" primary label="Dense"></v-switch>
                <v-switch v-model="config.sideBar.expandOnHover" label="Expand on hover"></v-switch>
                <v-switch v-model="config.sideBar.clipped" label="Clipped" primary></v-switch>
                <v-switch v-model="config.sideBar.floating" label="Floating" primary></v-switch>
                <v-switch v-model="config.sideBar.miniVariant" label="Mini" primary></v-switch>
              </v-flex>
              <v-flex xs12 md6>
                <span>Footer</span>
                <v-switch v-model="config.footerBar.inset" label="Inset" primary></v-switch>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text>Cancel</v-btn>
            <v-btn text color="primary">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  // import MainLayout from '../../layouts/main';

  export default {
    // created () {
    //   this.$emit('update:layout', MainLayout);
    // },
    data() {
      return {
        
      }
    },
    computed: {
      config: {
        get () {
          return this.$store.getters.layout
        }
      },
      dark: {
        get () {
          return this.$store.getters.layout.dark
        },
        set () {
          this.$vuetify.theme.dark = !this.$vuetify.theme.dark
          this.$store.dispatch('switchDark', this.$vuetify.theme.dark)
        }
      }
    }
  }
</script>
