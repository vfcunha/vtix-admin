<template>
  <v-app dark>
    <component :is="layout" v-model="isAuthenticated">
      <router-view :layout.sync="layout"></router-view>
    </component>
  </v-app>
</template>

<script>
import MainLayout from './layouts/main';
// import LoginLayout from './layouts/login';

export default {
  created () {
    this.$vuetify.theme.dark = this.config.dark
    this.onPageChange()
  },
  updated () {
    this.onPageChange()
  },
  methods: {
    onPageChange() {
      console.log('onPageChange')
    }
  },
  watch: {
    // isAuthenticated (val) {
    //   if (!val) {
    //     this.$router.push('/signin')
    //   }
    //   else {
    //     this.layout = LoginLayout 
    //     this.$router.push('/')
    //   }
    // }
  },
  computed: {
    config: {
      get () {
        return this.$store.getters.layout
      }
    },
    isAuthenticated: {
      get () {
        let result = this.user ? true : false
        console.log(result)
        return result
      }
    },
    user: {
      get() {
        return this.$store.getters.user
      }
    }
  },
  data: () => ({
    layout: MainLayout
  })
}
</script>