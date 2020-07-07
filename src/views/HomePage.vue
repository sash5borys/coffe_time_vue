<template>
    <div class="home-page">
        <section class="menu-list col-container">
            <article class="products-coffee">
                <div class="title-wrapper">
                    <h2 class="title-content">Кава</h2>
                </div>
                <div class="products-wrapper col-container">
                    <ProductCoffee v-for="coffee of getCoffees" :product="coffee" :key="coffee.id" />
                </div>
            </article>
            <!--            <article class="products-decerts">-->
            <!--                <div class="title-wrapper">-->
            <!--                    <h2 class="title-content">Десерти</h2>-->
            <!--                </div>-->
            <!--            </article>-->
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ProductCoffee from '@/components/Content/ProductCoffee';
export default {
    name: 'HomePage',
    components: {
        ProductCoffee,
    },
    computed: {
        ...mapGetters(['getCoffees']),
    },
};
</script>

<style lang="scss" scoped>
.menu-list {
    @include centered;
}
.products-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 1rem;
}
.title-content {
    text-align: center;
    font: map_get($font_weigth, 'regular') map_get($icon_size, 'small') * 1.5 $font_logo;
    color: #fff;
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
}

// Tablet version
@include tabletVersion {
    .title-content {
        font-size: map_get($icon_size, 'medium') * 1.5;
    }
}

// Desktop version
@include desktopVersion {
    .title-content {
        font-size: map_get($icon_size, 'big') * 1.5;
    }
}
</style>
