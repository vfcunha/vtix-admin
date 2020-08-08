<template>
  <v-container>
    <v-row>
      <v-col md="4" >
        <v-card class="pa-2" outlined tile>
        <v-list-item>
          <v-list-item-avatar color="primary">
              <v-icon>cloud</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Application</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon >
                <v-icon v-html="'mdi-arrow-right'"></v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          </v-card>
      </v-col>

      <v-col md="4">
        <v-card class="pa-2" outlined tile>
        <v-list-item>
          <v-list-item-avatar tile color="red">
              <v-icon>alarm</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Application</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon >
                <v-icon v-html="'mdi-arrow-right'"></v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          </v-card>
      </v-col>

      <v-col md="4">
        <v-card class="pa-2" outlined tile>
        <v-list-item>
          <v-list-item-avatar color="orange">
              <v-icon>shopping_cart</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Application</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon >
                <v-icon v-html="'mdi-arrow-right'"></v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          </v-card>
      </v-col>
    </v-row>


    <v-row>
      <v-col md="6">
        <line-chart/>
      </v-col>


      <v-col md="6">
        <tab-card>
          <v-tab slot="tab" href="#tab-1">
            Contacts
          </v-tab>
          <v-tab slot="tab" href="#tab-2">
            Messages
          </v-tab>
          <v-tab-item slot="tab-item" :value="'tab-1'">
            <contacts/>
          </v-tab-item>
          <v-tab-item slot="tab-item" :value="'tab-2'">
            <messages/>
          </v-tab-item>
        </tab-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import LineChart from './charts/chartjs/LineChart.vue'
  import Contacts from '@/components/lists/Contacts.vue'
  import Messages from '@/components/lists/Messages.vue'

  export default {
    components: {
      LineChart,
      Contacts,
      Messages
    },
    data: () => ({
      tab: null
    })
  }
</script>
