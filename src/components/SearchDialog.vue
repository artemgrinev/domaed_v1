<template>
  <v-row justify="start" class="pt-3">
    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
          <v-btn 
              prepend-icon="$plus" 
              variant="plain" 
              class="text-none" 
              color="yellow-darken-4"
              size="large"
              v-bind="props"
              >
              Добавить ингредиент
          </v-btn>
      </template>
      <search-products-dialog/>
    </v-dialog>
  </v-row>
</template>
  
<script>
import SearchProductsDialog from '@/layout/dialog/SearchProducts.vue'
  export default {
    components: {SearchProductsDialog},
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
  }
</script>
  
<style scoped lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}
.search {
  border-radius: 18px !important;
}
.v-field--rounded {
    border-radius: 18px !important;
}


</style>