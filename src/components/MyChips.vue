<template>
  <v-chip-group
    selected-class="text-primary"
    column
  >
    <v-chip
      v-for="tag in chipsItems"
      :key="tag"
      @click="selectedShips(tag)"
    >
      {{ tag }}
    </v-chip>
  </v-chip-group>
</template>
    
<script>
export default {
  data () {
    return {
      data: [],
      chipsItems: []
    }
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    query: {
      type: String,
      required: true
    }
  },
  watch: {
    items(value) {
      this.data = value
    },
    query(value) {
      console.log("selectShips Chips")
      console.log(value)
      let query = value.toLowerCase();
      let count = query.split(' ').length
      let itemsSet = new Set();

      if (query && count === 1) {
        this.data.forEach(function (item) {
          let q = item.name.replace('/', ' ').toLowerCase().split(' ',).find((el)=>el.toLowerCase().includes(query))
            if (q) {
              itemsSet.add(q)
            }
        });
        this.chipsItems = Array.from(itemsSet)
        console.log(this.chipsItems)
      } else {
          this.data.forEach(function (item) {
              let splitString = item.name.toLowerCase().split(' ')
              let idx = splitString.indexOf(query.replace(' ', ''))
              console.log("query=" + query)
              console.log("idx=" + idx)
              console.log("splitString=" + splitString)
              if (idx === -1) {
                  return null
              } else {
                itemsSet.add(splitString[idx+1]).add(splitString[idx-1])
              }
          });
        this.chipsItems = Array.from(itemsSet)
      }
    }
  },
  methods: {
    selectedShips(tag) {
      this.$emit('selectedShips', tag)
    }
  }
}
    
</script>
    
<style>
    
</style>