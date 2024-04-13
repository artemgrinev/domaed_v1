<template>
<v-container>
  <v-row>
    <v-col cols="3">
      <v-col class="pl-0 pb-0">
        <v-btn stacked rounded="lg" size="x-small" variant="outlined" color="#FFF">
          <Icon icon="noto:red-heart" :width="30"/>
        </v-btn>
      </v-col>
      <v-col class="pl-0 pt-1">
        <v-btn stacked rounded="lg" size="x-small" variant="outlined" color="#FAAE2B">
          <v-icon icon="$plusOutline" size="x-large" color="#FAAE2B"/>
        </v-btn>
      </v-col>
    </v-col>
    <v-row align-content="center">
      <v-col cols="4" class="service_card">
        <div class="card_item">
          <span class="item_icon">
            <icon-service-menu></icon-service-menu>
          </span>
          <span class="item_text">Меню на неделю</span>
        </div>
      </v-col>
      <v-col cols="4">3</v-col>
      <v-col cols="4">4</v-col>
    </v-row>
  </v-row>

</v-container>
</template>
    
<script>
  import { Icon } from '@iconify/vue';
  import IconServiceMenu from './icons/IconServiceMenu.vue';
  export default {
    components: {Icon, IconServiceMenu}
  }
</script>
    
<style scoped lang="scss">
.v-btn--stacked .v-icon {
    --v-icon-size-multiplier: 1.6;
}
.v-btn {
  background-color: #fff;
}
.service_card {
  background-color: #fff;
  border-radius: 16px;
}
.item_text {
  font-size: 0.85rem;
  line-height: 0.5px !important;
  font-style: normal;
  font-weight: 600;
}
    
</style>