<template>
  <window-card :title="'Grid form'">
      <v-form slot="content" v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                  v-model="username"
                  :rules="usernameRules"
                  :counter="10"
                  label="Username"
                  required
                ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  :counter="10"
                  label="Email"
                  required
                ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-btn color="error" @click="reset">
                Submit
              </v-btn>
            </v-col>
          </v-row>

        </v-container>
      </v-form>
  </window-card>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      username: '',
      usernameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>