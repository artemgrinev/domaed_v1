<template>
    <swiper
      :modules="modules"
      :slides-per-view="'auto'"
      :space-between="10"
      :loop="true"
      :freeMode="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="item in categoryList"
        :key="item.id"
      >
        <v-btn
          rounded="xl"
          class="text-none mb-7"
          density="comfortable"
        >
          <v-icon size="x-large" class="pr-1">
            <Icon :icon=item.iconName />
          </v-icon>
          {{ item.name  }}
        </v-btn>
      </swiper-slide>
    </swiper>
</template>

<script>
import { Icon } from '@iconify/vue';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/scss/free-mode'
export default {
  name: 'SwiperBtn',
  components: {
    Icon,
    Swiper,
    SwiperSlide
	},
  data: () => ({
    categoryList: [
        {
          id: 1,
          name: "Завтраки",
          iconName: "openmoji:cooking",
        },
        {
          id: 2,
          name: "Супы",
          iconName: "openmoji:bowl-with-spoon",
        },
        {
          id: 3,
          name: "Салаты",
          iconName: "openmoji:green-salad",
        },
        {
          id: 5,
          name: "Основные блюда",
          iconName: "openmoji:curry-rice",
        },
        {
          id: 4,
          name: "Мясо",
          iconName: "openmoji:cut-of-meat",
        },
        {
          id: 6,
          name: "Паста",
          iconName: "openmoji:spaghetti",
        },
        {
          id: 7,
          name: "Море продукты",
          iconName: "openmoji:shrimp",
        },
        {
          id: 8,
          name: "Выпечка",
          iconName: "openmoji:croissant",
        },
        {
          id: 9,
          name: "Вегантарианская",
          iconName: "openmoji:broccoli",
        },
        
      ]
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
  padding: 10px 10px 0 0;
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
