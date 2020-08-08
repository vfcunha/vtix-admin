<template>
    <v-card>
      <v-app-bar >
        <v-toolbar-title>Gantt Chart</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon><v-icon></v-icon></v-btn>
      </v-app-bar>
      <v-card-text>
        <GChart
          :settings="{ packages: ['gantt'] }"
          type="Gantt"
          :data="chartData"
          :options="chartOptions"
          ref="gChart"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn text @click="fillData()">Randomize</v-btn>
      </v-card-actions>
    </v-card>
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
        [
          { type: "string", label: "Task ID" },
          { type: "string", label: "Task Name" },
          { type: "date", label: "Start Date" },
          { type: "date", label: "End Date" },
          { type: "number", label: "Duration" },
          { type: "number", label: "Percent Complete" },
          { type: "string", label: "Dependencies" }, 
        ],
        ['Research', 'Find sources', new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
        ['Write', 'Write paper', null, new Date(2015, 0, 9), 259200000, 25, 'Research,Outline'],
        ['Cite', 'Create bibliography', null, new Date(2015, 0, 7), 86400000, 20, 'Research'],
        ['Complete', 'Hand in paper', null, new Date(2015, 0, 10), 86400000, 0, 'Cite,Write'],
        ['Outline', 'Outline paper', null, new Date(2015, 0, 6), 86400000, 100, 'Research']
      ],
     chartOptions: {
        height: 275,
        gantt: {
          criticalPathEnabled: true,
          criticalPathStyle: {
            stroke: '#e64a19',
            strokeWidth: 2
          }
        },
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      },
    }
  }
}
</script>