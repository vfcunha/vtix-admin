<template>
  <v-card>
    <v-app-bar >
      <v-toolbar-title>Radar Chart</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon></v-icon></v-btn>
    </v-app-bar>
    <v-card-text>
      <radar-chart :chart-data="datacollection" :chart-options="chartOptions"></radar-chart>
    </v-card-text>
    <v-card-actions>
      <v-btn text @click="fillData()">Randomize</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
  import RadarChart from '@/components/charts/RadarChart.js'

  export default {
    components: {
      RadarChart
    },
    data () {
      return {
        datacollection: null,
        chartOptions: {
          maintainAspectRatio: true
        }
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['Force', 'Destry', 'Vitality', 'Magic', 'Speed'],
          datasets: [
            {
              label: 'Data 1',
              backgroundColor: '#20852077',
              borderColor: '#208520',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            },
            {
              label: 'Data 2',
              backgroundColor: ['#f8797977'],
              borderColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            },
            {
              label: 'Data 3',
              backgroundColor: '#26257977',
              borderColor: '#262579',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>