<template>
  <v-container>
    <v-row>
      <v-col md="6">
        <line-chart/>
      </v-col>

      
      <v-col md="6">
        <bar-chart/>
      </v-col>
    </v-row>


    <v-row>
      <v-col md="6">
        <pie-chart/>
      </v-col>
      <v-col md="6">
        <radar-chart/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import LineChart from './LineChart.vue'
  import BarChart from './BarChart.vue'
  import PieChart from './PieChart.vue'
  import RadarChart from './RadarChart.vue'
  

  export default {
    components: {
      LineChart,
      BarChart,
      PieChart,
      RadarChart
    },
    data () {
      return {
      }
    },
  }
</script>
