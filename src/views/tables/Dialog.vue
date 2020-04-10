<template>
  <v-dialog v-model="open" max-width="500px">
    <template v-slot:activator="{ on }">
      <v-btn fab depressed class="mb-2" v-on="on">
        <v-icon>add_box</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },

    }
  },
  props: {
    show: { type: Boolean, default: false},
    item: { type: Object },
    itemIndex: { type: Number }
  },
  watch: {
    open (val) {
      val || this.close()
    },
    show (val) {
      this.open = val
    },
    item (val) {
      this.editedItem = val
    },
    itemIndex (val) {
      this.editedIndex = val
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },
  methods: {
      close () {
        this.open = false
        this.$emit('onClose')
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          this.$emit('onUpdate', this.editedIndex, this.editedItem)
          
        } else {
          this.$emit('onSave', this.editedItem)
        }
        this.close()
      },
  }
}
</script>