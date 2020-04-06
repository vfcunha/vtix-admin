<template>
  <v-card>
    <v-app-bar >
      <v-toolbar-title>Bar Chart</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon></v-icon></v-btn>
    </v-app-bar>
    <v-card-text>
      <bar-chart :chart-data="datacollection"></bar-chart>
    </v-card-text>
    <v-card-actions>
      <v-btn text @click="fillData()">Randomize</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
  import BarChart from '@/components/charts/BarChart.js'
  

  export default {
    components: {
      BarChart
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
          labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data 1',
              borderColor: '#2590dd',
              backgroundColor: '#2590dd80',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data 2',
              borderColor: '#f85279',
              backgroundColor: '#f8527980',
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
