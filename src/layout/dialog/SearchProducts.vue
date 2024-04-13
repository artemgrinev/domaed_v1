<template>
    <v-card 
      flat
      color="#EEEEEE"
    >
      <v-sheet class="rounded-b-xl px-0">
        <v-card-title class="d-flex align-center px-2">
          <v-btn
            icon="$left"
            variant="tonal"
            class="mr-2"
            style="border-radius: 18px;"
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
        <div class="px-2">
          <my-chips
          :items=this.data
          :query=this.search
          @selectedShips = 'selectedShips'
          />
        </div>
      </v-sheet>
      <v-sheet
        class="rounded-xl py-0"
      >
        <product-list
          :items="this.products"
          :stores="this.stores"
        ></product-list>
      </v-sheet>
    </v-card>
  </template>
  
  <script>
  import productsJsonFile from '@/data/products.json'
  import ProductList from '@/layout/lists/ProductsList.vue'
  import MyChips from '@/components/MyChips.vue'
    export default {
        components: {
             MyChips,
             ProductList
        },
      data() {
        return {
          search: '',
          searchItems: [],
          productsData: productsJsonFile,
          products: [],
          data: [],
          stores: [],
          countSelectedChips: 0
        }
      },
      watch: {
        search(searchString) {
          if (searchString.length === 2) {
            this.data = this.productsData.data.filter( i => (
              i.name.toLowerCase().split(' ').find((el) => el.startsWith(searchString.toLowerCase()))
            ));
            this.stores = this.productsData.stores
            console.log('reload data')
          }
          this.findProducts(searchString);
        },
      },
      methods: {
        selectedShips(value) {
          console.log("selectShips Search")
          console.log(value)
          if (value.startsWith(this.search)) {
            this.search = value + ' ';
            this.countSelectedChips += 1;
          } else {
            this.search = this.search + value + ' ';
          }
        },
        // findProducts(value) {
        //   return this.products = this.data.filter( i => (
        //       i.name.toLowerCase().split(' ').find((el) => el.includes(value))
        //     ))
        // },
        findProducts(searchString) {
            this.products = this.data.filter(
              product => product.name.toLowerCase().includes(searchString)
              );
        },
        
        updateSearchItems(item) {
          this.search = item
          this.searchItems = []
          this.products = this.data.filter( i => (
            i.name.toLowerCase().split(' ').find((el) => el.includes(item.toLowerCase()))
          ))

          const items = []

          this.products.forEach(function (el) {
            const arr = el.name.toLowerCase().split(' ')
            const idx = arr.indexOf(item.toLowerCase())
            if (idx > -1) {
              items.push(arr[idx+1])
            }
          })

          this.searchItems = items
          
          console.log(this.searchItems)
          return this.searchItems
          
        }
      }
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