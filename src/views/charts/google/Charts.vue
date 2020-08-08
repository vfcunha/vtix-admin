<template>
  <v-container>
      <Gantt/>
      <Candlestick/>
  </v-container>
</template>

<script>
import Gantt from './Gantt.vue'
import Candlestick from './Candlestick.vue'

export default {
  components: {
    Gantt,
    Candlestick
  },
  data () {
    return {
    }
  }
}
</script>