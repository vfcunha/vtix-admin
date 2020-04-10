<template>
  <v-container>
    <v-row >  
      <v-col md="12">
        <inline-form/>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="6">
        <grid-form/>
      </v-col>
      <v-col md="6">
        <basic-form/>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <form-inputs/>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <buttons/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InlineForm from './InlineForm'
import GridForm from './GridForm'
import BasicForm from './BasicForm'
import FormInputs from './FormInputs'
import Buttons from './Buttons'

export default {
  components: {
    InlineForm,
    GridForm,
    BasicForm,
    FormInputs,
    Buttons
  }
}
</script>