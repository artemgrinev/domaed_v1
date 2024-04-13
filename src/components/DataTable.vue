<template>
  <v-card flat>
    <v-card-title class="d-flex align-center px-2">
      <v-btn
        icon="$left"
        variant="tonal"
        class="mr-2"
        style="border-radius: 18px;"
        @click="$router.go(-1)"
      />
      <v-sheet
        height="auto"
        width="100%"
        color="grey-lighten-2"
        style="border-radius: 18px;"
      >
        <v-text-field
          v-model="search"
          prepend-inner-icon="$magnify"
          density="comfortable"
          label="Поиск"
          single-line
          flat
          hide-details
          bg-color="transparent"
          variant="solo"
          style="border-radius: 18px;"
        ></v-text-field>
      </v-sheet>

    </v-card-title>

    <v-list>
      <v-list-item
        v-for="(item, i) in data"
        :key="i"
        :value="item"
        prepend-icon="$magnify"
        color="primary"
      >

        <v-list-item-title v-text="item.name"></v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
  </v-card>
</template>

<script>
import productsJsonFile from '../data/data_products.json'
  export default {
    data() {
      return {
        search: '',
        products: productsJsonFile,
        items: [],
        data: [],
      }
    },
    watch: {
      search(value) {
        if (value.length >= 2) {
          this.data = this.products.filter(i=>(~i.name.toLowerCase().indexOf(value.toLowerCase())))
        }
        else {
          this.data = []
          }
      }
    },
    computed: {
      searchItems() {
        return this.data.filter( elem => {
          return elem.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
  }
</script>
<style lang="scss" scoped>
.autocomplite_sheet {
  border-radius: 18px;
}
.v-list-item__prepend {
  display: inline !important;
}
</style>