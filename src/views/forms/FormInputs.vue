<template>
  <window-card title="Inputs">
    <v-container slot="content">
      <v-row>
        <v-col md="6">
          <v-text-field label="Input"></v-text-field>
          <v-combobox
            v-model="select"
            :items="items"
            label="Select"
            multiple
          ></v-combobox>

          <v-select
            :items="items"
            attach
            chips
            label="Select2"
            multiple
          ></v-select>

          <v-menu
            ref="menuDate"
            v-model="menuDate"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateFormatted"
                label="Date"
                persistent-hint
                prepend-icon="event"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menuDate = false"></v-date-picker>
          </v-menu>

          <v-menu
            ref="menu"
            v-model="menuTime"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="time"
                label="Picker in menu"
                prepend-icon="access_time"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menuTime"
              v-model="time"
              full-width
              @click:minute="$refs.menu.save(time)"
            ></v-time-picker>
          </v-menu>
      
        <v-file-input multiple label="File input"></v-file-input>
        </v-col>

        
        <v-col md="6">
          <v-container>
            <v-row >
                <v-switch label="Switch" value="Switch"></v-switch>
                <v-switch disabled readonly="readonly" loading flat inset label="I'm loading"></v-switch>
            </v-row>

            <v-row>
            <v-radio-group row>
              <v-radio label="Radio option 1" value="radio-1"></v-radio>
              <v-radio label="Radio option 2" value="radio-2"></v-radio>
              <v-radio label="Radio option 2" value="radio-3"></v-radio>
            </v-radio-group>
            </v-row>

            <v-row>
                <v-checkbox class="mx-2" label="Checkbox 1"></v-checkbox>
                <v-checkbox class="mx-2" label="Checkbox 2"></v-checkbox>
                <v-checkbox class="mx-2" label="Checkbox 3"></v-checkbox>
            </v-row>
            
          </v-container>
        </v-col>
      </v-row>

      <v-row>
        <v-textarea
          autocomplete="textarea"
          label="Textarea"
        ></v-textarea>
      </v-row>
    </v-container>
  </window-card>
</template>

<script>

export default {
  data() {
    return {
      select: ['Vuetify', 'Programming'],
      items: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify',
      ],
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      menuDate: false,
      time: null,
      menuTime: false,
    }
  },
  methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
}
</script>