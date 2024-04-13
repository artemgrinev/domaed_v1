<template>
  <v-list 
    lines="two"
    class="rounded-xl py-0"
    bg-color="#EEEEEE"
  >
    <v-list-item
      class="my-1 rounded-xl"
      variant="flat"
      rounded="xl"
      v-for="item in this.items"
      :key="item.id"
      height="150"
    >
      <template v-slot:prepend>
        <div class="pr-3">
          <v-img
            :height="100"
            :width="100"
            :src="'https://storage.yandexcloud.net/domaed/products/' + item.img"
          ></v-img>
        </div>
      </template>
      <v-col align-self="center">
        <v-row class="my-0 pt-1" justify="end">
          <span class="brand_title font-weight-medium pr-2">{{ getStoreName(item.shop_id) }}</span>
          <v-avatar
            class="brand_img"
            size="24px"
          >
            <v-img
              :src="getStoreImage(item.shop_id)"
            />
          </v-avatar>
        </v-row>
        <v-row class="my-0 pt-1">
          <span class="product_title">{{ item.name }}</span>
        </v-row>
        <v-row class="my-0 pt-1">
          <span class="product_price">{{ item.price }}₽</span>
        </v-row>
        <v-row class="my-0">
          <span class="product_weight" style="color: #8397a6;">1 л • 59,99 ₽/л</span>
        </v-row>
      </v-col>
    </v-list-item>
    
  </v-list>
</template>
    
<script>
export default {
  props: {
    items: {
      type: Array,
      requred: true
    },
    stores: {
      type: Object
    }
  },
  methods: {
    getStoreName(id) {
      for (let store of this.stores) {
        if (store.id === id) {
          return store.name;
        }
      }
      return null;
    },
    getStoreImage(id) {
      for (let store of this.stores) {
        if (store.id === id) {
          return store.image;
        }
      }
      return null;
    }
  }
}
    
</script>
    
<style lang="scss" scoped>
  .product_price, .product_weight{
    display: flex;
  }
  .product {
    &_title {
      --max-line: 2;
      display: -webkit-box;
      overflow: hidden;
      line-height: 1.2;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: var(--max-line);
    }
    &_price {
      font-size: large;
      font-weight: bold;
    }
    &_weight {
      font-weight: bold;
      font-size: small;
    }
  }
</style>