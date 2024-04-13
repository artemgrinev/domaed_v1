<template>
    <swiper
      :modules="modules"
      class="pb-7"
      :slides-per-view="3"
      :space-between="15"
      :loop="true"
      :freeMode="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="item in this.items"
        :key="item.id"
      >
      <recipes-card
        :name=item.name
        :img_link=item.img_link
        :mins=item.mins
        :rating=item.rating
        :price=item.price
        />
      </swiper-slide>
    </swiper>
</template>

<script>
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/scss/free-mode'
import RecipesCard from '@/components/RecipesCard.vue';
export default {
  name: 'RecipesSwiper',
  components: {
    Swiper,
    SwiperSlide,
    RecipesCard
	},
  props: {
    items: {
      type: Array,
    }
  },
  data: () => ({
  }),
  setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [FreeMode],
      };
    },
}
</script>
<style scoped lang="scss">
.swiper {
  padding: 10px 0;
  &-slide {
    width: fit-content !important;
    &-active {
      padding-left: 10px;
    }
  }
}
.v-btn--size-default {
  font-weight: 600;
  letter-spacing: 0.2px;
  padding: 0 10px 0 8px;
}
  </style>