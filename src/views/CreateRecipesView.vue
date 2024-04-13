<template>
  <v-app-bar :elevation="0" rounded>
      <template v-slot:prepend>
        <router-link to="/">
          <v-row>
            <v-icon size="x-large" icon="$left" color="yellow-darken-3"/>
            <p class="text-yellow-darken-3 pr-1">Назад</p>
          </v-row>
        </router-link>
      </template>
    <v-app-bar-title>Оформление рецепта</v-app-bar-title>
  </v-app-bar>
      <v-card >
        <v-card-text>
          <v-file-input
            :rules="rules"
            variant="solo-filled"
            rounded="lg"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="$camera"
            label="Фото готового блюда"
          ></v-file-input>

          <v-text-field
            rounded="lg"
            variant="solo-filled"
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'Это поле должно быть заполнено']"
            :error-messages="errorMessages"
            label="Название рецепта"
            placeholder="Например: Салат Цезарь"
            required
          ></v-text-field>

          <v-textarea
              label="Описание рецепта"
              placeholder="Опишите так, чтобы слюньки потекли"
              ref="description"
              v-model="description"
              auto-grow
              variant="solo-filled"
              rounded="lg"
              rows="1"
              row-height="15"
            ></v-textarea>

          <v-autocomplete
            variant="solo-filled"
            rounded="lg"
            ref="cuisine"
            v-model="cuisine"
            :rules="[() => !!cuisine || 'This field is required']"
            :items="cuisinesNational"
            label="Национальная кухня"
            placeholder="Выбрать"
            required
          ></v-autocomplete>

          <v-select
            variant="solo-filled"
            rounded="lg"
            v-model="selectedCategories"
            :items="categories"
            chips
            closable-chips
            label="Категория"
            multiple
            >
            <template v-slot:selection="{ attrs, item, select, selected }">
              <v-chip
                v-bind="attrs"
                :model-value="selected"
                variant="outlined"
                closable
                color="success"
                @click="select"
                @click:close="remove(item)"
              >
                <strong>{{ item }}</strong>
                <span>(interest)</span>
              </v-chip>
            </template>
          </v-select>
          <v-divider class="my-2"></v-divider>
          <span class="text-h6">Время приготовления</span>
            <v-row class="pt-3">
              <v-col cols="3.5">
                <v-select
                  value="1"
                  :items="[1,2,3,4,5,6,7,8,9,10,11,12]"
                  variant="solo-filled"
                ></v-select>
              </v-col>
              <v-col class="px-0" align-self="center">
                <span class="text-body-1">часов</span>
              </v-col>

              <v-col cols="3.5" >
                <v-select
                  value="00"
                  :items="[5,10,15,20,25,30,35,40,45,50,55]"
                  variant="solo-filled"
                ></v-select>
              </v-col>
              <v-col class="px-0" align-self="center">
                <span class="text-body-1">минут</span>
              </v-col>
            </v-row>
            <v-divider class="my-2"></v-divider>
              <span class="text-h6">Количество порций</span>
                <v-row class="pt-3">
                  <v-col cols="3.5" >
                    <v-select
                      value="1"
                      :items="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]"
                      variant="solo-filled"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-divider class="my-2"></v-divider>
                  <span class="text-h6">Ингредиенты</span>
                  <search-dialog/>
        </v-card-text>

        <v-divider class="mt-12"></v-divider>
        <v-btn @click="checkForm">check</v-btn>
      </v-card>

</template>
    
<script>
import { toRaw } from 'vue'
import SearchDialog from "@/components/SearchDialog.vue"

  export default {
    components: {
      SearchDialog
    },
    data: () => ({
      cuisinesNational: ["Азиатская", "Американская", "Армянская", "Белорусская", "Греческая", "Грузинская", "Европейская", "Индийская", "Итальянская", "Кавказская", "Мексиканская", "Немецкая", "Русская", "Средиземноморская", "Тайская", "Турецкая", "Узбекская", "Украинская", "Французская", "Японская"],
      categories: ["Завтраки" ,"Бульоны" ,"Закуски" ,"Напитки" ,"Основные блюда", "Паста и пицца" ,"Ризотто" ,"Салаты" ,"Соусы и маринады", "Супы" ,"Сэндвичи" ,"Выпечка и десерты", "Заготовки" ],
      chips: [],
      errorMessages: '',
      name: null,
      description: null,
      cuisine: null,
      selectedCategories: null,
      
      value: [],
      rules: [
        value => {
          return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
        },
      ],
    }),

    computed: {
      form () {
        return {
          name: this.name,
          cuisine: this.cuisine,
          description: this.description,
          categories: toRaw(this.selectedCategories),
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
      },
      checkForm () {
        return console.log(this.form)
      }
    },
  }
    
</script>
    
<style scoped lang="scss">
  .v-toolbar__prepend > a{
    text-decoration: none;
  }
  .v-toolbar__prepend a > div > p{
    display: flex;
    align-items: center;
    font-weight: 600;
  }
</style> 