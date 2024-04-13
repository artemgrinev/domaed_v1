<template>
    <v-card 
        class="mx-auto" 
        width="40vw"
        density="compact"
        height="fit-content"
        rounded="xl"
    >
        <v-img
          height="140"
          :src="'https://storage.yandexcloud.net/domaed/products/' + this.img"
        ></v-img>
    
        <v-card-title>
            {{ price }} &#8381;
        </v-card-title>

        <v-card-text>
            <span class="product_name">
                {{ name }}
            </span>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props: {
    name: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    weight: {
        type: Number,
        default: 0
    },
    size: {
        type: Number,
        default: 1
    },
    img: {
        type: String,
        default: ''
    },
    pack: {
        type: Boolean,
        default: false
    }
    },
    computed: {

    }

}

</script>
<style scoped lang="scss">
.product_name {
    --max-line: 2;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--max-line);
}
</style>