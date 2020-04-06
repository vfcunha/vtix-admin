<template>
  <v-card>
    <v-app-bar >
      <v-toolbar-title>Pie Chart</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon></v-icon></v-btn>
    </v-app-bar>
    <v-card-text>
      <pie-chart :chart-data="datacollection"></pie-chart>
    </v-card-text>
    <v-card-actions>
      <v-btn text @click="fillData()">Randomize</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
  import PieChart from '@/components/charts/PieChart.js'
  

  export default {
    components: {
      PieChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['A', 'B', 'C'],
          datasets: [
            {
              label: 'Data 1',
              borderColor: ['#f87979', '#f80025', '#2590dd'],
              backgroundColor: ['#f8797980', '#f8002580', '#2590dd80'],
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
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