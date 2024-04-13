<template>
    <div class="card_items mt-2 mb-7">
      <router-link to="/create" class="card_item">
          <span class="item_icon" >
            <Icon icon="icons8:plus" color="#faae2b" width="28" />
          </span>
          <span class="item_text">Добавить<br>рецепт</span>
      </router-link>
      <router-link to="/favorites" class="card_item">
          <span class="item_icon">
            <Icon 
              icon="noto:red-heart"
              :width="30" />
          </span>
          <span class="item_text">Избранное</span>
      </router-link>
      <router-link to="/" class="card_item">
          <span class="item_icon">
            <Icon 
            icon="fluent-emoji-flat:open-book"
            :width="30" />
          </span>
          <span class="item_text">Мои рецепты</span>
      </router-link>
    </div>
  </template>
      
  <script>
  import { Icon } from '@iconify/vue';
  
  export default {
    components: {Icon}
  }
  </script>
      
  <style scoped lang="scss">
  .card_items {
    display: flex;
  }
  .card_items > a {
    text-decoration: none;
  }
  .card_item * {
    display: flex;
  
  }
  .card_item {
    display: flex;
    width: 6rem;
    height: 5rem;
    flex-direction: column;
    margin-left: 10px;
    background-color: #fff;
    color: #3c4859;
    font-size: 0.65rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.15);
    border-radius: 0.9rem;
    
  }
  .card_items a:first-child {
    color: #FAAE2B;
    width: 5rem;
    border: 1px solid #FAAE2B;
  }
  .item_text {
    padding: 0.5rem 0.5rem;
  }
  .item_icon {
    padding: 0.4rem 0 0 0.4rem;
  }
  
  </style>