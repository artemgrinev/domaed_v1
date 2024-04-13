<template>
<v-card 
    class="mx-auto" 
    width="75vw"
    density="compact"
    height="fit-content"
    rounded="xl"
>
    <template v-slot:loader="{ isActive }">
    <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
    ></v-progress-linear>
    </template>

    <v-img
      cover
      height="140"
      :src="this.img_link"
    ></v-img>

    <v-card-item>
        <v-card-title class="">{{ name }}</v-card-title>
    </v-card-item>

    <v-card-text class="px-3 pb-0">
      <v-row class="mx-0">
          <v-row align="center">
              <v-icon icon="$clock" class="mr-1"></v-icon>
              <div class="text-caption">{{ getTimeFromMins }}</div>
          </v-row>
          <v-row align="center">
              <v-icon 
                  icon="$star" 
                  class="mr-1"
                  color="yellow-darken-1"
              />
              <div class="text-caption">{{ rating }}</div>
          </v-row>
          <v-row align="center">
              <v-icon 
                  icon="$pot" 
                  class="mr-1"
                  color="purple-accent-4"
              />
              <div class="text-caption">{{ rating }}</div>
          </v-row>
      </v-row>
    </v-card-text>
    <v-card-actions class="px-3 pt-2 pb-3">
      <v-row justify="space-between">
        <v-col cols="6" class="pa-0" align-self="center">
          <div class="text-subtitle-1">₽ {{ price }} </div>
        </v-col>
        <v-col cols="6" class="pa-0 v-row justify-end">
          <v-btn icon="$plus" size="x-small" rounded="lg" color="light-green-darken-2" variant="tonal"></v-btn>
        </v-col>
    </v-row>
        
    </v-card-actions>
</v-card>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    img_link: {
      type: String,
      default: ""
    },
    mins: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 1
    },
    price: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getTimeFromMins() {
      let hours = Math.trunc(this.mins/60);
      let minutes = this.mins % 60;
      if (hours<= 0) {
        return minutes + "мин";
      } else {
        return hours + 'ч ' + minutes + "мин";
      }
    }
  }
}

</script>
<style scoped lang="scss">
.v-row {
    margin: 0;
}
.v-card {
    &-title {
        font-size: 0.9rem;
        font-weight: 600;
        min-height: auto;
    }
    &-actions {
      min-height: auto;
    }
}
</style>