<template>
  <v-autocomplete

    auto-select-first
    class="flex-full-width mx-2 my-2"
    density="compact"
    item-props
    menu-icon=""
    placeholder="Поиск рецептов"
    prepend-inner-icon="$magnify"
    rounded
    theme="light"
    variant="solo"
  />
  
  <span class="title">Личное</span>
  <card-service></card-service>

  <span class="title pt-1">Категории</span>
  <swiper-btn/>

  <span class="title pt-1">Актуальное</span>
  <recipes-swiper :items="this.recepiesList" />

  <span class="title pt-1">Сервисы</span>
  <services-menu/>

  <span class="title pt-1">Популярное</span>
  <recipes-swiper :items="this.recepiesList2 "/>
  <v-btn 
    variant="outlined"
    @click="pingServer" 
  >
    check ping api
  </v-btn>
</template>
    
<script>
import SwiperBtn from '@/layout/swiper/SwiperBtn.vue';
import CardService from '@/components/CardService.vue';
import RecipesSwiper from "@/layout/swiper/Recipes.vue";
import ServicesMenu from '@/components/ServicesMenu.vue';

export default {
  name: 'HomeView',

  components: {
    SwiperBtn,
    RecipesSwiper,
    CardService,
    ServicesMenu,
  },

  data: () => ({
    recepiesList: [
      {
        id: 1,
        name: "Сэндвич с муссом из авокадо и ветчиной",
        img_link: "img/151034-ed4_small.jpg",
        mins: 45,
        rating: 5,
        price: 350
      },
      {
        id: 2,
        name: "Кесадилья с говядиной, овощами и сливочным сыром",
        img_link: "img/152701-ed4_small.jpg",
        mins: 75,
        rating: 4.5,
        price: 480
      },
      {
        id: 3,
        name: "Мидии под сливочным соусом",
        img_link: "img/152703-ed4_small.jpg",
        mins: 85,
        rating: 3.8,
        price: 800
      },
      {
        id: 4,
        name: "Гнезда из пасты с куриными тефтелями в сырном соусе",
        img_link: "img/152706-ed4_small.jpg",
        mins: 90,
        rating: 4.8,
        price: 670
      },
      {
        id: 5,
        name: "Запеченный картофель с беконом, сыром и луком фри",
        img_link: "img/152707-ed4_small.jpg",
        mins: 55,
        rating: 4,
        price: 280
      },
      {
        id: 6,
        name: "Cырных соуса к закускам",
        img_link: "img/152708-ed4_small.jpg",
        mins: 15,
        rating: 5,
        price: 300
      },
      {
        id: 7,
        name: "Сырный крем-суп с кукурузой",
        img_link: "img/152709-ed4_small.jpg",
        mins: 70,
        rating: 4.6,
        price: 468
      },
      {
        id: 8,
        name: "Салат Цезарь",
        img_link: "img/photo_2024-01-13_14-09-00.jpg",
        mins: 45,
        rating: 3,
        price: 540
      },
    ],
    recepiesList2: [
      {
        id: 4,
        name: "Гнезда из пасты с куриными тефтелями в сырном соусе",
        img_link: "img/152706-ed4_small.jpg",
        mins: 90,
        rating: 4.8,
        price: 670
      },
      {
        id: 5,
        name: "Запеченный картофель с беконом, сыром и луком фри",
        img_link: "img/152707-ed4_small.jpg",
        mins: 55,
        rating: 4,
        price: 280
      },
      {
        id: 6,
        name: "Cырных соуса к закускам",
        img_link: "img/152708-ed4_small.jpg",
        mins: 15,
        rating: 5,
        price: 300
      },
      {
        id: 7,
        name: "Сырный крем-суп с кукурузой",
        img_link: "img/152709-ed4_small.jpg",
        mins: 70,
        rating: 4.6,
        price: 468
      },
      {
        id: 8,
        name: "Салат Цезарь",
        img_link: "img/photo_2024-01-13_14-09-00.jpg",
        mins: 45,
        rating: 3,
        price: 540
      },
      {
        id: 1,
        name: "Сэндвич с муссом из авокадо и ветчиной",
        img_link: "img/151034-ed4_small.jpg",
        mins: 45,
        rating: 5,
        price: 350
      },
      {
        id: 2,
        name: "Кесадилья с говядиной, овощами и сливочным сыром",
        img_link: "img/152701-ed4_small.jpg",
        mins: 75,
        rating: 4.5,
        price: 480
      },
      {
        id: 3,
        name: "Мидии под сливочным соусом",
        img_link: "img/152703-ed4_small.jpg",
        mins: 85,
        rating: 3.8,
        price: 800
      },
    ]
  }),
  methods: {
  async  pingServer() {
    const response = await fetch('http://0.0.0.0:8000/ping');
    const data = await response.json();
    console.log('Ping result:', data);
  }
  }
}
    
</script>
    
<style scoped lang="scss">
.font-weight-bold {
  color: #3c4859;
}
.title {
    font-size: 1rem;
    font-weight: 600;
    margin-left: 10px;
    color: #3c4859;
  }
</style>