<template>
  <v-container>
      <v-card>
        <v-app-bar >
          <v-toolbar-title>Candlestick</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon><v-icon></v-icon></v-btn>
        </v-app-bar>
        <v-card-text>
          <GChart
            :settings="{ packages: ['corechart'] }"
            type="CandlestickChart"
            :data="chartData"
            :options="chartOptions"
            ref="gChart"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="fillData()">Randomize</v-btn>
        </v-card-actions>
      </v-card>
  </v-container>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  components: [
    GChart
  ],
  data () {
    return {
      chartData: [
        ['Mon', 20, 28, 38, 45],
        ['Tue', 31, 38, 55, 66],
        ['Wed', 50, 55, 77, 80],
        ['Thu', 77, 77, 66, 50],
        ['Fri', 68, 66, 22, 15]
      ],
      chartOptions: {
        legend:'none'
      }
    }
  }
}
</script>