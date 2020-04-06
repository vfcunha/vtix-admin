<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 12" :key="n" md="1" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{n}} of 12 md="1"
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="n in 6" :key="n" md="2" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{n}} of 6 md="2"
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="n in 4" :key="n" md="3" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{n}} of 4 md="3"
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="n in 3" :key="n" md="4" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{n}} of 3 md="4"
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="n in 2" :key="n" md="6" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{n}} of 2 md="6"
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="12" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          1 of 1 md="12"
        </v-card>
      </v-col>
    </v-row>


    <v-row>
      <v-col md="8" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          cols="12" md="8"
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          cols="12" md="4"
        </v-card>
      </v-col>
    </v-row>


    <v-row no-gutters>
      <v-col v-for="n in 12" :key="n" md="1" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{n}} of 12 md="1"
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="n in 6" :key="n" md="2" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{n}} of 6 md="2"
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="n in 4" :key="n" md="3" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{n}} of 4 md="3"
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" md="4" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{n}} of 3 md="4"
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="n in 2" :key="n" md="6" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          {{n}} of 2 md="6"
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col md="12" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          1 of 1 md="12"
        </v-card>
      </v-col>
    </v-row>


    <v-row no-gutters>
      <v-col md="8" >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          cols="12" md="8"
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          cols="12" md="4"
        </v-card>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>

  export default {
    components: {
    }
  }
</script>
