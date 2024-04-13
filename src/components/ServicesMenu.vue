<template>
    <div class="card_items mt-2 mb-7">
      <div class="card_item">
        <span class="item_icon">
          <icon-service-menu></icon-service-menu>
        </span>
        <span class="item_text">Меню на неделю</span>
      </div>
      <div class="card_item">
        <span class="item_icon">
          <icon-service-product></icon-service-product>
        </span>
        <span class="item_text">Список<br>продуктов</span>
      </div>
    </div>
  </template>
      
  <script>
  import IconServiceMenu from "@/components/icons/IconServiceMenu.vue";
  import IconServiceProduct from "@/components/icons/IconServiceProduct.vue";

  export default {
    components: {
      IconServiceMenu,
      IconServiceProduct

    }
  }
  </script>
      
  <style scoped lang="scss">
  .card_items {
    display: flex;
    // margin-top: 1rem;
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
  .item_text {
    padding: 0 0.5rem 0.5rem;
  }
  .item_icon {
    padding: 0.2rem 0 0 0.2rem;
  }
  
  </style>