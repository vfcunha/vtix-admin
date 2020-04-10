<template>
  <tab-card>
    <v-tab slot="tab" href="#tab-1">
      Raised
    </v-tab>
    <v-tab-item slot="tab-item" :value="'tab-1'">
      <v-container>
      <v-row>
        <v-col md="2">
          <v-btn pa-3 x-small v-for="color in colors" :key="color+'x-small'" :color="color" dark>Extra small Button</v-btn>
        </v-col>
        <v-col md="2">
          <v-btn pa-3 small v-for="color in colors" :key="color+'small'" :color="color" dark>Small Button</v-btn>
        </v-col>
        <v-col md="2">
          <v-btn pa-3 v-for="color in colors" :key="color" :color="color" dark>Normal Button</v-btn>
        </v-col>
        <v-col md="3">
          <v-btn pa-3 large v-for="color in colors" :key="color+'large'" :color="color" dark>Large Button</v-btn>
        </v-col>
        <v-col md="3">
          <v-btn pa-5 x-large v-for="color in colors" :key="color+'x-large'" :color="color" dark>Extra large Button</v-btn>
        </v-col>
      </v-row>
      </v-container>
    </v-tab-item>

    <v-tab slot="tab" href="#tab-2">
      Depressed
    </v-tab>
    <v-tab-item slot="tab-item" :value="'tab-2'">
      <v-container>
      <v-row>
        <v-col md="2" v-for="size in sizes" :key="size+'_depressed'">
          <v-btn pa-3 v-for="color in colors" :key="color+size+'_depressed'"
            depressed 
            :x-small="size == 'x-small'"
            :small="size == 'small'"
            :large="size == 'large'"
            :x-large="size == 'x-large'"
            :color="color" dark>Button</v-btn>
        </v-col>
      </v-row>
      </v-container>
    </v-tab-item>
    
    
    <v-tab slot="tab" href="#tab-3">
      Outlined
    </v-tab>
    <v-tab-item slot="tab-item" :value="'tab-3'">
      <v-container>
      <v-row>
        <v-col md="2" v-for="size in sizes" :key="size+'_outlined'">
          <v-btn pa-3 v-for="color in colors" :key="color+size+'_outlined'"
            outlined
            :x-small="size == 'x-small'"
            :small="size == 'small'"
            :large="size == 'large'"
            :x-large="size == 'x-large'"
            :color="color" dark>Button</v-btn>
        </v-col>
      </v-row>
      </v-container>
    </v-tab-item>
    
    
    <v-tab slot="tab" href="#tab-4">
      Rounded
    </v-tab>
    <v-tab-item slot="tab-item" :value="'tab-4'">
      <v-container>
      <v-row>
        <v-col md="2" v-for="size in sizes" :key="size+'_rounded'">
          <v-btn pa-3 v-for="color in colors" :key="color+size+'_rounded'"
            rounded
            :x-small="size == 'x-small'"
            :small="size == 'small'"
            :large="size == 'large'"
            :x-large="size == 'x-large'"
            :color="color" dark>Button</v-btn>
        </v-col>
      </v-row>
      </v-container>
    </v-tab-item>

    <v-tab slot="tab" href="#tab-5">
      Tile
    </v-tab>
    <v-tab-item slot="tab-item" :value="'tab-5'">
      <v-container>
      <v-row>
        <v-col md="2" v-for="size in sizes" :key="size+'tile'">
          <v-btn pa-3 v-for="color in colors" :key="color+size+'tile'"
            tile
            :x-small="size == 'x-small'"
            :small="size == 'small'"
            :large="size == 'large'"
            :x-large="size == 'x-large'"
            :color="color" dark>Button</v-btn>
        </v-col>
      </v-row>
      </v-container>
    </v-tab-item>

    <v-tab slot="tab" href="#tab-6">
      Block
    </v-tab>
    <v-tab-item slot="tab-item" :value="'tab-6'">
      <v-container>
        <v-row>
          <v-col md="12">
            <v-btn pa-3 v-for="color in colors" :key="color+'block'"
              block
              :color="color" dark>Button</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-tab-item>

  </tab-card>
</template>

<script>


export default {
  data() {
    return {
      colors: [
        'secondary',
        'primary',
        'warning',
        'error',
        'success'
      ],
      sizes: [
        'x-small',
        'small',
        '',
        'large',
        'x-large'
      ]
    }
  },
}
</script>