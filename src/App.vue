<template>
  <v-app>
    <v-bottom-navigation
      grow
      height="58"
    >
      <v-btn 
        value="recent"
        class="test_class"
        to="/"
        >
        <Icon icon="solar:home-2-linear" width="28" height="28" />
        Главная
      </v-btn>
      
      <v-btn value="nearby">
        <Icon icon="ph:book-bookmark-light" width="28" height="28" />
        <span>Журнал</span>
      </v-btn>

      <v-btn value="nearby">
        <Icon icon="solar:chef-hat-broken" width="28" height="28" />
        Рецепты
      </v-btn>

      <v-btn value="favorites">
        <Icon icon="ph:handbag-light" width="28" height="28" />
        Продукты
      </v-btn>

      <v-btn value="user">
        <Icon icon="ph:user-light" width="28" height="28" />

        <span>Моё</span>
      </v-btn>
    </v-bottom-navigation>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
import { Icon } from '@iconify/vue';

export default {
  name: "App",
  components: {Icon},
  data: () => ({ value: 0 }),
}
</script>
<style scoped lang="scss">
.v-btn--stacked.v-btn--size-default {
  padding: 0;
}
.v-btn--selected {
  background-color: aliceblue;
  
}

</style>
