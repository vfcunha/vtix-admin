<template>
  <v-card>
    <v-app-bar >
      <v-toolbar-title>Line Chart</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="fillData()"><v-icon>refresh</v-icon></v-btn>
    </v-app-bar>
    <v-card-text>
      <line-chart :chart-data="datacollection"></line-chart>
    </v-card-text>
  </v-card>
</template>


<script>
  import LineChart from '@/components/charts/LineChart.js'
  

  export default {
    components: {
      LineChart
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