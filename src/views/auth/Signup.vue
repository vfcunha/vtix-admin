<template>
  <v-container>

    <v-layout row>
      <v-flex xs12 sm6 offset-sm-3>
        <v-card>
          <v-toolbar card dense  class="primary" dark>
            <v-flex xs12 offset-sm-3>
              <v-toolbar-title align-center>Registro</v-toolbar-title>
            </v-flex>
          </v-toolbar>
          
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignup">
                <v-layout row>
                  <v-flex xs12>
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
                    <v-text-field 
                      name='confirmPassword' 
                      label='Confirmar senha' 
                      id='confirmPassword'
                      v-model='confirmPassword'
                      type='password'
                      required
                      :rules="[comparePasswords]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type='submit'>Registrar-se</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row v-if="error">
      <v-flex xs12 sm6>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    watch: {
      user (value) {
        if (value !== null || value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Erro ao confirmar a senha' : ''
      },
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      }
    },
    methods: {
      onSignup () {
        this.$store.dispatch('signup', {email: this.email, password: this.password})
      },
      onDismissed () {
        console.log('Dismissed alert')
      }
    }
  }
</script>