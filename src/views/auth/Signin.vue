<template>
    <v-container>
      <v-layout align-center justify-center row>
        <v-flex xs12 sm8 md6>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-form @submit.prevent="onSignin">
              <v-card-text>
                  <v-text-field 
                      name='email' 
                      label='Email' 
                      id='email'
                      v-model='email'
                      type='email'
                      required></v-text-field>
                  <v-text-field 
                      name='password' 
                      label='Senha' 
                      id='password'
                      v-model='password'
                      type='password'
                      required></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn type="submit"
                    color="secondary" 
                    block
                    :loading="loading"
                    :disabled="loading">
                  Login
                  <span slot="loader" class="custom-loader">
                    <v-icon light>cached</v-icon>
                  </span>
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row v-if="error">
        <v-flex xs12 sm8 md6 offset-sm3>
          <v-alert @dismissed="onDismissed" :text="error.message"></v-alert>
        </v-flex>
      </v-layout>

    </v-container>
</template>


<script>
  export default {
    created () {
      // if (this.$store.getters.isAuthenticated) {
      //   this.$router.push('/')
      // }
    },
    data () {
      return {
        email: 'user@mock.test',
        password: '123456'
      }
    },
    watch: {
      usuario (value) {
        console.log('user=' + value)
        // if (value !== null || value !== undefined) {
        //   this.$router.push('/')
        // }
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signin', {email: this.email, password: this.password})
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>